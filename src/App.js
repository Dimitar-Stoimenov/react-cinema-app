import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';
import Details from './components/Details/Details';

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
        <Route path="/movies/:movieId" element={<Details />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;