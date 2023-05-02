import './App.css';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import Home from '../Home/Home';
import Popular from '../Popular/Popular';
import Battle from '../Battle/Battle';
import Results from '../Results/Results';
import  Nav from '../../Nav';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav></Nav>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "popular",
        element: <Popular />
      },
      {
        path: "battle/results",
        element: <Results />
      },
      {
        path: "battle",
        element: <Battle />
      }
    ]
  }
  
]) 
function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App;
