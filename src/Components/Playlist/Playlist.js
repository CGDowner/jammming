import React from 'react';

import '../Playlist/Playlist.css'
import TrackList from '../TrackList/TrackList';

function Playlist(props) {
    return (
        <div style={{
            background: 'hsla(263, 96%, 11%, 1)',
            color: 'white',
            border: '0.05em solid',
            borderColor: 'white',
            height: '80em'}}>
            <h2>Playlist</h2>
            <TrackList userSearchResults={props.playListTracks} onRemove={props.onRemove} isRemoval={false}/>
        </div>
    )
}

export default Playlist;