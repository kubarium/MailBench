import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap'
import ReactDataGrid from 'react-data-grid'

export default class Variables extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ...this.props,
            originalRows: this.props.variables,
            showModal: false,
            columns: [
                {
                    key: 'variable',
                    name: 'Variable',
                    editable: true,
                    sortable: true
                }, {
                    key: 'value',
                    name: 'Value',
                    editable: true
                }
            ],
            selectedRows: []
        }
    }
    rowGetter = (i) => this.state.variables[i]
    handleRowUpdated = ({rowIdx, updated}) => {
        // merge updated row with current row and rerender by setting state
        const variables = this.state.variables;
        Object.assign(variables[rowIdx], updated);
        this.setState({variables});
    }
    handleGridSort = (sortColumn, sortDirection) => {
        const comparer = (a, b) => {
            if (sortDirection === 'ASC') {
                return (a[sortColumn] > b[sortColumn])
                    ? 1
                    : -1;
            } else if (sortDirection === 'DESC') {
                return (a[sortColumn] < b[sortColumn])
                    ? 1
                    : -1;
            }
        }

        const variables = sortDirection === 'NONE'
            ? this
                .state
                .originalRows
                .slice(0)
            : this
                .state
                .variables
                .sort(comparer)

        this.setState({variables})
    }
    addVariable = () => {
        const newVariable = {
            variable: "{variable}",
            value: "{value}"
        };

        let variables = this.state.variables
        variables.unshift(newVariable)
        this.setState({variables})
    }
    componentDidUpdate(prevProps, prevState) {
        this
            .refs
            .grid
            .updateMetrics();
    }
    onRowsSelected = (rows) => {
        this.setState({
            selectedRows: this
                .state
                .selectedRows
                .concat(rows.map(row => row.rowIdx))
        })
    }
    onRowsDeselected = (rows) => {
        const selectedRows = rows.map(row => row.rowIdx)
        this.setState({
            selectedRows: this
                .state
                .selectedRows
                .filter(index => selectedRows.indexOf(index) === -1)
        })
    }

    render() {

        return (
            <Modal show={this.state.showModal} bsSize="large">
                <Modal.Header>
                    <Modal.Title>Variables</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div id="variables-grid">
                        <ReactDataGrid
                            ref="grid"
                            enableCellSelect={true}
                            onGridSort={this.handleGridSort}
                            onRowUpdated={this.handleRowUpdated}
                            columns={this.state.columns}
                            rowsCount={this.state.variables.length}
                            rowGetter={this.rowGetter}
                            minHeight={400}
                            rowSelection={{
                            showCheckbox: true,
                            enableShiftSelect: true,
                            onRowsSelected: this.onRowsSelected,
                            onRowsDeselected: this.onRowsDeselected,
                            selectBy: {
                                indexes: this.state.selectedRows
                            }
                        }}/>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button className="pull-left" bsStyle="primary" onClick={this.addVariable}>Add</Button>
                    <Button onClick={() => this.setState({showModal: false})}>Close</Button>
                </Modal.Footer>

            </Modal>
        )
    }
}