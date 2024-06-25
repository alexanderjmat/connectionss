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

 const submitGuess = (currentGuess) => {
  const normalizedGuess = currentGuess.sort().toString();

  // Check each category in the solution to see if the guess matches
  let categorySolved = null;
  for (const category in solution) {
    if (normalizedGuess === solution[category].sort().toString()) {
      categorySolved = category;
      break;
    }
  }

  if (categorySolved) {
    // Update the state to reflect the solved category
    setCategoriesSolved(categoriesSolved + 1);
    setGuess([]); // Clear current guess after successful attempt

    // Check if all categories are solved
    if (categoriesSolved + 1 === Object.keys(solution).length) {
      setIsWon(true); // Set the game as won
    }

    return true; // Guess was correct
  } else {
    // Reduce the number of attempts left
    setAttempts(attempts - 1);

    // Check if the game is over
    if (attempts - 1 === 0) {
      setIsWon(false); // Optionally handle game over scenario
    }

    setGuess([]); // Optionally clear guess after unsuccessful attempt
    return false; // Guess was incorrect
  }
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

  

  const clearGuesses = () => {
    setGuess([]);
    return;
  }







  return (
    <div className="App">


    </div>
  );
}

export default App;
