import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Lists from './components/Lists';
import Footer from './components/Footer';
function App() {
  return (
    <div className='app'>
      <nav className='nav'>
        <Navbar />
      </nav>
      <div className='body'>
        <div className='main-body '>
          <Outlet className='body' />
        </div>
        <footer className='footerBox'>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
