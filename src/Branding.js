import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';

export default class Branding extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <h1>Mail Bench</h1>
                </Navbar.Header>
            </Navbar>
        );
    }
}
