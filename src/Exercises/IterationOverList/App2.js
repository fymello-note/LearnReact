import { Fragment } from 'react/jsx-runtime';
import { recipes } from './data';

function ListIng({ing}) {
    return (ing.map((ing, index) => <li key={index}>{ing}</li>))
}

export default function RecipeList() {
  return (
	  <div>
		  <h1>Recipes</h1>
		  <ol>
		  {recipes.map(list =>
			  <li key={list.id}>
				  <h2>{list.name}</h2>
				  <ol>
					  <ListIng ing={list.ingredients} />
				  </ol>
			  </li>
		  )}
		  </ol>
	  </div>
  );
}