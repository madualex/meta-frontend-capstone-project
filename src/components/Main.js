// import React, { useReducer, useState } from 'react'
import React from 'react'
import BookingForm from '../pages/BookingForm';


const Main = () => {

    return (
        <main>
            <BookingForm />
        </main>
    )

}

export default Main




// For running you need to go next way:

// const sDate = new Date().toISOString().split('T')[0]

// fetchAPI(new Date(sDate))
//   .then(response => JSON.parse(response))
//   .then(availableTimes => dispatch({ type: 'initializeTimes', availableTimes: availableTimes }))