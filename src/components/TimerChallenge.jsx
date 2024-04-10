import { useRef, useState } from "react"
import ResultModal from "./ResultModel";

export default function TimerChallenge({ title, targetTime }) {
    const timerRef = useRef();
    const dialogRef = useRef();
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)

    const timerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if(timeRemaining <= 0)
    {
        handleStop();
    }

    function handleResetTime()
    {
        setTimeRemaining(targetTime * 1000);
    }

    function handleStart() {
        timerRef.current = setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 10)
        }, 10)
    }

    function handleStop() {
        clearInterval(timerRef.current)
        dialogRef.current.open()
    }

    return <>
        <ResultModal ref={dialogRef} targetTime={targetTime} timeRemaining={timeRemaining} onReset={handleResetTime}/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">{targetTime} second{targetTime > 1 ? 's' : ''}</p>
            <p>
                <button onClick={timerActive ? handleStop : handleStart}>{timerActive ? "Stop" : "Start"} Challenge</button>
            </p>
            <p className={timerActive ? "active" : undefined}>{timerActive ? "Time is running..." : "Timer inactive"}</p>
        </section>
    </>
}