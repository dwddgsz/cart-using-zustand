import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components"; 
import styled from "styled-components";
import Nav from './layouts/Nav'

const GlobalStyle = createGlobalStyle`
:root {
  --light:#fff;
  --subtitle: #333;
  --dark:#000;
}

*,
*::before,
**after {
  margin:0;
  padding:0;
  box-sizing:border-box;
}
html,
button {
  font-family: 'Poppins', 'sans-serif';
}
html,
body {
  height:100%;
}

ol,
ul {
  list-style:none;
}

a {
  text-decoration: none;
  color:var(--dark);
}

img {
  display:block;
}
`

const AppWrapper = styled.div`
  max-width:1440px;
  margin:0 auto;
`

const App = () => {
  return (
    <>
    <GlobalStyle />
    <AppWrapper>
      <BrowserRouter>
        <Nav/>
      </BrowserRouter>
    </AppWrapper>
    </>
  )
}

export default App;