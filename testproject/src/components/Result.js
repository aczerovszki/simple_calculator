import React, { Component } from 'react'
import './Result.css';

export class Result extends Component {

  
    expo = (num, max)=> {
        if(num.length > 10){
          return Number.parseFloat(num).toExponential(max);
          }
          else{
            return num;
          }
      }

    render() {
        return (
            <div className="result">
                <p>{this.expo(this.props.value, '5')}</p>
            </div>
        )
    }
}

export default Result
