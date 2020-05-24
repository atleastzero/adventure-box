import React, { useState, useCallback } from 'react'
import { useDrop } from 'react-dnd'
import update from 'immutability-helper'

import ItemTypes from '../components/Utilities/Corkboard/ItemTypes'
import DraggableBox from '../components/Utilities/Corkboard/DraggableBox'
import Search from '../components/Utilities/Search'

import classes from './Screen.css';

const renderBox = (item, key) => {
  return <DraggableBox key={key} id={key} {...item}>
      </DraggableBox>
}

const styles = {
    width: "100vw",
    height: "100vh"
}  

const Screen = () => { 
    const [boxes, setBoxes] = useState({
        search: {top: 100, left: 100, children: <Search />}
    })
    
    const moveBox = useCallback(
      (id, left, top) => {
        setBoxes(
          update(boxes, {
            [id]: {
              $merge: { left, top },
            },
          }),
        )
      },
      [boxes],
    )
    
    const [, drop] = useDrop({
      accept: ItemTypes.BOX,
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset()
        let left = Math.round(item.left + delta.x)
        let top = Math.round(item.top + delta.y)
        moveBox(item.id, left, top)
        return undefined
      },
    })


    return (
        <div className={classes.Screen} style={styles} ref={drop}>
            {Object.keys(boxes).map(key => renderBox(boxes[key], key))}
        </div>
    )
}

export default Screen
