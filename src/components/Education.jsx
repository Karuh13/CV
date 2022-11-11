import React, { useState } from 'react'

const Education = () => {

    const [ show, setShow ] = useState("programming")

  return (
    <div className='education section'>
        <h2>Education</h2>
        <div>
            <button onClick={() => setShow("programming")}>Programming</button>
            <button onClick={() => setShow("biotech")}>Biotech</button>
        </div>
        { show === "programming" && <p>PROGRAMMING</p> }
        { show === "biotech" && <p>BIOTECH</p> }
    </div>
  )
}

export default Education