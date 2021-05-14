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
    if(selectedCardList.includes(card)) {
      console.log('LOSE');
      setCardList(list.sort(() => Math.random() - 0.5));
      setSelectedCardList([]);
      if(score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      
    } else {
      setSelectedCardList([...selectedCardList, card]);
      setScore(selectedCardList.length+1)
      setCardList(list.sort(() => Math.random() - 0.5));
      console.log(selectedCardList);
    }
  }

  return (
    <div className="App">
      <Scoreboard score={score} bestScore={bestScore} />
      <Gameboard clickCard={clickCard} cardList={cardList} />
    </div>
  );
}

export default App;
