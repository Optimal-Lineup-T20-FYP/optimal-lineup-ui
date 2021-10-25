import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./App.css";
import Routing from "./Routing.js";
import Footer from "./components/Footer";

const history = createBrowserHistory();
const theme = createTheme();

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div style={{ marginBottom: 100 }}>
          <Router history={history}>
            <Routing />
          </Router>
        </div>
        <Footer
          title="The Database Alchemists"
          description="Developed by the students of Amrita Vishwa Vidyapeetham"
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
