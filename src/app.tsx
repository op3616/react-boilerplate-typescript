import React, { Suspense } from 'react';
import Router from './routes';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router />
    </Suspense>
  );
};

export default App;
