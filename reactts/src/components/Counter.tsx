import { useState } from "react"

function Counter() {
    const [count, setCount] = useState<number>(0)
    return (
        <>
            <p>Cups orderd: {count}</p>
            <button
                onClick={() => setCount((c) => c + 1)}
            >order one more</button>
        </>
    )
}

export default Counter

