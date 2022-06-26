import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';
import Details from './components/Details/Details';
import Create from './components/Create/Create';
import CreateHall from './components/CreateHall/CreateHall';
import CreateProjection from './components/CreateProjection/CreateProjection';
import Program from './components/Program/Program';
import TicketPurchaseMenu from './components/TicketPurchaseMenu/TicketPurchaseMenu';
import CreateSuccess from './components/Create/CreateSuccess/CreateSuccess';
import SeatSelection from './components/TicketPurchaseMenu/SeatSelection/SeatSelection';
import Payment from './components/TicketPurchaseMenu/Payment/Payment';
import Finish from './components/TicketPurchaseMenu/Finish/Finish';
import Declined from './components/TicketPurchaseMenu/Declined/Declined';
import Success from './components/TicketPurchaseMenu/Success/Success';

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/"
          element={
            <>
              <Slider />
              <MovieList />
            </>
          }
        />
        <Route path="/movies/create" element={<Create />} />
        <Route path="/movies/create/success" element={<CreateSuccess />} />
        <Route path="/halls/create" element={<CreateHall />} />
        <Route path="/projections/create" element={<CreateProjection />} />
        <Route path="/movies/:movieId" element={<Details />} />
        <Route path="/projections/program/:date" element={<Program />} />
        <Route path="/projections/id/:projectionId" element={<TicketPurchaseMenu />} />
        <Route path="/projections/id/:projectionId/seat-selection" element={<SeatSelection />} />
        <Route path="/projections/id/:projectionId/payment" element={<Payment />} />
        <Route path="/projections/id/:projectionId/finish" element={<Finish />} />
        <Route path="/projections/id/:projectionId/declined" element={<Declined />} />
        <Route path="/projections/id/:projectionId/success" element={<Success />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;