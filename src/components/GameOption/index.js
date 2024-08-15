import {OptionListItem, GameOptionButton, OptionImage} from './styledComponents'

const GameOption = props => {
  const {eachChoice, setUserSelecton} = props
  const {imageUrl, id} = eachChoice
  console.log(`${id.toLowerCase()}Button`)
  const userChoice = () => {
    setUserSelecton(id)
  }
  return (
    <OptionListItem>
      <GameOptionButton
        type="button"
        data-testid={`${id.toLowerCase()}Button`}
        onClick={userChoice}
      >
        <OptionImage src={imageUrl} alt={id} />
      </GameOptionButton>
    </OptionListItem>
  )
}

export default GameOption
