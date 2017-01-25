import React, {Component} from 'react';
import update from 'immutability-helper';
import {ListGroupItem, ListGroup} from 'react-bootstrap'
import Recipient from './Recipient'

export default class Recipients extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ...this.props
        }

    }

    removeRecipient = (email) => {
        console.log(email)
    }
    updateRecipients = (index, newState) => {
        console.log("fuck",index, newState)
        this.setState({
            recipients: update(this.state.recipients, {
                index: {
                    $set:{...newState}
                }
            })
        })
        /*
        if (event.target.type === "checkbox") {
            console.log(event.target.checked)
            //this.state.recipients.filter(recipient => recipient)
        } else {
            console.log(event.target)
        }*/
    }
    render() {
        const recipients = []
        this
            .state
            .recipients
            .forEach((recipient, index) => {
                const item = (
                    <ListGroupItem key={recipient.email}>
                        <Recipient
                            index={index}
                            updateRecipients={this.updateRecipients}
                            removeRecipient={this.removeRecipient}
                            email={recipient.email}
                            checked={recipient.checked}/>
                    </ListGroupItem>
                )
                recipients.push(item)
            })

        return <ListGroup>{recipients}</ListGroup>

    }
}