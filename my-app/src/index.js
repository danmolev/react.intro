import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            value: null,
        };

    }

    render() {
      return (
        <button className="square" onClick={() => this.props.onClick()}>
          {this.props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            turn: "X",
            squares: Array(9).fill(null),
            win: null,
        };
    }


    isOver(symbol, squares){

        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];

        
        
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            

            if (squares[a] === symbol &&
                squares[b] === symbol && 
                squares[c] === symbol){
                return true;
            }

        }
    }



    handleClick(i) {
        const squares = this.state.squares.slice();

        if (squares[i] === null && this.state.win === null){
            squares[i] = this.state.turn;

            this.setState({squares: squares});
            
            if (this.state.turn === "X"){
                this.setState({turn: "O"});
            }else{
                this.setState({turn: "X"});
            }

            if(this.isOver("X", squares)){
                this.setState({win: "X Wins"})
            }
    
            if(this.isOver("O",squares )){
                this.setState({win: "O Wins"})
            }


            //alert(this.isOver("X", squares))
            

        }




      }


    renderSquare(i) {
      return (
        <Square value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
            />
      );
    }
  
    render() {
     
      const status = 'Current Move: ' + this.state.turn;
      const win =  this.state.win;  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>

          <div className="result">{win}</div>
        </div>

        
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  