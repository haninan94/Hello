import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Live from './pages/Live/Live';
import Review from './pages/Review/Review';
import Animal from './pages/Animal/Animal';
import AnimalDetail from './pages/Animal/AnimalDetail';
import AnimalCreateHost from './pages/Animal/AnimalCreateHost';
import Schedule from './pages/Schedule/Schedule';
import Login from './pages/Account/Login';
import SignUp from './pages/Account/SignUp';
import Alarm from './pages/Alarm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/live',
    element: <Live />,
  },
  {
    path: '/review',
    element: <Review />,
  },
  {
    path: '/animal',
    element: <Animal />,
  },
  {
    path: '/animal/:animalId',
    element: <AnimalDetail />,
  },
  {
    path: '/animal/create',
    element: <AnimalCreateHost />,
  },
  {
    path: '/schedule',
    element: <Schedule />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/alarm/:id',
    element: <Alarm />,
  },
]);

export default router;
