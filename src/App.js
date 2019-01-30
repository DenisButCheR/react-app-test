import React, { Component } from 'react';
import Helmet from 'react-helmet';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HeadComp/>
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
class HeadComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
    }

    componentDidMount() {
        setTimeout(() => {
			console.log(111);
			this.setState({loaded: true})
        }, 5000);
	}

	render() {
        if(!this.state.loaded) {
			console.log('Not loaded!');
			return null;
        }
    return (
		<Helmet>
			<meta charSet="utf-8" />
			<title>Custom helmet title</title>

			<meta property="og:title" content="Facebook Open Graph META Tags"/>
			<meta property="og:image" content="https://davidwalsh.name/wp-content/themes/klass/img/facebooklogo.png"/>
			<meta property="og:site_name" content="David Walsh Blog"/>
			<meta property="og:description" content="Facebook's Open Graph protocol allows for web developers to turn their websites into Facebook objects, allowing a certain level of customization over how information is carried over from a non-Facebook website to Facebook when a page is 'recommended', 'liked', or just generally shared."/>
		</Helmet>
    );
  }
}

export default App;
