import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage'; 
import TeamPage from './pages/TeamPage';
import SigninPage from './pages/SigninPage';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/features" element={<FeaturesPage/>}/>
          <Route path="/team" element={<TeamPage/>}/>
          <Route path="/signin" element={<SigninPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;