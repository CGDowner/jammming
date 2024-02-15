import React from 'react';
import '../SearchResults/SearchResults.css'

import Tracklist from '../TrackList/TrackList';

function SearchResults(props) {
    return (
        <div style={{
            background: 'hsla(263, 96%, 11%, 1)',
            border: '0.05em solid',
            borderColor: 'white',
            color: 'white',
            height: '80em'}}>
            <h2>Search Results</h2>
            <Tracklist userSearchResults={props.userSearchResults} isRemoval={true} onAdd={props.onAdd}/>
        </div>
    )
}

export default SearchResults;