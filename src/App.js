import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <article>
        <header>header</header>
        <div id='main'>
          <article>article</article>
          <nav>nav</nav>
          <aside>aside</aside>
        </div>
      </article>
    );
  }
}

export default App;