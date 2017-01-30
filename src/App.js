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


class App extends Component {
  constructor(props) {
    super(props)

  }
  openRecipients = () => {
    this.refs.recipients.setState({showModal:true})
  }
  render() {
    return (
      <article>
        <Branding  openRecipients={this.openRecipients}/>
        <Recipients ref="recipients" recipients={recipients}/>
        <Grid>
          <Row className="show-grid">
            <Panel header={< h3 > Templates < /h3>} footer={< h3 > Templates < /h3>}>
              fuck me
            </Panel>
            <text>akak</text>
            <Panel header={< h3 > Templates < /h3>} footer={< h3 > Templates < /h3>}>
              fuck me
            </Panel>
          </Row>
        </Grid>
      </article>
    );
  }
}

export default App;