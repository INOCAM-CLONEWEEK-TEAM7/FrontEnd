import ChangeOnHoverButton from "../common/styles/ChangeOnHoverButton";

function SnsLogin() {
  return (
    <ChangeOnHoverButton 
    $bgColor='var(--white)' $bgOnHover='var(--orange)' 
    $color='var(--black)' $colorOnHover='var(--black)'
    $width='100%'>
      구글로 시작하기
    </ChangeOnHoverButton>
  )
}

export default SnsLogin