import {Button, ListGroup, ListGroupItem, Modal} from 'react-bootstrap'
import React, {Component} from 'react';

import Recipient from '../Recipient'

export default class Recipients extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showModal: true
        }
    }/*
    updateRecipient = (index, updatedRecipient) => {
        let recipients = this.state.recipients

        if (updatedRecipient) {
            recipients[index] = Object.assign({}, recipients[index], updatedRecipient)
        } else {
            recipients.splice(index, 1)
        }
        this.setState({recipients})

    }
    addRecipient = () => {

        this.setState({
            recipients: this
                .state
                .recipients
                .concat({checked: true, email: "email@domain.com"})
        })
    }*/

    render() {
        return (
            <Modal
                show={this.state.showModal}
                onHide={() => console.log("SIKISSEK")}
                keyboard={true}
                tabIndex="-1">
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

                    <Button onClick={() => this.setState({showModal: false})}>Close</Button>
                </Modal.Footer>

            </Modal>
        )

    }
}