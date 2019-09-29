import React, { Component } from 'react';
import styled from "styled-components";

const Container = styled.nav`
  width: 50vw;
  margin: 0 auto;
`
const List = styled.ul`
  background: blue;
`
const Item = styled.li`
  background: red;
  list-style-type: none;
`
const Button = styled.button`
  display: inline;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palegoldenrod;
  border-radius: 3px;
`


class Popular extends Component {
  render() {
    const technologies = ['All', 'JavaScript', 'TypeScript', 'React', 'Node', 'MongoDB'];

    return (
      <Container>
        <List>
          {technologies.map(technology => (
            <Item key={technology}>
              <Button>{technology}</Button>
            </Item>
          ))}
        </List>
      </Container>
    )
  }
}

export default Popular;