// JSX rules (Mixture between Javascript + HTML)

// <> tag vuoto per non passare un parente inapropiato
// o usare un fragment

/* export default function TodoList(){
	return (
		<> 
			<h1>TodoList</h1>
			<img src="https://i.imgur.com/yXOvdOSs.jpg" alt="alternate content" className="photo" />
			<ul>
				<li>fist</li>
				<li>second</li>
				<li>therd</li>
			</ul>
		</>
	);
} */

import Bio from "./Exercises/HtmlJsx/App";

export default function App(){
	return (
		<Bio/>
	);
}