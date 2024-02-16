import React, { useState } from 'react';

import './SearchBar.css';

function SearchBar(props) {
    const [term, setTerm] = useState("");

    function passTerm() {
        props.onSearch(term)
    }

    function handleTermChange({target}) {
        setTerm(target.value)
    }


    return (
        <div id="searchSection">
            <input
                id='searchBar'
                onChange={handleTermChange}
                placeholder='Enter a Name, Artist or Album'
            />
            <button id='submit' onClick={passTerm}>Search</button>
        </div>
    )
}

export default SearchBar;