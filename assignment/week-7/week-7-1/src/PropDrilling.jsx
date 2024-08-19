import React, { useState } from 'react'

const PropDrilling = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Count count={count} setCount={setCount} />
        </div>
    )
}

const Count = ({ count,setCount }) => {
    return (
        <div>{count}
                    <Buttons count={count} setCount={setCount} />
                    </div>
        
    )
}

const Buttons = ({ count, setCount }) => {
    return (
        <div>
            <button onClick={() => setCount(count - 1)}>decrease</button>
            <button onClick={() => setCount(count + 1)}>increase</button>
        </div>
    )
}

export default PropDrilling
