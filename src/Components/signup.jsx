import React, { Component } from 'react'
import axios from 'axios'
export default class SignUp extends Component {
 constructor(props){
  super(props)
 
  this.state= { 
  name:'',
  email:'',
  password:'',
  confirmp:'',
  }
 }
changeHandler=(e)=>{
  this.setState({[e.target.name]:e.target.value})

}
submitHandler= e=>
{
e.preventDefault()
console.log(this.state)
axios.post('http://localhost:8080/files',this.state)
.then(Response=>{
console.log(Response)
})
.catch(error=>{
  console.log(error)
})
}
  render() {
    const{name,email,password,confirmp}=this.state
    return (
      <form onSubmit={this.submitHandler}>
        <h3>Register</h3>

        <div className="signup">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={this.changeHandler}
          />
        </div>

        <div className="signup">
          <label>Email address</label>
          <input type="email"
          name="email"
          className="form-control" 
          placeholder="Enter your email address"
          value={email} 
          onChange={this.changeHandler}/>
         
        </div>

        <div className="signup">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}      
            onChange={this.changeHandler}    
            />
        </div>

        <div className="signup">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            name="confirmp"
            value={confirmp}
            onChange={this.changeHandler}    
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/signin">Sign In?</a>
        </p>
      </form>
    )
  }
}
