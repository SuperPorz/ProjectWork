import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Routes, Route } from 'react-router';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Orders from './components/Orders';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column' 
    }}>
      <Header />
      <main style={{ flex: '1' }}>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/orders' element={<Orders />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;