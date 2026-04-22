import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginAdmin from './Pages/loginAdmin';
import RegisterUser from './Pages/registerUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginAdmin />} />
        <Route path="/registro" element={<RegisterUser />} />
      </Routes>
    </Router>
  );
}

export default App;
