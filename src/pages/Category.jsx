import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getFilteresByCategory } from '../api';
import { MealList } from '../components/MealList';

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const { goBack } = useHistory();

  useEffect(() => {
    getFilteresByCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <button className='btn' onClick={goBack}>
        Go back
      </button>
      <MealList meals={meals} />
    </>
  );
}

export { Category };
