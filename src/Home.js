
import React, { useState } from 'react'
import { TakeNum } from "./TakeNum"


export const Home = ({ user }) => {

    // let num = 0

    // const [num, setNum] = useState(0)
    
    // const takeNumber = () => {
        //     // num ++
        //     setNum(num + 1)
        //     console.log(num)
        //     return num
        // }
        
        const bakers = ["Anita", "Ginger", "Dusty", "Josephine"]

    return (
        <>
            <h1>Welcome to Bay and Marble Doughnut Shoppe, {user.name}!</h1>
            <p>We have lovely doughnuts made by any awesome team of bakers!</p>
            <h2>Our Bakers:</h2>
            <ul>
                {bakers.map((baker, i) => <li key={i}>{baker}</li>)}
            </ul>
            <TakeNum />
        </>
    )
}