import React from 'react'

function BookAppointment() {
  return (
    <div>
         <div className="container my-4">
                <button className="btn btn-secondary my-2 offset-10" style={{minWidth: "13vw"}}>Back To Dashboard</button>
                    <h3>Confirm Appointment</h3>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-light">
                            <tr>
                                <th className="visually-hidden">Patient ID</th>
                                <th>Patient Name</th>
                                <th>Doctor Name</th>
                                <th>Area</th>
                                <th>Consultaion Fee</th>
                                <th>Specialization</th>
                                <th>Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="visually-hidden">1</td>
                                <td>Bhanuka</td>
                                <td>SAKURA OOO</td>
                                <td>DOnt Know</td>
                                <td>1500</td>
                                <td>None</td>
                                <td>2012.2.12 04.00</td>
                                <td>
                                    <button className="btn btn-success">Confirm</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    </div>
  )
}

export default BookAppointment