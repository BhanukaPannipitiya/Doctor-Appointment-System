import React from 'react'
import './PatientDashboard.css'


function PatientDashboard() {
  return (
    <div className="container container-wide">
                    <div className="row my-3">
                        <div className="col-sm-6"><h2 className="text-capitalize">Hello, Bhanuka</h2></div>
                        <div className="col-sm-6">
                            <div className="btn btn-link btn-danger text-light offset-10 text-uppercase text-decoration-none ">Logout</div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Book Appointment</h5>
                                    <p className="card-text">Book appointments with best doctors in city.</p>
                                    <button className="btn btn-primary">Book</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Show Current Appointment</h5>
                                    <p className="card-text">View your current appointment.</p>
                                    <button  className="btn btn-warning">View</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row my-3">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">View Appointment History</h5>
                                    <p className="card-text">Click to view your till date appointment history.</p>
                                    <button className="btn btn-info">View</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Update Profile</h5>
                                    <p className="card-text">Edit your account details.</p>
                                    <button className="btn btn-success">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default PatientDashboard