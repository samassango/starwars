import React from 'react';
import { Provider } from 'react-redux';
import AppNavigation from './routes';
import appStore from './application/store'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Provider store={appStore}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
