import { people } from "../../data";
import { getImage } from '../../utils';

export default function List() {
    const chemist = people.filter(person => person.profession === 'chemist')
    const listItemsChem = chemist.map(person =>
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

    const Notchemist = people.filter(person => person.profession === 'chemist')

    const listItems = Notchemist.map(person =>
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
    return (
        <article>
            <h1>Scientists</h1>
            <ul>{listItemsChem}</ul>
            <ul>{listItems}</ul>
        </article>
    );
}