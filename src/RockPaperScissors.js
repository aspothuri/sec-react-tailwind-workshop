import React, { useState } from 'react';

const options = [
    { name: "Rock", emoji: "🪨" },
    { name: "Paper", emoji: "📄" },
    { name: "Scissors", emoji: "✂️" }
];

const RockPaperScissors = () => {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [gameDone, setGameDone] = useState(false);
    const [result, setResult] = useState(null);

    const handlePlayerChoice = (option) => {
        setPlayerChoice(option);
        const computerChoice = options[Math.floor(Math.random() * options.length)];
        setComputerChoice(computerChoice.name);
        if (option === computerChoice.name) {
            setResult(
                <p className="text-xl font-bold">It's a tie!</p>
            );
        } else if (
            (option === "Rock" && computerChoice.name === "Scissors") ||
            (option === "Paper" && computerChoice.name === "Rock") ||
            (option === "Scissors" && computerChoice.name === "Paper")
        ) {
            setResult(
                <p className="text-xl text-green-600 font-bold">You win!</p>
            );
        } else {
            setResult(
                <p className="text-xl text-red-600 font-bold">Computer wins!</p>
            );
        }
        setGameDone(true);
    };

    return (
        <div className="container mx-auto mt-8 text-center">
            <h1 className="text-xl font-bold">Rock Paper Scissors</h1>
            <div className="flex justify-center">
                {options.map((option) => (
                    <button
                        key={option.name}
                        className="btn"
                        onClick={() => handlePlayerChoice(option.name)}>
                        {`${option.emoji} ${option.name}`}
                    </button>
                ))}
            </div>
            {gameDone &&
                <div>
                    <p className="text-xl mb-2">You chose: {options.find(option => option.name === playerChoice).emoji} {playerChoice}</p>
                    <p className="text-xl mb-2">Computer chose: {options.find(option => option.name === computerChoice).emoji} {computerChoice}</p>
                    {result}
                    <button
                        className="btn"
                        onClick={() => {
                            setPlayerChoice(null);
                            setComputerChoice(null);
                            setResult(null);
                            setGameDone(false);
                        }
                        }>
                        Reset
                    </button>
                </div >
            }
        </div >
    );
}

export default RockPaperScissors;