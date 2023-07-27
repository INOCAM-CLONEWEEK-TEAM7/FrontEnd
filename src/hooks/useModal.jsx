import { useCallback, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

const ViewportCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0000008f;

  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const useModal = (coverExist = true, exitByOuterClick = true) => {
  const openerRef = useRef();
  const modalRef = useRef();

  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const ModalTemplate = ({ children }) => {
    useEffect(() => {
      const outerOnClick = (event) => {
        if (
          !modalRef.current.contains(event.target) &&
          !openerRef.current.contains(event.target)
        )
          closeModal();
      };

      if (exitByOuterClick) {
        document.addEventListener("click", outerOnClick);
      }

      return () => {
        if (exitByOuterClick)
          document.removeEventListener("click", outerOnClick);
      };
    }, []);

    return coverExist ? (
      <ViewportCover>
        <div ref={modalRef}>{children}</div>
      </ViewportCover>
    ) : (
      <div style={{'width':"0px" , "height":"0px"}} ref={modalRef}>{children}</div>
    );
  };

  return [
    isOpen?ModalTemplate:()=><></>,
    openModal,
    closeModal,
    openerRef,
    isOpen
  ];
};

export default useModal;
