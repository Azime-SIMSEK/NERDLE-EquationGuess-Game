import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Button} from 'react-bootstrap';

class ButtonGroupComp extends Component{
  
    render() {
        const { num1, num2, num3, num4, num5, num6, num7, num8,buttonColors,onButtonClick} = this.props;
      
        return (
            <div>
        
                <Button variant={buttonColors[0]} size="lg" style={{ padding: '15px 20px', margin: '2px 2px' }} >{num1}</Button>
                <Button variant={buttonColors[1]} size="lg" style={{ padding: '15px 20px', margin: '2px 2px' }} >{num2}</Button>
                <Button variant={buttonColors[2]} size="lg" style={{ padding: '15px 20px', margin: '2px 2px' }} >{num3}</Button>
                <Button variant={buttonColors[3]} size="lg" style={{ padding: '15px 20px', margin: '2px 2px' }} >{num4}</Button>
                <Button variant={buttonColors[4]} size="lg" style={{ padding: '15px 20px', margin: '2px 2px' }} >{num5}</Button>
                <Button variant={buttonColors[5]} size="lg" style={{ padding: '15px 20px', margin: '2px 2px' }} >{num6}</Button>
                <Button variant={buttonColors[6]} size="lg" style={{ padding: '15px 20px', margin: '2px 2px' }} >{num7}</Button>
                <Button variant={buttonColors[7]} size="lg" style={{ padding: '15px 20px', margin: '2px 2px' }} >{num8}</Button>
     
            </div>

        );


    }
}


export default ButtonGroupComp;