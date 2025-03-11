import './App.css';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import MainNavBar from './Header/MainNavBar';
import Maine from './Maine/Maine';
import Bookingpage from './Bookingpage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './Store/Store';
import { Provider } from 'react-redux';



function App() {
  const router = createBrowserRouter([
    {
      path: "/",  
      element: <MainNavBar/>,
      errorElement: <><h1> Something wrong </h1></>,
      children: [
        {
          path: "/",
          element: <Maine />,
        },
        {
          path: "/Bookingpage",
          element: <Bookingpage/>,
        },
        
      ],
    },
  ]);

  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>  
  );
}

export default App;
