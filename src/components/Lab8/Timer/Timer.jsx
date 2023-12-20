import { useEffect, useRef, useState } from "react";
import "./timer.scss"

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);
    const [timeElapsed, setTimeELapsed] = useState(false);

    const [restInterval, setRestinterval] = useState(10);


    const startInterval = () => {
        setIsRunning(true);

        timerRef.current = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);
    }

    useEffect(() => {
        if (seconds > 0 && seconds % restInterval === 0) {
            clearInterval(timerRef.current);
            setIsRunning(false);
            setTimeELapsed(true);
        }
    }, [seconds]);

    const handleStart = () => {
        startInterval();
        setTimeELapsed(false);
    };

    const handleStop = () => {
        clearInterval(timerRef.current);
        setIsRunning(false);
        setTimeELapsed(false);
    };

    const handleReset = () => {
        setSeconds(0);
        setIsRunning(false);
        setTimeELapsed(false);
        clearInterval(timerRef.current);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);

        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    return (
        <div className="glass-card timer-container">
            <div className="display" data-stopped={!isRunning}>{formatTime(seconds)}</div>
            <div className="buttons">
                <button className={"btn btn-secondary"} onClick={handleStart} disabled={isRunning}>
                    {seconds === 0 ? "Старт" : "Продолжить"}
                </button>
                <button className={"btn btn-secondary"} onClick={handleStop} disabled={!isRunning}>
                    Стоп
                </button>
                <button className={"btn btn-secondary"} onClick={handleReset}>Сброс</button>
            </div>
            <div className={`notification ${timeElapsed ? "active" : ''}`}>Прошло {restInterval} секунд, отдохните 💤</div>
        </div>
    );
}

export default Timer;