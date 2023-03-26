import React from 'react'

function DoctorListForPatient() {
  return (
    <div className="container my-4">
                    <h2 className="text-center">Doctor List</h2>
                    <form>
                        <div className="form-group row mt-3 justify-content-center">
                            <div className="col-5">
                                <input type="text" id="city" className="form-control" name="city" />
                            </div>
                        </div>
                        <button className="btn btn-primary mt-3 offset-6" >Search</button>
                    </form>
                    <br />
                    
                    <table className="table table-bordered">
                        <thead className="bg-dark text-light">
                            <tr>
                                <th className="visually-hidden">Id</th>
                                <th>Name</th>
                                <th>Specialization</th>
                                <th>Consultation Fee</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                
                                        <tr>
                                            <td className="visually-hidden">1</td>
                                            <td>Bhanuja</td>
                                            <td>Nuro</td>
                                            <td>1200</td>
                                            <td>
                                                <button className="btn btn-success btn-link text-decoration-none text-light">Book Appointment</button>
                                            </td>
                                        </tr>
                                
                            
                        </tbody>
                    </table>
                </div>
  )
}

export default DoctorListForPatient