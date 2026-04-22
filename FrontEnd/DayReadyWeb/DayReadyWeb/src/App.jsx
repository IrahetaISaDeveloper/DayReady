import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginAdmin from './Pages/privateWeb/loginAdmin';
import RegisterUser from './Pages/privateWebregisterUser';
import RecoveryPass from './Pages/privateWebrecoveryPass';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginAdmin />} />
        <Route path="/registro" element={<RegisterUser />} />
        <Route path="/recuperar-contrasena" element={<RecoveryPass />} />
      </Routes>
    </Router>
  );
}

export default App;
