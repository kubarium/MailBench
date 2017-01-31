import React, {Component} from 'react';
import './App.css';
import Branding from './Branding'
import Recipients from './Recipients'
import Variables from './Variables'
import initialState from './initialState.json'
import {Grid, Row, Panel} from 'react-bootstrap'

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
    this.openModalView("variables")
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