import React from 'react';

import { positions, Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import RoutesComponents from './routes/index';
import { GlobalStyle } from './styles/globalStyles';

function App() {
  const options = {
    timeout: 6000,
    position: positions.TOP_CENTER,
  };

  return (
    <Provider template={AlertTemplate} {...options}>
      <GlobalStyle />
      <RoutesComponents />
    </Provider>
  );
}

export default App;
