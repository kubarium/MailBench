import './App.css';

import { Col, Grid, Panel, Row } from 'react-bootstrap'
import React, {Component} from 'react';

import Branding from './Branding'
import Preview from './Preview'
import Recipients from './Recipients'
import Variables from './Variables'
import initialState from './initialState.json'

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


class App extends Component {
  
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
            <Col md={10} mdOffset={1}  sm={12} smOffset={0} lg={8} lgOffset={2}>
            <Panel header={< h3 > Templates < /h3>} footer={< h3 > Templates < /h3>}></Panel>
            
            <Preview/>
            </Col>
          </Row>
        </Grid>
      </article>
    );
  }
}

export default App;