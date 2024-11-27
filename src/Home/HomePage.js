import styles from "./Homepage.module.css"
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
const HomePage =  () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setValue((prevValue) => (prevValue < 100 ? prevValue + 1 : 0));
        }, 100);

        return () => clearInterval(timer);
    }, []);

    return (<>
        <div style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#e364fa",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
        }}>
            <Link to={"/progressBar"} style={{textDecoration: "none", outline:"none", color:"inherit", all:"unset"}}>
            <div className={styles.card}>
                <div style={{width: "200px", height: "10px", backgroundColor: "grey", borderRadius: "8px"}}>
                    <div style={{
                        height: "100%",
                        width: `${value}%`,
                        backgroundColor: "black",
                        borderRadius: "8px"
                    }}></div>
                </div>
                <div>
                    <h2>Progress Bar</h2>
                </div>
            </div>
            </Link>

            <Link to={"/GridBox"} style={{textDecoration: "none", outline:"none", color:"inherit", all:"unset"}}>
                <div className={styles.card}>
                    {[0,1,2].map((e)=> (
                        <span style={{width: "30px", height: "30px", backgroundColor: `${e === 0 ? "black" :"white"}`, borderRadius: "8px"}}>
                        </span>
                    ))}
                    <div>
                        <h2>Grid Box</h2>
                    </div>
                </div>
            </Link>

            <Link to={"/Timer"} style={{textDecoration: "none", outline:"none", color:"inherit", all:"unset"}}>
                <div className={styles.card}>
                    <div style={{backgroundColor:"white", width:"90px", height:"90px", borderRadius:"50%"}}>
                        <div style={{width:"50%", height:"50%", border:"2px solid black", borderTop:"none", borderLeft:"none"}}>

                        </div>
                    </div>
                    <div>
                        <h2>Timer</h2>
                    </div>
                </div>
            </Link>
        </div>
        </>
    );
}

export default HomePage;