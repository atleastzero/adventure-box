import React from 'react'

const MulticlassingPrerequisites = props => {
    return (
        <div>
            <table>
                <tr><h3>Multiclassing Prerequisites</h3></tr>
                <tr>
                    <th>Class</th>
                    <th>Ability Score Minimum</th>
                </tr>
                <tr>
                    <td>Barbarian</td>
                    <td>STR 13</td>
                </tr>
                <tr>
                    <td>Bard</td>
                    <td>CHA 13</td>
                </tr>
                <tr>
                    <td>Cleric</td>
                    <td>WIS 13</td>
                </tr>
                <tr>
                    <td>Druid</td>
                    <td>WIS 13</td>
                </tr>
                <tr>
                    <td>Fighter</td>
                    <td>STR 13 or DEX 13</td>
                </tr>
                <tr>
                    <td>Monk</td>
                    <td>DEX 13 and WIS 13</td>
                </tr>
                <tr>
                    <td>Paladin</td>
                    <td>STR 13 and CHA 13</td>
                </tr>
                <tr>
                    <td>Ranger</td>
                    <td>DEX 13 and WIS 13</td>
                </tr>
                <tr>
                    <td>Rogue</td>
                    <td>DEX 13</td>
                </tr>
                <tr>
                    <td>Sorcerer</td>
                    <td>CHA 13</td>
                </tr>
                <tr>
                    <td>Warlock</td>
                    <td>CHA 13</td>
                </tr>
                <tr>
                    <td>Wizard</td>
                    <td>INT 13</td>
                </tr>
            </table>
        </div>
    )
}

export default MulticlassingPrerequisites