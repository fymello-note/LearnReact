// curly braces in react component

export function Avatar(){
	const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
	const description = 'new image';
	return (
		<img
			className="avatar"
			src={avatar}
			alt={description}
		/>
	)
}

export function TodoList(){
	const name = "fulvios";

	return (
		<h1>{name}'s To Do List</h1>
	);
}


// double curlies: CSS and other objects in JSX

// export default function TodoList3(){
// 	let b = 'black';
// 	let s = {backgroundColor: b, color: 'pink'};
// 	return (
// 		<ul style={s}>
// 			<li>point1</li>
// 			<li>point2</li>
// 			<li>point3</li>
// 		</ul>
// 	)
// }

const person = {
	name: "person1",
	theme: {
		backgroundColor: "black",
		color: "pink"
	}
}

export default function TodoList3(){
	let b = 'black';
	let s = {backgroundColor: b, color: 'pink'};
	return (
		<div style={person.theme}>
			<h1>{person.name}</h1>
			<img
				className="avatar"
				src='https://i.imgur.com/7vQD0fPs.jpg'
				alt='new image'
			/>
		</div>
	)
}