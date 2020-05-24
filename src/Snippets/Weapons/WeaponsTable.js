import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const ArmorTable = props => {
    // Weapon Properties
    const ammunitionPop = (
        <Popover>
            <Popover.Title as="h4">Ammunition</Popover.Title>
            <Popover.Content>
                <p>You can use a weapon that has the ammunition 
                    property to make a ranged attack only if you 
                    have ammunition to fire from the weapon. 
                    Each time you attack with the weapon, you 
                    expend one piece of ammunition. Drawing the 
                    ammunition from a quiver, case, or other 
                    container is part of the attack (you need a 
                    free hand to load a one-handed weapon). At 
                    the end of the battle, you can recover half 
                    your expended ammunition by taking a minute 
                    to search the battlefield.</p>
                <p>If you use a weapon that has the ammunition
                    property to make a melee attack, you treat
                    the weapon as an improvised weapon. A sling
                    must be loaded to deal any damage when used
                    in this way.</p>
            </Popover.Content>
        </Popover>
    );
    const finessePop = (
        <Popover>
            <Popover.Title as="h4">Finesse Weapons</Popover.Title>
            <Popover.Content>
                <p>When making an attack with a finesse weapon,
                    you use your choice of your Strength or 
                    Dexterity modifier for the attack and damage
                    rolls. You must use the same modifier for 
                    both rolls.</p>
            </Popover.Content>
        </Popover>
    );
    const heavyWeaponPop = (
        <Popover>
            <Popover.Title as="h4">Heavy Weapons</Popover.Title>
            <Popover.Content>
                <p>Small creatures have disadvantage on attack 
                    rolls with heavy weapons. A heavy weapon's 
                    size and bulk make it too large for a Small 
                    creature to use effectively.</p>
            </Popover.Content>
        </Popover>
    );
    const lightWeaponPop = (
        <Popover>
            <Popover.Title as="h4">Light Weapons</Popover.Title>
            <Popover.Content>
                <p>A light weapon is small and easy to handle, 
                    making it ideal for use when fighting with
                    two weapons.</p>
            </Popover.Content>
        </Popover>
    );
    const loadingPop = (
        <Popover>
            <Popover.Title as="h4">Loading Weapons</Popover.Title>
            <Popover.Content>
                <p>Because of the time required to load this
                    weapon, you can fire only one piece of 
                    ammunition from it when you use an action, 
                    bonus action, or reaction to fire it, 
                    regardless of the number of attacks you can
                    normally make.</p>
            </Popover.Content>
        </Popover>
    );
    const rangePop = (
        <Popover>
            <Popover.Title as="h4">Range Weapons</Popover.Title>
            <Popover.Content>
                <p>A weapon that can be used to make a ranged
                    attack has a range in parentheses after the 
                    ammunition or thrown property. The range
                    lists two numbers. The first is the weapon's
                    normal range in feet, and the second 
                    indicates the weapon's long range. When 
                    attacking a target beyond normal range, you 
                    have disadvantage on the attack roll. You
                    can't attack a target beyond the weapon's 
                    long range.</p>
            </Popover.Content>
        </Popover>
    );
    const reachPop = (
        <Popover>
            <Popover.Title as="h4">Reach Weapons</Popover.Title>
            <Popover.Content>
                <p>This weapon adds 5 feet to your reach when 
                    you attack with it, as well as when 
                    determining your reach for opportunity 
                    attacks with it.</p>
            </Popover.Content>
        </Popover>
    );
    const thrownPop = (
        <Popover>
            <Popover.Title as="h4">Thrown Weapons</Popover.Title>
            <Popover.Content>
                <p>If a weapon has the thrown property, you can 
                    throw the weapon to make a ranged attack. If
                    the weapon is a melee weapon, you use the 
                    same ability modifier for that attack roll
                    and damage roll that you would use for a 
                    melee attack with the weapon. For example, if
                    you throw a handaxe, you use your Strength, 
                    but if you throw a dagger, you can use either 
                    your Strength or your Dexterity, since the 
                    dagger has the finesse property.</p>
            </Popover.Content>
        </Popover>
    );
    const twohandedPop = (
        <Popover>
            <Popover.Title as="h4">Two-Handed Weapons</Popover.Title>
            <Popover.Content>
                <p>This weapon requires two hands when you attack 
                    with it.</p>
            </Popover.Content>
        </Popover>
    );
    const versatilePop = (
        <Popover>
            <Popover.Title as="h4">Versatile Weapons</Popover.Title>
            <Popover.Content>
                <p>This weapon can be used with one or two hands.
                    A damage value in parentheses appears with 
                    the property - the damage when the weapon is
                    used with two hands to make a melee attack.
                </p>
            </Popover.Content>
        </Popover>
    );

    // Special weapon properties
    const lancePop = (
        <Popover>
            <Popover.Title as="h4">Lances</Popover.Title>
            <Popover.Content>
                <p>You have disadvantage when you use a lance to 
                    attack a target within 5 feet of you. Also, a 
                    lance requires two hands to wield when you 
                    aren't mounted.</p>
            </Popover.Content>
        </Popover>
    );
    const netPop = (
        <Popover>
            <Popover.Title as="h4">Nets</Popover.Title>
            <Popover.Content>
                <p>A Large or smaller creature hit by a net is
                    restrained until it is freed. A net has no 
                    effect on creatures that are formless, or 
                    creatures that are Huge or larger. A creature 
                    can use its actions to make a DC 10 Strength 
                    check, freeing itself or another creature 
                    within its reach on a success. Dealing 5 
                    slashing damage to the net (AC 10) also frees 
                    the creature without harming it, ending the 
                    effect and destroying the net.</p>
                <p>When you use an action, bonus action, or 
                    reaction to attack with a net, you can make 
                    only one attack regardless of the number of 
                    attacks you can normally make.</p>
            </Popover.Content>
        </Popover>
    );

    return (
        <div>
            <table>
                <tr><h3>Weapons</h3></tr>
                <tr>
                    <th>Name</th>
                    <th>Cost</th>
                    <th>Damage</th>
                    <th>Weight</th>
                    <th>Properties</th>
                </tr>
                <tr>
                    <em>Simple Melee Weapons</em>
                </tr>
                <tr>
                    <td>Club</td>
                    <td>1 sp</td>
                    <td>1d4 bludgeoning</td>
                    <td>2 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={lightWeaponPop}
                        >
                            <span>Light</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Dagger</td>
                    <td>2 gp</td>
                    <td>1d4 piercing</td>
                    <td>1 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={finessePop}
                        >
                            <span>Finesse</span>
                        </OverlayTrigger>, 
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={lightWeaponPop}
                        >
                            <span> light</span>
                        </OverlayTrigger>, 
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={thrownPop}
                        >
                            <span> thrown</span>
                        </OverlayTrigger> 
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={rangePop}
                        >
                            <span> (range 20/60)</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Greatclub</td>
                    <td>2 sp</td>
                    <td>1d8 bludgeoning</td>
                    <td>10 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={twohandedPop}
                        >
                            <span>Two-handed</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Handaxe</td>
                    <td>5 gp</td>
                    <td>1d6 slashing</td>
                    <td>2 lb.</td>
                    <td>
                    <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={lightWeaponPop}
                        >
                            <span>Light</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={thrownPop}
                        >
                            <span> thrown</span>
                        </OverlayTrigger> 
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={rangePop}
                        >
                            <span> (range 20/60)</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Javelin</td>
                    <td>5 sp</td>
                    <td>1d6 piercing</td>
                    <td>2 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={thrownPop}
                        >
                            <span>Thrown</span>
                        </OverlayTrigger> 
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={rangePop}
                        >
                            <span> (range 30/120)</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Light hammer</td>
                    <td>2 gp</td>
                    <td>1d4 bludgeoning</td>
                    <td>2 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={lightWeaponPop}
                        >
                            <span>Light</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={thrownPop}
                        >
                            <span> thrown</span>
                        </OverlayTrigger> 
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={rangePop}
                        >
                            <span> (range 20/60)</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Mace</td>
                    <td>5 gp</td>
                    <td>1d6 bludgeoning</td>
                    <td>4 lb.</td>
                    <td>
                        -
                    </td>
                </tr>
                <tr>
                    <td>Quarterstaff</td>
                    <td>2 sp</td>
                    <td>1d6 bludgeoning</td>
                    <td>4 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={versatilePop}
                        >
                            <span>Versatile (1d8)</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Sickle</td>
                    <td>1 gp</td>
                    <td>1d4 slashing</td>
                    <td>2 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={lightWeaponPop}
                        >
                            <span>Light</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Spear</td>
                    <td>1 gp</td>
                    <td>1d6 piercing</td>
                    <td>3 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={thrownPop}
                        >
                            <span>Thrown</span>
                        </OverlayTrigger> 
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={rangePop}
                        >
                            <span> (range 20/60)</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={versatilePop}
                        >
                            <span> versatile (1d8)</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <em>Simple Ranged Weapons</em>
                </tr>
                <tr>
                    <td>Crossbow, light</td>
                    <td>25 gp</td>
                    <td>1d8 piercing</td>
                    <td>5 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={ammunitionPop}
                        >
                            <span>Ammunition</span>
                        </OverlayTrigger> 
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={rangePop}
                        >
                            <span> (range 80/320)</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={loadingPop}
                        >
                            <span> loading</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={twohandedPop}
                        >
                            <span> two-handed</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Dart</td>
                    <td>5 cp</td>
                    <td>1d4 piercing</td>
                    <td>1/4 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={finessePop}
                        >
                            <span>Finesse</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={thrownPop}
                        >
                            <span> thrown</span>
                        </OverlayTrigger> 
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={rangePop}
                        >
                            <span> (range 20/60)</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Shortbow</td>
                    <td>25 gp</td>
                    <td>1d6 piercing</td>
                    <td>2 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={ammunitionPop}
                        >
                            <span>Ammunition</span>
                        </OverlayTrigger> 
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={rangePop}
                        >
                            <span> (range 80/320)</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={twohandedPop}
                        >
                            <span> two-handed</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Sling</td>
                    <td>1 sp</td>
                    <td>1d4 bludgeoning</td>
                    <td>-</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={ammunitionPop}
                        >
                            <span>Ammunition</span>
                        </OverlayTrigger> 
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={rangePop}
                        >
                            <span> (range 30/120)</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <em>Martial Melee Weapons</em>
                </tr>
                <tr>
                    <td>Battleaxe</td>
                    <td>10 gp</td>
                    <td>1d8 slashing</td>
                    <td>4 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={versatilePop}
                        >
                            <span>Versatile (1d10)</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Flail</td>
                    <td>10 gp</td>
                    <td>1d8 bludgeoning</td>
                    <td>2 lb.</td>
                    <td>
                        -
                    </td>
                </tr>
                <tr>
                    <td>Glaive</td>
                    <td>20 gp</td>
                    <td>1d10 slashing</td>
                    <td>6 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={heavyWeaponPop}
                        >
                            <span>Heavy</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={reachPop}
                        >
                            <span> reach</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={twohandedPop}
                        >
                            <span> two-handed</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Greataxe</td>
                    <td>30 gp</td>
                    <td>1d12 slashing</td>
                    <td>7 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={heavyWeaponPop}
                        >
                            <span>Heavy</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={twohandedPop}
                        >
                            <span> two-handed</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Greatsword</td>
                    <td>50 gp</td>
                    <td>2d6 slashing</td>
                    <td>6 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={heavyWeaponPop}
                        >
                            <span>Heavy</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={twohandedPop}
                        >
                            <span> two-handed</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Halberd</td>
                    <td>20 gp</td>
                    <td>1d10 slashing</td>
                    <td>6 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={heavyWeaponPop}
                        >
                            <span>Heavy</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={reachPop}
                        >
                            <span> reach</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={twohandedPop}
                        >
                            <span> two-handed</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Lance</td>
                    <td>10 gp</td>
                    <td>1d12 piercing</td>
                    <td>6 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={reachPop}
                        >
                            <span>Reach</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={lancePop}
                        >
                            <span> special</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Longsword</td>
                    <td>15 gp</td>
                    <td>1d6 slashing</td>
                    <td>3 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={versatilePop}
                        >
                            <span>Versatile (1d10)</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Maul</td>
                    <td>10 gp</td>
                    <td>2d6 bludgeoning</td>
                    <td>10 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={heavyWeaponPop}
                        >
                            <span>Heavy</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={twohandedPop}
                        >
                            <span> two-handed</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Morningstar</td>
                    <td>15 gp</td>
                    <td>1d8 piercing</td>
                    <td>4 lb.</td>
                    <td>
                        -
                    </td>
                </tr>
                <tr>
                    <td>Pike</td>
                    <td>5 gp</td>
                    <td>1d10 piercing</td>
                    <td>18 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={heavyWeaponPop}
                        >
                            <span>Heavy</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={reachPop}
                        >
                            <span> reach</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={twohandedPop}
                        >
                            <span> two-handed</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Rapier</td>
                    <td>25 gp</td>
                    <td>1d8 piercing</td>
                    <td>2 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={finessePop}
                        >
                            <span>Finesse</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Scimitar</td>
                    <td>25 gp</td>
                    <td>1d6 slashing</td>
                    <td>3 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={finessePop}
                        >
                            <span>Finesse</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={lightWeaponPop}
                        >
                            <span> light</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Shortsword</td>
                    <td>10 gp</td>
                    <td>1d6 piercing</td>
                    <td>2 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={finessePop}
                        >
                            <span>Finesse</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={lightWeaponPop}
                        >
                            <span> light</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Trident</td>
                    <td>5 gp</td>
                    <td>1d6 piercing</td>
                    <td>4 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={thrownPop}
                        >
                            <span>Thrown</span>
                        </OverlayTrigger> 
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={rangePop}
                        >
                            <span> (range 20/60)</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={versatilePop}
                        >
                            <span> versatile (1d8)</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>War pick</td>
                    <td>5 gp</td>
                    <td>1d8 piercing</td>
                    <td>2 lb.</td>
                    <td>
                        -
                    </td>
                </tr>
                <tr>
                    <td>Warhammer</td>
                    <td>5 gp</td>
                    <td>1d8 piercing</td>
                    <td>2 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={versatilePop}
                        >
                            <span>Versatile (1d10)</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Whip</td>
                    <td>2 gp</td>
                    <td>1d4 slashing</td>
                    <td>3 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={finessePop}
                        >
                            <span>Finesse</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={reachPop}
                        >
                            <span> reach</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <em>Martial Ranged Weapons</em>
                </tr>
                <tr>
                    <td>Blowgun</td>
                    <td>10 gp</td>
                    <td>1 piercing</td>
                    <td>1 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={ammunitionPop}
                        >
                            <span>Ammunition</span>
                        </OverlayTrigger> 
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={rangePop}
                        >
                            <span> (range 25/100)</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={loadingPop}
                        >
                            <span> loading</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Crossbow, hand</td>
                    <td>75 gp</td>
                    <td>1d6 piercing</td>
                    <td>3 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={ammunitionPop}
                        >
                            <span>Ammunition</span>
                        </OverlayTrigger> 
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={rangePop}
                        >
                            <span> (range 30/120)</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={lightWeaponPop}
                        >
                            <span> light</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={loadingPop}
                        >
                            <span> loading</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Crossbow, heavy</td>
                    <td>50 gp</td>
                    <td>1d10 piercing</td>
                    <td>18 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={ammunitionPop}
                        >
                            <span>Ammunition</span>
                        </OverlayTrigger> 
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={rangePop}
                        >
                            <span> (range 100/400)</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={heavyWeaponPop}
                        >
                            <span> heavy</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={loadingPop}
                        >
                            <span> loading</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={twohandedPop}
                        >
                            <span> two-handed</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Longbow</td>
                    <td>50 gp</td>
                    <td>1d8 piercing</td>
                    <td>2 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={ammunitionPop}
                        >
                            <span>Ammunition</span>
                        </OverlayTrigger> 
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={rangePop}
                        >
                            <span> (range 150/600)</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={heavyWeaponPop}
                        >
                            <span> heavy</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={twohandedPop}
                        >
                            <span> two-handed</span>
                        </OverlayTrigger>
                    </td>
                </tr>
                <tr>
                    <td>Net</td>
                    <td>1 gp</td>
                    <td>-</td>
                    <td>3 lb.</td>
                    <td>
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={netPop}
                        >
                            <span>Special</span>
                        </OverlayTrigger>,
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={thrownPop}
                        >
                            <span> thrown</span>
                        </OverlayTrigger> 
                        <OverlayTrigger 
                            trigger="hover" 
                            placement="right" 
                            overlay={rangePop}
                        >
                            <span> (range 5/15)</span>
                        </OverlayTrigger>
                    </td>
                </tr>
            </table>
        </div> 
    )
}

export default ArmorTable