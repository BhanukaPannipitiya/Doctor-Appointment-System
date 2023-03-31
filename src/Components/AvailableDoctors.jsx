import React, { Component } from 'react'
import AppointmentService from '../Service/AppointmentService';
import { NavLink ,Link} from 'react-router-dom';

export default class AvailableDoctors extends Component {
    constructor(props) {
        super(props)
        this.state = {
            doctors: [],
            message: null
        }

        this.getAvailableAppointments = this.getAvailableAppointments.bind(this);
    };

    getAvailableAppointments = () => {
        
        console.log(this.props.getAppointment)

        // AppointmentService.getDoctorsByspecialtyAndCity(this.props.location.state.specialty, this.props.location.state.city)
        //     .then(response => {
        //         console.log(response.data);
        //         this.setState({ doctors: response.data, message: "Doctor list rendered successfully" });
        //     })
        //     .catch(error => {
        //         console.error("in err ", error.response.data);
        //         alert(error.response.data.message);
        //     });
        AppointmentService.getScheduleAppointment()
        .then(response => {
            console.log(response.data);
            this.setState({ doctors: response.data, message: "Doctor list rendered successfully" });
        })
        .catch(error => {
            console.error("in err ", error.response.data);
            alert(error.response.data.message);
        });
         
        
    }

    componentDidMount() {
        this.getAvailableAppointments();
    }

    render() {
        
        return (
            <>
                <div className="container my-4">
                <button className="btn btn-secondary offset-11"onClick={() => {window.location.href="/A"}}>Go Back</button>
                    <h2 className="text-muted">Available Doctor List</h2>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-light">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>specialty</th>
                                <th>Consultation Fee</th>
                                <th>Time</th>
                                <th>Action</th>                              
                            </tr>                           
                        </thead>
                        <tbody>
                  
                            {
                                this.state.doctors.map(
                                    doctor =>
                                        <tr key={doctor.id}>
                                            <td>{doctor.id}</td>
                                            <td>{doctor.doctorName}</td>
                                            <td>{doctor.specialization}</td>
                                            <td>{doctor.fee}</td>
                                            <td>{doctor.startTime}</td>
                                            <td>
                                            <Link className = "btn btn-success"  to={`/bookAppointment/${doctor.id}`} >Book Appointment </Link>
                                            </td>
                                        </tr>
                                        
                                )
                            }
                        </tbody>
                    </table>
                     
        

        </div>
                
            </>
        )

    }
}
