import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getMealById } from '../api';

function Reciepe() {
  const { id } = useParams();
  const [reciepe, setReciepe] = useState({});
  const { goBack } = useHistory();

  useEffect(() => {
    getMealById(id).then((data) => setReciepe(data.meals[0]));
  }, [id]);
  console.log(id);
  return (
    <>
      <div className='reciepe'>
        <img src={reciepe.strMealThumb} alt={reciepe.strMeal} />
        <h1>{reciepe.strMeal}</h1>
        <h6>Category: {reciepe.strCategory}</h6>
        {reciepe.strArea ? <h6>Area: {reciepe.strArea}</h6> : null}
        <p>{reciepe.strInstructions}</p>
        <table className='centerd'>
          <thead>
            <tr>
              <th>Ingridient</th>
              <th>Measure</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(reciepe).map((key) => {
              if (key.includes('Ingredient') && reciepe[key]) {
                return (
                  <tr key={key}>
                    <td>{reciepe[key]}</td>
                    <td>{reciepe[`strMeasure${key.slice(13)}`]}</td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
        {reciepe.strYoutube ? (
          <div className='row'>
            <h5>Video recipe</h5>
            <iframe
              title={id}
              src={`https://www.youtube.com/embed/${reciepe.strYoutube.slice(
                -11
              )}`}
              frameborder='0'
            ></iframe>
          </div>
        ) : null}
      </div>
      <button className='btn' onClick={goBack}>
        Go back
      </button>
    </>
  );
}

export { Reciepe };
