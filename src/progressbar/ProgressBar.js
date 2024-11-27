import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";

function ProgressBar() {
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();
  return (
      <>
          <div style={{position:"absolute", margin:"20px", cursor:"pointer"}} onClick={()=> navigate("/")}>
              {"<- back"}
          </div>
            <div style={{ width: "100vw", height:"100vh", backgroundColor: "#e364fa", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div>
                    <div style={{width: "200px", height: "10px", backgroundColor: "grey", borderRadius: "8px"}}>
                        <div style={{height : "100%", width: `${progress}%`, backgroundColor: "black", borderRadius: "8px"}}></div>
                     </div>
                    <button  style={{margin:"50px", padding:"5px 10px", backgroundColor:"rgba(4, 0, 5, 0.6)", color:"white", borderRadius: "8px"}} onClick={()=> setProgress((prev)=> prev >= 100 ? 0 : prev + 5)}> Add 5</button>
                </div>
            </div>
      </>
  )
}

export default ProgressBar
