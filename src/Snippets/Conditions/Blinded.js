import React from 'react'

const Blinded = (props) => {
    return (
        <div>
            <h3>Blinded</h3>
            <ul>
                <li>Creature can't see, automatically fails 
                    any ability check that requires sight.</li>
                <li>Attacks vs. creature have advantage, 
                    creature's attacks have disadvantage.</li>
            </ul>
        </div>
    )
}

export default Blinded