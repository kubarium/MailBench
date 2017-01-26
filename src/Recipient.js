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
        this.state = {
            ...this.props
        }
    }/*
    updateRecipients = (event) => {
        const newState = {
            checked: this.refs.recipient.checked,
            email: event.target.value
        }
        //console.log(newState)
        this
            .props
            .updateRecipients(this.props.index, newState)
}*/

    handleCheck = (event) => {
        this.setState({checked: event.target.checked})
        this
            .props
            .updateRecipients(this.state.index, {"checked": event.target.checked})
    }
    handleEmail = (event) => {
        this.setState({email: event.target.value})
        this
            .props
            .updateRecipients(this.state.index, {"email":event.target.value})
    }
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
                        type="checkbox"
                        checked={this.state.checked}
                        onChange={this.handleCheck}/>
                </InputGroup.Addon>
                <FormControl value={this.state.email} onChange={this.handleEmail}/>
                <InputGroup.Button>
                    <Button bsStyle="warning" onClick={this.removeRecipient}><Glyphicon glyph="remove"/></Button>
                </InputGroup.Button>
            </InputGroup>
        )
    }
}