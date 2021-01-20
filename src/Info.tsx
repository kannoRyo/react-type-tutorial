import React from 'react'

type InfoProps = {
    winner: "X" | "O" | null
    xIsNext: boolean
    moves: JSX.Element[]
}

const Info = (props :InfoProps)=>{
    let status;
    if (props.winner) {
      status = "Winner: " + props.winner;
    } else {
      status = "Next player: " + (props.xIsNext ? "X" : "O");
    }

	return (
        <>
            <div>{status}</div>
            <ol>{props.moves}</ol>
        </>
)
}

export default Info