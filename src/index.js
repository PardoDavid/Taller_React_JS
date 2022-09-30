import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './pages/Principal/Index';
import DashB from './pages/Dashboard/Dashboard';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Router>           
        <Routes>
            <Route path="/Index" element={<Index />}>                                   
            </Route>      
            <Route path="/dashboard" element={<DashB /> }>                                                    
            </Route>
        </Routes>            
</Router>
      


  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
