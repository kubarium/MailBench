import React, {Component} from 'react';
import {
    InputGroup,
    FormControl,
    Button,
    Glyphicon,
    Checkbox,
    FormGroup
} from 'react-bootstrap'

export default class Recipient extends Component {
    constructor(props) {
        super(props)

    }
    updateRecipients = (event) => {
        const newState = {
            checked: this.refs.recipient.checked,
            email: event.target.value
        }
        console.log(newState)
        this
            .props
            .updateRecipients(this.props.index, newState)
    }
    /*
    handleCheck = (event) => {
        this.setState({checked: event.target.checked})
        this.props.updateRecipients(this.state)
    }
    handleEmail = (event) => {
        this.setState({email: event.target.value})
        this.props.updateRecipients(this.state)
}*/
    removeRecipient = () => {
        this
            .props
            .removeRecipient(this.refs.email)
    }
    render() {
        return (
            <InputGroup>
                <InputGroup.Addon>
                    <input
                        ref="recipient"
                        type="checkbox"
                        checked={this.props.checked}
                        onChange={this.updateRecipients}/>
                </InputGroup.Addon>
                <FormControl
                    inputRef={ref => {
                    this.input = ref;
                }}
                    type="text"
                    ref="email"
                    value={this.props.email}
                    onChange={this.updateRecipients}/>
                <InputGroup.Button>
                    <Button bsStyle="warning" onClick={this.removeRecipient}><Glyphicon glyph="remove"/></Button>
                </InputGroup.Button>
            </InputGroup>
        )
    }
}