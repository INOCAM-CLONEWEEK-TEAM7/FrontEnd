import { styled } from "styled-components";

const RecommendSection = styled.section`
  &>div{
    padding: 2rem 0 3rem;
    &>h2{
      margin: 1rem 0;
      font-size: 1.25rem;
    }
    &>a{
      display: block;
      padding: .5rem 0;
      color: var(--black);
      text-decoration: none;
    }
  }

`

export default RecommendSection;