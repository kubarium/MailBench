import React, {Component} from 'react';
import {InputGroup, FormControl, Button, Glyphicon} from 'react-bootstrap'

export default class Recipient extends Component {
    render() {
        return (
            <InputGroup>
                <InputGroup.Addon>
                    <input
                        type="checkbox"
                        checked={this.props.checked}
                        onChange={(event) => this.props.updateRecipient(this.props.index, {"checked": event.target.checked})}/>
                </InputGroup.Addon>
                <FormControl
                    value={this.props.email}
                    onChange={(event) => this.props.updateRecipient(this.props.index, {"email": event.target.value})}/>
                <InputGroup.Button>
                    <Button
                        bsStyle="warning"
                        onClick={() => this.props.updateRecipient(this.props.index)}><Glyphicon glyph="remove"/></Button>
                </InputGroup.Button>
            </InputGroup>
        )
    }
}