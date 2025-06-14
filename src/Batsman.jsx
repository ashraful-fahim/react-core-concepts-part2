import { useState } from "react"

export default function Batsman() {

    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const [fours, setFours] = useState(0);
    const [singles, setSingles] = useState(0);

    const handleSingle = () => {
        const newRun = runs + 1;
        setRuns(newRun);
        const newSingles = singles + 1;
        setSingles(newSingles);
    }

    const handleSix = () => {
        const newRun = runs + 6;
        setRuns(newRun);
        const newSixes = sixes + 1;
        setSixes(newSixes);
    }

    const handleFours = () => {
        const newRun = runs + 4;
        setRuns(newRun);
        const newFours = fours + 1;
        setFours(newFours);
    }

    const style = {
        border: '2px solid green'
    }

    return (
        <div style={style}>
            <h2>Player: Mokhles</h2>
            {
                runs >= 50 && <p>Congrats! You just hit half-century.</p>
            }
            {
                runs >= 100 && <p>Cograts! You hit a century!</p>
            }
            <h3>Runs: {runs}</h3>
            <p>Sixes: {sixes}</p>
            <p>Fours: {fours}</p>
            <p>Singles: {singles}</p>
            <br />
            <button onClick={handleSix}>Sixes</button>
            <button onClick={handleFours}>Fours</button>
            <button onClick={handleSingle}>Singles</button>
        </div>
    )
}