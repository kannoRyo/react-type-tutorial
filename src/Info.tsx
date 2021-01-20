import React from 'react'

const Info = (props: any)=>{
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