
import React from "react";

// this gives the functionality for routes.
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "./Home";
import ErrorPage from "./ErrorPage";

function App() {

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29,29,29,0.8)",
      white: "#fff",
      green:"rgb(54, 156, 54)",
      black: "#212529",
      helper: "#8490ff",
      bg: "#F6F8FA",
      footer_bg: "#3c3f46",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (

    <ThemeProvider theme={theme}>        {/* so that every component can be able to use common theme */}

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="*" element={<ErrorPage/>} />





        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
