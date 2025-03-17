import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePages from './pages/HomePages';
import RegisterPage from './pages/RegisterPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePages/>}/>
        <Route path='/register' element= {<RegisterPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
