import React, { Component } from 'react';
import RangeSlider from '../components/form-elements/RangeSlider';
import BMIResultsPanel from '../components/results/BMIResultsPanel';
import BMITableScale from '../components/tables/BMITableScale';

// Utils
import { feetToInches, bmiCalc } from '../utils/mathUtils';

// Services
import { getBMIScale, getBMIRiskFactors } from '../services/bmiService';

// Styles
import '../styles/app.css';

class App extends Component {
    state = {
        weightRangeVal: 137,
        heightFeetRangeVal: 5,
        heightInchesRangeVal: 4,
        isCalculatingBMI: true,
        bmiResult: 0,
        bmiCategory: '',
        bmiRiskFactors: [],
        bmiScale: [],
        bmiValue: 0,
    }

    render() {
        const {
            weightRangeVal,
            heightFeetRangeVal,
            heightInchesRangeVal,
        } = this.state;
        const weightLbl = `Weight: ${weightRangeVal} lbs.`;
        const heightFeetLbl = `Height (feet): ${heightFeetRangeVal}'`;
        const heightInchesLbl = `Height (inches): ${heightInchesRangeVal}"`;

        return (
            <div className="app">
                <div className="app__header-container">
                    <div className="app__header">
                        <div className="app__header-logo">
                            <span className="app__header-logo-top">BMI</span>
                            <span className="app__header-logo-bottom">Beter Me Immersion</span>
                        </div>
                    </div>
                </div>
                <div className="app__main-container">
                    <div className="app__main-container-left">
                        <div className="app__main-container-left-inner">
                            <div className="app__section-container weight">
                                <RangeSlider
                                    contextCls="weight-range-slider"
                                    value={ weightRangeVal }
                                    labelText={ weightLbl }
                                    max={ 600 }
                                    min={ 1 }
                                    onInput={ this.handleWeightRangeInput } />
                            </div>
                            <div className="app__section-container height">
                                <div className="app__range-slider-container feet">
                                    <RangeSlider
                                        contextCls="height-range-slider"
                                        value={ heightFeetRangeVal }
                                        labelText={ heightFeetLbl }
                                        min={ 1 }
                                        max={ 8 }
                                        onInput={ this.handleHeightFeetRangeInput } />
                                </div>
                                <div className="app__range-slider-container inches">
                                    <RangeSlider
                                        contextCls="height-range-slider"
                                        value={ heightInchesRangeVal }
                                        labelText={ heightInchesLbl }
                                        min={ 0 }
                                        max={ 11 }
                                        onInput={ this.handleHeightInchesRangeInput } />
                                </div>
                            </div>
                            <div className="app__section-container bmi-scale-container">
                                { this.renderScaleTable() }
                            </div>
                        </div>
                    </div>
                    <div className="app__main-container-right">
                        { this.renderResultsPanel() }
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.getBMIScale();
        this.handleSetBMIResults();
    }

    renderResultsPanel() {
        const {
            bmiResult,
            bmiCategory,
            bmiRiskFactors,
            isCalculatingBMI,
        } = this.state;

        return (
            <BMIResultsPanel
                isCalculatingBMI={ isCalculatingBMI }
                bmiValue={ bmiResult }
                bmiCategory={ bmiCategory }
                bmiRiskFactors={ bmiRiskFactors } />
        );
    }

    renderScaleTable() {
        const { bmiScale, bmiCategory } = this.state;

        return (bmiScale.length > 0) && (
            <BMITableScale
                bmiScale={ bmiScale }
                bmiCategory={ bmiCategory } />
        );
    }

    handleWeightRangeInput = (value) => {
        this.setState({
            weightRangeVal: value,
        }, this.handleSetBMIResults);
    }

    handleHeightFeetRangeInput = (feet) => {
        this.setState({
            heightFeetRangeVal: feet,
        }, this.handleSetBMIResults);
    }

    handleHeightInchesRangeInput = (inches) => {
        this.setState({
            heightInchesRangeVal: inches,
        }, this.handleSetBMIResults);
    }

    handleSetBMIResults = () => {
        const {
            weightRangeVal,
            heightFeetRangeVal,
            heightInchesRangeVal,
            isCalculatingBMI,
        } = this.state;
        const totalInches = feetToInches(heightFeetRangeVal) + heightInchesRangeVal;
        const bmiResult = bmiCalc(weightRangeVal, totalInches);
        const bmiCategory = this.getCategory(bmiResult);
        const bmiCategoryId = this.getCategoryId(bmiResult);

        if (this.bmiTimeout) {
            clearTimeout(this.bmiTimeout);
        }

        if (!isCalculatingBMI) {
            this.setState({
                isCalculatingBMI: true,
            });
        }

        this.bmiTimeout = setTimeout(() => {
            getBMIRiskFactors(bmiCategoryId).then((resp) => {
                this.setState({
                    isCalculatingBMI: false,
                    bmiResult,
                    bmiCategory,
                    bmiRiskFactors: resp,
                });
            });
        }, 500);
    }

    getBMIScale = () => {
        getBMIScale().then((bmiScale) => {
            this.setState({
                bmiScale,
            });
        });
    }

    getCategory = (bmiResult) => {
        switch (true) {
            case (bmiResult < 18.5):
                return 'Underweight';
            case ((bmiResult > 18.4) && (bmiResult < 25)):
                return 'Normal';
            case ((bmiResult > 25) && (bmiResult < 30)):
                return 'Overweight';
            default:
                return 'Obese';
        }
    }

    getCategoryId = (bmiResult) => {
        switch (true) {
            case (bmiResult < 18.5):
                return '1';
            case ((bmiResult > 18.4) && (bmiResult < 25)):
                return '2';
            case ((bmiResult > 25) && (bmiResult < 30)):
                return '3';
            default:
                return '4';
        }
    }
}

export default App;
