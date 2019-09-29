import React, { Component } from 'react';
import Popular from "./Popular";
import styled from "styled-components";

const Wrapper = styled.main`
  display: grid;
  grid-template-rows: 1fr 1fr;
`
class App extends Component {
  render() {
    return (
      <Wrapper>
        <Popular />
      </Wrapper>
    )
  }
}

export default App;