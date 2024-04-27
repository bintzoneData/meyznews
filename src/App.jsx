import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Lists from './components/Lists';
import Footer from './components/Footer';
function App() {
  return (
    <div className='App'>
      <nav className='nav'>
        <Navbar />
      </nav>
      <Outlet className='body' />
      <Footer />
    </div>
  );
}

export default App;
