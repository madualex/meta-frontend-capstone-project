import React from "react";

const ConfirmedBooking = ({ mystate }) => {
    return (
        <>
            <aside>
                <h1>Your Table has been <span>Confirmed!</span></h1>
                <p className="p__slot">Thank you for for making a table reservation. Kindly check your email for your table reservation details as shown in the summary below</p>
                <h2>Reservation Summary</h2>
                <div className="table__slots">
                    <p>Date: <span className="slot__color">{mystate.selectedDate}</span></p>
                    <p>Time: <span className="slot__color">{mystate.selectedTime}</span></p>
                    <p>Occassion: <span className="slot__color">{ mystate.occassion}</span></p>
                    <p>Guest Expected: <span className="slot__color">{ mystate.guests}</span></p>
                </div>
            </aside>
        </>
    );
};

export default ConfirmedBooking;
