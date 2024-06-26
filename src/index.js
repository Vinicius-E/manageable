import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/Home/HomePage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MonthlyStatementPage from './pages/MonthlyStatement/MonthlyStatementPage';
import ErrorPage from './pages/Error/ErrorPage';

// 1 configurando router
/* const router = createBrowserRouter([
  { path: '/', element: <App/> },
  { path: '/home', element: <HomePage/> },
  { path: '/monthlyStatement', element: <MonthlyStatementPage/> },
]); */
const router = createBrowserRouter([
  { 
    path: '/', 
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [    
      { 
        path: '/', 
        element: <HomePage/> 
      },
      {
        path: '/monthlyStatement', 
        element: <MonthlyStatementPage/> 
      },      
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
