import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Nav from './components/Nav';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/booking' element={<BookingPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
