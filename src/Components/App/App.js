import logo from './logo.svg';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist'
import SearchResults from '../SearchResults/SearchResults';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ja<span>mmm</span>ing</h1>
      </header>
      <div className='SearchSection'>
        <SearchBar />
      </div>
      <div className='MainSection'>
        <SearchResults/>
        <Playlist />
      </div>
    </div>
  );
}

export default App;
