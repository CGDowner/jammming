import React from 'react';

import '../Playlist/Playlist.css'
import TrackList from '../TrackList/TrackList';

function Playlist(props) {

    function handleNameChange({target}) {
      props.onNameChange(target.value);
    }

    return (
        <div style={{
            background: 'hsla(263, 96%, 11%, 1)',
            color: 'white',
            border: '0.05em solid',
            borderColor: 'white',
            height: '80em',
            overflowY: 'scroll'}}>
            <h2>Playlist</h2>
            <input placeholder={"Enter New Playlist Name"} id='playlistInput' onChange={handleNameChange}/>
            <TrackList 
             userSearchResults={props.playListTracks} 
             onRemove={props.onRemove} 
             isRemoval={false}
             />
            <button id='playlistButton' onClick={props.onSave}>Save To Spotify</button>
        </div>
    )
}

export default Playlist;