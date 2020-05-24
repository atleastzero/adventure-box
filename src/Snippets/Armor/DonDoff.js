import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

import { lightArmorPop, mediumArmorPop, heavyArmorPop, shieldPop } from './ArmorTable'

const DonDoff = props => {
    const donPop = (
        <Popover>
            <Popover.Title as="h4">Don</Popover.Title>
            <Popover.Content>
                <p>This is the time it takes to put on armor.
                    You benefit from the armor's AC only if you 
                    take the full time to don the suit of armor.
                    </p>
            </Popover.Content>
        </Popover>
    );
    const doffPop = (
        <Popover>
            <Popover.Title as="h4">Doff</Popover.Title>
            <Popover.Content>
                <p>This is the time it takes to take off armor. 
                    If you have help, reduce this time by half.
                    </p>
            </Popover.Content>
        </Popover>
    );

    return (
        <div>
            <table>
                <tr><h3>Donning and Doffing Armor</h3></tr>
                <tr>
                    <th>Category</th>
                    <OverlayTrigger 
                        trigger="hover" 
                        placement="right" 
                        overlay={donPop}
                    >
                        <th>Don</th>
                    </OverlayTrigger>
                    <OverlayTrigger 
                        trigger="hover" 
                        placement="right" 
                        overlay={doffPop}
                    >
                        <th>Doff</th>
                    </OverlayTrigger>
                </tr>
                <tr>
                    <OverlayTrigger 
                        trigger="hover" 
                        placement="right" 
                        overlay={lightArmorPop}
                    >
                        <td>Light Armor</td>
                    </OverlayTrigger>
                    <td>1 minute</td>
                    <td>1 minute</td>
                </tr>
                <tr>
                    <OverlayTrigger 
                        trigger="hover" 
                        placement="right" 
                        overlay={mediumArmorPop}
                    >
                        <td>Medium Armor</td>
                    </OverlayTrigger>
                    <td>5 minutes</td>
                    <td>1 minute</td>
                </tr>
                <tr>
                    <OverlayTrigger 
                        trigger="hover" 
                        placement="right" 
                        overlay={heavyArmorPop}
                    >
                        <td>Heavy Armor</td>
                    </OverlayTrigger>
                    <td>10 minutes</td>
                    <td>5 minutes</td>
                </tr>
                <tr>
                    <OverlayTrigger 
                        trigger="hover" 
                        placement="right" 
                        overlay={shieldPop}
                    >
                        <td>Shield</td>
                    </OverlayTrigger>
                    <td>1 action</td>
                    <td>1 action</td>
                </tr>
            </table>
        </div>
    )
}

export default DonDoff