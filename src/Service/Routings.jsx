import React from 'react'

function Routings() {
  return (
    <div>
      <Router>
        <Header />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={SpecializationList} />
          </Switch> 
        </div>
      </Router> 
      
    </div>
  )
}

export default Routings