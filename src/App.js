import './App.css';
import Counter from './Components/Counter';
import React from 'react';

class  App extends React.Component {
  state={show:false, date:0};
  handleData =() => {
    this.setState({show: !this.state.show})
};
componentDidMount(){
setInterval(() => {
  this.setState({date:this.state.date + 1})
}, 1000);
}
  render() { 
    return (
     <div className="App">
      <button className="btnshow" onClick={this.handleData}>
        {this.state.show? "Hide" : "Show"}</button>
      {this.state.show? < Counter />:null}
      <h1 className="chrono">{this.state.date}</h1>
    </div>
    );
  }
}

export default App ;