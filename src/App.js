import React, { Component } from 'react';
import seedColors from './seedColors';
import Palette from './Palette';

class App extends Component {
  render() {
    return (
      <div>
        <Palette palette={seedColors[0]} />
      </div>
    );
  }
}

export default App;
