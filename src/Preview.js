import React, { Component } from "react";

import { Panel } from "react-bootstrap";
import PreviewOperations from "./PreviewOperations";

const previewHeader = <h2>Preview and Send</h2>;

export default class Preview extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  updateFrameWidth = width => (this.refs.frame.style.width = width);

  updateFrameHeight = event =>
    (this.refs.frame.style.height = isNaN(parseInt(event.target.value, 10))
      ? "1000px"
      : event.target.value + "px");

  render() {
    return (
      <Panel id="Preview" header={previewHeader} footer={<PreviewOperations />}>
        <PreviewOperations
          updateFrameWidth={this.updateFrameWidth}
          updateFrameHeight={this.updateFrameHeight}
        />
        <iframe ref="frame" />
      </Panel>
    );
  }
}
