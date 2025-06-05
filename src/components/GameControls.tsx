import {ButtonGroup, Button} from '@shopify/polaris'
import {ResetIcon, QuestionCircleIcon} from '@shopify/polaris-icons'

export default function GameControls() {
  const handleReset = () => {
    window.location.reload()
  }

  return (
    <div style={{margin: '20px 0'}}>
      <ButtonGroup>
        <Button icon={ResetIcon} onClick={handleReset}>Reset Game</Button>
        <Button icon={QuestionCircleIcon}>How to Play</Button>
      </ButtonGroup>
    </div>
  )
}
