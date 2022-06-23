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
        <p>Converted mana cost of: {magicCard.cardcmc}</p>
        <p>Card type: {magicCard.cardtype}</p>
        <p>Creature type: {magicCard.creaturetype}</p>
        <p>Power/Toughness: {magicCard.powtough}</p>
        <p>From: {magicCard.set}</p>
        <p>Set number: {magicCard.setnum}</p>
        <p>Rarity: {magicCard.rarity}</p>
        <p>Language: {magicCard.language}</p>
        <img src={magicCard.cardimage}/>
      </div>
    </>
  );
}