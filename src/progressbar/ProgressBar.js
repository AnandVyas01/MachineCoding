import React, { useState } from 'react'

function ProgressBar() {
    const [progress, setProgress] = useState(0);
  return (
    <div>
      <div style={{width: "200px", height: "10px", backgroundColor: "grey"}}>
        <div style={{height : "100%", width: `${progress}%`, backgroundColor: "black"}}></div>
      </div>
      <button onClick={()=> setProgress((prev)=> prev >= 100 ? 0 : prev + 5)}> + 5</button>
    </div>
  )
}

export default ProgressBar
