import React, { useState } from 'react';

const Hangman = () => {
    const wordBank = ['HANGMAN', 'REACT', 'JAVASCRIPT', 'DEVELOPER', 'COMPUTER', 'KEYBOARD', 'INTERNET', 'PROGRAMMING', 'CODING', 'ALGORITHM'];
    const [word, setWord] = useState(wordBank[Math.floor(Math.random() * wordBank.length)]);
    const [guessedLetters, setGuessedLetters] = useState(new Set());
    const [wrongGuesses, setWrongGuesses] = useState(0);

    const handleGuess = (letter) => {
        if (!guessedLetters.has(letter)) {
            const newGuessedLetters = new Set(guessedLetters);
            newGuessedLetters.add(letter);
            setGuessedLetters(newGuessedLetters);
            if (!word.includes(letter)) {
                setWrongGuesses(wrongGuesses + 1);
            }
        }
    };

    const maskedWord = word.replace(/\w/g, (letter) => (guessedLetters.has(letter) ? letter : '_'));

    const isGameWon = [...word].every((letter) => guessedLetters.has(letter));
    const isGameLost = wrongGuesses >= 6;

    return (
        <div className="container mx-auto mt-8 text-center">
            <h1 className="text-xl font-bold mb-4">Hangman</h1>
            <div className="mb-4 h-9">
                {Array.from({ length: wrongGuesses }, (_, i) => (
                    <span>💀</span>
                ))}
            </div>
            <div className="mb-4">
                {maskedWord.split('').map((letter, index) => (
                    <span key={index} className="mr-2">{letter}</span>
                ))}
            </div>
            <div className="mb-4">
                {Array.from({ length: 26 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i)).map((letter) => (
                    <button
                        key={letter}
                        className={`mx-1 px-2 py-1 ${guessedLetters.has(letter) ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded`}
                        onClick={() => handleGuess(letter)}
                        disabled={guessedLetters.has(letter) || isGameWon || isGameLost}
                    >
                        {letter}
                    </button>
                ))}
            </div>
            {isGameWon && <p className="text-xl text-green-600 font-bold">You win!</p>}
            {isGameLost && <p className="text-xl text-red-600 font-bold">You lose! The word was "{word}".</p>}
            <button
                className="btn"
                onClick={() => {
                    setWord(wordBank[Math.floor(Math.random() * wordBank.length)]);
                    setGuessedLetters(new Set());
                    setWrongGuesses(0);
                }}
            >
                Reset
            </button>
        </div>
    );
};

export default Hangman;
