import './App.css'
import Book from './components/book/Book';
import Gallery from './components/gallery/Gallery';
import About from './components/about/About';
import Home from './components/home/Home';
import Layout from './layout/Layout';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout><Home/></Layout>}/>
        <Route path='/about' element={<Layout><About/></Layout>}/>
        <Route path='/gallery' element={<Layout><Gallery/></Layout>}/>
        <Route path='/book' element={<Layout><Book/></Layout>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;


