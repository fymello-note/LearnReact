import { recipes } from './data';

function Recipe({name, ingredients}){
    return (
        <div>
            <h2>{name}</h2>
            <ul>
                {ingredients.map(ingredient =>
                    <li key={ingredient}>
                        {ingredient}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recepi =>
        <Recipe key={recepi.id} name={recepi.name} ingredients={recepi.ingredients}/>
      )}
    </div>
  );
}