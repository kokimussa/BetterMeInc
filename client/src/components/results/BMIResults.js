import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles/bmi-results.css';

export default class BMIResults extends Component {
    static defaultProps = {
        bmiValue: 0,
        bmiCategory: '',
    }

    static propTypes = {
        bmiValue: PropTypes.number,
        bmiCategory: PropTypes.string,
    }

    render() {
        const { bmiValue, bmiCategory } = this.props;

        return (
            <div className="bmi-results">
                <h2 className="bmi-results__title">BMI Value</h2>
                <div className="bmi-results__value-container">
                    <p className="bmi-results__value">{ bmiValue }</p>
                    <p className="bmi-results__category">{ bmiCategory }</p>
                </div>
            </div>
        );
    }
}
