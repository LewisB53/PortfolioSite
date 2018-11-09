import React, { Component } from 'react';
import './App.css';
import Main from './containers/Main';
import GalleryContainer from './containers/GalleryContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Main/>
            <GalleryContainer/>
        </header>
      </div>
    );
  }
}

export default App;
