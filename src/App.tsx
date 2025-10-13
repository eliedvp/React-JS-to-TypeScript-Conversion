import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';


const App: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Building React Apps with TypeScript</h1>
      <Greeting name="Elie" />
      <Counter />
    </div>
  );
};

export default App;
