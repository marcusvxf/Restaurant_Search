
import React from 'react';
import {Provider} from 'react-redux';

import { ThemeProvider} from 'styled-components';
import { Reset } from 'styled-reset';

import store from './redux/store';
import Home from './pages/home/index';
import Theme from './theme';


function App() {
  return (

    <Provider store = {store}>
      <ThemeProvider theme = {Theme}>
        <Reset/>
        <Home></Home>

      </ThemeProvider>
    </Provider>

  );
}

export default App;
