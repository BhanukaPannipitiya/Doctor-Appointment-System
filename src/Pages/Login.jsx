import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function Login() {
  return (
    <div>Login
      <Header/>
      <button onClick={() => {window.location.href="/A"}}>Click me</button>
      <Footer/>
    </div>
  
  )
}

export default Login