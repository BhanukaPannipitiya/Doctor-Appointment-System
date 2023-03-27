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
                                    <p className="card-text">View all your active appointments at present.</p>
                                    <button className="btn btn-primary">VIEW</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Appointment History</h5>
                                    <p className="card-text">View your appointment history.</p>
                                    <button className="btn btn-info">VIEW</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row my-3">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Create Slots</h5>
                                    <p className="card-text">Fill a form to create your slot time-table according to your convenience.</p>
                                    <button  className="btn btn-success">CREATE</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Show Todays Slots</h5>
                                    <p className="card-text">Display all slots available for today</p>
                                    <button className="btn btn-warning">VIEW</button>
                                </div>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Update Profile</h5>
                                        <p className="card-text">Updte your account details.</p>
                                        <button className="btn btn-danger">UPDATE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default DoctorDashboard