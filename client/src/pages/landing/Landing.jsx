import React from 'react'
import './landing.scss'
import { useNavigate } from 'react-router-dom'

const Landing = () => {

    const navigate = useNavigate()

  return (
    <div className='landing'>

        <div className="landing_head">
            <h3><span>i</span> vote</h3>
            <button onClick={()=>navigate("/login")} >login</button>
        </div>
        <div className="landing_body">
            <h1>Cast your vote @ <span>i Vote</span></h1>
            <p>Vote for your favorite candidate and see the results in real time</p>
            <button onClick={()=>navigate("/login")} >Get Started</button>
        </div>
    </div>
  )
}

export default Landing