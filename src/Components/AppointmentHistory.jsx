import React from 'react'

function AppointmentHistory() {
  return (
    <div className="container my-4">
                    <button className="btn btn-secondary offset-11" >Go Back</button>
                    
                        //this.state.appointments.length === 0 ? <h3>You have no appointment history</h3> :
                            <div>
                                <h3>Your Appointment History</h3>
                                <table className="table table-bordered">
                                    <thead className="bg-dark text-light">
                                        <tr>
                                            <th>S. No.</th>
                                            <th>Date</th>
                                            <th>Time</th>
                                            <th>Appointment Type</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                            
                                                <tr>
                                                    <td>1</td>
                                                    <td>2022.3.00</td>
                                                    <td>23.00</td>
                                                    <td>Cardiology</td>
                                                    <td><button className="btn btn-info btn-link text-dark text-decoration-none offset-1">Doctor Details</button>
                                                    </td>
                                                </tr>
                                        
                                        

                                    </tbody>
                                </table>
                            </div>
                </div>
  )
}

export default AppointmentHistory