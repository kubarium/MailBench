import {
    Button,
    ButtonGroup,
    ButtonToolbar,
    DropdownButton,
    Form,
    FormControl,
    FormGroup,
    InputGroup,
    MenuItem,
    Nav,
    NavDropdown,
    NavItem,
    Navbar,
    Panel,
} from 'react-bootstrap'
import { FaBinoculars, FaClipboard, FaEnvelope, FaFloppyO } from 'react-icons/lib/fa'
import React, { Component } from 'react';

import Emphasize from './Emphasize'
import Space from 'react-nbsp'
const previewOperations = (
    <Navbar>
        <Navbar.Collapse>
            <Navbar.Form>
                <ButtonGroup>
                    <Button><FaBinoculars/> <Emphasize text="Preview"/></Button>
                    <Button><FaEnvelope/> <Emphasize text="Send"/></Button>
                    <Button><FaClipboard/> <Emphasize text="Copy to Clipboard"/></Button>
                </ButtonGroup><Space/>
                <ButtonGroup>
                    <InputGroup>
                        <DropdownButton
                            componentClass={InputGroup.Button}
                            title="Width Presets"
                            id="dropdown-no-caret">
                            <MenuItem eventKey="1">Action</MenuItem>
                            <MenuItem eventKey="2">Another action</MenuItem>
                            <MenuItem eventKey="3">Something else here</MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey="4">Separated link</MenuItem>
                        </DropdownButton>
                        <FormControl type="text"/>
                        <InputGroup.Button>
                            <Button><FaFloppyO/></Button>
                        </InputGroup.Button>
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Addon>Height</InputGroup.Addon>
                        <FormControl type="text"/>
                    </InputGroup>
                </ButtonGroup>
            </Navbar.Form>
        </Navbar.Collapse>
    </Navbar>

)

const previewHeader = (
    <h2>Preview and Send</h2>
)

export default class Preview extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <Panel id="Preview" header={previewHeader} footer={previewOperations}>
                {previewOperations}
                fuck me
            </Panel >
        )

    }
}