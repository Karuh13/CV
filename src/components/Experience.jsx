import React, { useState } from 'react'

const Experience = () => {

    const [ show, setShow ] = useState("programming")

  return (
    <div className='experience section'>
        <h2>Experience</h2>
        <div>
            <button onClick={() => setShow("programming")}>Programming</button>
            <button onClick={() => setShow("biotech")}>Biotech</button>
            <button onClick={() => setShow("other")}>Other</button>
        </div>
        { show === "programming" && <p>PROGRAMMING</p> }
        { show === "biotech" && <p>BIOTECH</p> }
        { show === "other" && <p>OTHER</p> }
    </div>
  )
}

export default Experience