import React, { Component } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import AvailableDoctors from '../Components/AvailableDoctors'

export default class AvailableDocPg extends Component {
  render() {
    return (
      <div>
        <Header/>
        <AvailableDoctors/>
        <Footer/>
      </div>
    )
  }
}
