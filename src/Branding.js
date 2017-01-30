import React, {Component} from 'react';
import {Navbar, Button} from 'react-bootstrap';

export default class Branding extends Component {
    constructor(props) {
        super(props)

        this.state = {
            "alone":true
        }
     
    }
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <h1>Mail Bench</h1>
                    <Button onClick={this.props.openRecipients}>Recipients</Button>
                </Navbar.Header>
            </Navbar>
        );
    }
}
