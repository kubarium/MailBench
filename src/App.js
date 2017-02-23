import './App.css';

import {Col, Grid, Panel, Row} from 'react-bootstrap'
import React, {Component} from 'react';

import Branding from './Branding'
import Preview from './Preview'
import Recipients from './containers/RecipientsContainer'
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
      showRecipients :false,
      showVariables :false,
    }
  }
  toggleModalView = (view) => {
    switch (view) {
      case "recipients":
        return this.setState({ showRecipients: !this.state.showRecipients })
      case "variables":
        return this.setState({ showVariables: !this.state.showVariables })
      default : return
    }
  }

  render() {
    return (
      <main>
        <Recipients show={this.state.showRecipients} toggleModalView={this.toggleModalView} />
        <Variables show={this.state.showVariables} toggleModalView={this.toggleModalView} />
        <Branding toggleModalView={this.toggleModalView} />
        <Grid>
          <Row className="show-grid">
            <Col md={10} mdOffset={1} sm={12} smOffset={0} lg={8} lgOffset={2}>
              {/*<Panel header={< h3 > Templates < /h3>} footer={< h3 > Templates < /h3>}></Panel>*/}
              <Preview/>
            </Col>
          </Row>
        </Grid>
      </main>
    )
  }
}

export default App