// css
import "./App.css";

// react
import { useCallback, useEffect, useState } from "react";

// data
import { wordsList } from "./data/words";

//Components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

// the components will show on the start screen according to the current game stage. Example: The StartScreen component will only show when the current gameStage state is set to the stages.name === 'start'
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  // pickind word and category
  const pickWordAndCategory = useCallback(() => {
    // pick a random category
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  }, [words]);

  // Starting the game
  const startGame = useCallback(() => {
    // clear all letters
    clearLetterStates();

    // destructuring
    const { word, category } = pickWordAndCategory();

    // create an array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    // fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  // Processing the letter input
  const verifyLetter = (letter) => {
    console.log(letter);
    const normalizedLetter = letter.toLowerCase();

    // check if letter has already been utilized
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    // push guessed letter or remove a chance
    if (letters.includes(normalizedLetter)) {
      // if the word has a letter, add normalizedLetter to the current GuessedLetter state array
      setGuessedLetters((currentGuessedLetters) => [
        ...currentGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      // if not, does the same to the setWrongLetters
      setWrongLetters((currentWrongLetters) => [
        ...currentWrongLetters,
        normalizedLetter,
      ]);
      setGuesses((currentGuesses) => currentGuesses - 1);
    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  /* useEffect tracks changes in the application. In this case we will use it to track when the guesses end up,
   so we can reset all states and render the game over page
   */
  // check if guesses ended
  useEffect(() => {
    if (guesses <= 0) {
      // reset all states
      clearLetterStates();

      // rendering game over page
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // check win condition
  useEffect(() => {
    // comparing user letters with word letters. Necessary to avoid repetition of letters, so we create a new array of letters based on "letters" state using Set to avoid repetition (as in "ovo", for example, the array contains only "o" and "v")
    const uniqueLetters = [...new Set(letters)];

    // win condition
    if (
      guessedLetters.length === uniqueLetters.length &&
      gameStage === stages[1].name
    ) {
      // add score
      setScore((currentScore) => (currentScore += 100));

      // restart the game with new word
      startGame();
    }
  }, [guessedLetters, letters, startGame, gameStage]);

  // Retry the game
  const retry = () => {
    // reset score and guesses
    setScore(0);
    setGuesses(3);

    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {/* Conditionally shows the page accordingly to the gameStage */}
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
