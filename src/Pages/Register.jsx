import React, { Component } from 'react';

import UserService from '../Service/UserService';

class PatientSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            gender: '',
            mobilenumber: '',
         
        }
        this.signUp = this.signUp.bind(this);
    }

    validatePassword() {
        let password = document.getElementById("pwd").value;
        var regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{5,}$/;;

        if (regexPassword.test(password) === true) {
            document.getElementById("passwordVr").innerHTML = "";
            return true;
        } else {
            document.getElementById("passwordVr").innerHTML = "password must be alphanumeric and should contains at least a special character with length 5"
        }

    }

    validateEmail() {
        let email = document.getElementById("email").value;

        var regexEmail = /\S+@\S+\.\S+/;
        if (regexEmail.test(email) === true) {
            document.getElementById("emailVr").innerHTML = "";
            return true;
        } else {
            document.getElementById("emailVr").innerHTML = "email format should be 'abc@gmail.com'"

        }

    }
    removeWarnings() {
        document.getElementById("passwordVr").innerHTML = "";
        document.getElementById("emailVr").innerHTML = "";
        document.getElementById("mobileNumberVr").innerHTML = "";

    }

    validateMobileNumber() {
        let number = document.getElementById('mobilenumber').value;
        if (/^\d{10}$/.test(number)) {
            document.getElementById("mobileNumberVr").innerHTML = "";

        } else {
            document.getElementById("mobileNumberVr").innerHTML = "Phone number must be 10 digits.";

            return false
        }
    }

    signUp = (p) => {
        p.preventDefault();
        let user=
        {
            username: this.state.username,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
          
            gender: this.state.gender,
           
            mobilenumber: this.state.mobilenumber,
           
        };
        // PatientServiceMethods.addPatient(patient)
        //     .then(res => {
        //         console.log(res.data);
        //         this.setState({ message: 'User added successfully.' });
        //         console.log(this.state.message);
        //         alert(this.state.message);
        //         this.props.history.push('/');
        //     })
        //     .catch(error => {
        //         console.error("in err ", error.response.data);
        //         alert(error.response.data.message);
        //     });
        UserService.postUsers(user)
        .then(res => {
                     console.log(res.data);
                     this.setState({ message: 'User added successfully.' });
                     console.log(this.state.message);
                     alert(this.state.message);
                     this.props.history.push('/');
                })
                 .catch(error => {
                     console.error("in err ", error.response.data);
                     alert(error.response.data.message);
                 });

    }

    onChange = (p) =>
        this.setState({ [p.target.name]: p.target.value });

    handleBloodGroupChange = e => {
        this.setState({ bloodGroup: e.target.value })
    }

    render() {
        return (
            <>
                <div className="container overflow-hidden mb-5" style={{ minHeight: "100vh" }}>
                    <div className="row my-3">
                        <div className="col-sm-8">
                            <h2 className="text-muted offset-8">User Registration</h2>
                        </div>
                            <div className="col-sm-4">
                                <button className="btn btn-secondary text-uppercase offset-8" onClick={() => {window.location.href="/Login"}} >Go Back</button>
                            </div>
                    </div>
                    <form className="mb-5">
                        <div className="form-group row mt-3 justify-content-center">
                            <label htmlFor="username" className="col-2 col-form-label">Username</label>
                            <div className="col-5">
                                <input type="text" id="username" className="form-control" placeholder="Enter a unique username" name="username" value={this.state.username} onChange={this.onChange} required />
                            </div>
                        </div>
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="firstname" className="col-2 col-form-label">First Name</label>
                            <div className="col-5">
                                <input type="text" id="firstname" className="form-control" placeholder="Enter your first name" name="firstname" value={this.state.firstname} onChange={this.onChange} required />
                            </div>
                        </div>
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="lastname" className="col-2 col-form-label">Last Name</label>
                            <div className="col-5">
                                <input type="text" id="lastname" className="form-control" placeholder="Enter your last name" name="lastname" value={this.state.lastname} onChange={this.onChange} required />
                            </div>
                        </div>
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="email" className="col-2 col-form-label">Email</label>
                            <div className="col-5">
                                <input type="email" id="email" className="form-control" placeholder="e.g. abc@xyz.com" name="email" value={this.state.email} onChange={this.onChange}  required onFocus={this.removeWarnings} onBlur={this.validateEmail} /><span style={{ color: 'red' }} id='emailVr'></span>

                            </div>
                        </div>

                        
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="pwd" className="col-2 col-form-label">Password</label>
                            <div className="col-5">
                                <input type="password" id="pwd" className="form-control" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.onChange} onBlur={this.validatePassword} onFocus={this.removeWarnings} required /><span style={{ color: 'red' }} id='passwordVr'></span>

                            </div>
                        </div>
                        <div className="form-group row my-3 justify-content-center">
                            <label className="col-2 col-form-label">Gender</label>
                            <div className="col-5 d-flex justify-content-between">
                                <div><input type="radio" id="gender" name="gender" value="MALE" onChange={this.onChange} /> Male</div>
                                <div><input type="radio" id="gender" name="gender" value="FEMALE" onChange={this.onChange} /> Female</div>
                                <div><input type="radio" id="gender" name="gender" value="OTHER" onChange={this.onChange} /> Other</div>
                            </div>
                        </div>
                        
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="mobilenumber" className="col-2 col-form-label">Mobile</label>
                            <div className="col-5">
                                <input type="text" id="mobilenumber" className="form-control" placeholder="Enter your mobile number" name="mobilenumber" value={this.state.mobilenumber} onChange={this.onChange} pattern="[0-9]{10}" onBlur={this.validateMobileNumber} onFocus={this.removeWarnings} required /><span id='mobileNumberVr' style={{ color: 'red' }}></span>

                            </div>
                        </div>

                      
                        <div className="form-group row justify-content-center">
                            <div className="offset-9">
                                <button className="btn btn-lg btn-primary text-uppercase mt-3" onClick={this.signUp}>Sign Up</button>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default PatientSignUp


