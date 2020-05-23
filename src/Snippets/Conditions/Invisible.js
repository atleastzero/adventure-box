import React from 'react'

const Invisible = (props) => {
    return (
        <div>
            <h3>Invisible</h3>
            <ul>
                <li>Creature is impossible to see without the 
                    aid of magic or a special sense. For the 
                    purpose of hiding, the creature is heavily 
                    obscured. Creature's location can be detected 
                    by noise or any tracks it leaves.</li>
                <li>Attacks vs. creature have disadvantage,
                    creature's attacks have advantage.</li>
            </ul>
        </div>
    )
}

export default Invisible