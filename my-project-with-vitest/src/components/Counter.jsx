import { useState } from 'react'
// estado vai resolver esse problema de mudança

function Counter (){
    const [count, setCount] = useState(0)
    
    function increment() {
        setCount(count+1)
    }

    function decrement() {
        setCount(count-1)
    }

    return(
        <>
            <p>
                Count: 
                <span data-testid="count">{count}</span>
                <button data-testid="add" onClick={increment}>Add</button>
                <button data-testid="subtract" onClick={decrement}>Subtract</button>
            </p>
        </>
    )
}

export default Counter