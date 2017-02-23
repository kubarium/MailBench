import {Button, ListGroup, ListGroupItem, Modal} from 'react-bootstrap'
import React, {Component} from 'react';

import Recipient from '../Recipient'

export default class Recipients extends Component {
    
    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={() => this.props.toggleModalView("recipients")}>
                <Modal.Header>
                    <Modal.Title>Recipients</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ListGroup>{this
                            .props
                            .recipients
                            .map((recipient, index) => <ListGroupItem key={index}>
                                <Recipient
                                    index={index}
                                    updateRecipient={this.props.updateRecipient}
                                    deleteRecipient={this.props.deleteRecipient}
                                    email={recipient.email}
                                    checked={recipient.checked}/>
                            </ListGroupItem>)}</ListGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        className="pull-left"
                        bsStyle="primary"
                        disabled={this.props.recipients.length === 6}
                        onClick={this.props.addRecipient}>{this.props.recipients.length === 6
                            ? "Slow down spammer!"
                            : "Add"}</Button>

                    <Button onClick={() => this.props.toggleModalView("recipients")}>Close</Button>
                </Modal.Footer>

            </Modal>
        )

    }
}