import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';

import AppointmentService from '../Service/AppointmentService';
import DocService from '../Service/DocService';

const UpdateDoctor1 = () => {

    const[firstName,setFirstName] = useState("");
    const[lastName,setLastName] = useState("");
    const[specialty,setSpecialty] = useState("");
    const[consultantFee,setConsultantFee] = useState("");
    const[startDate,setStartDate] = useState("");
    const[endDate,setEndDate] = useState("");
    const[startTime,setStartTime] = useState("");
    const[endTime,setEndTime] = useState("");
    const[noOfSlots,setNoOfSlots] = useState("");
    const doctorName=firstName;
    const fee=consultantFee;
    const specialization=specialty;

    const{id}=useParams();


  const createAppointment = (e) => {
        e.preventDefault();

        const appointment = {id,firstName,specialization,fee,startDate,endDate,startTime,endTime,noOfSlots}

       
             AppointmentService.postScheduleAppointment(appointment).then((response) =>{

                 console.log(response.data);
    
                
    
             }).catch(error => {
                 console.log(error)
             })

        
        
    }

    useEffect(() => {

        // AppointmentService.getAppointmentById(id).then((res) => {
        //     let appointment = res.data;
        //     setDoctorName(appointment.doctorName);
        //     setSpecialty(appointment.specialty);
        //     setDate(appointment.startDate);
        //     setTime(appointment.startTime);
        // }).catch(error => {
        //     console.log(error)
        // })
        DocService.getDoctorsById(id).then((res) => {
            let appointment = res.data;
            
            setFirstName(appointment.firstName);
            setLastName(appointment.lastName);
            setSpecialty(appointment.specialty);
            setConsultantFee(appointment.consultantFee)
            
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
                         <form className='overflow-auto'>
                            
                            <div className = "form-group mb-2">
                                 <label className = "form-label"> Doctor Id :</label>
                                 <input
                                     type = "text"
                                     placeholder = "Doc Id"
                                     name = "id"
                                     className = "form-control"
                                     value = {id}
                                     
                                 >
                                 </input>
                             </div>
                             <div className = "form-group mb-2">
                                 <label className = "form-label"> First Name :</label>
                                 <input
                                     type = "text"
                                     placeholder = "First Name"
                                     name = "firstName"
                                     className = "form-control"
                                     value = {firstName}
                                     onChange = {(e) => setFirstName(e.target.value)}
                                 >
                                 </input>
                             </div>

                             <div className = "form-group mb-2">
                                 <label className = "form-label"> Last Name :</label>
                                 <input
                                     type = "text"
                                     placeholder = "Enter last name"
                                     name = "lastName"
                                     className = "form-control"
                                        value = {lastName}
                                        onChange = {(e) => setLastName(e.target.value)} 
                                 >
                                 </input>
                             </div>
                             
                             <div className = "form-group mb-2">
                                 <label className = "form-label"> specialty:</label>
                                 <input
                                     type = "specialty"
                                     placeholder = "specialty"
                                     name = "specialty"
                                     className = "form-control"
                                     value = {specialty}
                                    onChange = {(e) => setSpecialty(e.target.value)}
                                 >
                                 </input>
                             </div>
                             <div className = "form-group mb-2">
                                 <label className = "form-label"> Fee</label>
                                 <input
                                     type = "text"
                                     placeholder = "Fee"
                                     name = "consultantFee"
                                     className = "form-control"
                                        value = {consultantFee}
                                        onChange = {(e) => setConsultantFee(e.target.value)} 
                                 >
                                 </input>
                             </div>
                            

                         
                             <div className = "form-group mb-2">
                                 <label className = "form-label"> Start Date :</label>
                                 <input
                                     type = "startDate"
                                     placeholder = "Enter start date"
                                     name = "startDate"
                                     className = "form-control"
                                     value = {startDate}
                                        onChange = {(e) => setStartDate(e.target.value)}
                                 >
                                 </input>
                             </div>
                             <div className = "form-group mb-2">
                                 <label className = "form-label"> End Date :</label>
                                 <input
                                     type = "endDate"
                                     placeholder = "Enter end date"
                                     name = "endDate"
                                     className = "form-control"
                                     value = {endDate}
                                        onChange = {(e) => setEndDate(e.target.value)}
                                 >
                                 </input>
                             </div>
                             <div className = "form-group mb-2">
                                 <label className = "form-label"> Start Time :</label>
                                 <input
                                     type = "startTime"
                                     placeholder = "Enter starting time"
                                     name = "startTime"
                                     className = "form-control"
                                     value = {startTime}
                                        onChange = {(e) => setStartTime(e.target.value)}
                                 >
                                 </input>
                             </div>
                             <div className = "form-group mb-2">
                                 <label className = "form-label"> End Time :</label>
                                 <input
                                     type = "endTime"
                                     placeholder = "Enter ending time"
                                     name = "endTime"
                                     className = "form-control"
                                     value = {endTime}
                                        onChange = {(e) => setEndTime(e.target.value)}
                                 >
                                 </input>
                             </div>
                             <div className = "form-group mb-2">
                                 <label className = "form-label"> No of slots :</label>
                                 <input
                                     type = "noOfSlots"
                                     placeholder = "Enter No of slots"
                                     name = "noOfSlots"
                                     className = "form-control"
                                     value = {noOfSlots}
                                        onChange = {(e) => setNoOfSlots(e.target.value)}
                                 >
                                 </input>
                             </div>

                             <button className = "btn btn-success" onClick = {(e) => createAppointment(e)} >Confirm</button>
                             <Link to="/A" className="btn btn-danger"> Cancel </Link>
                         </form>

                     </div>
                 </div>
             </div>

        </div>

     </div>
    )
}

export default UpdateDoctor1