import React, { Component } from 'react';
//import AppointmentService from '../service/AppointmentService';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import AppointmentService from '../Service/AppointmentService';

class DoctorCurrentAppointments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            appointments: [],
            message: null
        }

        this.getCurrentAppointments = this.getCurrentAppointments.bind(this);
        this.cancelAppointment = this.cancelAppointment.bind(this);
    }

    componentDidMount() {
        this.getCurrentAppointments();
    }

    getCurrentAppointments = () => {
        let doctor = JSON.parse(sessionStorage.getItem("doctor"));
        // AppointmentService.getCurrentAppointmentsForDoctor(doctor.userId)
        //     .then(response => {
        //         console.log(response.data);
        //         this.setState({
        //             appointments: response.data,
        //             message: "Appointment list rendered successfully"
        //         });

        //     })
        //     .catch(error => {
        //         console.error("in err ", error.response.data);
        //         alert(error.response.data.message);
        //     });
        AppointmentService.getAppointment()
            .then(response => {
                console.log(response.data);
                this.setState({
                    appointments: response.data,
                    message: "Appointment list rendered successfully"
                });

            })
            .catch(error => {
                console.error("in err ", error.response.data);
                alert(error.response.data.message);
            });
    }

    cancelAppointment = appointmentId => {
        if (window.confirm("Are you sure you want to cancel this appointment")) {
            // AppointmentService.cancelAppointment(appointmentId)
            //     .then(res => {
            //         this.setState({ message: 'Appointment cancelled!!!' });
            //         console.log(this.state.message, 'Appointment ID: ', appointmentId);
            //         this.setState({ appointments: this.state.appointments.filter(appointment => appointment.id !== appointmentId) });
            //     })
            AppointmentService.deleteAppointment(appointmentId)
                .then(res => {
                    this.setState({ message: 'Appointment cancelled!!!' });
                    console.log(this.state.message, 'Appointment ID: ', appointmentId);
                    this.setState({ appointments: this.state.appointments.filter(appointment => appointment.id !== appointmentId) });
                })
        } else {
             this.props.history.push("#");
        }
    }

    render() {
        return (
            <>
                <div className="container my-4">
                    <button className="btn btn-secondary offset-11" onClick={() => {window.location.href="/AdminDashboard"}}>Go Back</button>
                    {this.state.appointments.length === 0 ? <h3>No active appointments</h3> : <div>
                        <h3>Active Appointments</h3>
                        <table className="table table-bordered">
                            <thead className="bg-dark text-light">
                                <tr>
                                    <th>Patient Name</th>
                                    <th>Time</th>
                                    <th>Date</th>
                                    <th>Specialization </th>
                                    <th>Doctors Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.appointments.map(
                                        (appointment, index) =>
                                            <tr key={appointment.id}>
                                                <td>{appointment.patientName}</td>
                                                <td>{appointment.time}</td>
                                                <td>{appointment.date}</td>
                                                <td>{appointment.specialization}</td>
                                                <td>{appointment.doctorName}</td>
                                                <td>
                                                    
                                                 <button className="btn btn-danger mx-1" onClick={() => { this.cancelAppointment(appointment.id) }}>Cancel</button>
                                                   
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    }
                </div>
            </>
        )
    }
}

export default DoctorCurrentAppointments
