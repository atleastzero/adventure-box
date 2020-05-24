import React from 'react'

import BurglarsPack from './BurglarsPack'
import DiplomatsPack from './DiplomatsPack'
import DungeoneersPack from './DungeoneersPack'
import EntertainersPack from './EntertainersPack'
import ExplorersPack from './ExplorersPack'
import PriestsPack from './PriestsPack'
import ScholarsPack from './ScholarsPack'

const EquipmentPacks = () => {
    return (
        <div>
            <h2>Equipment Packs</h2>
            <p>
                The starting equipment you get from your class 
                includes a collection of useful adventuring gear, 
                put together in a pack. The contents of these 
                packs are listed here. If you are buying your 
                starting equipment, you can purchase a pack for 
                the price shown, which might be cheaper than 
                buying the items individually.
            </p>
            <ul>
                <li><BurglarsPack /></li>
                <li><DiplomatsPack /></li>
                <li><DungeoneersPack /></li>
                <li><EntertainersPack /></li>
                <li><ExplorersPack /></li>
                <li><PriestsPack /></li>
                <li><ScholarsPack /></li>
            </ul>
        </div>
    );
}

export default EquipmentPacks