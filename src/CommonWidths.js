import {
  Button,
  DropdownButton,
  FormControl,
  InputGroup,
  MenuItem
} from "react-bootstrap";
import React, { Component } from "react";

import { FaFloppyO } from "react-icons/lib/fa";
import Space from "react-nbsp";

export default class CommonWidths extends Component {
  componentWillMount() {
    let commonWidths = [];

    if (localStorage.commonWidths) {
      commonWidths = JSON.parse(localStorage.commonWidths);
    } else {
      commonWidths = [320, 360, 480, 720, 800];
      localStorage["commonWidths"] = JSON.stringify(commonWidths);
    }

    this.state = {
      commonWidths,
      value: commonWidths[0]
    };
  }

  removeCommonWidth = event => {
    let commonWidths = JSON.parse(localStorage.commonWidths);
    commonWidths.splice(event.target.value, 1);
    localStorage["commonWidths"] = JSON.stringify(commonWidths);
    this.setState({
      commonWidths
    });
  };
  addCommonWidth = event => {
    let commonWidths = JSON.parse(localStorage.commonWidths);
    if (!commonWidths.includes(this.state.value))
      commonWidths.push(this.state.value);
    localStorage["commonWidths"] = JSON.stringify(commonWidths.sort());
    this.setState({
      commonWidths
    });
  };
  changeCommonWidth = event => {
    let value = event.target.value;
    if (RegExp(/%$/, "gm").test(value)) {
      const percentage = parseInt(value.substring(0, value.length - 1), 10);
      value = percentage >= 100 ? "100%" : `${percentage}%`;
    } else {
      value = parseInt(value, 10);
      value = isNaN(value) ? 0 : value;
    }
    this.setState({
      value
    });
    this.props.onChange(RegExp(/%$/, "gm").test(value) ? value : value + "px");
  };
  render() {
    const commonWidths = this.state.commonWidths.map((commonWidth, index) => (
      <MenuItem key={commonWidth}>
        <Button
          bsStyle="danger"
          bsSize="xs"
          onClick={this.removeCommonWidth}
          value={index}
        >
          X
        </Button>
        <Space />
        {commonWidth}
      </MenuItem>
    ));
    return (
      <InputGroup>
        <DropdownButton
          id="commonWidths"
          componentClass={InputGroup.Button}
          title="Presets"
        >
          {commonWidths}
        </DropdownButton>
        <FormControl
          onChange={this.changeCommonWidth}
          className="metricEntry"
          type="text"
          value={this.state.value}
        />
        <InputGroup.Button>
          <Button onClick={this.addCommonWidth}>
            <FaFloppyO />
          </Button>
        </InputGroup.Button>
      </InputGroup>
    );
  }
}
