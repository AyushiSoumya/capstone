import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Signin } from './signin'; // Import the named export
import { Register } from './register'; // Import the named export
import { LandingPage } from './landing';
import Courts from './courts';
import RolesPage from './roles';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} /> {/* Use the element prop */}
          <Route path="/register" element={<Register />} /> {/* Use the element prop */}
          <Route path="/landing" element={<LandingPage />} /> {/* Use the element prop */}
          <Route path="/courts" element={<Courts />} /> {/* Use the element prop */}
          <Route path="/roles" element={<RolesPage />} /> {/* Use the element prop */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
