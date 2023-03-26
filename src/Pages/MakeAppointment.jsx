import React from 'react'
import AddAppointment from '../Components/AddAppointment'
import PatientDashboard from '../Components/PatientDashboard'
import './MakeAppointment.css'

function MakeAppointment() {
  return (
    <div className='body'>
        <PatientDashboard/> 
        <AddAppointment/>
    </div>
  )
}

export default MakeAppointment