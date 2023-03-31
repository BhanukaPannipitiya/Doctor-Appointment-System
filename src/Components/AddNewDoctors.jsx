import React, { Component } from 'react';
import AddNewDocService from '../Service/DocService';


class AddNewDoctor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            phoneNumber: '',
            consultantFee: '',
            specialty: '',
        }

        this.addDoctor = this.addDoctor.bind(this);
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
        document.getElementById("emailVr").innerHTML = "";
        document.getElementById("phoneNumberVr").innerHTML = "";

    }

    validatephoneNumber() {
        let number = document.getElementById('phoneNumber').value;
        if (/^\d{10}$/.test(number)) {
            document.getElementById("phoneNumberVr").innerHTML = "";

        } else {
            document.getElementById("phoneNumber").innerHTML = "Phone number must be 10 digits.";

            return false
        }
    }


    addDoctor = e => {
        e.preventDefault();
        let doctor =
        {
            
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            gender: this.state.gender,
            phoneNumber: this.state.phoneNumber,
            consultantFee: this.state.consultantFee,
            specialty: this.state.specialty
        };

        // AdminServiceMethods.addNewDoctor(doctor)
        //     .then(res => {
        //         console.log(res.data);
        //         this.setState({ message: 'Doctor added successfully.' });
        //         alert(this.state.message);
        //         this.props.history.push('/adminDashboard');
        //     }).catch(error => {
        //         console.error("in err ", error.response.data);
        //         //err.response.data => DTO on the server side : ErrorResponse
        //         alert(error.response.data.message);
        //         this.props.history.push('/adminDashboard');
        //     });
        AddNewDocService.addNewDoctor(doctor)
            .then(res => {
                console.log(res.data);
                this.setState({ message: 'Doctor added successfully.' });
                alert(this.state.message);
                //this.props.history.push('/adminDashboard');
            }).catch(error => {
                console.error("in err ", error.response.data);
                //err.response.data => DTO on the server side : ErrorResponse
                alert(error.response.data.message);
                //this.props.history.push('/adminDashboard');
            });
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    handlespecialty = e => {
        this.setState({ specialty: e.target.value })
    }

    render() {
        return (
            <>
                <div className="container overflow-hidden" style={{ minHeight: "100vh" }}>
                    <div className="row mt-3">
                        <div className="col-sm-8">
                            <h2 className="text-muted offset-9">Add Doctor</h2>
                        </div>
                        <div className="col-sm-4">
                            <button className="btn btn-secondary text-uppercase offset-8" onClick={() => { this.props.history.push('/adminDashboard') }}>Go Back</button>
                        </div>
                    </div>
                    <form className="mb-5">
                        
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="firstName" className="col-2 col-form-label">First Name</label>
                            <div className="col-5">
                                <input type="text" id="firstName" className="form-control" placeholder="Doctor's first name" name="firstName" value={this.state.firstName} onChange={this.onChange} required />
                            </div>
                        </div>
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="lastName" className="col-2 col-form-label">Last Name</label>
                            <div className="col-5">
                                <input type="text" id="lastName" className="form-control" placeholder="Doctor's last name" name="lastName" value={this.state.lastName} onChange={this.onChange} required />
                            </div>
                        </div>
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="email" className="col-2 col-form-label">Email</label>
                            <div className="col-5">
                                <input type="email" id="email" className="form-control" placeholder="e.g. abc@xyz.com" name="email" value={this.state.email} onChange={this.onChange} required onFocus={this.removeWarnings} onBlur={this.validateEmail} /><span style={{ color: 'red' }} id='emailVr'></span>
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
                            <label htmlFor="phoneNumber" className="col-2 col-form-label">phoneNumber</label>
                            <div className="col-5">
                                <input type="text" id="phoneNumber" className="form-control" placeholder="Doctor's phoneNumber number" name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChange} pattern="[0-9]{10}" onBlur={this.validatemoobile} onFocus={this.removeWarnings} required /><span id='phoneNumberVr' style={{ color: 'red' }}></span>
                            </div>
                        </div>

                        
                        <div className="form-group row mt-3 justify-content-center">
                            <label htmlFor="consultantFee" className="col-2 col-form-label">Consultation Fee</label>
                            <div className="col-5">
                                <input type="number" id="consultantFee" min="200" max="1000" step="50" className="form-control" name="consultantFee" value={this.state.consultantFee} onChange={this.onChange} required />
                            </div>
                        </div>
                        
                        <div className="form-group row my-3 justify-content-center">
                            <label className="col-2 col-form-label">specialty</label>
                            <div className="col-5 d-flex justify-content-between">
                                <select value={this.state.specialty} onChange={this.handlespecialty} style={{ width: "7vw", height: "7vh" }}>
                                    <option value="" disabled>--select--</option>
                                    <option value="Physician">Physician</option>
                                    <option value="Cardiologist">Cardiologist</option>
                                    <option value="Dentist">Dentist</option>
                                    <option value="Dermatologist">Dermatologist</option>
                                    <option value="Ophthalmologist">Ophthalmologist</option>
                                    <option value="Gynecologist">Gynecologist</option>
                                    <option value="Psychiatrist">Psychiatrist</option>
                                    <option value="Orthopediologist">Orthopediologist</option>
                                </select>
                            </div>
                        </div>
                        <button className="btn btn-lg btn-primary text-uppercase  mb-5 offset-6" onClick={this.addDoctor}>Submit</button>
                    </form>
                </div>
            </>
        )
    }
}

export default AddNewDoctor;


