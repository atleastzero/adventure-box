import React from 'react'

const Petrified = (props) => {
    return (
        <div>
            <h3>Petrified</h3>
            <ul>
                <li>Creature is transformed, along with any 
                    non-magical object it is wearing or carrying, 
                    into a solid inanimate substance (usually 
                    stone). Weight increases by x10, creature 
                    ceases aging.</li>
                <li>Creature is <strong>incapacitated</strong>,
                    can't move or speak, and is unaware of its 
                    surroundings.</li>
                <li>Attacks against the creature have advantage.
                </li>
                <li>The creature automatically fails STR and DEX
                    saving throws.</li>
                <li>The creature has resistance to all damage.
                </li>
                <li>Creature is immune to poison and disease: 
                    poison or disease already in its system is 
                    suspended, not neutralized.</li>
            </ul>
        </div>
    )
}

export default Petrified