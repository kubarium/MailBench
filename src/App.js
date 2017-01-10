import React, {Component} from 'react';
import './App.css';
import Branding from './Branding'
import {Button, Grid, Row, Col, Panel} from 'react-bootstrap'

/*<div id='main'>
          <article>
            <Button bsStyle='success' bsSize='large'>Get started today</Button>
          </article>
          <nav>nav</nav>
          <aside>aside</aside>
        </div>*/

const templatesHeader = (
  <h3>Panel title</h3>
)

const templatesFooter = (
  <h3>Fuck you</h3>
)

class App extends Component {
  render() {
    return (
      <article>
        <Branding/>
        <Grid>
          <Row className="show-grid">

            <Panel header={templatesHeader} footer={templatesFooter}>fuck me</Panel>
          </Row>

        </Grid>

      </article>
    );
  }
}

export default App;