import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {PrivateRoute} from './use-cases/';
import {Home, Login, NotFound, Single} from "./components/pages"
import {SiteSettingsProvider, ThemeProvider} from "./contexts";

function App() {
  return (
      <ThemeProvider>
        <SiteSettingsProvider>
          <BrowserRouter basename={''}>
            <Routes>
              <Route
                  path={'/'}
                  element={
                      <Home />
                  }
              />
              <Route
                  path={'/single-title'}
                  element={
                    <PrivateRoute roles={['ROLE_USER']} minlevel={2}>
                      <Single />
                    </PrivateRoute>
                  }
              />
              <Route
                  path={'/users'}
                  element={
                    <PrivateRoute roles={['ROLE_ADMIN']} minlevel={4}>
                      <Single />
                    </PrivateRoute>
                  }
              />
              <Route path={'/login'} element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </SiteSettingsProvider>
      </ThemeProvider>
  );
}

export default App;
