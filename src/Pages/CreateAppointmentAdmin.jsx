import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import DoctorListForAdmin from '../Components/DoctorListForAdmin'


function CreateAppointmentAdmin() {
  return (
    <div>
      <Header/>
      <DoctorListForAdmin/>
      
      <Footer/>
    </div>
  )
}

export default CreateAppointmentAdmin