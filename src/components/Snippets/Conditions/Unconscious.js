import React from 'react'

const Unconscious = (props) => {
    return (
        <div>
            <h3>Unconscious</h3>
            <ul>
                <li>Creature is <strong>incapacitated</strong>,
                    can't move or speak, and is unaware of its 
                    surroundings.</li>
                <li>The creature drops whatever it's holding and 
                    falls prone.</li>
                <li>The creature automatically fails STR and DEX
                    saving throws.</li>
                <li>Attack rolls against the creature have 
                    advantage.</li>
                <li>Any attack that hits is a critical hit is 
                    attacker is within 5' of creature.</li>
            </ul>
        </div>
    )
}

export default Unconscious