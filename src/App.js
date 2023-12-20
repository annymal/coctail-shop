import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import SingleCocktails from './pages/SingleCocktails';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/cocktail/:id" element={<SingleCocktails />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
