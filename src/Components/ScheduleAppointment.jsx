import React from 'react'

function ScheduleAppointment() {
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
                            <label htmlFor="startDate" className="col-2 col-form-label">Start Date</label>
                            <div className="col-5">
                                <input type="date" id="startDate" className="form-control" name="startDate" />
                            </div>
                        </div>

                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="endDate" className="col-2 col-form-label">End Date</label>
                            <div className="col-5">
                                <input type="date" id="endDate" className="form-control" name="endDate" />
                            </div>
                        </div>

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
                            <label htmlFor="slotDuration" className="col-2 col-form-label">Slot Duration</label>
                            <div className="col-5">
                                <input type="number" id="slotDuration" min="15" max="30" className="form-control" name="slotDuration"  />
                            </div>
                        </div>

                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="breakTime" className="col-2 col-form-label">Break Time</label>
                            <div className="col-5">
                                <input type="time" id="breakTime" className="form-control" name="breakTime"  />
                            </div>
                        </div>

                        <div className="form-group row my-3 justify-content-center">
                            <label className="col-2 col-form-label">Holidays</label>
                            <div className="col-5">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="0" name="holidays" value="0"  />
                                    <label className ="form-check-label" htmlFor="0">
                                    Sunday
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="1" name="holidays" value="1"  />
                                    <label className ="form-check-label" htmlFor="1">
                                    Monday
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="2" name="holidays" value="2"   />
                                    <label className ="form-check-label" htmlFor="2">
                                    Tuesday
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="3" name="holidays" value="3"  />
                                    <label className ="form-check-label" htmlFor="3">
                                    Wednesday
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="4" name="holidays" value="4"  />
                                    <label className ="form-check-label" htmlFor="4">
                                    Thursday
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="5" name="holidays" value="5" />
                                    <label className ="form-check-label" htmlFor="5">
                                    Friday
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="6" name="holidays" value="6"  />
                                    <label className ="form-check-label" htmlFor="6">
                                    Saturday
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-lg btn-primary text-uppercase mt-3 mb-5 offset-6" >Submit</button>
                    </form>
                </div>
  )
}

export default ScheduleAppointment