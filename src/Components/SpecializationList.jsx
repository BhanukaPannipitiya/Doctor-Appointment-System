import React from 'react'

function SpecializationList() {
  return (
    <div className="container overflow-hidden">
                    <div className="row my-3">
                        <div className="col-sm-10">
                            <h3 className="text-muted offset-6">Select Specialization</h3>
                        </div>
                        <div className="col-sm-2">
                            <button className="btn btn-secondary text-uppercase offset-4">Go Back</button>
                        </div>
                    </div>
                    <form>
                        <div className="form-group row mt-3 justify-content-center">
                            <div className="col-5">
                                <input type="text" id="city" className="form-control" name="city" />
                            </div>
                        </div>
                        <button className="btn btn-primary mt-3 offset-6" >Search</button>
                    </form>

                 <table className="table my-3">
                        <tbody>
                            
                                
                                        <tr>
                                            <td><ul><li>
                                                <h4 className="btn btn-lg btn-outline-secondary text-decoration-none">
                                                    nEUROLOGY
                                                </h4>
                                            </li></ul></td>
                                        </tr>
                                
                            
                        </tbody>
                    </table>

                </div>
  )
}

export default SpecializationList