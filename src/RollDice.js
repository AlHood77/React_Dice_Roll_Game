import React, { Component } from 'react';
import Die from './Die';
import NickName from './NickName';
import './RollDice.css'

class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    };
    constructor(props) {
        super(props);
        this.state = { 
            die1: 'one',
            die2: 'one',
            isRolling: false,
            
        };
        this.roll = this.roll.bind(this);
    }

    roll() {
        // pick 2 new rolls
        const newDie1 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        const newDie2 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];


        // set state
        this.setState({ die1: newDie1, die2: newDie2, isRolling: true,  })
        
        // wait one second and set isRolling to false
        setTimeout(() => {
            this.setState({ isRolling: false });
        }, 1000);
    }

    // nickname() {
    //     if ((this.state.die1 === 'one') && (this.state.die2 === 'one')) {
    //         return "Snake Eyes"
    //     } else {
    //         return "Sorry"
    //     }
            
    // }


    nickName() {
        switch (true) {
            case (this.state.die1 === 'one' && this.state.die2 === 'one'): return "Snake Eyes!"
            case (this.state.die1 === 'one' && this.state.die2 === 'two'): return "Ace Caught a Deuce!"
            case (this.state.die1 === 'one' && this.state.die2 === 'three'): return "Easy Four!"
            case (this.state.die1 === 'one' && this.state.die2 === 'four'): return "Little Phoebe!"
            case (this.state.die1 === 'one' && this.state.die2 === 'five'): return "Sixie From Dixie!"
            case (this.state.die1 === 'one' && this.state.die2 === 'six'): return "The Devil!"
            case (this.state.die1 === 'two' && this.state.die2 === 'one'): return "Australian Yo!"
            case (this.state.die1 === 'two' && this.state.die2 === 'two'): return "Ballerina!"
            case (this.state.die1 === 'two' && this.state.die2 === 'three'): return "Michael Jordan!"
            case (this.state.die1 === 'two' && this.state.die2 === 'four'): return "Lumber Number!"
            case (this.state.die1 === 'two' && this.state.die2 === 'five'): return "Skinny Dugan!"
            case (this.state.die1 === 'two' && this.state.die2 === 'six'): return "Easy Eight!"
            case (this.state.die1 === 'three' && this.state.die2 === 'one'): return "Little Joe From Kokomos!"
            case (this.state.die1 === 'three' && this.state.die2 === 'two'): return "The Fever!"
            case (this.state.die1 === 'three' && this.state.die2 === 'three'): return "Brooklyn Forest!"
            case (this.state.die1 === 'three' && this.state.die2 === 'four'): return "Skinny McKinney!"
            case (this.state.die1 === 'three' && this.state.die2 === 'five'): return "Easy Eight!"
            case (this.state.die1 === 'three' && this.state.die2 === 'six'): return "Lou Brown!"
            case (this.state.die1 === 'four' && this.state.die2 === 'one'): return "No Field Five!"
            case (this.state.die1 === 'four' && this.state.die2 === 'two'): return "Jimmie Hicks!"
            case (this.state.die1 === 'four' && this.state.die2 === 'three'): return "Big Red!"
            case (this.state.die1 === 'four' && this.state.die2 === 'four'): return "Square Pair!"
            case (this.state.die1 === 'four' && this.state.die2 === 'five'): return "Jesse James!"
            case (this.state.die1 === 'four' && this.state.die2 === 'six'): return "Tennessee!"
            case (this.state.die1 === 'five' && this.state.die2 === 'one'): return "Easy Six!"
            case (this.state.die1 === 'five' && this.state.die2 === 'two'): return "Benny Blue!"
            case (this.state.die1 === 'five' && this.state.die2 === 'three'): return "Eighter from Decatur!"
            case (this.state.die1 === 'five' && this.state.die2 === 'four'): return "Railroad Nine!"
            case (this.state.die1 === 'five' && this.state.die2 === 'five'): return "Puppy Paws!"
            case (this.state.die1 === 'five' && this.state.die2 === 'six'): return "Six Five No Jive!"
            case (this.state.die1 === 'six' && this.state.die2 === 'one'): return "Six One You're Done!"
            case (this.state.die1 === 'six' && this.state.die2 === 'two'): return "Easy Eight!"
            case (this.state.die1 === 'six' && this.state.die2 === 'three'): return "Nina From Passadena!"
            case (this.state.die1 === 'six' && this.state.die2 === 'four'): return "Big One on the End!"
            case (this.state.die1 === 'six' && this.state.die2 === 'five'): return "Yo!"
            case (this.state.die1 === 'six' && this.state.die2 === 'six'): return "Midnight!"
            default: return "No match"
        }
    }
    

    render() {


        return (
            <div className="RollDice">  
                <div className="RollDice-die-container">
                    <Die face={this.state.die1} rolling={this.state.isRolling} />
                    <Die face={this.state.die2} rolling={this.state.isRolling}/>
                </div>    

                <button onClick={this.roll} disabled={this.state.isRolling}>
                    {this.state.isRolling ? 'Rolling...' : 'Roll Dice!'}
                </button>
                <p>{this.nickName()}</p>
            </div>
           
        );
    }
}

export default RollDice;