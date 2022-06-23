// takes in the correct props and renders Link components to the detail page
import { Link } from 'react-router-dom';

export default function Magic({ magicCard }) {
  return (
    <Link to={`/magic/${magicCard.id}`}>
      <div>
        <image src={magicCard.cardImage}/>
        <p>{magicCard.cardName}</p>
      </div>
    </Link>
  );
}