import { useState } from "react"
import { Link } from 'react-router-dom'
import App from "./App"
export function Home() {
    const [name, setName] = useState('')
    function handleChange(e) {
        setName(e.target.value)

    }
    return (
        <div>
            <input type="text" onChange={handleChange} /> 
            <div>{name}</div>
            <Link to="/app">
                <button>app</button>
            </Link>

        </div>
    )
} 