# Building React Apps with TypeScript

## 🎯 Objectif
Convertir deux composants React écrits en JavaScript vers TypeScript
et expliquer les étapes de la conversion.

## 🧱 Étapes principales

1. Création du projet avec TypeScript :
   ```bash
   npx create-react-app react-ts-checkpoint --template typescript

2. Code original en JavaScript

import React from 'react';

const Greeting = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;

2.2 Composant Counter (JavaScript)
// src/components/Counter.js
import React, { Component } from 'react';

class Counter extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;