import { Button, Nav, NavItem, Navbar } from "react-bootstrap";
import React, { Component } from "react";

export default class Branding extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <h1>Mail Bench</h1>
        </Navbar.Header>

        <Nav pullRight>
          <NavItem eventKey={1}>
            <Button onClick={() => this.props.toggleModalView("recipients")}>
              Recipients
            </Button>
          </NavItem>
          <NavItem eventKey={2}>
            <Button onClick={() => this.props.toggleModalView("variables")}>
              Variables
            </Button>
          </NavItem>
          <NavItem eventKey={3}>
            <Button onClick={() => this.props.toggleModalView("settings")}>
              Settings
            </Button>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
