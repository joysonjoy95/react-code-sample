import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import Router from "./router.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import store, { history } from './store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Provider store={store()}>
      <ConnectedRouter history={history}>
        <Router />
        <ToastContainer 
          autoClose={3000} 
          closeButton={false} 
          closeOnClick={false} 
          hideProgressBar={true} 
          style={{width:"auto"}}
        />
      </ConnectedRouter>
    </Provider>
  )
}

export default App;
