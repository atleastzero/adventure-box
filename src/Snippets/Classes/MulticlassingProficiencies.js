import React from 'react'

const MulticlassingProficiencies = props => {
    return (
        <div>
            <table>
                <tr><h3>Multiclassing Proficiencies</h3></tr>
                <tr>
                    <th>Class</th>
                    <th>Proficiencies Gained</th>
                </tr>
                <tr>
                    <td>Barbarian</td>
                    <td>Shields, simple weapons, martial weapons
                    </td>
                </tr>
                <tr>
                    <td>Bard</td>
                    <td>Light armor, one skill of your choice, 
                        once musical instrument of your choice</td>
                </tr>
                <tr>
                    <td>Cleric</td>
                    <td>Light armor, medium armor, shields</td>
                </tr>
                <tr>
                    <td>Druid</td>
                    <td>Light armor, medium armor, shields 
                        (druids will not wear armor or use 
                        shields made of metal)</td>
                </tr>
                <tr>
                    <td>Fighter</td>
                    <td>Light armor, medium armor, shields, 
                        simple weapons, martial weapons</td>
                </tr>
                <tr>
                    <td>Monk</td>
                    <td>Simple weapons, shortswords</td>
                </tr>
                <tr>
                    <td>Paladin</td>
                    <td>Light armor, medium armor, shields, 
                        simple weapons, martial weapons</td>
                </tr>
                <tr>
                    <td>Ranger</td>
                    <td>Light armor, medium armor, shields, 
                        simple weapons, martial weapons, one
                        skill from the class's skill list</td>
                </tr>
                <tr>
                    <td>Rogue</td>
                    <td>Light armor, one skill from the class's 
                        skill list, thieves' tools</td>
                </tr>
                <tr>
                    <td>Sorcerer</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Warlock</td>
                    <td>Light armor, simple weapons</td>
                </tr>
                <tr>
                    <td>Wizard</td>
                    <td>-</td>
                </tr>
            </table>
        </div>
    )
}

export default MulticlassingProficiencies