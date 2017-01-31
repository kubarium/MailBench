import React, {Component} from 'react';
import {Navbar, Button} from 'react-bootstrap';

export default class Branding extends Component {
    constructor(props) {
        super(props)     
    }
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <h1>Mail Bench</h1>
                    <Button onClick={() => this.props.openModalView("recipients")}>Recipients</Button>
                    <Button onClick={() => this.props.openModalView("variables")}>Variables</Button>

                </Navbar.Header>
            </Navbar>
        );
    }
}
