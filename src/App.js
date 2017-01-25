import React, {Component} from 'react';
import './App.css';
import Branding from './Branding'
import Recipients from './Recipients'
import {Button, Grid, Row, Col, Panel} from 'react-bootstrap'

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
let recipients = [
  {
    email: "infinity.matt@yahoo.com",
    checked: true
  }, {
    email: "infinity.matt@outlook.com",
    checked: true
  }, {
    email: "infinity.matt.s@gmail.com",
    checked: false
  }, {
    email: "infinity.matt@aol.com",
    checked: true
  }
]

const templatesHeader = (
  <h3>Templates</h3>
)

const templatesFooter = (
  <h3>Fuck you</h3>
)

class App extends Component {
  constructor(props) {
    super(props)

    this.onClick = this
      .onClick
      .bind(this)
  }
  onClick(event) {

    console.log("anani sikerler, hello from", event.state)
  }
  render() {
    return (
      <article>
        <Branding onClick={this.onClick}/>
        <Recipients recipients={recipients}/>
        <Grid>
          <Row className="show-grid">
            <Panel header={< h3 > Templates < /h3>} footer={templatesFooter}>
              fuck me
            </Panel>
            <text>akak</text>
            <Panel header={templatesHeader} footer={templatesFooter}>
              fuck me
            </Panel>
          </Row>
        </Grid>
      </article>
    );
  }
}

export default App;