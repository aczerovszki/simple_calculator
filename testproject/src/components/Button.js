import React, { Component } from 'react'
import './Button.css';

export class Button extends Component {
    handleClick = () => {
        this.props.clickHandler(this.props.name);
      };
    
    render() {
        return (
            <div className="button">
                <button onClick={this.handleClick}>{this.props.name}</button>
            </div>
        )
    }
}

export default Button
