import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from '#pages/home';
import CharacterPage from '#pages/character/[id]';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <div>error</div>,
    },
    {
      path: '/character/:id',
      element: <CharacterPage />,
      errorElement: <div>error</div>,
    },
  ]);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Router;
