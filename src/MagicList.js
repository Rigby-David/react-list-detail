// takes in the correct props and renders an item for each item in the array

import Magic from './Magic';


export default function MagicList({ magicCards }) {
  return (
    <div className='magic-list'>
      {
        magicCards.map((magicCard, i) => <Magic key={magicCard.cardName + i + magicCard.id} magicCard={magicCard} />)
      }
    </div>
  );
}