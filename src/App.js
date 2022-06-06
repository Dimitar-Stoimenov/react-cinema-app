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
      </Routes>

      <Footer />
    </>
  );
}

export default App;