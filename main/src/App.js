import React from "react"
import { createGlobalStyle } from "styled-components";
import { Router } from "./routers/Router";

const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }`

function App() {
  return (
 <>
 <GlobalStyled/>
   <Router/>
  </>
  );
}

export default App;
