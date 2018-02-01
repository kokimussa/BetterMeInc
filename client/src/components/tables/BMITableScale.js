import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BMITableScaleRow from './BMITableScaleRow';

// Styles
import './styles/bmi-table-scale.css';

export default class BMITableScale extends Component {
    static defaultProps = {
        bmiCategory: '',
        bmiScale: [],
    }

    static propTypes = {
        bmiCategory: PropTypes.string,
        bmiScale: PropTypes.array,
    }

    render() {
        const { bmiScale } = this.props;

        return (
            <table className="bmi-table-scale">
                <thead>
                    <tr className="bmi-table-scale__header-row">
                        <th className="bmi-table-scale__header-cell">BMI Index</th>
                        <th className="bmi-table-scale__header-cell">Meaning</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bmiScale.map((row, idx) => this.renderRow(row, idx))
                    }
                </tbody>
            </table>
        );
    }

    renderRow = (row, idx) => {
        const { bmiCategory } = this.props;
        const isActive = row.meaning === bmiCategory;

        return (
            <BMITableScaleRow
                key={ idx }
                isActive={ isActive }
                tableRow={ row } />
        );
    }
}
