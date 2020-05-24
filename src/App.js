import React from 'react'

import CharacterAdvancement from './Snippets/CharacterAdvancement';
import AbilityModifiers from './Snippets/AbilityModifiers'
import PassivePerception from './Snippets/PassivePerception'
import Conditions from './Snippets/Conditions/Conditions'
import ArmorTable from './Snippets/Armor/ArmorTable'

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <CharacterAdvancement />
      <AbilityModifiers />
      <PassivePerception />
      <Conditions /> */}
      <ArmorTable />
    </div>
  );
}

export default App;
