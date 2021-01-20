import React from 'react'
import Square from './Square'

type BoardTypes = {
    squares: any
    onClick: any
}

const rows:[0,1,2] = [0,1,2]
const cols:[0,1,2] = [0,1,2]

const Board = (props: BoardTypes) =>{
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