import React, { Component } from 'react'
import Button from "./Button";
import './Button.css';


export class Buttons extends Component {
 
    handleClick = buttonName =>{
        this.props.clickHandler(buttonName);
    }


    render() {
        return (
            <div className="buttons">
                <div>
                <Button name="MS" clickHandler={this.handleClick}/>
                <Button name="MR" clickHandler={this.handleClick}/>
                <Button name="C" clickHandler={this.handleClick}/>
                <Button name="÷" clickHandler={this.handleClick}/>
                </div>
                <div> 
                <Button name="7" clickHandler={this.handleClick}/>
                <Button name="8" clickHandler={this.handleClick}/>
                <Button name="9" clickHandler={this.handleClick}/>
                <Button name="x" clickHandler={this.handleClick}/>
                </div>
                <div>
                <Button name="4" clickHandler={this.handleClick}/>
                <Button name="5" clickHandler={this.handleClick}/>
                <Button name="6" clickHandler={this.handleClick}/>
                <Button name="-" clickHandler={this.handleClick}/>
                </div>
                <div>
                <Button name="1" clickHandler={this.handleClick}/>
                <Button name="2" clickHandler={this.handleClick}/>
                <Button name="3" clickHandler={this.handleClick}/>
                <Button name="+" clickHandler={this.handleClick}/>
                </div>
                <div>   
                <Button name="+/-" clickHandler={this.handleClick}/>
                <Button name="0" clickHandler={this.handleClick}/>
                <Button name="." clickHandler={this.handleClick}/>
                <Button name="=" clickHandler={this.handleClick}/>
                </div>
                
            </div>
        )
    }
}

export default Buttons
