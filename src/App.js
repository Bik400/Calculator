import React from 'react';
import './App.css';

class App extends React.Component {
    
    state = {
        input: '0',
        prevNumber: '',
        operator: ''
    };
    
    clearInput = (val) => {
        if (this.state.input !== ''){
            this.setState({
                input: '0',
                prevNumber: '',
                display: ''
            });
        }
    };

    handleClick = (val) => {
        if (this.state.input === '0' || this.state.input === '+' || this.state.input === '-' || this.state.input === 'x' || this.state.input === '/') {
            this.setState({
                input: val.target.value,
            })
        } else {
            this.setState({
                input: this.state.input + val.target.value,
            })
        }
    }

    equals = () => {
        if (this.state.operator === 'division') {
            this.setState({
                input: parseFloat(this.state.prevNumber) / parseFloat(this.state.input)
            })
        } else if (this.state.operator === 'multiply') {
            this.setState({
                input: parseFloat(this.state.prevNumber) * parseFloat(this.state.input)
            })
        } else if (this.state.operator === 'addition') {
            this.setState({
                input: parseFloat(this.state.prevNumber) + parseFloat(this.state.input)
            })
        } else if (this.state.operator === 'subtraction') {
            this.setState({
                input: parseFloat(this.state.prevNumber) - parseFloat(this.state.input)
            })
        }
    }

    decimal = (val) => {
        if (this.state.input.indexOf('.') === -1){
            this.setState({
                input: this.state.input + val.target.value
            })
        }
    }

    division = (val) => {
        this.setState({
            input: val.target.value,
            prevNumber: this.state.input,
            operator: 'division'
        })
    }

    multiply = (val) => {
        this.setState({
            input: val.target.value,
            prevNumber: this.state.input,
            operator: 'multiply'
        })
    }

    addition = (val) => {
        this.setState({
            input: val.target.value,
            prevNumber: this.state.input,
            operator: 'addition'
        })
    }

    subtraction = (val) => {
        this.setState({
            input: val.target.value,
            prevNumber: this.state.input,
            operator: 'subtraction'
        })
    }

    render(){
        return(
            <div id='calculator'>
            
                <div className='row'>
                    <div id='input-display'>
                        <h3 id='input'>{this.state.input}</h3>
                    </div>
                </div>
                
                

                <div className='row'>
                    <button id='clear' onClick={this.clearInput}>Clear</button>
                    <button id='divide' value='/' onClick={this.division}>/</button>
                </div>

                <div className='row'>
                    <button id='seven' value='7' onClick={this.handleClick}>7</button>
                    <button id='eight' value='8' onClick={this.handleClick}>8</button>
                    <button id='nine' value='9' onClick={this.handleClick}>9</button>
                    <button id='multiply' value='x' onClick={this.multiply}>x</button>
                </div>

                <div className='row'>
                    <button id='four' value='4' onClick={this.handleClick}>4</button>
                    <button id='five' value='5' onClick={this.handleClick}>5</button>
                    <button id='six' value='6' onClick={this.handleClick}>6</button>
                    <button id='addition' value='+' onClick={this.addition}>+</button>
                </div>

                <div className='row'>
                    <button id='one' value='1' onClick={this.handleClick}>1</button>
                    <button id='two' value='2' onClick={this.handleClick}>2</button>
                    <button id='three' value='3' onClick={this.handleClick}>3</button>
                    <button id='subtraction' value='-' onClick={this.subtraction}>-</button>
                </div>

                <div className='row'>
                    <button id='zero' value='0' onClick={this.handleClick}>0</button>
                    <button id='decimal' value='.' onClick={this.decimal}>.</button>
                    <button id='equal' value='=' onClick={this.equals}>=</button>
                </div>
            </div>
        )
    }
}

export default App