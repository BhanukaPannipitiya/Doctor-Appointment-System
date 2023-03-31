import React, { Component,useState,useEffect } from 'react'
import AppointmentService from '../Service/AppointmentService';
import { Link,useHistory,useParams } from 'react-router-dom';



export default class BookAppointment extends Component {

   
//----------------------------------------------------------
Settext = (e) => {
 
    const[doctorName,setDoctorName] = useState("");
    const[patientName,setPatientName] = useState("");
    const[specialization,setSpecialization] = useState("");
    const[date,setDate] = useState("");
    const[time,setTime] = useState("");
    const{id}=useParams();

    useEffect(() => {

        AppointmentService.getAppointmentById(id).then((res) => {
            let appointment = res.data;
            setDoctorName(appointment.doctorName);
            setSpecialization(appointment.specialization);
            setDate(appointment.date);
            setTime(appointment.time);
        });
   
    }, [])
    
}





//----------------------------------------------------------

    constructor(props) {
        super(props);

        this.state = {
            
            PatientName: '',
            DoctorName: 'hbhbhbhbh',
            specialization: '',
            Date: '',
            Time: '',
        
        }

        this.postAppointment = this.postAppointment.bind(this);
    }
    postAppointment = e => {
        e.preventDefault();
        let appointment =
        {
            
            PatientName: this.state.PatientName,
            DoctorName: this.state.DoctorName,
            specialization: this.state.specialization,
            Date: this.state.Date,
            Time: this.state.Time,
            
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
        // AddNewDocService.addNewDoctor(doctor)
        //     .then(res => {
        //         console.log(res.data);
        //         this.setState({ message: 'Doctor added successfully.' });
        //         alert(this.state.message);
        //         //this.props.history.push('/adminDashboard');
        //     }).catch(error => {
        //         console.error("in err ", error.response.data);
        //         //err.response.data => DTO on the server side : ErrorResponse
        //         alert(error.response.data.message);
        //         //this.props.history.push('/adminDashboard');
        //     });
           AppointmentService.postAppointment(appointment) 
            .then(res => {
                console.log(res.data);
                this.setState({ message: 'Appointment added successfully.' });
                alert(this.state.message);
                this.props.history.push('/adminDashboard');
            }).catch(error => {
                console.error("in err ", error.response.data);
                //err.response.data => DTO on the server side : ErrorResponse
                alert(error.response.data.message);
                this.props.history.push('/adminDashboard');
            });
            
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    
  render() {
    return (
         <div className="container overflow-hidden" style={{ minHeight: "100vh" }}>
                            <div className="row mt-3">
                                <div className="col-sm-8">
                                    <h2 className="text-muted offset-9">Confirm Appointment</h2>
                                </div>
                                <div className="col-sm-4">
                                    <button className="btn btn-secondary text-uppercase offset-8" onClick={() => { this.props.history.push('/A') }}>Go Back</button>
                                </div>
                            </div>
                            <form className="mb-5">
                                
                                <div className="form-group row my-3 justify-content-center">
                                    <label htmlFor="PatientName" className="col-2 col-form-label">Patient Name</label>
                                    <div className="col-5">
                                        <input type="text" id="PatientName" className="form-control" placeholder="Doctor's first name" name="PatientName" value={this.state.PatientName} onChange={this.onChange} required />
                                    </div>
                                </div>
                                <div className="form-group row my-3 justify-content-center">
                                    <label htmlFor="DoctorName" className="col-2 col-form-label">Doctors Name</label>
                                    <div className="col-5">
                                        <input type="text" id="DoctorName" className="form-control" placeholder="Doctor's last name" name="DoctorName" value={this.state.DoctorName} onChange={this.onChange} required />
                                    </div>
                                </div>
                                <div className="form-group row my-3 justify-content-center">
                                    <label htmlFor="specialization" className="col-2 col-form-label">Specialization</label>
                                    <div className="col-5">
                                        <input type="specialization" id="specialization" className="form-control"  name="specialization" value={this.state.specialization} onChange={this.onChange} required onFocus={this.removeWarnings} onBlur={this.validatespecialization} /><span style={{ color: 'red' }} id='specializationVr'></span>
                                    </div>
                                </div>
                                
                                <div className="form-group row my-3 justify-content-center">
                                    <label htmlFor="Date" className="col-2 col-form-label">Date</label>
                                    <div className="col-5">
                                        <input type="text" id="Date" className="form-control" placeholder="Doctor's Date number" name="Date" value={this.state.Date} onChange={this.onChange} pattern="[0-9]{10}" onBlur={this.validatemoobile} onFocus={this.removeWarnings} required /><span id='DateVr' style={{ color: 'red' }}></span>
                                    </div>
                                </div>
        
                                
                                <div className="form-group row mt-3 justify-content-center">
                                    <label htmlFor="Time" className="col-2 col-form-label">Time</label>
                                    <div className="col-5">
                                        <input type="number" id="Time" min="200" max="1000" step="50" className="form-control" name="Time" value={this.state.Time} onChange={this.onChange} required />
                                    </div>
                                </div>
                               
                                <button className="btn btn-lg btn-primary text-uppercase  mb-5 offset-6" onClick={this.postAppointment}>Submit</button>
                            </form>
                        </div>
      
    )
  }
}
