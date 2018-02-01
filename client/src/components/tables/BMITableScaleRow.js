import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class BMITableScaleRow extends Component {
    static defaultProps = {
        tableRow: {},
        isActive: false,
    }

    static propTypes = {
        tableRow: PropTypes.object,
        isActive: PropTypes.bool,
    }

    render() {
        const { tableRow, isActive } = this.props;
        const rowKeys = Object.keys(tableRow);
        const activeCls = {
            'mod-active': isActive,
        };

        return (
            <tr className={ cx('bmi-table-scale__row', activeCls) }>
                {
                    rowKeys.map((key, idx) => {
                        if (key !== 'id') {
                            return this.renderCell(tableRow[key], idx);
                        }
                    })
                }
            </tr>
        );
    }

    renderCell = (cell, idx) => {
        return (
            <td
                key={ idx }
                className="bmi-table-scale__cell" >
                {cell}
            </td>
        );
    }
}
