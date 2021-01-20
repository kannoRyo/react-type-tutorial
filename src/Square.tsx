import React from 'react'
import './index.css'

type ISquare = "X" | "O" | null;
type SquareProps = {
    value: ISquare;
    onClick: () => void;
}

const  Square = (props: SquareProps) => {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

export default Square