import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./App.css";
import Routing from "./Routing.js";
import Header from "./components/Header";
import Footer from "./components/Footer";

const history = createBrowserHistory();
const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <div className="App" style={{ height: "100%", width: "100%" }}>
      <ThemeProvider theme={theme}>
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            paddingBottom: 60,
            flexDirection: "column",
          }}
        >
          <Router history={history}>
            <Header history={history} />
            <Routing />
          </Router>
        </div>
        <Footer description="Developed by the students of Amrita Vishwa Vidyapeetham" />
      </ThemeProvider>
    </div>
  );
}

export default App;
