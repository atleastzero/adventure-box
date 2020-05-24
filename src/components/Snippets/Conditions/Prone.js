import React from 'react'

const Prone = (props) => {
    return (
        <div>
            <h3>Prone</h3>
            <ul>
                <li>Creature's only movement option is to crawl, 
                    unless it stands up.</li>
                <li>Creature has disadvantage on attacks.</li>
                <li>Attacks vs. creature have advantage if 
                    attacker is within 5' of creature. Otherwise, 
                    the attack has disadvantage.</li>
            </ul>
        </div>
    )
}

export default Prone