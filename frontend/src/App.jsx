//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Routes, Route } from 'react-router';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Orders from './components/Orders';
import Footer from './components/Footer';
import { Stack } from 'react-bootstrap';

function App() {
  //const [page, setPage] = useState(false);

  return (
    <>
      <Stack gap={5}>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/orders' element={<Orders />} />
        </Routes>
        <Footer/>
      </Stack>
    </>
  )
}

export default App;
