import React, { Component } from 'react';
import UserService from '../Service/UserService';
//import PatientServiceMethods from '../service/PatientServiceMethods';

class UpdatePatientProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            password:'',
            gender: '',
            mobileNumber: '',
            
        }

        this.savePatient = this.savePatient.bind(this);
        //this.loadPatient = this.loadPatient.bind(this);
    }

    componentDidMount() {
        this.loadPatient();
    }

    loadPatient() {
        //let user = JSON.parse(sessionStorage.getItem("user"));
        // PatientServiceMethods.getPatientById(patient.userId)
        //     .then(res => {
        //         let patientFull = res.data;
        //         console.log(patientFull);
        //         this.setState({
        //             id: patientFull.id,
        //             username: patientFull.username,
        //             firstName: patientFull.firstName,
        //             lastName: patientFull.lastName,
        //             email: patientFull.email,
        //             dob: patientFull.dob,
        //             gender: patientFull.gender,
        //             bloodGroup: patientFull.bloodGroup,
        //             mobileNumber: patientFull.mobileNumber,
        //             area: patientFull.area,
        //             city: patientFull.city,
        //             state: patientFull.state
        //         })
        //     });
        // UserService.getUserById(user.userID)
        // .then(res => {
        //             let patientFull = res.data;
        //              console.log(patientFull);
        //              this.setState({
        //                  id: patientFull.id,
        //                  username: patientFull.username,
        //                  firstName: patientFull.firstName,
        //                  lastName: patientFull.lastName,
        //                  email: patientFull.email,
        //                  password:patientFull.password,
        //                  gender: patientFull.gender,
        //                  bloodGroup: patientFull.bloodGroup,
        //                  mobileNumber: patientFull.mobileNumber,
                         
        //              })
        //          });

    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleBloodGroupChange = e => {
        this.setState({ bloodGroup: e.target.value })
    }

    savePatient = (e) => {
        e.preventDefault();
        let patientFull = {
            id: this.state.id,
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password:this.state.password,
            gender: this.state.gender,
            mobileNumber: this.state.mobileNumber,
           
        };

        // PatientServiceMethods.updatePatientDetails(this.state.id, patientFull)
        //     .then(res => {
        //         this.setState({ message: 'Patient details updated successfully.' });
        //         console.log(this.state.message);
        //         alert(this.state.message);
        //         this.props.history.push('/patientDashboard');
        //     });
    }

    render() {
        return (
            <>
                <div className="container overflow-hidden" style={{ minHeight: "100vh" }}>
                    <div className="row my-3">
                        <div className="col-sm-8">
                            <h2 className="text-muted offset-8">Update Profile</h2>
                        </div>
                        <div className="col-sm-4">
                        <button className="btn btn-secondary text-uppercase offset-8" onClick={() => {window.location.href="/A"}}>Go Back</button>

                        </div>
                    </div>
                    <form className="mb-4">
                        <div className="form-group row mt-3 justify-content-center">
                            <label htmlFor="username" className="col-2 col-form-label">Username</label>
                            <div className="col-5">
                                <input type="text" id="username" className="form-control" name="username" readOnly={true} defaultValue={this.state.username} />
                            </div>
                        </div>
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="firstName" className="col-2 col-form-label">First Name</label>
                            <div className="col-5">
                                <input type="text" id="firstName" className="form-control" name="firstName" value={this.state.firstName} onChange={this.onChange} readOnly={true} />
                            </div>
                        </div>
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="lastName" className="col-2 col-form-label">Last Name</label>
                            <div className="col-5">
                                <input type="text" id="lastName" className="form-control" name="lastName" value={this.state.lastName} onChange={this.onChange} readOnly={true} />
                            </div>
                        </div>
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="email" className="col-2 col-form-label">Email</label>
                            <div className="col-5">
                                <input type="email" id="email" className="form-control" name="email" value={this.state.email} onChange={this.onChange} readOnly={true} />
                            </div>
                        </div>
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="password" className="col-2 col-form-label">Password</label>
                            <div className="col-5">
                                <input type="password" id="password" className="form-control" name="password" value={this.state.password} onChange={this.onChange} readOnly={true} />
                            </div>
                        </div>
                        
                     
                      
                        <div className="form-group row my-3 justify-content-center visually-hidden">
                            <label className="col-2 col-form-label">Gender</label>
                            <div className="col-5 d-flex justify-content-between">
                                <div><input type="radio" id="gender" name="gender" value="MALE" onChange={this.onChange} disabled /> Male</div>
                                <div><input type="radio" id="gender" name="gender" value="FEMALE" onChange={this.onChange} disabled /> Female</div>
                                <div><input type="radio" id="gender" name="gender" value="OTHER" onChange={this.onChange} disabled /> Other</div>
                            </div>
                        </div>
                        
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="mobileNumber" className="col-2 col-form-label">Mobile</label>
                            <div className="col-5">
                                <input type="text" id="mobileNumber" className="form-control" name="mobileNumber" value={this.state.mobileNumber} onChange={this.onChange} pattern="[0-9]{10}" />
                            </div>
                        </div>


                        <button className="btn btn-lg btn-primary text-uppercase mt-3 mb-5 offset-6" onClick={this.savePatient}>Update</button>
                    </form>
                </div>
            </>
        )
    }
}
export default UpdatePatientProfile;