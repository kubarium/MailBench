import './App.css';

import {Col, Grid, Panel, Row, Thumbnail} from 'react-bootstrap'
import React, {Component} from 'react';

import Branding from './Branding'
import Preview from './Preview'
import Recipients from './containers/RecipientsContainer'
import Settings from './components/Settings'
import Templates from './containers/TemplatesContainer'
import Variables from './containers/VariablesContainer'

/*
let appState = localStorage["appState"]
  ? JSON.stringify(localStorage["appState"])
  : {}
*/

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        recipients: false,
        variables: false,
        settings: true
    }
  }
  toggleModalView = (view) => {

    switch (view) {
      case "recipients":
        return this.setState({recipients: !this.state.recipients})
      case "variables":
        return this.setState({variables: !this.state.variables})
      case "settings":
        return this.setState({settings: !this.state.settings})
      default:
        return
    }
  }

  render() {
    return (
      <main>
        <Recipients
          show={this.state.recipients}
          toggleModalView={this.toggleModalView}/>
        <Variables
          show={this.state.variables}
          toggleModalView={this.toggleModalView}/>
        <Settings
          show={this.state.settings}
          toggleModalView={this.toggleModalView}/>
        <Branding toggleModalView={this.toggleModalView}/>
        <Grid>
          <Row>
            <Col md={12} sm={12} lg={12}>
              <Templates/>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={12} sm={12} lg={12}>
              <Preview/>
            </Col>
          </Row>
        </Grid>
      </main>
    )
  }
}

export default App