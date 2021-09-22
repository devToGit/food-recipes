import { useState, useEffect } from 'react';
import { getAllCategories } from '../api';
// import { Preloader } from '../components/Preloader';
import { CategoriesLIst } from '../components/CategoriesLIst';

function Home() {
  const [catalog, setCatalog] = useState();

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
    });
  }, []);
  console.log(typeof catalog);
  return (
    <>
      {
        /* {!catalog.length ? <Preloader /> : */ <CategoriesLIst
          catalog={catalog}
        />
      }
    </>
  );
}

export { Home };
