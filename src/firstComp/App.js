// simple react component
/* export default function Profile() {
	return (
		<img
			src="https://i.imgur.com/MK3eW3Am.jpg"
			alt="Common name"
		/>
	);
} */

function Profile() {
	return <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Common name"/>
}

export default function Gallery(){
	return (
		<section>
			<h1>Scientist</h1>
			<Profile />
			<Profile />
			<Profile />
		</section>
	)
}