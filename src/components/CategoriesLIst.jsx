import { CategoryItem } from './CategoryItem';

function CategoriesLIst({ catalog = [] }) {
  return (
    <div className='list'>
      {catalog.map((el) => (
        <CategoryItem key={el.idCategory} {...el} />
      ))}
    </div>
  );
}

export { CategoriesLIst };
