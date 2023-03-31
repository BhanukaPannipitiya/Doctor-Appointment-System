import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';

import AppointmentService from '../Service/AppointmentService';

const ConfirmAppointment2 = () => {

    const[doctorName,setDoctorName] = useState("");
    const[patientName,setPatientName] = useState("");
    const[specialization,setSpecialization] = useState("");
    const[date,setDate] = useState("");
    const[time,setTime] = useState("");
    const{id}=useParams();

  const addAppointment = (e) => {
        e.preventDefault();

        const appointment = {doctorName,patientName,specialization,date,time}

       
            AppointmentService.postAppointment(appointment).then((response) =>{

                console.log(response.data);
    
                
    
            }).catch(error => {
                console.log(error)
            })
        
        
    }

    useEffect(() => {

        AppointmentService.getAppointmentById(id).then((res) => {
            let appointment = res.data;
            setDoctorName(appointment.doctorName);
            setSpecialization(appointment.specialization);
            setDate(appointment.startDate);
            setTime(appointment.startTime);
        }).catch(error => {
            console.log(error)
        })
    }, [])

   /* const title = () => {

        if(id){
            return <h2 className = "text-center">Update Employee</h2>
        }else{
            return <h2 className = "text-center">Add Employee</h2>
        }
    }*/

    return (
        <div>
        <br /><br />
        <div className = "container">
             <div className = "row">
                 <div className = "card col-md-6 offset-md-3 offset-md-3">
                    {
                        
                    }
                     <div className = "card-body">
                         <form>
                             <div className = "form-group mb-2">
                                 <label className = "form-label"> Doctor Name :</label>
                                 <input
                                     type = "text"
                                     placeholder = "Doctor Name"
                                     name = "doctorName"
                                     className = "form-control"
                                     value = {doctorName}
                                     onChange = {(e) => setDoctorName(e.target.value)}
                                 >
                                 </input>
                             </div>

                             <div className = "form-group mb-2">
                                 <label className = "form-label"> Patient Name :</label>
                                 <input
                                     type = "text"
                                     placeholder = "Enter last name"
                                     name = "patientName"
                                     className = "form-control"
                                        value = {patientName}
                                        onChange = {(e) => setPatientName(e.target.value)}

                                     
                                 >
                                 </input>
                             </div>

                             <div className = "form-group mb-2">
                                 <label className = "form-label"> specialization:</label>
                                 <input
                                     type = "specialization"
                                     placeholder = "Enter email Id"
                                     name = "specialization"
                                     className = "form-control"
                                     value = {specialization}
                                    onChange = {(e) => setSpecialization(e.target.value)}
                                 >
                                 </input>
                             </div>
                             <div className = "form-group mb-2">
                                 <label className = "form-label"> Date :</label>
                                 <input
                                     type = "date"
                                     placeholder = "Enter email Id"
                                     name = "date"
                                     className = "form-control"
                                     value = {date}
                                        onChange = {(e) => setDate(e.target.value)}
                                 >
                                 </input>
                             </div>
                             <div className = "form-group mb-2">
                                 <label className = "form-label"> Time :</label>
                                 <input
                                     type = "time"
                                     placeholder = "Enter email Id"
                                     name = "time"
                                     className = "form-control"
                                     value = {time}
                                        onChange = {(e) => setTime(e.target.value)}
                                 >
                                 </input>
                             </div>

                             <button className = "btn btn-success" onClick = {(e) => addAppointment(e)} >Confirm</button>
                             <Link to="/A" className="btn btn-danger"> Cancel </Link>
                         </form>

                     </div>
                 </div>
             </div>

        </div>

     </div>
    )
}

export default ConfirmAppointment2