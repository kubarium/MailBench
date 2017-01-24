import React, {Component} from 'react';
import {Navbar, Button} from 'react-bootstrap';

export default class Branding extends Component {
    constructor(props) {
        super(props)

        this.state = {
            "alone":true
        }
        this.onClick = this.onClick.bind(this)
    }
    onClick(event) {
        this.props.onClick(this)
    }
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <h1>Mail Bench</h1>
                    <Button onClick={this.onClick}>Fuck me</Button>
                </Navbar.Header>
            </Navbar>
        );
    }
}
