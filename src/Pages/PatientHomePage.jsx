import React from 'react'
import PatientDashboard from '../Components/PatientDashboard'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function PatientHomePage() {
  return (
    <div>
     <Header/>
     <PatientDashboard/>
     <Footer/>
    </div>
  )
}

export default PatientHomePage