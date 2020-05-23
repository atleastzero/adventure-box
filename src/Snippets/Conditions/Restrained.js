import React from 'react'

const Restrained = (props) => {
    return (
        <div>
            <h3>Restrained</h3>
            <ul>
                <li>Creature's speed becomes 0, can't benefit
                    from any bonus to its speed.</li>
                <li>Attacks vs. creature have advantage, and 
                    creature's attacks have disadvantage.</li>
                <li>The creature has disadvantage on DEX saving
                    throws.</li>
            </ul>
        </div>
    )
}

export default Restrained