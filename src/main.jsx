import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';
import AppliedJob from './components/AppliedJob/AppliedJob';
import appliedJobLoader from './components/loader/appliedJobLoader';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('/featuredJobs.json')
      },
      {
        path: '/jobDetails/:id',
        element: <JobDetails></JobDetails>,
        loader: ({params})=> fetch(`/${params.id}.json`)
      },
      {
        path: '/applied-jobs',
        element: <AppliedJob></AppliedJob>,  
        loader: appliedJobLoader,    
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/blog',
        element:<Blog></Blog>,    
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
