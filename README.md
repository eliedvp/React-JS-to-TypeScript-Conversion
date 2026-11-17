# Building React Apps with TypeScript

Exercice réalisé pendant la formation GoMyCode.

## Objectif
Convertir deux composants React écrits en JavaScript vers TypeScript
et expliquer les étapes de la conversion.

## Étapes principales

### 1. Création du projet avec TypeScript

```bash
npx create-react-app react-ts-checkpoint --template typescript
```

### 2. Code original en JavaScript

**2.1 Composant Greeting (JavaScript)**

```jsx
import React from 'react';

const Greeting = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
```

**2.2 Composant Counter (JavaScript)**

```jsx
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
```

### 3. Conversion en TypeScript (`src/components/`)

- `Greeting.tsx` : type `GreetingProps` (`name: string`) et composant typé `React.FC<GreetingProps>`.
- `Counter.tsx` : types `CounterProps` (vide) et `CounterState` (`count: number`), classe `Component<CounterProps, CounterState>` et méthode `increment(): void`.
- `App.tsx` utilise les deux composants (`<Greeting name="Elie" />` et `<Counter />`).

## Stack

React 19, TypeScript 4.9, Create React App (`react-scripts` 5).

## Lancer le projet

```bash
npm install
npm start
```

L'application s'ouvre sur http://localhost:3000.
