import React, { useState } from 'react';

import './SearchBar.css';

/*
const countries = [
    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Bolivia", continent: "South America" },
    { name: "Ghana", continent: "Africa" },
    { name: "Japan", continent: "Asia" },
    { name: "Canada", continent: "North America" },
    { name: "New Zealand", continent: "Australasia" },
    { name: "Italy", continent: "Europe" },
    { name: "South Africa", continent: "Africa" },
    { name: "China", continent: "Asia" },
    { name: "Paraguay", continent: "South America" },
    { name: "Usa", continent: "North America" },
    { name: "France", continent: "Europe" },
    { name: "Botswana", continent: "Africa" },
    { name: "Spain", continent: "Europe" },
    { name: "Senegal", continent: "Africa" },
    { name: "Brazil", continent: "South America" },
    { name: "Denmark", continent: "Europe" },
    { name: "Mexico", continent: "South America" },
    { name: "Australia", continent: "Australasia" },
    { name: "Tanzania", continent: "Africa" },
    { name: "Bangladesh", continent: "Asia" },
    { name: "Portugal", continent: "Europe" },
    { name: "Pakistan", continent: "Asia" },
  ];


  const arrayDataItems = countries.map(country => 
    <li key={country.name}>
        <p>{country.name}</p>
    </li>
  )

*/

function SearchBar() {

    /*
    const [searchInput, setSearchInput] = useState('');

    const handleChange = (e) => {
        e.prevent.defualt();
        setSearchInput(e.target.value);
    }

    if (searchInput.length > 0) {
        countries.filter((country) => {
            return country.name.match(searchInput);
        });
    }

    */

    return (
        <form>
            <input
                type="text"
                placeholder='Search Here'
                id='searchBar'
                onChange={''}
                value={''}
            />
            <button id='submit' type='submit'>Search</button>
        </form>
    )
}

export default SearchBar;