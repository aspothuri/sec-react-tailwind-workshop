import React, { useState } from 'react';

const TicTacToe = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (i) => {
        const squaresCopy = [...squares];
        if (calculateWinner(squaresCopy) || squaresCopy[i]) {
            return;
        }
        squaresCopy[i] = xIsNext ? 'X' : 'O';
        setSquares(squaresCopy);
        setXIsNext(!xIsNext);
    }

    const renderSquare = (i) => {
        const icon = squares[i] == "X" ? "❌" : squares[i] == "O" ? "⭕️" : null;
        return (
            <button className="w-16 h-16 border border-black flex items-center justify-center text-3xl"
                onClick={() => handleClick(i)}>
                {icon}
            </button>
        );
    }

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
    }

    const winner = calculateWinner(squares);
    const status = winner ? `${winner} wins!` : `Next player: ${xIsNext ? 'X' : 'O'}`;

    return (
        <div className="container flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold">Tic Tac Toe</h1>
            <div className="grid grid-cols-3 gap-2 my-4">
                {[Array(9).fill(null).map((_, i) => renderSquare(i))]}
            </div>
            <div className={`mt-4 text-xl ${winner ? "text-green-600 font-bold" : ""}`}>{status}</div>
            <button
                className="btn"
                onClick={() => setSquares(Array(9).fill(null))}>
                Reset
            </button>
        </div>
    );
}

export default TicTacToe;