import { Fragment } from 'react/jsx-runtime';
import { recipes } from './data';

function listIng(ing) {
    return (ing.map((ing, index) => <li key={index}>{ing}</li>))
}

export default function RecipeList() {
    const listItem = recipes.map((list, index) =>
        <Fragment key={list.id}>
            <h2>{list.name}</h2>
            <ul>{listIng(list.ingredients)}</ul>
        </Fragment>
    )

  return (
    <div>
      <h1>Recipes</h1>
        {listItem} 
    </div>
  );
}