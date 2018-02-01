import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import cx from 'classnames';

// Styles
import './styles/range-slider.css';

export default class RangeSlider extends Component {
    static defaultProps = {
        contextCls: '',
        labelText: '',
        value: 0,
        min: 0,
        max: 30,
        onInput: () => Promise.resolve(),
        onChange: () => Promise.resolve(),
    }

    // https://reactjs.org/docs/typechecking-with-proptypes.html
    static propTypes = {
        contextCls: PropTypes.string,
        labelText: PropTypes.string,
        value: PropTypes.number,
        min: PropTypes.number,
        max: PropTypes.number,
        onInput: PropTypes.func,
        onChange: PropTypes.func,
    }

    state = {
        sliderId: `range-slider-${uuid()}`,
    }

    render() {
        const {
            contextCls,
            labelText,
            value,
            min,
            max,
        } = this.props;
        const { sliderId } = this.state;

        return (
            <label
                className={ cx('range-slider', contextCls) }
                htmlFor={ sliderId } >
                <span className="range-slider__label-text">{labelText}</span>
                <span className="range-slider__input-container">
                    <input
                        id={ sliderId }
                        className="range-slider__input"
                        type="range"
                        min={ min }
                        max={ max }
                        value={ value }
                        onInput={ this.handleInput }
                        onChange={ this.handleChange } />
                </span>
            </label>
        );
    }

    handleInput = (event) => {
        const { onInput } = this.props;
        onInput(parseInt(event.target.value, 10));
    }

    handleChange = (event) => {
        const { onChange } = this.props;
        onChange(parseInt(event.target.value, 10));
    }
}
