import React from 'react'

function AppointmentSlots() {
  return (
    <div className="container">
    <button className="btn btn-secondary offset-11 mt-3" style={{minWidth:"7vw"}} >Go Back</button>
        <h3 className="bg-dark text-light py-2 mt-3 text-center">Today's Available Slots</h3>
                              
            <div className="container d-flex justify-content-around">
                <div>
                    
            
                                <button  className="btn btn-success my-3 mx-3 btn-link text-decoration-none text-light" style={{minWidth:"7vw"}}>
                                    2011.12.12 22.00pm
                                </button>
                       
                    
                </div>
            </div>
    </div>
  )
}

export default AppointmentSlots