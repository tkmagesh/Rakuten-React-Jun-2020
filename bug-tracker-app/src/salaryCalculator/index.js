import React, { Component } from 'react';
import './index.css';
import SalaryCalculatorInput from './SalaryCalculatorInput';
import SalaryCalculatorResult from './SalaryCalculatorResult';

class SalaryCalculator extends Component {
    state = {
        basic: 0,
        hra: 0,
        da: 0,
        tax: 0,
        salary: 0
    };

    onCalculateClick = () => {
        const { basic, hra, da, tax } = this.state,
            gross = basic + hra + da,
            net = gross * ((100 - tax) / 100);
        this.setState({ salary: net });
    }

    render = () => {
        const { basic, hra, da, tax, salary } = this.state;
        return (
            <>
                <h3>Salary Calculator</h3>
                <hr/>
                <section>
                    <SalaryCalculatorInput labelText="Basic :" onValueChange={value => this.setState({ basic: value || 0 })} />
                    <SalaryCalculatorInput labelText="HRA :" onValueChange={value => this.setState({ hra: value })} />
                    <SalaryCalculatorInput labelText="DA :" onValueChange={value => this.setState({ da: value })} />
                    <SalaryCalculatorInput
                        labelText="Tax :"
                        type="range"
                        onValueChange={value => this.setState({ tax: value })}
                        min="0"
                        max="30"
                        value={tax}
                    />
                    <div className="field">
                        <input type="button" value="Calculate" onClick={this.onCalculateClick} />
                    </div>
                    {/* <SalaryCalculatorResult basic={basic} hra={hra} da={da} tax={tax} salary={salary}/> */}
                    <SalaryCalculatorResult {...{ basic, hra, da, tax, salary }} />
                </section>
            </>
        )
    }
}

export default SalaryCalculator;