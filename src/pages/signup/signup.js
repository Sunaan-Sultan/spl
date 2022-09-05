import React from 'react'
import { useState } from 'react'
// import { useSignup } from '../../hooks/useSignup'

// styles
import './signup.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [roll, setRoll] = useState('')
  // const [thumbnailError, setThumbnailError] = useState(null)
  // const { signup, isPending, error } = useSignup()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password, displayName, roll)
  }

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>sign up</h2>
      <label>
        <span>email:</span>
        <input
          required 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
        />
      </label>
      <label>
        <span>Create Password:</span>
        <input
          required
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password}
        />
      </label>
      <label>
        <span>Display name:</span>
        <input
          required
          type="text" 
          onChange={(e) => setDisplayName(e.target.value)} 
          value={displayName}
        />
      </label>
      <label>
        <span>Roll number:</span>
        <input 
          required
          type="text"
          onChange={(e) => setRoll(e.target.value)}
          value={roll}
        />
        {/* {thumbnailError && <div className="error">{thumbnailError}</div>} */}
      </label>
      <button className="btn">Sign up</button>
      {/* <button className="btn" disabled>loading</button> */}
    </form>
  )
}
