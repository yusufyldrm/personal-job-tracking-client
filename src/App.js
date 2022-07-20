import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { withLayout } from 'hoc/withLayout';
import HomeLayout from 'layouts/Home';
import { HomeScreen } from 'screens';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            key={'home'}
            path={'/'}
            element={withLayout(HomeLayout, HomeScreen)}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
