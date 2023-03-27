import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function ScheduleAppointment() {
    const [date, setDate] = React.useState(new Date())
  return (
    <div className="container overflow-hidden" style={{ minHeight: "100vh" }}>
                    <div className="row mt-3">
                        <div className="col-sm-8">
                            <h2 className="text-muted offset-8">Create Your Slots</h2>
                        </div>
                        <div className="col-sm-4">
                            <button className="btn btn-secondary text-uppercase offset-8" >Go Back</button>
                        </div>
                    </div>
                    <form>
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="startTime" className="col-2 col-form-label">Start Time</label>
                            <div className="col-5">
                                <input type="time" id="startTime" className="form-control" name="startTime" />
                            </div>
                        </div>

                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="endTime" className="col-2 col-form-label">End Time</label>
                            <div className="col-5">
                                <input type="time" id="endTime" className="form-control" name="endTime" />
                            </div>
                        </div>

                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="slotDuration" className="col-2 col-form-label">Number Slots</label>
                            <div className="col-5">
                                <input type="number" id="slotDuration" min="15" max="30" className="form-control" name="slotDuration"  />
                            </div>
                        </div>

                       

                        <div className="form-group row my-3 justify-content-center">
                            <label className="col-2 col-form-label">Select Dates</label>
                            <div className="col-5">
                                <Calendar onChange={setDate} value={date}/>
                            </div>
                        </div>
                        <button className="btn btn-lg btn-primary text-uppercase mt-3 mb-5 offset-6" >Submit</button>
                    </form>
                </div>
  )
}

export default ScheduleAppointment