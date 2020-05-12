import React from 'react';
import Main from '../Main/Main'
import styled from 'styled-components'

function App() {
  const Div = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `
  return (
    <Div>
      
      <Main />
    </Div>
  );
}

export default App;
