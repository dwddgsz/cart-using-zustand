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
html {
  font-size:62.5%;
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
  padding:0;
  margin:0;
}

a {
  text-decoration: none;
  color:var(--dark);
}

img {
  display:block;
}
button {
  border:none;
  outline:none;
}
`

const AppWrapper = styled.div`
  max-width:1440px;
  padding:0 10px;
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