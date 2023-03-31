import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';

import AppointmentService from '../Service/AppointmentService';
import DocService from '../Service/DocService';

const UpdateDoctorComponent = () => {

    const[firstName,setFirstName] = useState("");
    const[lastName,setLastName] = useState("");
    const[specialty,setSpecialty] = useState("");
    const[consultantFee,setConsultantFee] = useState("");
    const[phoneNumber,setPhoneNumber] = useState("");
    const[email,setEmail] = useState("");
    const[gender,setGender] = useState("");
    const{id}=useParams();
    const history = useHistory();


  const updatedoctor = (e) => {
        e.preventDefault();

        const doctor = {firstName,lastName,specialty,consultantFee,phoneNumber,email,gender}

       
             DocService.updateDoctor(id,doctor).then((response) =>{

                history.push('/A');

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
            setConsultantFee(appointment.consultantFee);
            setPhoneNumber(appointment.phoneNumber);
            setGender(appointment.gender);
            setEmail(appointment.email);
            
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
                                 <label className = "form-label"> Phone Number :</label>
                                 <input
                                     type = "setPhoneNumber"
                                     placeholder = "Phone Number"
                                     name = "setPhoneNumber"
                                     className = "form-control"
                                     value = {phoneNumber}
                                        onChange = {(e) => setPhoneNumber(e.target.value)}
                                 >
                                 </input>
                             </div>
                             <div className = "form-group mb-2">
                                 <label className = "form-label"> Gender:</label>
                                 <input
                                     type = "gender"
                                     placeholder = "Your Gender"
                                     name = "gender"
                                     className = "form-control"
                                     value = {gender}
                                        onChange = {(e) => setGender(e.target.value)}
                                 >
                                 </input>
                             </div>
                             <div className = "form-group mb-2">
                                 <label className = "form-label"> Email :</label>
                                 <input
                                     type = "email"
                                     placeholder = "Email"
                                     name = "email"
                                     className = "form-control"
                                     value = {email}
                                        onChange = {(e) => setEmail(e.target.value)}
                                 >
                                 </input>
                             </div>
                            

                             <button className = "btn btn-success" onClick = {(e) => updatedoctor(e)} >Update</button>
                             <Link to="/A" className="btn btn-danger"> Cancel </Link>
                         </form>

                     </div>
                 </div>
             </div>

        </div>

     </div>
    )
}

export default UpdateDoctorComponent