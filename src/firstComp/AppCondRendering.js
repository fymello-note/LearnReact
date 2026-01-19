/* function Item({name, isPacked}){
	if(isPacked)
		return <li className="item">{name} v</li>

	return <li className="item">{name}</li>
} */

/* function Item({name, isPacked}){
	if(isPacked)
		return null; // nothing to render

	return <li className="item">{name}</li>;
} */

// ternary operator

/* function Item({name, isPacked}){
	return 	(
	<li className="item">
		{name} {isPacked ? ("v") : (null)}
	</li>
	)
} */

// Logical AND operator
function Item({name, isPacked}){
	return 	(
	<li className="item">
		{name} {isPacked && "v"}
	</li>
	)
}

export default function PackingList(){
	return (
		<section>
			<ul>
				<Item isPacked={true} name="Space Suit"/>
				<Item isPacked={true} name="Helmet"/>
				<Item isPacked={false} name="Helmet"/>
			</ul>
		</section>
	)
}