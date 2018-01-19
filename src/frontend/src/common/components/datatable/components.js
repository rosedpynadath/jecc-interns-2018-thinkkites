/* react */
import { connect } from 'react-redux';
import React, { Component } from 'react';

/* proptypes */
import PropTypes from 'prop-types';

/* apis */
import { fetchData } from './ajax';

let getHead = (cols, labels, disableActions) => {
    return (
        <thead>
            <tr className="text-primary">
                { getHeadings(cols, labels) }
                { getActionsHeading(disableActions) }
            </tr>
        </thead>
    );
}

let getHeadings = (cols, labels) => {
    let rowsHtml = cols.map(function(key, index){
        return (
            <th key={ index }>
                { labels[key] }
            </th>
        );
    });
    return rowsHtml;
}

let getBody = (cols, rows, disableActions) => {
    return (
        <tbody>
            { getRows(cols, rows, disableActions) }
        </tbody>
    );
}

let getRows = (cols, rows, disableActions) => {
    let rowsHtml = rows.map(function(row, index){
        return (
            <tr key={ index }>
                { getColumns(cols, row) }
                { getActionsColumn(disableActions) }
            </tr>
        );
    });
    return rowsHtml;
}

let getColumns = (cols, row) => {
    let colsHtml = cols.map(function(col, index){
        return (
            <td key={ index }>
                { row[col] }
            </td>
        )
    });
    return colsHtml;
}

let getActionsHeading = (disableActions) => {
    if (disableActions != 'true') {
      return (
        <th>Actions</th>
      )
    }
}

let getActionsColumn = (disableActions) => {
    if (disableActions != 'true') {
        return (
          <td className="td-actions">
              <button type="button" rel="tooltip" className="btn btn-info" data-original-title="view" title="view">
                  <i className="material-icons">person</i>
                  <div className="ripple-container"></div>
              </button>
              &nbsp;
              <button type="button" rel="tooltip" className="btn btn-success" data-original-title="edit" title="edit">
                  <i className="material-icons">edit</i>
              </button>
              &nbsp;
              <button type="button" rel="tooltip" className="btn btn-danger" data-original-title="delete" title="delete">
                  <i className="material-icons">close</i>
              </button>
          </td>
        )
    }
}

export class DataTable extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        fetchData(this.props.url, this.props.dispatch);
    }

    getCols() {
        let cols = [];
        if (this.props.cols === undefined) {
            if (this.props.results.length > 0) {
                cols = Object.keys(this.props.results[0]);
            }
        }
        else {
            cols = JSON.parse(this.props.cols);
        }
        return cols;
    }

    getLabels() {
        let labels = [];
        if (this.props.labels === undefined) {
            if (this.props.results.length > 0) {
                labels = Object.keys(this.props.results[0]);
            }
        }
        else {
            labels = JSON.parse(this.props.labels);
        }
        return labels;
    }

    render() {
        let cols = this.getCols();
        let labels = this.getLabels();
        let results = this.props.results;
        let disableActions = this.props.disableActions;

        return (
            <div className="card">
                <div className="card-header card-header-icon" data-background-color="purple">
                    <i className="material-icons">assignment</i>
                </div>
                <div className="card-content">
                    <h3 className="card-title">{this.props.title}</h3>
                    <div className="table-responsive">
                        <table className="table table-hover">
                            { getHead(cols, labels, disableActions) }
                            { getBody(cols, results, disableActions) }
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

/* type checking */
DataTable.proptypes = {
    url: PropTypes.string.isRequired,
    cols: PropTypes.array.optional,
    labels: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    disableActions: PropTypes.bool.isRequired
}

/* map redux state to props */
function mapStateToProps(state) {
    return Object.assign({}, state.fetchData);
}

DataTable = connect(mapStateToProps)(DataTable);
