import './App.css';
//import Button from './components/Button';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePages from './pages/HomePages';
import RegisterPage from './pages/RegisterPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ConfigurationsPage from './pages/ConfigurationsPage';
import MyAccountPage from './pages/MyAccountPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>} />
        <Route path='/home' element={<HomePages/>}/>
        <Route path='/register' element= {<RegisterPage/>}/>
        <Route path='/my-account' element= {<MyAccountPage/>}/>
        <Route path='/configurations' element= {<ConfigurationsPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
