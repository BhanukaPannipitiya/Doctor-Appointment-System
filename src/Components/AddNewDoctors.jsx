import React from 'react'

function AddNewDoctors() {
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
                                <input type="text" id="firstName" className="form-control" placeholder="Doctor's first name" name="firstName"  />
                            </div>
                        </div>
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="lastName" className="col-2 col-form-label">Last Name</label>
                            <div className="col-5">
                                <input type="text" id="lastName" className="form-control" placeholder="Doctor's last name" name="lastName" />
                            </div>
                        </div>
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="email" className="col-2 col-form-label">Email</label>
                            <div className="col-5">
                                <input type="email" id="email" className="form-control" placeholder="e.g. abc@xyz.com" name="email" /><span style={{ color: 'red' }} id='emailVr'></span>
                            </div>
                        </div>
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="dob" className="col-2 col-form-label">Date of Birth</label>
                            <div className="col-5">
                                <input type="date" id="dob" className="form-control" name="dob" />
                            </div>
                        </div>
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="pwd" className="col-2 col-form-label">Password</label>
                            <div className="col-5">
                                <input type="password" id="pwd" className="form-control" placeholder="Enter Password" name="password" /><span style={{ color: 'red' }} id='passwordVr'></span>
                            </div>
                        </div>
                        <div className="form-group row my-3 justify-content-center">
                            <label className="col-2 col-form-label">Gender</label>
                            <div className="col-5 d-flex justify-content-between">
                                <div><input type="radio" id="gender" name="gender" value="MALE"/> Male</div>
                                <div><input type="radio" id="gender" name="gender" value="FEMALE" /> Female</div>
                                <div><input type="radio" id="gender" name="gender" value="OTHER" /> Other</div>
                            </div>
                        </div>
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="mobileNumber" className="col-2 col-form-label">Mobile</label>
                            <div className="col-5">
                                <input type="text" id="mobileNumber" className="form-control" placeholder="Doctor's mobile number" name="mobileNumber" /><span id='mobileNumberVr' style={{ color: 'red' }}></span>
                            </div>
                        </div>

                        
                        <div className="form-group row mt-3 justify-content-center">
                            <label htmlFor="fees" className="col-2 col-form-label">Consultation Fee</label>
                            <div className="col-5">
                                <input type="number" id="fees" min="200" max="1000" step="50" className="form-control" name="fees"  />
                            </div>
                        </div>
                        
                        <div className="form-group row my-3 justify-content-center">
                            <label className="col-2 col-form-label">Specialization</label>
                            <div className="col-5 d-flex justify-content-between">
                                <select style={{ width: "7vw", height: "7vh" }}>
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
                        <button className="btn btn-lg btn-primary text-uppercase  mb-5 offset-6">Submit</button>
                    </form>
                </div>
  )
}

export default AddNewDoctors