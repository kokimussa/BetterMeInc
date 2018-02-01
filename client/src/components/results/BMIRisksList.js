import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles/bmi-results-list.css';

export default class BMIRisksList extends Component {
    static defaultProps = {
        bmiCategory: '',
        bmiRiskFactors: [],
    }

    static propTypes = {
        bmiCategory: PropTypes.string,
        bmiRiskFactors: PropTypes.array,
    }

    render() {
        const { bmiRiskFactors } = this.props;
        const title = this.getHeaderText();

        return (
            <div className="bmi-risk-factors">
                <h2 className="bmi-risk-factors__title">{title}</h2>
                <ul className="bmi-risk-factors__list">
                    { bmiRiskFactors.map((item, idx) => this.renderListItem(item, idx)) }
                </ul>
            </div>
        );
    }

    renderListItem = (item, idx) => {
        return (
            <li
                key={ idx }
                className="bmi-risk-factors__list-item">
                { item.description }
            </li>
        );
    }

    getHeaderText = () => {
        const { bmiCategory } = this.props;

        switch (bmiCategory) {
            case 'Normal':
                return 'Low Risk For:';
            case 'Obese':
                return 'Very High Risk For:';
            default:
                return 'High Risk For:';
        }
    }
}
