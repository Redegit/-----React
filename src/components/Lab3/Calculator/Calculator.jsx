import { useEffect, useState } from "react";
import './Calc.scss'

export const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('0')
    const [calcString, setCalcString] = useState('')


    const handleButtonClick = (value) => {
        if (typeof value === 'number' || value === '.') {
            if (displayValue === '0') {
                setDisplayValue(String(value));
            } else {
                setDisplayValue(displayValue + String(value));
            }
        } else if (value === 'C') {
            setDisplayValue('0');
        } else if (value === '=') {
            const new_val = eval(calcString + displayValue)
            setDisplayValue(String(new_val))
        } else {
            setCalcString(displayValue + String(value))
            setDisplayValue('0')
        }
    }

    const buttons = ['C', '*', '%', '/', 1, 2, 3, '-', 4, 5, 6, '+', 7, 8, 9, '=', '.', 0]

    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="calculator">
                <div className="display">
                    {displayValue}
                </div>
                <div className="d-grid buttons">
                    {!buttons.empty && buttons.map((button, index) => {
                        return (
                            <button key={index} onClick={() => handleButtonClick(button)} className="button btn">{button}</button>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
