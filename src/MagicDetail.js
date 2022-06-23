// uses the correct react-router-dom hook to get the id from the URL, then uses that id to fetch the correct item
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSingleMagicCard } from './services/fetch-utils';


export default function MagicDetail() {
  
  const [magicCards, setMagicCards] = useState([]);

  const params = useParams();

  useEffect(() => {
    async function goFetch() {
      const data = await getSingleMagicCard(params.id);
      setMagicCards(data);
    }
    goFetch();
  }, [params.id]);

  return (
    <div>

    </div>
  );
}