import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist'
import SearchResults from '../SearchResults/SearchResults';
import { Spotify } from '../../Util/Spotify/Spotify';

function App() {
  const [searchResults, setSearchResults] = useState([

]);

  const [playListName, setPlayListName] = useState("Example Playlist Name");

  const [playListTracks, setPlayListTracks] = useState([
  ]);

  function addTrack(track) {
    const existingTrack = playListTracks.find((t) => t.id === track.id);
    const newTrack = playListTracks.concat(track);

    if(existingTrack) {
      console.log('Track already exists')
    } else {
      setPlayListTracks(newTrack)
    }
  }

  function removeTrack(track) {
    const existingTrack = playListTracks.filter((t) => t.id !== track.id);
    setPlayListTracks(existingTrack);
  }

  function updatePlayListName(name) {
    setPlayListName(name);
  }

  function savePlaylist() {
    const trackURIs = playListTracks.map(track => track.uri);
    Spotify.savePlaylist(playListName, trackURIs).then(() => {
      setPlayListName("New Playlist")
      setPlayListTracks([])
    })
  }

  function search(term) {
    Spotify.search(term).then(result => setSearchResults(result))
    console.log(term);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ja<span>mmm</span>ing</h1>
      </header>
      <SearchBar onSearch={search}/>
      <div className='MainSection'>
        <SearchResults userSearchResults={searchResults} onAdd={addTrack}/>
        <Playlist 
        PlaylistName={playListName} 
        playListTracks={playListTracks}
        onRemove={removeTrack}
        onNameChange={updatePlayListName}
        onSave={savePlaylist}
        />
      </div>
    </div>
  );
}

export default App;
