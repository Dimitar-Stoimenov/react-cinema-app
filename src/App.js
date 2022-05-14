import './App.css';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Slider />
      <MovieList />
      <Footer />
    </>
  );
}

export default App;