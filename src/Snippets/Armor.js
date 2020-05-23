import React from 'react'

const Armor = props => {
    return (
        <div>
            <table>
                <tr><h3>Armor</h3></tr>
                <tr>
                    <th>Armor</th>
                    <th>Cost</th>
                    <th>AC</th>
                    <th>Strength</th>
                    <th>Stealth</th>
                    <th>Weight</th>
                </tr>
                <tr>
                    <em>Light Armor</em>
                </tr>
                <tr>
                    <td>Padded</td>
                    <td>5 gp</td>
                    <td>11 + DEX mod</td>
                    <td>-</td>
                    <td>Disadvantage</td>
                    <td>8 lb.</td>
                </tr>
                <tr>
                    <td>Leather</td>
                    <td>10 gp</td>
                    <td>11 + DEX mod</td>
                    <td>-</td>
                    <td>-</td>
                    <td>10 lb.</td>
                </tr>
                <tr>
                    <td>Studded leather</td>
                    <td>45 gp</td>
                    <td>12 + DEX mod</td>
                    <td>-</td>
                    <td>-</td>
                    <td>13 lb.</td>
                </tr>
                <tr>
                    <em>Medium Armor</em>
                </tr>
                <tr>
                    <td>Hide</td>
                    <td>10 gp</td>
                    <td>12 + DEX mod (max 2)</td>
                    <td>-</td>
                    <td>-</td>
                    <td>12 lb.</td>
                </tr>
                <tr>
                    <td>Chain shirt</td>
                    <td>50 gp</td>
                    <td>13 + DEX mod (max 2)</td>
                    <td>-</td>
                    <td>-</td>
                    <td>20 lb.</td>
                </tr>
                <tr>
                    <td>Scale mail</td>
                    <td>50 gp</td>
                    <td>14 + DEX mod (max 2)</td>
                    <td>-</td>
                    <td>Disadvantage</td>
                    <td>45 lb.</td>
                </tr>
                <tr>
                    <td>Breastplate</td>
                    <td>400 gp</td>
                    <td>14 + DEX mod (max 2)</td>
                    <td>-</td>
                    <td>-</td>
                    <td>20 lb.</td>
                </tr>
                <tr>
                    <td>Half plate</td>
                    <td>750 gp</td>
                    <td>15 + DEX mod (max 2)</td>
                    <td>-</td>
                    <td>Disadvantage</td>
                    <td>40 lb.</td>
                </tr>
                <tr>
                    <em>Heavy Armor</em>
                </tr>
                <tr>
                    <td>Ring mail</td>
                    <td>30 gp</td>
                    <td>14</td>
                    <td>-</td>
                    <td>Disadvantage</td>
                    <td>40 lb.</td>
                </tr>
                <tr>
                    <td>Chain mail</td>
                    <td>75 gp</td>
                    <td>16</td>
                    <td>STR 13</td>
                    <td>Disadvantage</td>
                    <td>55 lb.</td>
                </tr>
                <tr>
                    <td>Splint</td>
                    <td>200 gp</td>
                    <td>17</td>
                    <td>STR 15</td>
                    <td>Disadvantage</td>
                    <td>60 lb.</td>
                </tr>
                <tr>
                    <td>Plate</td>
                    <td>1500 gp</td>
                    <td>18</td>
                    <td>STR 15</td>
                    <td>Disadvantage</td>
                    <td>65 lb.</td>
                </tr>
                <tr>
                    <em>
                        Shield
                    </em>
                </tr>
                <tr>
                    <td>Shield</td>
                    <td>10 gp</td>
                    <td>+2</td>
                    <td>-</td>
                    <td>-</td>
                    <td>6 lb.</td>
                </tr>
            </table>
        </div> 
    )
}

export default Armor