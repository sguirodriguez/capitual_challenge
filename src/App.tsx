import React from "react";

import RoutesComponent from "./routes/index";
import { GlobalStyle } from "./styles/globalStyles";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

function App() {
  const options = {
    timeout: 6000,
    position: positions.TOP_CENTER,
  };

  return (
    <>
      <Provider template={AlertTemplate} {...options}>
        <GlobalStyle />
        <RoutesComponent />
      </Provider>
    </>
  );
}

export default App;
