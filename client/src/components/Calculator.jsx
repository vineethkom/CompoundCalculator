import React, { useState } from 'react';
import './Calculator.css';


const Calculator = () => {
    const [principal, setPrincipal] = useState('');
    const [rate, setRate] = useState('');
    const [time, setTime] = useState('');
    const [amount, setAmount] = useState('');

    const calculate = () => {
        // Assuming the formula A = P(1 + r/n)^(nt)
        // For simplicity, assuming n (number of times interest applied per time period) = 1
        if (principal && rate && time && !amount) {
            const calculatedAmount = principal * Math.pow((1 + rate / 100), time);
            setAmount(calculatedAmount.toFixed(2));
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <div class="calcContainer">
            <h1 class="heading">Compound Interest Calculator</h1>
            <label class="inputLabel">Principle</label>
            <input 
                type="number" 
                class="InputField"
                value={principal} 
                onChange={(e) => setPrincipal(e.target.value)} 
            />
            <br />

            <label class="inputLabel">Interest Rate (%)</label>
            <input 
                type="number" 
                class="InputField"
                value={rate} 
                onChange={(e) => setRate(e.target.value)} 
            />
            <br />

            <label class="inputLabel">Time Period (Years)</label>
            <input 
                type="number" 
                class="InputField"
                value={time} 
                onChange={(e) => setTime(e.target.value)} 
            />
            <br />

         
            <br />

            <button class="styledButton" onClick={calculate}>Calculate Amount</button>

            {amount > 0 && (
                <h3 class="resultText">
                    The total amount after {time} years at the given rate is {amount}.
                </h3>
            )}
        </div>
    );
};

export default Calculator;
