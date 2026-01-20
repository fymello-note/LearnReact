import { people } from "../../data";
import { getImage } from '../../utils';

function takePeople(people){
    return people.map(person =>
        <li key={person.id}>
            <img
                src={getImage(person.imageId)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );

}

export default function List() {
    const chemist = people.filter(person => person.profession === 'chemist')
    const listItemsChem = takePeople(chemist) 
    const Notchemist = people.filter(person => person.profession != 'chemist')

    const listItems = takePeople(Notchemist)  
    return (
        <article>
            <h1>Scientists</h1>
            <h2>Chemist</h2>
            <ul>{listItemsChem}</ul>
            <h2>Non Chemist</h2>
            <ul>{listItems}</ul>
        </article>
    );
}