"use client";

import { useState } from 'react';
import { foods, filterItems } from './data';

export default function FilterableList() {
    const [query, setQuery] = useState('');
    const ListFood = filterItems(foods, query)

    function handleChange(e) {
        setQuery(e.target.value);
    }

    return (
        <>
            <SearchBar query={query} onChange={handleChange} />
            <hr />
            <List items={ListFood} />
        </>
    );
}

function SearchBar({ query, onChange }) {
    return (
        <label>
            Search:{' '}
            <input
                value={query}
                onChange={onChange}
            />
        </label>
    );
}

function List({ items }) {
    return (
        <table>
            <tbody>
                {items.map(food => (
                    <tr key={food.id}>
                        <td>{food.name}</td>
                        <td>{food.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}