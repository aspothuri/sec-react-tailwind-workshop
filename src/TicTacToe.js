import React, { useState } from 'react';

const TicTacToe = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (i) => {
        const squaresCopy = [...squares];
        if (calculateWinner(squaresCopy) || squaresCopy[i]) {
            return;
        }
        squaresCopy[i] = xIsNext ? '❌' : '⭕️';
        setSquares(squaresCopy);
        setXIsNext(!xIsNext);
    };

    const calculateWinner = (squares) => {
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
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        return null;
    };

    const winner = calculateWinner(squares);

    return (
        <div className="container flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold">Tic Tac Toe</h1>
            <div className="grid grid-cols-3 gap-1 my-4">
                {squares.map((_, i) => (
                    <button className="size-16 rounded-xl shadow hover:ring ring-teal-400/30 border-2 border-teal-700 text-3xl"
                        onClick={() => handleClick(i)}>
                        {squares[i]}
                    </button>
                ))}
            </div>

            {winner ? (
                <p className="mt-4 text-xl text-green-600 font-bold">
                    {winner} wins!
                </p>
            ) : (
                <p className="mt-4 text-xl">
                    {`Next player: ${xIsNext ? '❌' : '⭕️'}`}
                </p>
            )}

            <button
                className="btn"
                onClick={() => setSquares(Array(9).fill(null))}>
                Reset
            </button>
        </div>
    );
}

export default TicTacToe;