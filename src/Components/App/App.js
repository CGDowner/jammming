import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist'
import SearchResults from '../SearchResults/SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([
    {
    name: "example track 1 ",
    artist: "example track artist 1",
    album: "example track album 1",
    id: 1,
  },
  {
    name: "example track 2 ",
    artist: "example track artist 2",
    album: "example track album 2",
    id: 2,
  },
  {
    name: "example track 3 ",
    artist: "example track artist 3",
    album: "example track album 3",
    id: 3,
  }]);

  const [playListName, setPlayListName] = useState("Example Playlist Name");

  const [playListTracks, setPlayListTracks] = useState([
  {
    name: 'example name 1',
    artist: 'example artist 1',
    album: 'example album 1',
    id: 1,
  },
  {
    name: 'example name 2',
    artist: 'example artist 2',
    album: 'example album 2',
    id: 2,
  },
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ja<span>mmm</span>ing</h1>
      </header>
      <div className='SearchSection'>
        <SearchBar />
      </div>
      <div className='MainSection'>
        <SearchResults userSearchResults={searchResults} onAdd={addTrack}/>
        <Playlist 
        PlaylistName={playListName} 
        playListTracks={playListTracks}
        onRemove={removeTrack}
        />
      </div>
    </div>
  );
}

export default App;
