import React, { Component } from 'react';
import rock from './rock.jpeg';
import paper from './paper.jpeg';
import scissors from './scissors.png';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerScore: 0,
            computerScore:0,
            message:''
        };
        //this._calculateWinner = this._calculateWinner.bind(this);
    }

    _computersChoice(){
        let computerChoice = Math.random(); //random function. generates a number between 0 and 1
        if (computerChoice <= .33) { computerChoice = "rock"; }
        else if (computerChoice <= .66) { computerChoice = "paper"; }
        else { computerChoice = "scissors"; }
        return computerChoice;
    }
    _compare(playerChoice,computerChoice) {
        if (playerChoice === computerChoice) {
            this._message('this is a tie');
            return 'this is a tie';
        }
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                // rock wins
                this.setState({playerScore:this.state.playerScore+1});
            } else {
                // paper wins
                this.setState({computerScore:this.state.computerScore+1})
            }
        }
        if (playerChoice === "paper") {
            if (computerChoice === "rock") {
                // paper wins
                this.setState({playerScore:this.state.playerScore+1});
            } else {
                // scissors wins
                this.setState({computerScore:this.state.computerScore+1})
            }
        }
        if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                // rock wins
                this.setState({computerScore:this.state.computerScore+1})
            } else {
                // scissors wins
                this.setState({playerScore:this.state.playerScore+1});
            }
        }
    };
    _determineWinner(){
        if(this.state.computerScore ===3){
            alert("you lost");
            this.setState({ playerScore: 0, computerScore:0,});
        } else if(this.state.playerScore===3){
            alert("you won");
            this.setState({ playerScore: 0, computerScore:0,});
        }
    }

    _calculateWinner(element){
        this._message('');
        let playersChoice = element;
        let computersChoice = this._computersChoice();
        console.log(playersChoice);
        console.log(computersChoice);
        this._compare(playersChoice, computersChoice);
        this._determineWinner();
    }
    _message(message) {
        this.setState({message: message})
    }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={rock} onClick={()=>this._calculateWinner("rock")} className="App-logo" alt="rock" />
          <img src={paper} onClick={()=>this._calculateWinner("paper")} className="App-logo" alt="paper" />
          <img src={scissors} onClick={()=>this._calculateWinner("scissors")} className="App-logo" alt="scissors" />
          <h1 className="App-title">Rock Paper Scissors</h1>
        </header>
          <div>Player Score: {this.state.playerScore}</div>
          <div>Computer Score: {this.state.computerScore}</div>
          <button onClick={()=>{this.setState({ playerScore: 0, computerScore:0, message:''})}}>reset the game</button>
          <div>{this.state.message}</div>
      </div>
    );
  }
}

export default App;
