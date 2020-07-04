import React, { Component } from 'react';

class SalaryCalculatorResult extends Component {
    render = () => {
        const { basic, hra, da, tax, salary } = this.props;
        const poorSalary = (<td className="poorSalary">{salary}</td>),
            goodSalary = (<td className="goodSalary">{salary}</td>)
        return (
            <div className="field">
                <table>
                    <tbody>
                        <tr>
                            <td>{basic}</td>
                            <td>{hra}</td>
                            <td>{da}</td>
                            <td>{tax}</td>
                            {salary === 0 ? null : (salary < 10000 ? poorSalary : goodSalary)}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SalaryCalculatorResult;