import React from 'react'
import DoctorCurrentAppointments from '../Components/DoctorCurrentAppointments'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function CurrentActiveAppointments() {
  return (
    <div>
        <Header/>
        <DoctorCurrentAppointments/>
        <Footer/>
    </div>
  )
}

export default CurrentActiveAppointments