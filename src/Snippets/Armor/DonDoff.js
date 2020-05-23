import React from 'react'

const DonDoff = props => {
    return (
        <div>
            <table>
                <tr><h3>Donning and Doffing Armor</h3></tr>
                <tr>
                    <th>Category</th>
                    <th>Don</th>
                    <th>Doff</th>
                </tr>
                <tr>
                    <td>Light Armor</td>
                    <td>1 minute</td>
                    <td>1 minute</td>
                </tr>
                <tr>
                    <td>Medium Armor</td>
                    <td>5 minutes</td>
                    <td>1 minute</td>
                </tr>
                <tr>
                    <td>Heavy Armor</td>
                    <td>10 minutes</td>
                    <td>5 minutes</td>
                </tr>
                <tr>
                    <td>Shield</td>
                    <td>1 action</td>
                    <td>1 action</td>
                </tr>
            </table>
        </div>
    )
}

export default DonDoff