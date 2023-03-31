import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import ShowCurrentAppointments from '../Components/ShowCurrentAppointments'

function CurrentAppointment() {
  return (
    <div>
        <Header/>
        <ShowCurrentAppointments/>
        <Footer/>
    </div>
  )
}

export default CurrentAppointment