import React from 'react'
import Square from './Square'

type ISquare = "X" | "O" | null;
type BoardProps = {
    squares: ISquare[];
    onClick: (i: number) => void;
}

const rows:[0,1,2] = [0,1,2]
const cols:[0,1,2] = [0,1,2]

const Board = (props: BoardProps) =>{
    return(
        <>
            {
                rows.map((_, row)=>{
                    return(
                        <div className="board-row">
                            {
                                cols.map((__, col)=>{
                                    const order = (row*3) + col
                                    return(
                                        <Square value={props.squares[order]} onClick={() => props.onClick(order)} key={order.toString()} />
                               )})
                            }
                        </div>
                    )
                })
            }
        </>
    )
}

export default Board