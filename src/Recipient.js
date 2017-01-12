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
            checked: true,
            email:props.email
        }

        this.handleCheck = this
            .handleCheck
            .bind(this)
        this.handleEmail = this
            .handleEmail
            .bind(this)
    }
    handleCheck(event) {
        this.setState({
            checked: event.target.checked
        })
        console.log(this.state.checked)
    }
    handleEmail(event) {
        this.setState({email: event.target.value})
        console.log(event.target.value)
    }
    render() {
        return (
            <InputGroup>

                <InputGroup.Addon>
                    <input type="checkbox" defaultChecked onChange={this.handleCheck}/>
                </InputGroup.Addon>
                <FormControl value={this.state.email} onChange={this.handleEmail}/>
                <InputGroup.Button>
                    <Button bsStyle="warning"><Glyphicon glyph="remove"/></Button>
                </InputGroup.Button>
            </InputGroup>
        )
    }
}