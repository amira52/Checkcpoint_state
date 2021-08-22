import React, { Component } from 'react';
import './Counter.css';
class  Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {  
          count:0,
          texte:""
        };
    }
    increment= () => {
        this.setState({count: this.state.count + 1});
    };
    decrement=() => {
        if(this.state.count>0){
        this.setState({count: this.state.count - 1});
    }};
    handleChange=(e) => {
        this.setState({text:e.target.value});
    }

    render() { 
        return (
            <div className="Affichage">
                <h1 className="count"> Counter component </h1>
                <button className="bntinc" onClick={this.increment}>+</button>
                <h2 className="compteur">{this.state.count}</h2>
                <button className= "bntdec" onClick={this.decrement}>-</button>
                <br/>
                <input className="input" onChange={this.handleChange}/>
                <h3 className="data">{this.state.text}</h3>
            </div>
        )
    }
}
 
export default Counter ;