import React, { Component } from 'react';

class SalaryCalculatorInput extends Component {
    render = () => {
        const { labelText, onValueChange, type = 'number', ...attrs } = this.props;
        return (
            <div className="field">
                <label htmlFor="">{labelText}</label>
                <input
                    type={type}
                    onChange={evt => onValueChange(evt.target.valueAsNumber)}
                    {...attrs}
                />
            </div>
        )
    }
}
export default SalaryCalculatorInput;