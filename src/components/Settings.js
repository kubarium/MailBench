import {
  Button,
  ControlLabel,
  FormControl,
  FormGroup,
  InputGroup,
  Modal
} from "react-bootstrap";
import React, { Component } from "react";

import ReactDataGrid from "react-data-grid";

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={() => this.props.toggleModalView("settings")}
      >
        <Modal.Header>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FormGroup>
            <h3>Litmus Email</h3>
            <InputGroup>
              <FormControl type="email" />
              <InputGroup.Addon>@litmustest.com</InputGroup.Addon>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <h3>Mail Server</h3>
            <InputGroup>
              <InputGroup.Addon>Host</InputGroup.Addon>
              <FormControl type="text" />
              <InputGroup.Addon>Port</InputGroup.Addon>
              <FormControl type="number" min="0" defaultValue="22" />
            </InputGroup>
            <InputGroup>
              <InputGroup.Addon>Username</InputGroup.Addon>
              <FormControl type="text" />
              <InputGroup.Addon>Password</InputGroup.Addon>
              <FormControl type="text" />
            </InputGroup>
          </FormGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => this.props.toggleModalView("settings")}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
