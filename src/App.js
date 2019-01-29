import React, { Component } from 'react';
import Helmet from 'react-helmet';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Helmet>
              <meta charSet="utf-8" />
              <title>Custom helmet title</title>

              <meta property="og:title" content="Facebook Open Graph META Tags"/>
              <meta property="og:image" content="https://davidwalsh.name/wp-content/themes/klass/img/facebooklogo.png"/>
              <meta property="og:site_name" content="David Walsh Blog"/>
              <meta property="og:description" content="Facebook's Open Graph protocol allows for web developers to turn their websites into Facebook objects, allowing a certain level of customization over how information is carried over from a non-Facebook website to Facebook when a page is 'recommended', 'liked', or just generally shared."/>
          </Helmet>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
