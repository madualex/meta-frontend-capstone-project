// import React, { useReducer, useState } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { submitAPI } from '../api';
import BookingForm from './BookingForm'



const BookingPage = ({mystate, mydispatch}) => {

  // i want a scenario where the when a date changes, the available times listed also changes
  // to do this, i must find a way to pass the date selected as a parameter to the fetch api

  const navigate = useNavigate();

  const submitForm = (items) => {
    if (submitAPI(items)) {
      navigate('/table-confirmation')
    }
  }


  return (
    <>
      <div className=''>
        <BookingForm mystate={mystate} mydispatch={mydispatch} formSubmit={submitForm} />
      </div>
    </>
  )

}

export default BookingPage




// For running you need to go next way:

// const sDate = new Date().toISOString().split('T')[0]

// fetchAPI(new Date(sDate))
//   .then(response => JSON.parse(response))
//   .then(availableTimes => dispatch({ type: 'initializeTimes', availableTimes: availableTimes }))