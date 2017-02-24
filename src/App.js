import './App.css';

import {Col, Grid, Panel, Row, Thumbnail} from 'react-bootstrap'
import React, {Component} from 'react';

import Branding from './Branding'
import Preview from './Preview'
import Recipients from './containers/RecipientsContainer'
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
      showRecipients: false,
      showVariables: false
    }
  }
  toggleModalView = (view) => {
    switch (view) {
      case "recipients":
        return this.setState({
          showRecipients: !this.state.showRecipients
        })
      case "variables":
        return this.setState({
          showVariables: !this.state.showVariables
        })
      default:
        return
    }
  }

  render() {
    return (
      <main>
        <Recipients
          show={this.state.showRecipients}
          toggleModalView={this.toggleModalView}/>
        <Variables
          show={this.state.showVariables}
          toggleModalView={this.toggleModalView}/>
        <Branding toggleModalView={this.toggleModalView}/>
        <Grid>
          <Row>
            <Col md={12} sm={12} lg={12}>
              <Panel header={< h3 > Templates < /h3>} footer="FUCK ME">
                  <Templates/>
              </Panel>
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