import React, { Component } from 'react';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

import Screen from './Screen/Screen';
import CustomDragLayer from './components/Utilities/Corkboard/CustomDragLayer'

class App extends Component {
  render() {
    return (
      <div>
        <DndProvider backend={Backend}>      
          <Screen />
          <CustomDragLayer />
        </DndProvider>
      </div>
    );
  }
}

export default App;