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
    
    {/* Add your login form here */}
    
    <div className='loginForm'>
      {/* Your form inputs */}
      <form action='/order' autoComplete='off' method='POST'>
        <div className='inputContainer'>
          <label htmlFor='email'>Email:</label>
          <input type='email' placeholder='Email' />
          <label htmlFor='password'>Password:</label>
          <input type='password' placeholder='Password' />
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