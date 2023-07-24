import InputHelper from "./styles/InputHelper"
import WithHelperContainer from "./styles/WithHelperContainer"

function WithHelper({msg, valid, children, $margin}) {
  return (
    <WithHelperContainer $margin={$margin}>
      {children}
      {valid?
      <></>:
      <InputHelper>{msg}</InputHelper>
      }
    </WithHelperContainer>
  )
}

export default WithHelper