// uses the correct react-router-dom hook to get the id from the URL, then uses that id to fetch the correct item
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSingleMagicCard } from './services/fetch-utils';


export default function MagicDetail() {
  
  const [magicCard, setMagicCard] = useState([]);

  const params = useParams();

  useEffect(() => {
    async function goFetch() {
      const data = await getSingleMagicCard(params.id);
      setMagicCard(data);
    }
    goFetch();
  }, [params.id]);

  return (
    <>
      <Link to='/'>Home</Link>
      <div className='magic-detail'>
        <h3>{magicCard.cardname}</h3>
        <p>{magicCard.cardcmc}</p>
        <p>{magicCard.cardtype}</p>
        <p>{magicCard.creaturetype}</p>
        <p>{magicCard.powtough}</p>
        <p>{magicCard.set}</p>
        <p>{magicCard.setnum}</p>
        <p>{magicCard.rarity}</p>
        <p>{magicCard.language}</p>
        <p>{magicCard.language}</p>
        <img src={magicCard.cardimage}/>
      </div>
    </>
  );
}