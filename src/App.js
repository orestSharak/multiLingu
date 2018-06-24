import React, { Component } from 'react';
import './App.css';
import Routs from "./components/Routes";
import Toolbar from "./components/Toolbar";

class App extends Component {
  render() {
    return (
      <div>
          <Toolbar changeLocale={this.props.changeLocale} />
        <Routs/>
      </div>
    );
  }
}

export default App;
