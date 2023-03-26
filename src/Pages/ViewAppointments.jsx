import React from 'react'
import CurrentAppointments from '../Components/CurrentAppointments'
import PatientDashboard from '../Components/PatientDashboard'

function ViewAppointments() {
  return (
    <div className='body'>
        <PatientDashboard/>
        <CurrentAppointments/>
    </div>
  )
}

export default ViewAppointments