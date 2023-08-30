import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './pages/BookingForm';
import App from './App';
import BookingPage, { initialState } from './pages/BookingPage';
import BookingSlot from './pages/ConfirmedBooking';

// test('renders header for app page', () => {
//   render(<App />);
//   const headerElement = screen.getByText(/Hello World/i);
//   expect(headerElement).toBeInTheDocument();

// });
afterEach(cleanup)

test('Renders the Booking Form Heading', () => {
  const times1 = "17:00";
  render(
    <BookingPage>
      < BookingForm />
    </BookingPage>);

  const headerInput = screen.getByText("Table reservation form")
  expect(headerInput).toBeInTheDocument();

  // const dateInput = screen.getByLabelText(/Choose date/);
  // const timeInput = screen.getByLabelText(/Choose time/);
  // fireEvent.change(dateInput);
  // fireEvent.change(timeInput, {target: {value: times1}})

  // expect(optionInput).toHaveContent(times1)
})



describe('test the reducer function', () => {
  test('it should return the initial state', () => {
    // render(<BookingPage />);
    expect(initialState).not.toEqual({
      selectedDate: '',
      availableTimes: [
        { label: "17:00", value: "17:00" },
        { label: "20:00", value: "20:00" },
        { label: "21:00", value: "21:00" },
        { label: "22:00", value: "22:00" },
      ],
      selectedTime: '',
      occassions: [
        { label: "Birthday", value: "Birthday" },
        { label: "Anniversary", value: "Anniversary" },
        { label: "Induction", value: "Induction" },
      ],
      selectedOccassion: '',
      guests: 1
    })
  })

  test('returns the same value as in the intital state when user selects a date', () => {
    expect(updateTimes(initialState, action.type = 'ANY_TIME')).toEqual({
      selectedDate: action.payload,
      availableTimes: [
        { label: "17:00", value: "17:00" },
        { label: "18:00", value: "18:00" },
        { label: "19:00", value: "19:00" },
        { label: "20:00", value: "20:00" },
        { label: "21:00", value: "21:00" },
        { label: "22:00", value: "22:00" },
      ],
      selectedTime: '',
      occassions: [
        { label: "Birthday", value: "Birthday" },
        { label: "Anniversary", value: "Anniversary" },
        { label: "Induction", value: "Induction" },
      ],
      selectedOccassion: '',
      guests: 1
    })
  })
})

