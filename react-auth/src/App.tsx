import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home';
import About from './ui/About';
import Profile from './features/profile/Profile';
import Signin from './features/sign-in/Signin';
import Signup from './features/sign-up/Signup';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import Loader from './ui/Loader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/sign-in',
        element: <Signin />,
      },
      {
        path: '/sign-up',
        element: <Signup />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<Loader />} />;
}

export default App;
// 23:07
