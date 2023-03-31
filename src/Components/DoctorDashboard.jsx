import React from 'react'

function DoctorDashboard() {
  return (
    <div className="container">
                    <div className="row my-3">
                        <div className="col-sm-6"><h2 className="text-capitalize">Hello, Dr.</h2></div>
                        <div className="col-sm-6">
                            <button  className="btn btn-link btn-danger text-light offset-10 text-uppercase text-decoration-none " >Logout</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Active Appointments</h5>
                                    <p className="card-text">View all the active appointments at present.</p>
                                    <button className="btn btn-primary"onClick={() => {window.location.href="/currentActiveAppointments"}}>VIEW</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="row my-3">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Schedule Appointments</h5>
                                    <p className="card-text">Fill a form to create your slot time-table according to your convenience.</p>
                                    <button  className="btn btn-success"onClick={() => {window.location.href="/createAppointment"}}>CREATE</button>
                                </div>
                            </div>
                        </div>
                       

                        <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Add doctors</h5>
                                    <p className="card-text">Add new doctors to system</p>
                                    <button className="btn btn-primary"onClick={() => {window.location.href="/Addnewdoctors"}}>Add</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                   
                        
                       
                        <div className="row my-3">
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Update Doctors</h5>
                                        <p className="card-text">Updte your account details.</p>
                                        <button className="btn btn-danger"onClick={() => {window.location.href="/UpdateDoctor2page"}}>UPDATE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default DoctorDashboard