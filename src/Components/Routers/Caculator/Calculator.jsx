import React, { Component } from 'react'
import './Calculator.css';
export class Calculator extends Component {
  render() {
    return(
      <div class="container">
      <h1>CALCULATOR</h1>
      <div class="calcul">
        <input type="text" placeholder="0" id="get_in" />
        <button onclick="cl()">CL</button>
        <button onclick="del()">DEL</button>
        <button onclick="display('1')">1</button>
        <button onclick="display('2')">2</button>
        <button onclick="display('3')">3</button>
        <button onclick="display('4')">4</button>
        <button onclick="display('5')">5</button>
        <button onclick="display('6')">6</button>
        <button onclick="display('7')">7</button>
        <button onclick="display('8')">8</button>
        <button onclick="display('9')">9</button>
        <button onclick="display('0')">0</button>
        <button onclick="display('*')">*</button>
        <button onclick="display('/')">/</button>
        <button onclick="display('+')">+</button>
        <button onclick="display('-')">-</button>
        <button onclick="calcul()" class="equal">=</button>
      </div>
    </div>
    )
  }
}
export default Calculator
