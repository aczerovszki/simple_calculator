import './App.css';
import React, { Component } from 'react';
import Result from './components/Result.js';
import Buttons from './components/Buttons.js';
import calculate from "./logic/calculate";
import bgVideo from './media/video.mp4';


export class App extends Component {
  constructor(){
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  callAPI_post(){
      let requestOptions = {
        method: 'POST',
        'Content-Type': 'application/json',
        body: this.state.next,
    };
    fetch('http://localhost:5000/post', requestOptions)
        .then(response => response.text())
        .then(data => console.log(data));
  }
  
  callAPI_get(){
      fetch('http://localhost:5000/get')
      .then(response => response.text())
      .then(data => this.setState({next: data}));
  };

handleClick = buttonName => {
  this.setState(
    calculate(this.state, buttonName)
  )
  if(buttonName === "MS") this.callAPI_post();
  if(buttonName === "MR") this.callAPI_get();
};


  render() {
    return (
      <div>
        <video id="video" autoPlay loop muted>
          <source src={bgVideo} type='video/mp4'/>
        </video>
        <div className="wrapper">  
          <div className="calculator">
            <Result value={this.state.next || this.state.total || "0"}/>
            <Buttons clickHandler={this.handleClick}/>
          </div>
        </div>
        
      </div>
    )
  }
}

export default App
