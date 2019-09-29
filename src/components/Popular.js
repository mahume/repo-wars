import React, { Component } from 'react';

class Popular extends Component {
  render() {
    const technologies = ['All', 'JavaScript', 'TypeScript', 'React', 'Node', 'MongoDB'];

    return (
      <ul>
        {technologies.map(technology => (
          <li>
            <button>{technology}</button>
          </li>
        ))}
      </ul>
    )
  }
}

export default Popular;