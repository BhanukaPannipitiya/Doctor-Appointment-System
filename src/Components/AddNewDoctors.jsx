import React from 'react'
import {useState} from 'react'
import UsersService from '../Services/UsersService'

function AddNewDoctors() {
    const[fname,setfname] =useState('')
    const[Lname,setLname] =useState('')
    const[email,setemail] =useState('')
    const[gender,setgender] =useState('')
    const[mobile,setmobile] =useState('')
    const[fee,setfee] =useState('')
    const[specialization,setspecialization] =useState('')


        const saveUser =(e)=>
 {
         e.preventDefault();
        const user={fname,Lname,email,gender,mobile,fee,specialization}

        UsersService.creatuser(user).then((response)=>{console.log(responce.data)}).catch(error=>{
        console.log('error')
    })

 }
  return (
    <div className="container overflow-hidden" style={{ minHeight: "100vh" }}>
                    <div className="row mt-3">
                        <div className="col-sm-8">
                            <h2 className="text-muted offset-9">Add Doctor</h2>
                        </div>
                        <div className="col-sm-4">
                            <button className="btn btn-secondary text-uppercase offset-8">Go Back</button>
                        </div>
                    </div>
                    <form className="mb-5">
                        
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="firstName" className="col-2 col-form-label">First Name</label>
                            <div className="col-5">
                                <input type="text" id="firstName" className="form-control" placeholder="Doctor's first name" name="firstName" value={fname}  onChange={(e)=>setfname(e.target.value)}/>
                            </div>
                        </div>
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="lastName" className="col-2 col-form-label">Last Name</label>
                            <div className="col-5">
                                <input type="text" id="lastName" className="form-control" placeholder="Doctor's last name" name="lastName" value={Lname} onChange={(e)=>setLname(e.target.value)}/>
                            </div>
                        </div>
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="email" className="col-2 col-form-label">Email</label>
                            <div className="col-5">
                                <input type="email" id="email" className="form-control" placeholder="e.g. abc@xyz.com" name="email" value={email} onChange={(e)=>setemail(e.target.value)}/><span style={{ color: 'red' }} id='emailVr'></span>
                            </div>
                        </div>
                        
                        <div className="form-group row my-3 justify-content-center">
                            <label className="col-2 col-form-label">Gender</label>
                            <div className="col-5 d-flex justify-content-between" value={gender} onChange={(e)=>setgender(e.target.value)}>
                                <div><input type="radio" id="gender" name="gender" /> Male</div>
                                <div><input type="radio" id="gender" name="gender"  /> Female</div>
                                <div><input type="radio" id="gender" name="gender"  /> Other</div>
                            </div>
                        </div>
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="mobileNumber" className="col-2 col-form-label">Mobile</label>
                            <div className="col-5">
                                <input type="text" id="mobileNumber" className="form-control" placeholder="Doctor's mobile number" name="mobileNumber"value={mobile} onChange={(e)=>setmobile(e.target.value)}/><span id='mobileNumberVr' style={{ color: 'red' }}></span>
                            </div>
                        </div>

                        
                        <div className="form-group row mt-3 justify-content-center">
                            <label htmlFor="fees" className="col-2 col-form-label">Consultation Fee</label>
                            <div className="col-5">
                                <input type="number" id="fees" min="200" max="1000" step="50" className="form-control" name="fees" value={fee} onChange={(e)=>setfee(e.target.value)} />
                            </div>
                        </div>
                        
                        <div className="form-group row my-3 justify-content-center">
                            <label className="col-2 col-form-label">Specialization</label>
                            <div className="col-5 d-flex justify-content-between">
                                <select style={{ width: "7vw", height: "7vh" }} value={specialization} onChange={(e)=>setspecialization(e.target.value)}>
                                    <option value="" disabled>--select--</option>
                                    <option value="Physician">Physician</option>
                                    <option value="Covid_Consultant">Covid Consultant</option>
                                    <option value="Dentist">Dentist</option>
                                    <option value="Dermatologist">Dermatologist</option>
                                    <option value="Ophthalmologist">Ophthalmologist</option>
                                    <option value="Gynecologist">Gynecologist</option>
                                    <option value="Psychiatrist">Psychiatrist</option>
                                    <option value="Orthopediologist">Orthopediologist</option>
                                </select>
                            </div>
                        </div>
                        <button className="btn btn-lg btn-primary text-uppercase  mb-5 offset-6"onClick={(e)=>saveUser(e)}>Submit</button>
                    </form>
                </div>
  )
}

export default AddNewDoctors