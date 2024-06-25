import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';

/*
header:
AJ's Connections
Date

*/

function App() {
  const solution = {
    'EUPHEMISMS FOR DRUGS': ['MEDIUM', 'BLOW', 'GRASS', 'SMACK', 'CRYSTAL'],
    'WORDS THAT POSSES THEIR OWN PROPERTY': ['INSANE', 'REAL', 'POLYSYLLABIC', 'UNHYPHENATED', 'WORD'],
    'SNAKES': ['HARD', 'RAT', 'CORN', 'RATTLE', 'SEA'],
    'CARBONATED BEVERAGES': ['EASY', 'SODA', 'POP', 'SELTZER', 'TONIC']
  }

  const colorKey = {
    'EASY': '🟨',
    'MEDIUM': '🟩',
    'HARD': '🟦',
    'INSANE': '🟪'
  }



  const [guess, setGuess] = useState([]);
  const [attempts, setAttempts] = useState(5);
  const [isEasy, setIsEasy] = useState(false)
  const [categoriesSolved, setCategoriesSolved] = useState(0)
  const [board, setBoard] = useState([
    ['SMACK', 'REAL', 'GRASS', 'UNHYPHENATED'],
    ['RAT', 'SELTZER', 'POP', 'RATTLE'],
    ['SEA', 'CRYSTAL', 'TONIC', 'SODA'],
    ['POLYSYLLABIC', 'WORD', 'BLOW', 'CORN'],
  ])
  const [guessMatrix, setGuessMatrix] = useState([])
  const [isWon, setIsWon] = useState(false);



  const addWordToGuesses = (word) => {
    if (guess.length < 4) {
      setGuess([...guess, word]);
    }

    return;
  }

  const submitGuess = (guess) => {

    if (guess.sort().toString() == solution['EUPHEMISMS FOR DRUGS'].slice(1).sort().toString()) {
      return true
    } else if  (guess.sort().toString() == solution['WORDS THAT POSSES THEIR OWN PROPERTY'].slice(1).sort().toString()) {
      return true
    } else if  (guess.sort().toString() == solution['SNAKES'].slice(1).sort().toString()) {
      return true
    } else if  (guess.sort().toString() == solution['CARBONATED BEVERAGES'].slice(1).sort().toString()) {
      return true
    }
    return;
  }

  const shuffleBoard = (board, n) => {
    // Ensure the starting index 'n' is within the matrix bounds
    if (n < 0 || n >= board.length) {
      return;
    }

    // Flatten the part of the matrix from row 'n' to the end into a single array
    let flatArray = [];
    for (let i = n; i < board.length; i++) {
      flatArray = flatArray.concat(board[i]);
    }

    // Shuffle the flatArray
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // ES6 array destructuring swap
      }
    }
    shuffle(flatArray);

    // Re-distribute the shuffled elements back into their rows
    let flatIndex = 0;
    for (let i = n; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        board[i][j] = flatArray[flatIndex++];
      }
    }

    return board
  }



  const clearGuesses = (board) => {

  }







  return (
    <div className="App">


    </div>
  );
}

export default App;
