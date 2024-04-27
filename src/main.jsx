import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { MainProvider } from './context/MainContext.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './screens/home/Home.jsx';
import News from './screens/news/News.jsx';
import Sports from './screens/sports/Sports.jsx';
import Culture from './screens/culture/Culture.jsx';
import About from './screens/about/About.jsx';
import View from './screens/view/View.jsx';
import NotFound from './components/NotFound.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='/news' element={<News />} />
      <Route path='/sports' element={<Sports />} />
      <Route path='/culture' element={<Culture />} />
      <Route path='/about' element={<About />} />
      <Route path='/view/:type/:id' element={<View />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <MainProvider>
    <RouterProvider router={router} />
  </MainProvider>
);
