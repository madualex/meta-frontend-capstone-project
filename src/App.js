import { useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { fetchAPI } from './api';
import './App.css';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Nav from './components/Nav';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';

function App() {

  const initialState = {
    selectedDate: '',
    availableTimes: fetchAPI(new Date()),
    selectedTime: '',
    occassions: [
      { label: "Birthday", value: "Birthday" },
      { label: "Anniversary", value: "Anniversary" },
      { label: "Induction", value: "Induction" },
    ],
    occassion: '',
    guests: 1,
    isdatecreated: false,
  }

  const updateTimes = (state, action) => {
    switch (action.type) {
      case 'ANY_DATE':
        return { ...state, selectedDate: action.payload, availableTimes: fetchAPI(new Date()) }

      case 'ANY_TIME':
        return { ...state, selectedTime: action.payload }

      case 'OCCASSION':
        return { ...state, occassion: action.payload }
      case 'GUESTS':
        return { ...state, guests: action.payload }

      default: return state;
    }
  }

  const [state, dispatch] = useReducer(updateTimes, initialState);

  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/booking' element={<BookingPage mystate={state} mydispatch={dispatch} />} />
          <Route path='/table-confirmation' element={<ConfirmedBooking mystate={state} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
