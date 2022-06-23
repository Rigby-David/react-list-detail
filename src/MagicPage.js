// tracks items and page state correctly, refetching whenever the page state changes, passes props correctly to <Item>List
import { useEffect, useState } from 'react';
import MagicList from './MagicList';
import { getMagicCards } from './services/fetch-utils';


function App() {
  
  const [magicCards, setMagicCards] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 20;

  useEffect(() => {
    async function goFetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const magic = await getMagicCards(from, to);

      setMagicCards(magic);
    }
    goFetch();
  }, [page]);

  return (
    <>
      <h2>Current Page {page}</h2>
      <div>
        <button onClick={() => setPage(page - 1)}>Prev</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
      <MagicList magicCards={magicCards}/>
    </>
  );
}

export default App;