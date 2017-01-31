import React, {Component} from 'react';
import {ListGroupItem, ListGroup, Modal, Button} from 'react-bootstrap'
import Recipient from './Recipient'

export default class Recipients extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ...this.props,
            showModal: false
        }
    }
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
    }

    render() {
        const recipients = []
        this
            .state
            .recipients
            .forEach((recipient, index) => {
                const item = (
                    <ListGroupItem key={index}>
                        <Recipient
                            index={index}
                            updateRecipient={this.updateRecipient}
                            email={recipient.email}
                            checked={recipient.checked}/>
                    </ListGroupItem>
                )
                recipients.push(item)
            })

        return (
            <Modal show={this.state.showModal}>
                <Modal.Header>
                    <Modal.Title>Recipients</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ListGroup>{recipients}</ListGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        className="pull-left"
                        bsStyle="primary"
                        disabled={this.state.recipients.length === 6}
                        onClick={this.addRecipient}>{this.state.recipients.length === 6
                            ? "Slow down spammer!"
                            : "Add"}</Button>

                    <Button onClick={() => this.setState({showModal: false})}>Close</Button>
                </Modal.Footer>

            </Modal>
        )

    }
}