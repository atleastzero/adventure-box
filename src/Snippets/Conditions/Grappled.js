import React from 'react'

const Grappled = (props) => {
    return (
        <div>
            <h3>Grappled</h3>
            <ul>
                <li>Speed becomes 0, can't benefit from any
                    bonus to speed.</li>
                <li>Condition ends if grappler is <strong>
                    incapacitated.</strong></li>
                <li>Condition also ends if an effect removes the
                    grappled creature from the reach of the 
                    grappler or grappling effect.</li>
            </ul>
        </div>
    )
}

export default Grappled