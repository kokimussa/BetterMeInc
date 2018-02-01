import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BMIResults from './BMIResults';
import BMIRisksList from './BMIRisksList';

// Utils
import getRandomImg from '../../utils/imageGeneratorUtils';

// Styles
import './styles/bmi-results-panel.css';

export default class BMIResultsPanel extends Component {
    static defaultProps = {
        bmiValue: 0,
        bmiCategory: '',
        bmiRiskFactors: [],
        isCalculatingBMI: false,
    }

    static propTypes = {
        bmiValue: PropTypes.number,
        bmiCategory: PropTypes.string,
        bmiRiskFactors: PropTypes.array,
        isCalculatingBMI: PropTypes.bool,
    }

    componentWillUpdate(newProps) {
        const { isCalculatingBMI } = this.props;

        if (isCalculatingBMI && !newProps.isCalculatingBMI) {
            this.randomBGImage = getRandomImg();
        }
    }

    render() {
        const { isCalculatingBMI } = this.props;
        const bgStyle = {
            backgroundImage: `url(${this.randomBGImage})`,
        };

        return (
            <div
                style={ bgStyle }
                className="bmi-results-panel" >
                { isCalculatingBMI ? this.renderCalculating() : this.renderResults() }
            </div>
        );
    }

    renderCalculating = () => {
        return (
            <div className="bmi-results-panel__inner loading">Loading...</div>
        );
    }

    renderResults() {
        const { bmiValue, bmiCategory, bmiRiskFactors } = this.props;

        return (
            <div className="bmi-results-panel__inner">
                <div className="bmi-results-panel__results-container">
                    <BMIResults
                        bmiValue={ bmiValue }
                        bmiCategory={ bmiCategory } />
                </div>
                <div className="bmi-results-panel__risks-container">
                    <BMIRisksList
                        bmiCategory={ bmiCategory }
                        bmiRiskFactors={ bmiRiskFactors } />
                </div>
            </div>
        );
    }

    randomBGImage = getRandomImg()
}
