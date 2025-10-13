// src/components/Counter.tsx
import React, { Component } from 'react';

// 1. Définir le type des props
// Le composant n’en reçoit pas, donc on définit un objet vide
type CounterProps = {};

// 2. Définir le type du state
type CounterState = {
  count: number; // "count" est un nombre
};

// 3. Déclarer la classe avec les types pour les props et le state
class Counter extends Component<CounterProps, CounterState> {
  // 4. Initialiser le state
  state: CounterState = {
    count: 0,
  };

  // 5. Définir une méthode pour incrémenter le compteur
  // On indique que la fonction ne retourne rien (void)
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // 6. La méthode render affiche le contenu JSX
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
