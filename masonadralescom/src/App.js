import './App.css';
import Navbar from './components/Navbar';
import { GlobalStyle } from './GlobalStyle';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => (
  <Router>
        <Navbar/>
        {/* <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:movieId' element={<Movie/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes> */}
        <GlobalStyle/>
  </Router>
);

export default App;
