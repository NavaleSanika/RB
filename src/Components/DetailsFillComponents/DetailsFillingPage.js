import React from 'react'
import {Link, Routes, Route} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PersonalInfo from './PersonalInfo'
import WorkEx from './WorkEx'
import Education from './Education'
import KeySkills from './KeySkills'
import { updateState } from '../../ReduxManager/dataStoreSlice' 

function DetailsFillingPage() {
  const dispatch = useDispatch()
  //errorMessages variable store all the error messages passed from TextField while checking the validation of details filled by the user//
  const errorMessages = useSelector(state=>state.dataStore.errorMessages)

  let isFormValid = true
  //this 'for loop' checks whether there is any error Message in the errorMessages or not and if it finds any ,it will return the value of 'isFormValid' as 'false' otherwise it will not show any warning message.//
  for(let key in errorMessages){
    if(errorMessages[key] !==""){
      isFormValid=false
      break
    }
  }

  const onSideNavLinkClick=()=>{
    //this function stops the users from navigating to different page by accessing sideNavbar if they hadn't filled the details of existing page correctly//
    //if 'isFormValid' is true i.e when there is no messages in the 'errorMessages' then user can navigate to other page ,otherwise it will show alert and warningMessages on the screen// 
    if(!isFormValid){
        alert('Please fill all the necessary details correctly!') //this alert is shown on the window when the 'isFormValid' is false.
        dispatch(updateState({    //this dispatch functions update the value of 'showErrorMessages' as true, which will be used by 'TextField' component to display warning Message beneath each of the 'TextField' where some kind of validation is required.
          key:'showErrorMessages',
          value:true
        }))
    }
    else if(isFormValid){
      dispatch(updateState({
        key:'showErrorMessages',
        value:false
      }))
    }
}
  const linkStyle = {
  display: "block",
  padding: "10px",
  borderRadius: "8px",
  textDecoration: "none",
  color: "#333",
  fontWeight: "500"
};
  return (
    
  <div style={{ background: "#f5f7fa", minHeight: "100vh", padding: "20px" }}>

    <div className="container" style={{ maxWidth: "1200px" }}>
      <div className="row" style={{ minHeight: "100vh" }}>

        {/* Sidebar */}
        <div className="col-lg-3 col-12 mb-3">
          <div style={{
            background: "white",
            padding: "15px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
          }}>

            <div style={{ marginBottom: "10px" }} onClick={onSideNavLinkClick}>
              <Link to={isFormValid ? "/detailsfillingpage/personalinfo" : '#'}
                style={linkStyle}>
                Personal Info
              </Link>
            </div>

            <div style={{ marginBottom: "10px" }} onClick={onSideNavLinkClick}>
              <Link to={isFormValid ? "/detailsfillingpage/workex" : '#'}
                style={linkStyle}>
                Work Experience
              </Link>
            </div>

            <div style={{ marginBottom: "10px" }} onClick={onSideNavLinkClick}>
              <Link to={isFormValid ? "/detailsfillingpage/education" : '#'}
                style={linkStyle}>
                Education
              </Link>
            </div>

            <div onClick={onSideNavLinkClick}>
              <Link to={isFormValid ? "/detailsfillingpage/keyskills" : '#'}
                style={linkStyle}>
                Key Skills
              </Link>
            </div>

          </div>
        </div>

        {/* Content */}
        <div className="col-lg-9 col-12">
          <div style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
          }}>

            <Routes>
              <Route path="/personalinfo"
                element={<PersonalInfo isFormValid={isFormValid} />} />

              <Route path="/workex"
                element={<WorkEx isFormValid={isFormValid} />} />

              <Route path="/education"
                element={<Education isFormValid={isFormValid} />} />

              <Route path="/keyskills"
                element={<KeySkills isFormValid={isFormValid} />} />
            </Routes>

          </div>
        </div>

      </div>
    </div>

  </div>
)
}

export default DetailsFillingPage
