import React from "react"

const Acid = (props) => {
    const acidText = "As an action, you can splash the contents of this vial onto a creature within 5 feet of you or throw the vial up to 20 feet, shattering it on impact. In either case, make a ranged attack against a creature or object, treating the acid as an improvised weapon. On a hit, the target takes 2d6 acid damage."
    if (props.pop) {
        return (
            <Popover>
                <Popover.Title as="h4">Acid</Popover.Title>
                <Popover.Content>
                    <p>{acidText}</p>
                </Popover.Content>
            </Popover>
        )
    }
    else return  (
        <div>
            <h3>Acid</h3>
            <p>
                {acidText}
            </p>
        </div>
    )
}

export default Acid