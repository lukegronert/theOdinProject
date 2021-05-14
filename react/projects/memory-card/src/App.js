import { useState } from 'react';
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';

function App() {
  let list = ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Pink', 'Gold', 'Black', 'Silver', 'Teal', 'Brown'];
  const [cardList, setCardList] = useState(list.sort(() => Math.random() - 0.5));
  const [selectedCardList, setSelectedCardList] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const clickCard = (card) => {
    //if user chooses the same color twice
    if(selectedCardList.includes(card)) {
      console.log('LOSE');
      setCardList(list.sort(() => Math.random() - 0.5));
      setSelectedCardList([]);
      if(score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
    } else if (selectedCardList.length === 11) {
      setScore(12);
      setBestScore(12);
      const instructions = document.querySelector('.instructions');
      instructions.textContent = 'YOU WIN'
    } else {
      //if user chooses a new color
      setSelectedCardList([...selectedCardList, card]);
      setScore(selectedCardList.length+1)
      setCardList(list.sort(() => Math.random() - 0.5));
      console.log(selectedCardList);
    }
  }

  const resetGame = () => {
    setScore(0);
    setSelectedCardList([]);
    const instructions = document.querySelector('.instructions');
    instructions.textContent = 'Click each color without clicking the same color twice!';
  }

  return (
    <div className="App">
      <Scoreboard className='scoreboard' score={score} bestScore={bestScore} />
      <div className='instructions'>
        Click each color without clicking the same color twice!
      </div>
      <Gameboard clickCard={clickCard} cardList={cardList} />
      <div className='buttonDiv'>
        <button onClick={resetGame}>Reset</button>
      </div>
    </div>
  );
}

export default App;
