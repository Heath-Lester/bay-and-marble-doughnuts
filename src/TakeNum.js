
import React, { useState } from 'react'


export const TakeNum = () => {

    const [num, setNum] = useState(0)

    const takeNumber = () => {

        setNum(num + 1)
        console.log(num)
    }
    
    return (
        <>
            <h2>Take a ticket</h2>
            <button onClick={takeNumber}>Get Number</button>
            <h2>Current Number: {num}</h2>
        </>
    )
}