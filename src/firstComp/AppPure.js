// keep component pure
// no dependency over global variables

let guest = 0;

// viene chiamata due volte per colpa della strictMode
/* function Cup(){
	guest++;

	return (
		<h2>Tea cup for {guest} is available</h2>
	);
} */

function Cup({guest}){
    return <h2>Tea cup for {guest} is available</h2>
} 


/* export default function TeaSet(){
	return (
		<>
			<Cup guest={1}/>
			<Cup guest={2}/>
			<Cup guest={3}/>
		</>
	)
} */

// Local mutation is alwais
export default function TeaSet(){
    const cups=[];
    for(let i = 1; i <= 10; i++){
        cups.push(<Cup key={i} guest={i}/>)
    }
    
    return cups;
}