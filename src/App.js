import './App.css';
import Button from './components/Button';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePages from './pages/HomePages';
import RegisterPage from './pages/RegisterPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Home' element={<HomePages/>}/>
        <Route path='/register' element= {<RegisterPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
