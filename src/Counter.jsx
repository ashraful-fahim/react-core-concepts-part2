import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(5);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const counterStyle = {
        border: '2px solid yellow',
        margin: '30px',
        paddingRight: '100px',
        paddingLeft: '100px',
    }
    return (
        <div style={counterStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}