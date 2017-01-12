import React, {Component} from 'react';
import {
    InputGroup,
    FormControl,
    Button,
    Glyphicon,
    Checkbox,
    FormGroup
} from 'react-bootstrap'
import Recipient from './Recipient'

export default class Recipients extends Component {
    render(){
        return (
            <Recipient email="iam@denizkumsal.com"/>
        )
    }
}