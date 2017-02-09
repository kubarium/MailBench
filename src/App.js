import './App.css';

import { Grid, Panel, Row } from 'react-bootstrap'
import React, {Component} from 'react';

import Branding from './Branding'
import Preview from './Preview'
import Recipients from './Recipients'
import Variables from './Variables'
import initialState from './initialState.json'

let appState = localStorage["appState"]
  ? JSON.stringify(localStorage["appState"])
  : {}

/*<div id='main'>
          <article>
            <Button bsStyle='success' bsSize='large'>Get started today</Button>
          </article>
          <nav>nav</nav>
          <aside>aside</aside>
        </div>*/


class App extends Component {
  constructor(props) {
    super(props)

  }
  openModalView = (view) => {
    this
      .refs[view]
      .setState({showModal: true})
  }
  componentDidMount() {
    //this.openModalView("variables")
  }

  render() {

    return (

      <article>
        <Branding openModalView={this.openModalView}/>
        <Recipients ref="recipients" recipients={initialState.recipients}/>
        <Variables ref="variables" variables={initialState.variables}/>
        <Grid>
          <Row className="show-grid">
            <Panel header={< h3 > Templates < /h3>} footer={< h3 > Templates < /h3>}></Panel>
            
            <Preview/>
          </Row>
        </Grid>
      </article>
    );
  }
}

export default App;