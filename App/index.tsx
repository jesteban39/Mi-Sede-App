import React from 'react';
import { Provider } from 'react-redux'
import store from './redux'
import Navigation from './components/Navigation/Navigation'

export default function App() {
  return (
      <Provider store={store}>
        <Navigation />
      </Provider>
  );
}
