import {Button, Navbar} from 'react-bootstrap';
import React, {Component} from 'react';

export default class Branding extends Component {
    
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
