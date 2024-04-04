import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage'
import CreateEmployee from './pages/CreateEmployee'
import CurrentEmployees from './pages/CurrentsEmployees';
import App from './App';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <CreateEmployee />
        },
        {
          path: "new",
          element: <CreateEmployee />,
        },
        {
          path: "currents",
          element: <CurrentEmployees />,
        }
      ]
    },
  ]);