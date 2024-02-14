import React, { useState } from 'react';

const Hangman = () => {
    const wordBank = ['HANGMAN', 'REACT', 'JAVASCRIPT', 'DEVELOPER', 'COMPUTER', 'KEYBOARD', 'INTERNET', 'PROGRAMMING', 'CODING', 'ALGORITHM'];
    const [word, setWord] = useState(wordBank[Math.floor(Math.random() * wordBank.length)]);
    const [guessedLetters, setGuessedLetters] = useState([]);
    const maskedWord = word.replace(/\w/g, (letter) => (guessedLetters.includes(letter) ? letter : '_'));
    const [wrongGuesses, setWrongGuesses] = useState(0);

    const handleGuess = (letter) => {
        if (!guessedLetters.includes(letter)) {
            setGuessedLetters(guessedLetters.concat([letter]));
            if (!word.includes(letter)) {
                setWrongGuesses(wrongGuesses + 1);
            }
        }
    };

    const isGameWon = [...word].every((letter) => guessedLetters.includes(letter));
    const isGameLost = wrongGuesses >= 6;

    return (
        <div className="container mx-auto mt-8 text-center">
            <h1 className="text-xl font-bold">Hangman</h1>
            <div className="my-4 h-9 text-3xl">
                {'💀'.repeat(wrongGuesses)}
            </div>
            <div>
                {maskedWord.split('').map((letter, index) => (
                    <span key={index} className="mx-2 text-xl">{letter}</span>
                ))}
            </div>
            <div className="my-4">
                {Array.from({ length: 26 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i)).map((letter) => (
                    <button
                        key={letter}
                        className={`mx-1 px-2 py-1 ${guessedLetters.includes(letter) ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded`}
                        onClick={() => handleGuess(letter)}
                        disabled={guessedLetters.includes(letter) || isGameWon || isGameLost}
                    >
                        {letter}
                    </button>
                ))}
            </div>
            {isGameWon &&
                <p className="text-xl text-green-600 font-bold">
                    You win!
                </p>
            }
            {isGameLost &&
                <p className="text-xl text-red-600 font-bold">
                    You lose! The word was "{word}".
                </p>
            }
            <button
                className="btn"
                onClick={() => {
                    setWord(wordBank[Math.floor(Math.random() * wordBank.length)]);
                    setGuessedLetters([]);
                    setWrongGuesses(0);
                }}
            >
                Reset
            </button>
        </div>
    );
};

export default Hangman;
