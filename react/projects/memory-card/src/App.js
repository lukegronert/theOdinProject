import { useState } from 'react';
import Gameboard from './components/Gameboard';

function App() {

  const [cardList, setCardList] = useState(['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple',]);
  const [selectedCardList, setSelectedCardList] = useState([]);

  const clickCard = (card) => {
    if(selectedCardList.includes(card)) {
      console.log('LOSE')
    } else {
      setSelectedCardList([...selectedCardList, card])
      console.log(selectedCardList)
    }
  }

  return (
    <div className="App">
      <Gameboard cardList={cardList} clickCard={clickCard} />
    </div>
  );
}

export default App;
