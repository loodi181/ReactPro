import React from 'react'
import {Footer, Header, Possibility, Blog, Whatgpt, Features} from './containers'
import { Brand, Cta, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
          <Navbar />
          <Header />
      </div>
      <Brand />
      <Whatgpt />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
