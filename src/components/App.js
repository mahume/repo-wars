import React, { Component } from 'react';
import styled from "styled-components";
import Popular from "./Popular";

const Wrapper = styled.main`
  background-color: blue;
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