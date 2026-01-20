// Render of multiple items

import { people } from "./data";
import { getImage } from "./utils";

/* const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
]; */

export default function List(){
	const listItem = people.map((person) => 
		<li key={person.id}>{person.name}</li>
	);
	return <ul>{listItem}</ul>;
}

/* export default function List(){
	const chemist = people.filter(person => person.profession === 'chemist')

	const listItems = chemist.map(person => 
	<li key={person.id}>
		<img
			src={getImage(person.imageId)}
			alt={person.name}
		/>

		<p><b>{person.name}</b>
		{person.profession}
		</p>

	</li>
	)

	return (
		<ul>
			{listItems}
		</ul>
	)
} */