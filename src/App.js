import './App.css';

import {Col, Grid, Panel, Row} from 'react-bootstrap'
import React, {Component} from 'react';

import Branding from './Branding'
import Preview from './Preview'
import Recipients from './containers/Recipients'
import Variables from './Variables'

//import initialState from './initialState.json'

/*
let appState = localStorage["appState"]
  ? JSON.stringify(localStorage["appState"])
  : {}
*/
/*<div id='main'>
          <article>
            <Button bsStyle='success' bsSize='large'>Get started today</Button>
          </article>
          <nav>nav</nav>
          <aside>aside</aside>
        </div>*/

/*
  openModalView = (view) => {
    this
      .refs[view]
      .setState({showModal: true})
  }
  componentDidMount() {
    //this.openModalView("variables")
  }
*/

const App = () => (
      <div>
        <Recipients />
      </div>
)
 
export default App