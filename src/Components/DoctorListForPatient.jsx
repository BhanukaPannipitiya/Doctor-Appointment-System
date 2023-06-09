import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import DocService from '../Service/DocService';


class DoctorListForPatient extends Component {

    constructor(props) {
        super(props)
        this.state = {
            doctors: [],
            message: null
        }

        this.getDoctorList = this.getDoctorList.bind(this);
    };

    getDoctorList = () => {
        
        console.log(this.props.specialty)

        // AppointmentService.getDoctorsByspecialtyAndCity(this.props.location.state.specialty, this.props.location.state.city)
        //     .then(response => {
        //         console.log(response.data);
        //         this.setState({ doctors: response.data, message: "Doctor list rendered successfully" });
        //     })
        //     .catch(error => {
        //         console.error("in err ", error.response.data);
        //         alert(error.response.data.message);
        //     });
        DocService.getDoctorsBySpecialty(this.props.specialty)
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
        this.getDoctorList();
    }

    render() {
        
        return (
            <>
                <div className="container my-4">
                <button className="btn btn-secondary offset-11"onClick={() => {window.location.href="/A"}}>Go Back</button>
                    <h2 className="text-muted">Doctor List</h2>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-light">
                            <tr>
                                <th className="visually-hidden">Id</th>
                                <th>Name</th>
                                <th>specialty</th>
                                <th>Consultation Fee</th>
                                <th>Action</th>
                                <th>Action1</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                  
                            {
                                this.state.doctors.map(
                                    doctor =>
                                        <tr key={doctor.id}>
                                            <td className="visually-hidden">{doctor.id}</td>
                                            <td>{`${'Dr. ' + doctor.firstName + ' ' + doctor.lastName}`}</td>
                                            <td>{doctor.specialty}</td>
                                            <td>{doctor.consultantFee}</td>
                                            <td>
                                                <NavLink to={{
                                                    pathname:"/bookAppointment/${doctor.id}",
                                                    state: {
                                                        doctor: doctor
                                                    }
                                                }} className="btn btn-outline-primary">Book Appointment</NavLink>
                                            </td>
                                            <td>
                                                <button className="btn btn-info" to={`/bookAppointment/${doctor.id}`}></button>
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
export default DoctorListForPatient

