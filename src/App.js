import React from 'react';
import './App.css';
import CharacterAdvancement from './Snippets/CharacterAdvancement';
import AbilityModifiers from './Snippets/AbilityModifiers'
import PassivePerception from './Snippets/PassivePerception';
import Conditions from './Snippets/Conditions/Conditions';

function App() {
  return (
    <div className="App">
      <CharacterAdvancement />
      <AbilityModifiers />
      <PassivePerception />
      <Conditions />
    </div>
  );
}

export default App;
