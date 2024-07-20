import React from 'react'

/* 
  Created by Dominique Gould 
*/

const LoginPage = () => {
  return (
    <div className='container'>
      <div className='header'>
        <h2>Welcome Back!</h2>
        <h1>Log In</h1>
      </div>
    {/* Add your login form here */}
    <div className='loginForm'>
      {/* Your form inputs */}
      <form>
        <div className='inputContainer'>
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
        </div>
        {/* Will add forgot password later */}
        <div className='submitContainer'>
          <button type='submit'>Employee Login</button>
          <button type='submit'>Manager Login</button>
        </div>


      </form>
    </div>
    

    </div>
  )
}

export default LoginPage