import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  ScoreContainer,
  GameViewContainer,
  PlayingView,
  OptionListItem,
  OptionImage,
  GameResultViewContainer,
  ResultPharse,
  PlayAgainButton,
  PopupContainer,
  TriggerButton,
  CloseButton,
  PopUpBody,
  PopUpImage,
  GameScore,
} from './styledComponents'
import GameOption from '../GameOption'
import './index.css'

const gameStatusConstants = {
  withDraw: 'WITHDRAW',
  win: 'WIN',
  lost: 'LOST',
  inProgress: 'IN_PROGRESS',
}

class Game extends Component {
  state = {
    gameStatus: gameStatusConstants.inProgress,
    score: 0,
    gameChoice: '',
    userChoice: '',
  }

  runGame = () => {
    const {userChoice, gameChoice} = this.state
    if (userChoice === gameChoice) {
      this.setState({gameStatus: gameStatusConstants.withDraw})
    } else if (
      (userChoice === 'ROCK' && gameChoice === 'SCISSORS') ||
      (userChoice === 'SCISSORS' && gameChoice === 'PAPER') ||
      (userChoice === 'PAPER' && gameChoice === 'ROCK')
    ) {
      this.setState(prevState => ({
        gameStatus: gameStatusConstants.win,
        score: prevState.score + 1,
      }))
    } else {
      this.setState(prevState => ({
        gameStatus: gameStatusConstants.lost,
        score: prevState.score - 1,
      }))
    }
  }

  setUserSelecton = id => {
    const {choicesList} = this.props
    const randomValue = Math.floor(Math.random() * 3)
    const randomChoice = choicesList[randomValue].id
    this.setState({userChoice: id, gameChoice: randomChoice}, this.runGame)
  }

  playAgain = () => {
    this.setState({gameStatus: gameStatusConstants.inProgress})
  }

  renderGameInProgressView = () => {
    const {choicesList} = this.props
    return (
      <GameResultViewContainer>
        <PlayingView>
          {choicesList.map(eachItem => (
            <GameOption
              eachChoice={eachItem}
              key={eachItem.id}
              setUserSelecton={this.setUserSelecton}
            />
          ))}
        </PlayingView>
      </GameResultViewContainer>
    )
  }

  renderGameWonView = () => {
    const {choicesList} = this.props
    const {userChoice, gameChoice} = this.state
    const userChoiceImg = choicesList.find(
      eachItem => userChoice === eachItem.id,
    )?.imageUrl
    const gameChoiceImg = choicesList.find(
      eachItem => gameChoice === eachItem.id,
    )?.imageUrl
    console.log(gameChoiceImg)
    console.log(userChoiceImg)
    return (
      <GameResultViewContainer>
        <PlayingView>
          <OptionListItem>
            <p>YOU</p>
            <OptionImage src={userChoiceImg} alt="your choice" />
          </OptionListItem>
          <OptionListItem>
            <p>OPPONENT</p>
            <OptionImage src={gameChoiceImg} alt="opponent choice" />
          </OptionListItem>
        </PlayingView>
        <ResultPharse>YOU WON</ResultPharse>
        <PlayAgainButton type="button" onClick={this.playAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderGameLostView = () => {
    const {choicesList} = this.props
    const {userChoice, gameChoice} = this.state
    const userChoiceImg = choicesList.find(
      eachItem => userChoice === eachItem.id,
    )?.imageUrl
    const gameChoiceImg = choicesList.find(
      eachItem => gameChoice === eachItem.id,
    )?.imageUrl
    console.log(gameChoiceImg)
    console.log(userChoiceImg)
    return (
      <GameResultViewContainer>
        <PlayingView>
          <OptionListItem>
            <p>YOU</p>
            <OptionImage src={userChoiceImg} alt="your choice" />
          </OptionListItem>
          <OptionListItem>
            <p>OPPONENT</p>
            <OptionImage src={gameChoiceImg} alt="opponent choice" />
          </OptionListItem>
        </PlayingView>
        <ResultPharse>YOU LOSE</ResultPharse>
        <PlayAgainButton type="button" onClick={this.playAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderGameWithdrawView = () => {
    const {choicesList} = this.props
    const {userChoice, gameChoice} = this.state
    const userChoiceImg = choicesList.find(
      eachItem => userChoice === eachItem.id,
    )?.imageUrl
    const gameChoiceImg = choicesList.find(
      eachItem => gameChoice === eachItem.id,
    )?.imageUrl
    console.log(gameChoiceImg)
    console.log(userChoiceImg)
    return (
      <GameResultViewContainer>
        <PlayingView>
          <OptionListItem>
            <p>YOU</p>
            <OptionImage src={userChoiceImg} alt="your choice" />
          </OptionListItem>
          <OptionListItem>
            <p>OPPONENT</p>
            <OptionImage src={gameChoiceImg} alt="opponent choice" />
          </OptionListItem>
        </PlayingView>
        <ResultPharse>IT IS DRAW</ResultPharse>
        <PlayAgainButton type="button" onClick={this.playAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderGameView = () => {
    const {gameStatus} = this.state
    console.log(gameStatus)
    switch (gameStatus) {
      case gameStatusConstants.inProgress:
        return this.renderGameInProgressView()
      case gameStatusConstants.win:
        return this.renderGameWonView()
      case gameStatusConstants.lost:
        return this.renderGameLostView()
      case gameStatusConstants.withDraw:
        return this.renderGameWithdrawView()
      default:
        return null
    }
  }

  render() {
    const {score} = this.state
    return (
      <div className="game-cont">
        <div className="score-table-cont">
          <div className="list-cont">
            <h1 className="main-heading">
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </h1>
          </div>
          <ScoreContainer>
            <p className="score-heading">Score</p>
            <GameScore>{score}</GameScore>
          </ScoreContainer>
        </div>
        <GameViewContainer>{this.renderGameView()}</GameViewContainer>
        <PopupContainer>
          <Popup
            modal
            trigger={<TriggerButton type="button">Rules</TriggerButton>}
          >
            {close => (
              <PopUpBody>
                <PopUpImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine />
                </CloseButton>
              </PopUpBody>
            )}
          </Popup>
        </PopupContainer>
      </div>
    )
  }
}

export default Game
