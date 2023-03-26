import React from 'react'

function ShowCurrentAppointments() {
  return (
    <div className="container my-4">
                <button className="btn btn-secondary offset-11" >Go Back</button>
                  <h3>You have no current appointments</h3> :
                        <div>
                            <h3>Your Active Appointments</h3>
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
                                                    <td>2011.2.03 </td>
                                                    <td>22.00</td>
                                                    <td>Neurology</td>
                                                    <td>
                                                 <button className="btn btn-info btn-link text-dark text-decoration-none">Doctor Details</button>
                                                 <button className="btn btn-danger mx-1" >Cancel</button>

                                                    </td>
                                                </tr>
                                        
                                    
                                </tbody>
                            </table>
                        </div>
                    
                </div>
  )
}

export default ShowCurrentAppointments