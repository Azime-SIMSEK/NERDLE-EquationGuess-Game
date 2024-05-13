import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroupComp from "./ButtonGroupComp";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class ButtonList extends Component{
    constructor(props){
        super(props);
        this.state={
            list1:[0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],   
            list2:[0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],    
            list3:[0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],    
            list4:[0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],    
            list5:[0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],    
            list6:[0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],             
            row:1,
            column:0,
            userInput: "",
            hiddenEquation: "87-47=40",
            buttonColors1: Array(8).fill("secondary"),
            buttonColors2: Array(8).fill("secondary"),
            buttonColors3: Array(8).fill("secondary"),
            buttonColors4: Array(8).fill("secondary"),
            buttonColors5: Array(8).fill("secondary"),
            buttonColors6: Array(8).fill("secondary"),
            guessCount:0,
        }
    }
    handleChange = (event) => {
        this.setState({ userInput: event.target.value }); 
    }

    handleButtonClick = (row, index) => {
        this.setState({ selectedButton: { row, index } });
    }
   
    handleSubmit = () => {
        const { userInput, row, hiddenEquation, guessCount } = this.state;
        const updatedList = userInput.split('');
        const updatedState = {};
        updatedState['list' + row] = updatedList;
        const buttonColors = [];
        let isCorrect = true;
    
        for (let i = 0; i < updatedList.length; i++) {
            if (updatedList[i] === hiddenEquation[i]) {
                buttonColors.push("success");
            } else if (hiddenEquation.includes(updatedList[i])) {
                buttonColors.push("warning");
                isCorrect = false;
            } else {
                buttonColors.push("danger");
                isCorrect = false;
            }
        }
    
        if (isCorrect) {
            updatedState['buttonColors' + row] = Array(updatedList.length).fill("success");
    
            updatedState['showRows'] = false;
    
            this.setState(updatedState, () => {
                alert("Congratulations! You found the correct guess.");
            });
            return;
        }
        
        // Increments the guess count
        const updatedGuessCount = guessCount + 1;
    
        // Checks if the maximum number of guesses has been reached
        if (updatedGuessCount === 6) {
            const gameOverColors = [];
            for (let i = 0; i < updatedList.length; i++) {
                if (hiddenEquation[i] === updatedList[i]) {
                    gameOverColors.push("success");
                } else if (hiddenEquation.includes(updatedList[i])) {
                    gameOverColors.push("warning");
                } else {
                    gameOverColors.push("danger");
                }
            }
    
            updatedState['buttonColors' + row] = gameOverColors;
    
            alert("Game over, you lost. The correct answer was: " + hiddenEquation);   
            updatedState['showRows'] = false;
            this.setState(updatedState);
            return;
        }
    
        // Updates the next row
        const nextRow = row % 6 + 1;
        updatedState['row'] = nextRow;
    
        updatedState['buttonColors' + row] = buttonColors;
        updatedState['guessCount'] = updatedGuessCount;
        updatedState['showRows'] = true;
        this.setState(updatedState);
    }
    
    render(){
        const { userInput , buttonColors, hiddenEquation } = this.state;
       
        return (
            <div align="center">
                <br></br>
              <Form.Label htmlFor="inputPassword5"  >Enter Your Guess:</Form.Label>
              &nbsp; &nbsp;
              <input
                    type="text"
                    value={userInput}
                    onChange={this.handleChange} 
                />
                 &nbsp; &nbsp;
                 <Button variant="primary" onClick={this.handleSubmit}>Check!</Button>


              <br></br> <br></br>
              <ButtonGroupComp
               num1={this.state.list1[0]} 
               num2={this.state.list1[1]} 
               num3={this.state.list1[2]}
               num4={this.state.list1[3]}
               num5={this.state.list1[4]} 
               num6={this.state.list1[5]}
               num7={this.state.list1[6]}
               num8={this.state.list1[7]}
               buttonColors={this.state.buttonColors1}
                />           
             <ButtonGroupComp
                num1={this.state.list2[0]} 
                num2={this.state.list2[1]} 
                num3={this.state.list2[2]}
                num4={this.state.list2[3]}
                num5={this.state.list2[4]} 
                num6={this.state.list2[5]}
                num7={this.state.list2[6]}
                num8={this.state.list2[7]}
                buttonColors={this.state.buttonColors2}
             />
             <ButtonGroupComp
              num1={this.state.list3[0]} 
              num2={this.state.list3[1]} 
              num3={this.state.list3[2]}
              num4={this.state.list3[3]}
              num5={this.state.list3[4]} 
              num6={this.state.list3[5]}
              num7={this.state.list3[6]}
              num8={this.state.list3[7]}
              buttonColors={this.state.buttonColors3}
           />
            <ButtonGroupComp
              num1={this.state.list4[0]} 
              num2={this.state.list4[1]} 
              num3={this.state.list4[2]}
              num4={this.state.list4[3]}
              num5={this.state.list4[4]} 
              num6={this.state.list4[5]}
              num7={this.state.list4[6]}
              num8={this.state.list4[7]}
              buttonColors={this.state.buttonColors4}
           />
            <ButtonGroupComp
              num1={this.state.list5[0]} 
              num2={this.state.list5[1]} 
              num3={this.state.list5[2]}
              num4={this.state.list5[3]}
              num5={this.state.list5[4]} 
              num6={this.state.list5[5]}
              num7={this.state.list5[6]}
              num8={this.state.list5[7]}
              buttonColors={this.state.buttonColors5}
           />
            <ButtonGroupComp
              num1={this.state.list6[0]} 
              num2={this.state.list6[1]} 
              num3={this.state.list6[2]}
              num4={this.state.list6[3]}
              num5={this.state.list6[4]} 
              num6={this.state.list6[5]}
              num7={this.state.list6[6]}
              num8={this.state.list6[7]}
              buttonColors={this.state.buttonColors6}
           />

            </div>
          );
        
    }

}
export default ButtonList;