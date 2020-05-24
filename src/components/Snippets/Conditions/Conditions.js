import React from 'react'

import Blinded from './Blinded'
import Charmed from './Charmed'
import Deafened from './Deafened'
import Frightened from './Frightened'
import Grappled from './Grappled'
import Incapacitated from './Incapacitated'
import Invisible from './Invisible'
import Paralyzed from './Paralyzed'
import Petrified from './Petrified'
import Poisoned from './Poisoned'
import Prone from './Prone'
import Restrained from './Restrained'
import Stunned from './Stunned'
import Unconscious from './Unconscious'

const Conditions = (props) => {
    return (
        <div>
            <h2>Conditions</h2>
            <ul>
                <li><Blinded /></li>
                <li><Charmed /></li>
                <li><Deafened /></li>
                <li><Frightened /></li>
                <li><Grappled /></li>
                <li><Incapacitated /></li>
                <li><Invisible /></li>
                <li><Paralyzed /></li>
                <li><Petrified /></li>
                <li><Poisoned /></li>
                <li><Prone /></li>
                <li><Restrained /></li>
                <li><Stunned /></li>
                <li><Unconscious /></li>
            </ul>
        </div>
    )
}

export default Conditions