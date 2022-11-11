import React, { useState } from 'react'

const Skill = () => {

    const [ show, setShow ] = useState("softSkills")

  return (
    <div className='skills section'>
        <h2>Skills</h2>
        <div>
            <button onClick={() => setShow("softSkills")}>Soft Skills</button>
            <button onClick={() => setShow("languages")}>Languages</button>
            <button onClick={() => setShow("other")}>Other</button>
        </div>
        { show === "softSkills" && <p>SOFT SKILLS</p> }
        { show === "languages" && <p>LANGUAGES</p> }
        { show === "other" && <p>OTHER</p> }
    </div>
  )
}

export default Skill