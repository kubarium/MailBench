import React, {Component} from 'react';
import './App.css';
import Branding from './Branding'
import Recipients from './Recipients'
import {Button, Grid, Row, Col, Panel} from 'react-bootstrap'

/*<div id='main'>
          <article>
            <Button bsStyle='success' bsSize='large'>Get started today</Button>
          </article>
          <nav>nav</nav>
          <aside>aside</aside>
        </div>*/


const templatesHeader = (
  <h3>Templates</h3>
)

const templatesFooter = (
  <h3>Fuck you</h3>
)

class App extends Component {
  render() {
    return (
      <article>
        <Branding/>
        <Recipients/>
        <Grid>
          <Row className="show-grid">
            <Panel header={<h3>Templates</h3>} footer={templatesFooter}>
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