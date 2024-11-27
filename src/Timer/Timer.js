import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const Timer = () => {
    const navigate  = useNavigate();
    const [timer, setTimer] = useState(300000);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    useEffect(() => {
        let timeId;
        if(isTimerRunning && timer > 0) {
            timeId = setTimeout(() => {
                if(timer > 0) {
                    setTimer((prev) => prev - 1000);
                } else {
                    setIsTimerRunning(false);
                }
            }, 1000);
        }

        return ()=> clearTimeout(timeId);
    }, [isTimerRunning, timer]);

    return  (<>
        <div style={{position:"absolute", margin:"20px", cursor:"pointer"}} onClick={()=> navigate("/")}>
            {"<- back"}
        </div>
        <div style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#e364fa",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <span style={{
                margin: "10px",
                color: "black",
                fontWeight: "bold"
            }}>{Math.floor((timer / 1000) / 60)} m {Math.floor((timer / 1000) % 60)} s</span>
            <div
                style={{width: "200px", height: "10px", backgroundColor: "grey", borderRadius: "8px"}}>
                <div style={{
                    height: "100%",
                    width: `${100 - ((timer / 1000) / 300) * 100}%`,
                    backgroundColor: "black",
                    borderRadius: "8px"
                }}></div>
            </div>
            <button style={{
                margin: "50px",
                padding: "5px 10px",
                backgroundColor: "rgba(4, 0, 5, 0.6)",
                color: "white",
                borderRadius: "8px"
            }} onClick={() => setIsTimerRunning((prev) => !prev)}> {!isTimerRunning ? "Start" : "Pause"}
            </button>

            <button style={{
                margin: "50px",
                padding: "5px 10px",
                backgroundColor: "rgba(4, 0, 5, 0.6)",
                color: "white",
                borderRadius: "8px"
            }} onClick={() => {
                setIsTimerRunning(false);
                setTimer(300000)
            }}> Reset
            </button>

            <button style={{
                margin: "50px",
                padding: "5px 10px",
                backgroundColor: "rgba(4, 0, 5, 0.6)",
                color: "white",
                borderRadius: "8px"
            }} onClick={() => {
                setIsTimerRunning(false);
                setTimer((prev) => {
                    return prev > 0 ? prev + 30000 : 0
                })
            }}> +30
            </button>

            <button style={{
                margin: "50px",
                padding: "5px 10px",
                backgroundColor: "rgba(4, 0, 5, 0.6)",
                color: "white",
                borderRadius: "8px"
            }} onClick={() => {
                setIsTimerRunning(false);
                setTimer((prev) => {
                    return prev > 0 ? prev - 30000 : 0
                })
            }}> -30
            </button>

        </div>
    </>)
}

export default Timer;