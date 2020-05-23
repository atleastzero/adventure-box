import React from 'react';
import './App.css';
import CharacterAdvancement from './Snippets/CharacterAdvancement';
import AbilityModifiers from './Snippets/AbilityModifiers'
import PassivePerception from './Snippets/PassivePerception';

function App() {
  return (
    <div className="App">
      <CharacterAdvancement />
      <AbilityModifiers />
      <PassivePerception />
    </div>
  );
}

export default App;
