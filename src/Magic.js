// takes in the correct props and renders Link components to the detail page
import { Link } from 'react-router-dom';

export default function Magic({ magicCard }) {
  return (
    <Link to={`/magic/${magicCard.id}`}>
      <div className='magic-card'>
        <img src={magicCard.cardimage}/>
        <p>{magicCard.cardname}</p>
      </div>
    </Link>
  );
}