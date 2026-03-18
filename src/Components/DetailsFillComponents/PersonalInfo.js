import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import ProfilePicUploadComponent from './ProfileUpload'
import {stateNames} from '../Data/Data'
import TextField from '../InputComponents/TextField'
import TextArea from '../InputComponents/TextArea'
import BottomNavigation from './BottomNavigation'
import { updatePersonalInfo, updateErrorMessages } from '../../ReduxManager/dataStoreSlice'

//this component renders Personal Info page inside the details filling page.
function PersonalInfo(props) {
  const personalHeads= useSelector(state => state.dataStore.personalInfo) //this state is used to store personalInfo object of dataStoreSlice.
  const dispatch = useDispatch();
  const onChangeHandler= (key,value,errorMessage=undefined) =>{
    //this function is called each time when the user provides input to the targeted'TextField'
    dispatch(updatePersonalInfo({
      //this function updates the targeted key of the personalInfo element of dataStore in dataStoreSlice.js //
      key: key,
      value:value
   }))
   if(errorMessage!==undefined){
      dispatch(updateErrorMessages({
        // this function is called each time when there is a validatin check applied on the 'TextField' component and it inserts án object {key: errorMessage} into the errorMessages of dataStoreSlice.
        key:key,
        value:errorMessage
      }))
    }
  }
  return (
  <div style={{
    background: "#f5f7fa",
    padding: "30px",
    minHeight: "100vh"
  }}>

    <div style={{
      background: "white",
      padding: "30px",
      borderRadius: "16px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
    }}>

      {/* Title */}
      <h3 style={{ marginBottom: "25px", fontWeight: "600" }}>
        Personal Information
      </h3>

      {/* Profile */}
      <div style={{ marginBottom: "20px" }}>
        <ProfilePicUploadComponent />
      </div>

      {/* Row 1 */}
      <div className="row">
        <div className="col-md-6 mb-3">
          <label>First Name*</label>
          <TextField
            type="text"
            elementId="firstname"
            placeholder="First name"
            value={personalHeads.firstName}
            onChange={(value, errorMessage) => {
              onChangeHandler('firstName', value, errorMessage)
            }}
            validation={{ required: true }}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>Last Name</label>
          <TextField
            type="text"
            elementId="lastname"
            placeholder="Last name"
            value={personalHeads.lastName}
            onChange={(value) => onChangeHandler('lastName', value)}
          />
        </div>
      </div>

      {/* Email */}
      <div className="row">
        <div className="col-md-6 mb-3">
          <label>Email*</label>
          <TextField
            type="text"
            elementId="staticEmail"
            placeholder="users@example.com"
            validation={{ checkType: 'email', required: true }}
            value={personalHeads.Email}
            onChange={(value, errorMessage) => {
              onChangeHandler('Email', value, errorMessage)
            }}
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="row">
        <div className="col-md-6 mb-3">
          <label>Mobile No.*</label>
          <TextField
            type="number"
            elementId="Mobile"
            validation={{ maxLengthRequired: 10, required: true }}
            value={personalHeads.Mobile}
            onChange={(value, errorMessage) => {
              onChangeHandler('Mobile', value, errorMessage)
            }}
          />
        </div>
      </div>

      {/* Address */}
      <div className="row">
        <div className="col-md-6 mb-3">
          <label>Address 1</label>
          <TextField
            type="text"
            elementId="inputAddress1"
            value={personalHeads.Address1}
            onChange={(value) => onChangeHandler('Address1', value)}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>Address 2</label>
          <TextField
            type="text"
            elementId="inputAddress2"
            value={personalHeads.Address2}
            onChange={(value) => onChangeHandler('Address2', value)}
          />
        </div>
      </div>

      {/* City */}
      <div className="row">
        <div className="col-md-6 mb-3">
          <label>City*</label>
          <TextField
            type="text"
            elementId="inputCity"
            validation={{ required: true }}
            value={personalHeads.City}
            onChange={(value, errorMessage) => {
              onChangeHandler('City', value, errorMessage)
            }}
          />
        </div>
      </div>

      {/* State */}
      <div className="row">
        <div className="col-md-6 mb-3">
          <label>State</label>
          <select
            className="form-control"
            value={personalHeads.State}
            onChange={(e) => {
              dispatch(updatePersonalInfo({
                key: 'State',
                value: e.target.value
              }))
            }}
          >
            <option>Select State</option>
            {stateNames.map((state, i) => (
              <option key={i} value={state}>{state}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Pincode */}
      <div className="row">
        <div className="col-md-6 mb-3">
          <label>Pincode</label>
          <TextField
            type="number"
            elementId="pin"
            value={personalHeads.Pin}
            onChange={(value) => onChangeHandler('Pin', value)}
          />
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation {...props} />

    </div>
  </div>
)
}

export default PersonalInfo
