import { Route, Routes } from 'react-router-dom';

import { CheckerPage, HomePage } from './pages';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/checker/:text' element={<CheckerPage />} />
    </Routes>
  );
};
