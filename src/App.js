import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components"; 
import styled from "styled-components";

const globalStyle = createGlobalStyle`

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
  font-family: 'Poppins';
`

const App = () => {
  return (
  <globalStyle>
    <AppWrapper>
      <BrowserRouter>
        test
      </BrowserRouter>
    </AppWrapper>
  </globalStyle>
  )
}

export default App;