import styled from 'styled-components'

export const ScoreContainer = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding-left: 30px;
  padding-right: 30px;
  padding: 20px;
  border-radius: 10px;
  width: 150px;
  height: 90%;
`
export const GameScore = styled.p`
  font-family: Roboto;
  font-weight: bold;
  font-size: 32px;
  margin: 0px;
`

export const GameViewContainer = styled.div`
  height: 450px;
`

export const PlayingView = styled.ul`
  margin-top: 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 500px;
  flex-wrap: wrap;
`
export const OptionListItem = styled.li`
  list-style-type: none;
  text-align: center;
  color: #fff;
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
`

export const OptionImage = styled.img`
  width: 170px;
  height: 170px;
`
export const GameResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PlayAgainButton = styled.button`
  background-color: #fff;
  font-family: Bree Serif;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`
export const ResultPharse = styled.p`
  font-family: Roboto;
  font-weight: bold;
`
export const TriggerButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #223a5f;
  padding: 8px 15px 8px 15px;
  margin: 8px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`
export const PopupContainer = styled.div`
  margin-top: 30px;
  margin-left: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  font-weight: bold;
  font-size: 22px;
`
export const PopUpImage = styled.img`
  width: 90%;
  align-self: center;
  height: 600px;
`
export const PopUpBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  background-color: #fff;
  margin-bottom: 40px;
`
