import React from 'react'

/* 
  Created by Dominique Gould 
*/

const LoginPage = () => {
  return (
    <div className='container'>
      <div className='header'>
        <p>Welcome Back!</p>
        <h1>Log In</h1>
      </div>
    
    {/* Login form here */}
    
    <div className='loginForm'>
      {/* Form inputs */}
      <form action='/account' autoComplete='off' method='post'>
        <div className='inputContainer'>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' placeholder='Email' />
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' placeholder='Password' />
        </div>
        
        {/* Will add forgot password later */}
        
        <div className='submitContainer'>
          <button type='submit'>Login</button>
        </div>


      </form>
    </div>
    

    </div>
  )
}

export default LoginPage