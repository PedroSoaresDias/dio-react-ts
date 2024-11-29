import React from 'react';
import { Provider } from './components/ui/provider';
import Card from './components/Card';

function App() {
  return (
    <Provider>
      <Card />
    </Provider>
  );
}

export default App;