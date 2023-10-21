import React from 'react';
import './App.css';
import TableComponent from './components/TableComponent';
import BarChartComponent from './components/BarChartComponent';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import DetailsComponent from './components/DetailsComponent';
function App() {
  return (
    <div className='app-container'>
      <Router> 
        <div> 
            <div className="header-container"> 
            <div className='link-header'> 
                <Link to="/" className='link-item'>Home</Link> 
            </div> 
            <div className='link-header'> 
                <Link to="/graph" className='link-item'>Graph</Link> 
            </div> 
            </div> 
          <Routes> 
                <Route exact path='/' element={< TableComponent />}></Route> 
                <Route exact path='/graph' element={< BarChartComponent />}></Route> 
                <Route exact path='/details' element={< DetailsComponent />}></Route>
          </Routes> 
        </div> 
      </Router>   
    </div>
  );
}

export default App;
