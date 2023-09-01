import React, { useState } from "react";

const BookingForm = ({mystate, mydispatch, formSubmit}) => {

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: "",
    occassion: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(prev => ({
      ...prev,
      date: mystate.selectedDate,
      time: mystate.selectedTime,
      guests: mystate.guests,
      occassion: mystate.occassion
    }))
    formSubmit(formData);
    console.log('data', formData)
  }

  const Disabled = mystate.selectedDate === '' && mystate.selectedTime === '' && mystate.guests === '' && mystate.occassion === ''

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Table reservation form</h2>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={mystate.selectedDate}
          onChange={(e) => mydispatch({ type: 'ANY_DATE', payload: e.target.value })}
          required
        />
        <label for="res-time">Choose time</label>
        <select
          id="res-time"
          value={mystate.selectedTime}
          onChange={(e) => mydispatch({
            type: 'ANY_TIME',
            payload: e.target.value
          })}
          required
        >
          <option value="">Select a time</option>
          {mystate.availableTimes.map((items) => (
            <option key={items} value={items}>{items}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder={mystate.guests}
          min="1"
          max="10"
          id="guests"
          value={mystate.guests}
          onChange={e => mydispatch({ type: 'GUESTS', payload: e.target.value })}
          required
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={mystate.occassion}
          onChange={e => mydispatch({
            type: 'OCCASSION',
            payload: e.target.value
          })}
          required
        >
          <option value=''>Select an occassion</option>
          {mystate.occassions.map(i => <option key={i.value} value={i.value}>{i.label}</option>)}
        </select>
        <button disabled={Disabled} type="submit" aria-label="On Click">Make Your reservation</button>
        {/* <input disabled={Disabled} type="submit" value="Make Your reservation" /> */}
      </form>
    </>
  );
};

export default BookingForm;
