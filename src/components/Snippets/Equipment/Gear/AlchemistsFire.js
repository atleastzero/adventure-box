import React from "react"

const AlchemistsFire = (props) => {
    const alchemistsFireText = "This sticky, adhesive fluid ignites when exposed to air. As an action, you can throw this flask up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the alchemist's fire as an improvised weapon. On a hit, the target takes 1d4 fire damage at the start of each of its turns. A creature can end this damage by using its action to make a DC 10 Dexterity check to extinguish the flames."
    if (props.pop) {
        return (
            <Popover>
                <Popover.Title as="h4">Alchemist's Fire</Popover.Title>
                <Popover.Content>
                    <p>{alchemistsFireText}</p>
                </Popover.Content>
            </Popover>
        )
    }
    else return  (
        <div>
            <h3>Alchemist's Fire</h3>
            <p>
                {alchemistsFireText}
            </p>
        </div>
    )
}

export default AlchemistsFire