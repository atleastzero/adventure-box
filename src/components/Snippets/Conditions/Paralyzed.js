import React from 'react'

const Paralyzed = (props) => {
    return (
        <div>
            <h3>Paralyzed</h3>
            <ul>
                <li>Creature is <strong>incapacitated</strong>,
                    can't move/speak.</li>
                <li>Creature automatically fails STR and DEX 
                    saving throws.</li>
                <li>Attack rolls against the creature have 
                    advantage.</li>
                <li>Any attack that hits is a critical hit is 
                    attacker is within 5' of creature.</li>
            </ul>
        </div>
    )
}

export default Paralyzed