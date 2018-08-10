import {
  Button,
  ButtonGroup,
  FormControl,
  InputGroup,
  Navbar
} from "react-bootstrap";
import { FaBinoculars, FaClipboard, FaEnvelope } from "react-icons/lib/fa";
import React, { Component } from "react";

import CommonWidths from "./CommonWidths";
import Emphasize from "./Emphasize";
import Space from "react-nbsp";

export default class PreviewOperations extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Collapse>
          <Navbar.Form>
            <ButtonGroup>
              <Button>
                <FaBinoculars />
                <Space />
                <Emphasize text="Preview" />
              </Button>
              <Button>
                <FaEnvelope />
                <Space />
                <Emphasize text="Send" />
              </Button>
              <Button>
                <FaClipboard />
                <Space />
                <Emphasize text="Copy to Clipboard" />
              </Button>
            </ButtonGroup>
            <Space />
            <ButtonGroup>
              <CommonWidths onChange={this.props.updateFrameWidth} />
              <Space />
              <InputGroup>
                <InputGroup.Addon>Height</InputGroup.Addon>
                <FormControl
                  onChange={this.props.updateFrameHeight}
                  className="metricEntry"
                  type="text"
                  defaultValue="1000"
                />
              </InputGroup>
            </ButtonGroup>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
