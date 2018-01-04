import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './style/base';
import './style/typography';
import './style/animations.css';

import Home from './containers/Home';
import AddPlayer from './containers/AddPlayer';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/add-player" component={AddPlayer} />
            <Route path="*" component={Home} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
