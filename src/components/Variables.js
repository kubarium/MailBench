import { Button, Modal } from "react-bootstrap";
import React, { Component } from "react";

import ReactDataGrid from "react-data-grid";

export default class Variables extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props,
      originalRows: this.props.variables,
      columns: [
        {
          key: "variable",
          name: "Variable",
          editable: true,
          sortable: true
        },
        {
          key: "value",
          name: "Value",
          editable: true
        }
      ],
      selectedRows: []
    };
  }
  rowGetter = i => this.state.variables[i];
  handleRowUpdated = ({ rowIdx, updated }) => {
    // merge updated row with current row and rerender by setting state
    const variables = this.state.variables;
    Object.assign(variables[rowIdx], updated);
    this.setState({ variables });
  };
  handleGridSort = (sortColumn, sortDirection) => {
    const comparer = (a, b) => {
      if (sortDirection === "ASC") {
        return a[sortColumn] > b[sortColumn] ? 1 : -1;
      } else if (sortDirection === "DESC") {
        return a[sortColumn] < b[sortColumn] ? 1 : -1;
      }
    };

    const variables =
      sortDirection === "NONE"
        ? this.state.originalRows.slice(0)
        : this.state.variables.sort(comparer);

    this.setState({ variables });
  };
  addVariable = () => {
    const newVariable = {
      variable: "{variable}",
      value: "{value}"
    };

    let variables = this.state.variables;
    variables.unshift(newVariable);
    this.setState({ variables });
  };
  deleteVariables = () => {
    let selectedRows = this.state.selectedRows.sort(
      (a, b) => (a < b ? -1 : a > b ? 1 : 0)
    );
    let variables = this.state.variables;
    let remove = arr => {
      if (arr.length !== 0) {
        variables.splice(arr.pop(), 1);
        remove(arr);
      }
    };
    remove(selectedRows);
    this.setState({ variables, selectedRows });
  };
  /*componentDidUpdate(prevProps, prevState) {
        this
            .refs
            .grid
            .updateMetrics();
    }*/
  onRowsSelected = rows => {
    this.setState({
      selectedRows: this.state.selectedRows.concat(rows.map(row => row.rowIdx))
    });
  };
  onRowsDeselected = rows => {
    const selectedRows = rows.map(row => row.rowIdx);
    this.setState({
      selectedRows: this.state.selectedRows.filter(
        index => selectedRows.indexOf(index) === -1
      )
    });
  };
  exportVariables = () => {
    /*axios
            .post('/user', {
                firstName: 'Fred',
                lastName: 'Flintstone'
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });*/
  };
  render() {
    return (
      <Modal
        show={this.props.show}
        bsSize="large"
        onHide={() => this.props.toggleModalView("variables")}
      >
        <Modal.Header>
          <Modal.Title>Variables</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div id="variables-grid">
            <ReactDataGrid
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
              }}
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button
            className="pull-left"
            bsStyle="primary"
            onClick={this.addVariable}
          >
            Add
          </Button>
          <Button
            className="pull-left"
            bsStyle="danger"
            disabled={this.state.selectedRows.length === 0}
            onClick={this.deleteVariables}
          >
            Delete
          </Button>
          <Button
            className="pull-left"
            bsStyle="success"
            onClick={this.exportVariables}
          >
            Export
          </Button>
          <Button
            className="pull-left"
            bsStyle="warning"
            onClick={this.importVariables}
          >
            Import
          </Button>
          <Button onClick={() => this.props.toggleModalView("variables")}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
