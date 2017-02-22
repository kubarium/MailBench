import {Button, FormControl, Glyphicon, InputGroup} from 'react-bootstrap'

import React from 'react';

const Recipient = (props) => (
    <InputGroup>
        <InputGroup.Addon>
            <input
                type="checkbox"
                checked={props.checked}
                onChange={(event) => props.updateRecipient({"index":props.index,"checked": event.target.checked})}/>
        </InputGroup.Addon>
        <FormControl
            value={props.email}
            onChange={(event) => props.updateRecipient({"index":props.index,"email": event.target.value})}/>
        <InputGroup.Button>
            <Button bsStyle="warning" onClick={() => props.deleteRecipient(props.index)}><Glyphicon glyph="remove"/></Button>
        </InputGroup.Button>
    </InputGroup>
)

export default Recipient