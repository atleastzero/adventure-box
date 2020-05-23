import React from 'react'

const Stunned = (props) => {
    return (
        <div>
            <h3>Stunned</h3>
            <ul>
                <li>Creature is incapacitated, can't move, and 
                    can speak only falteringly.</li>
                <li>Creature automatically fails STR and DEX 
                    saving throws.</li>
                <li>Attack rolls against the creature have
                    advantage.</li>
            </ul>
        </div>
    )
}

export default Stunned