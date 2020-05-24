import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const Armor = props => {
    // Armor type description popovers
    const lightPop = (
        <Popover>
            <Popover.Title as="h4">Light Armor</Popover.Title>
            <Popover.Content>
                <p>Made from supple and thin materials, light 
                    armor favors agile adventurers since it 
                    offers some protection without sacrificing 
                    mobility. If you wear light armor, you add 
                    your Dexterity modifier to the base number 
                    from your Armor Class.</p>
            </Popover.Content>
        </Popover>
    );
    const mediumPop = (
        <Popover>
            <Popover.Title as="h4">Medium Armor</Popover.Title>
            <Popover.Content>
                <p>Medium armor offers more protection than 
                    light armor, but it also impairs your 
                    movement more. If you wear medium armor, 
                    you add your Dexterity modifier, to a
                    maximum of +2, to the base number from your
                    armor type to determine your Armor Class.</p>
            </Popover.Content>
        </Popover>
    );
    const heavyPop = (
        <Popover>
            <Popover.Title as="h4">Heavy Armor</Popover.Title>
            <Popover.Content>
                <p>Of all the armor categories, heavy armor 
                    offers the best protection. These suits of 
                    armor cover the entire body and are designed 
                    to stop a wide range of attacks. Only 
                    proficient warriors can manage their weight 
                    and bulk.</p>
                <p>Heavy armor doesn't let you add your 
                    Dexterity modifier to your Armor Class, but 
                    it also doesn't penalize you if your
                    Dexterity modifier is negative.</p>
            </Popover.Content>
        </Popover>
    );
    const shieldPop = (
        <Popover>
            <Popover.Title as="h4">Shields</Popover.Title>
            <Popover.Content>
                <p>A shield is made from wood or metal and is 
                    carried in one hand. Wielding a shield 
                    increases your Armor Class by 2. You can 
                    benefit from only one shield at a time.</p>
            </Popover.Content>
        </Popover>
    );

    // Armor description popovers
    // Light armors
    const paddedPop = (
        <Popover>
            <Popover.Title as="h4">Padded Armor</Popover.Title>
            <Popover.Content>
                <p>Padded armor consists of quilted layers of 
                    cloth and batting.</p>
            </Popover.Content>
        </Popover>
    );
    const leatherPop = (
        <Popover>
            <Popover.Title as="h4">Leather Armor</Popover.Title>
            <Popover.Content>
                <p>The breastplate and shoulder protectors of 
                    this armor are made of leather that has been 
                    stiffened by being boiled in oil. The rest 
                    of the armor is made of softer and more 
                    flexible materials.</p>
            </Popover.Content>
        </Popover>
    );
    const studdedPop = (
        <Popover>
            <Popover.Title as="h4">Studded Leather Armor</Popover.Title>
            <Popover.Content>
                <p>Made from touch but flexible leather, studded 
                    leather is reinforced with close-set rivets 
                    or spikes.</p>
            </Popover.Content>
        </Popover>
    );
    // Medium armors
    const hidePop = (
        <Popover>
            <Popover.Title as="h4">Hide Armor</Popover.Title>
            <Popover.Content>
                <p>This crude armor consists of thick furs and 
                    pelts. It is commonly worn by barbarian 
                    tribes, evil humanoids, and other folk who
                    lack access to the tools and materials 
                    needed to create better armor.</p>
            </Popover.Content>
        </Popover>
    );
    const chainShirtPop = (
        <Popover>
            <Popover.Title as="h4">Chain Shirt</Popover.Title>
            <Popover.Content>
                <p>Made of interlocking metal rings, a chain
                    shirt is worn between layers of clothing or 
                    leather. This armor offers modest protection
                    to the wearer's upper body and allows the 
                    sound of the rings rubbing against one 
                    another to be muffled by outer layers.</p>
            </Popover.Content>
        </Popover>
    );
    const scalePop = (
        <Popover>
            <Popover.Title as="h4">Scale Main Armor</Popover.Title>
            <Popover.Content>
                <p>This armor consists of a coat and leggings
                    (and perhaps a separate skirt) of leather 
                    covered with overlapping pieces of metal, 
                    much like the scales of a fish. The suits
                    includes gauntlets.</p>
            </Popover.Content>
        </Popover>
    );
    const breastplatePop = (
        <Popover>
            <Popover.Title as="h4">Breastplate</Popover.Title>
            <Popover.Content>
                <p>This armor consists of a fitted metal chest 
                    piece worn with supple leather. Although it
                    leaves the legs and arms relatively 
                    unprotected, this armor provides good
                    protection for the wearer's vital organs
                    while leaving the wearer relatively 
                    unencumbered.</p>
            </Popover.Content>
        </Popover>
    );
    const halfPlatePop = (
        <Popover>
            <Popover.Title as="h4">Half Plate Armor</Popover.Title>
            <Popover.Content>
                <p>Half plate consists of shaped metal plates 
                    that cover most of the wearer's body. It 
                    does not include leg protection beyond 
                    simple greaves that are attached with 
                    leather straps.</p>
            </Popover.Content>
        </Popover>
    );
    // Heavy armors
    const ringPop = (
        <Popover>
            <Popover.Title as="h4">Ring Mail Armor</Popover.Title>
            <Popover.Content>
                <p>This armor is leather armor with heavy rings 
                    sewn into it. The rings help reinforce the 
                    armor against blows from swords and axes. 
                    Ring mail is inferior to chain mail, and 
                    it's usually worn only by those who can't 
                    afford better armor.</p>
            </Popover.Content>
        </Popover>
    );
    const chainMailPop = (
        <Popover>
            <Popover.Title as="h4">Chain Mail Armor</Popover.Title>
            <Popover.Content>
                <p>Made of interlocking metal rings, chain mail 
                    includes a layer of quilted fabric worn 
                    underneath the mail to prevent chafing and 
                    to cushion the impact of blows. The suit 
                    includes gauntlets</p>
            </Popover.Content>
        </Popover>
    );
    const splintPop = (
        <Popover>
            <Popover.Title as="h4">Splint Armor</Popover.Title>
            <Popover.Content>
                <p>This armor is made of narrow vertical strips
                    of metal riveted to a backing of leather 
                    that is worn over cloth padding. Flexible 
                    chain mail protects the joints.</p>
            </Popover.Content>
        </Popover>
    );
    const platePop = (
        <Popover>
            <Popover.Title as="h4">Plate Armor</Popover.Title>
            <Popover.Content>
                <p>Plate consists of shaped, interlocking metal
                    plates to cover the entire body. A suit of
                    plate includes includes gauntlets, heavy
                    leather boots, a visored helmet, and thick 
                    layers of padding underneath the armor. 
                    Buckles and straps distribute the weight over 
                    the body.</p>
            </Popover.Content>
        </Popover>
    );

    return (
        <div>
            <table>
                <tr><h3>Armor</h3></tr>
                <tr>
                    <th>Armor</th>
                    <th>Cost</th>
                    <th>Armor Class</th>
                    <th>Strength</th>
                    <th>Stealth</th>
                    <th>Weight</th>
                </tr>
                <tr>
                    <OverlayTrigger 
                        trigger="hover" 
                        placement="right" 
                        overlay={lightPop}
                    >
                        <em>Light Armor</em>
                    </OverlayTrigger>
                </tr>
                <tr>
                    <OverlayTrigger 
                        trigger="hover" 
                        placement="right" 
                        overlay={paddedPop}
                    >
                        <td>Padded</td>
                    </OverlayTrigger>
                    <td>5 gp</td>
                    <td>11 + DEX mod</td>
                    <td>-</td>
                    <td>Disadvantage</td>
                    <td>8 lb.</td>
                </tr>
                <tr>
                    <OverlayTrigger 
                        trigger="hover" 
                        placement="right" 
                        overlay={leatherPop}
                    >
                        <td>Leather</td>
                    </OverlayTrigger>
                    <td>10 gp</td>
                    <td>11 + DEX mod</td>
                    <td>-</td>
                    <td>-</td>
                    <td>10 lb.</td>
                </tr>
                <tr>
                    <OverlayTrigger 
                        trigger="hover" 
                        placement="right" 
                        overlay={studdedPop}
                    >
                        <td>Studded leather</td>
                    </OverlayTrigger>
                    <td>45 gp</td>
                    <td>12 + DEX mod</td>
                    <td>-</td>
                    <td>-</td>
                    <td>13 lb.</td>
                </tr>
                <tr>
                    <OverlayTrigger 
                        trigger="hover" 
                        placement="right" 
                        overlay={mediumPop}
                    >
                        <em>Medium Armor</em>
                    </OverlayTrigger>
                </tr>
                <tr>
                    <OverlayTrigger 
                        trigger="hover" 
                        placement="right" 
                        overlay={hidePop}
                    >
                        <td>Hide</td>
                    </OverlayTrigger>
                    <td>10 gp</td>
                    <td>12 + DEX mod (max 2)</td>
                    <td>-</td>
                    <td>-</td>
                    <td>12 lb.</td>
                </tr>
                <tr>
                    <OverlayTrigger 
                        trigger="hover" 
                        placement="right" 
                        overlay={chainShirtPop}
                    >
                        <td>Chain shirt</td>
                    </OverlayTrigger>
                    <td>50 gp</td>
                    <td>13 + DEX mod (max 2)</td>
                    <td>-</td>
                    <td>-</td>
                    <td>20 lb.</td>
                </tr>
                <tr>
                    <OverlayTrigger 
                        trigger="hover" 
                        placement="right" 
                        overlay={scalePop}
                    >
                        <td>Scale Mail</td>
                    </OverlayTrigger>
                    <td>50 gp</td>
                    <td>14 + DEX mod (max 2)</td>
                    <td>-</td>
                    <td>Disadvantage</td>
                    <td>45 lb.</td>
                </tr>
                <tr>
                    <OverlayTrigger 
                        trigger="hover" 
                        placement="right" 
                        overlay={breastplatePop}
                    >
                        <td>Breastplate</td>
                    </OverlayTrigger>
                    <td>400 gp</td>
                    <td>14 + DEX mod (max 2)</td>
                    <td>-</td>
                    <td>-</td>
                    <td>20 lb.</td>
                </tr>
                <tr>
                    <OverlayTrigger 
                        trigger="hover" 
                        placement="right" 
                        overlay={halfPlatePop}
                    >
                        <td>Half plate</td>
                    </OverlayTrigger>
                    <td>750 gp</td>
                    <td>15 + DEX mod (max 2)</td>
                    <td>-</td>
                    <td>Disadvantage</td>
                    <td>40 lb.</td>
                </tr>
                <tr>
                    <OverlayTrigger 
                        trigger="hover" 
                        placement="right" 
                        overlay={heavyPop}
                    >
                        <em>Heavy Armor</em>
                    </OverlayTrigger>
                </tr>
                <tr>
                    <OverlayTrigger 
                        trigger="hover" 
                        placement="right" 
                        overlay={ringPop}
                    >
                        <td>Ring Mail</td>
                    </OverlayTrigger>
                    <td>30 gp</td>
                    <td>14</td>
                    <td>-</td>
                    <td>Disadvantage</td>
                    <td>40 lb.</td>
                </tr>
                <tr>
                    <OverlayTrigger 
                        trigger="hover" 
                        placement="right" 
                        overlay={chainMailPop}
                    >
                        <td>Chain Mail</td>
                    </OverlayTrigger>
                    <td>75 gp</td>
                    <td>16</td>
                    <td>STR 13</td>
                    <td>Disadvantage</td>
                    <td>55 lb.</td>
                </tr>
                <tr>
                    <OverlayTrigger 
                        trigger="hover" 
                        placement="right" 
                        overlay={splintPop}
                    >
                        <td>Splint</td>
                    </OverlayTrigger>
                    <td>200 gp</td>
                    <td>17</td>
                    <td>STR 15</td>
                    <td>Disadvantage</td>
                    <td>60 lb.</td>
                </tr>
                <tr>
                    <OverlayTrigger 
                        trigger="hover" 
                        placement="right" 
                        overlay={platePop}
                    >
                        <td>Plate</td>
                    </OverlayTrigger>
                    <td>1500 gp</td>
                    <td>18</td>
                    <td>STR 15</td>
                    <td>Disadvantage</td>
                    <td>65 lb.</td>
                </tr>
                <tr>
                    <OverlayTrigger 
                        trigger="hover" 
                        placement="right" 
                        overlay={shieldPop}
                    >
                        <em>Shield</em>
                    </OverlayTrigger>
                </tr>
                <tr>
                    <OverlayTrigger 
                        trigger="hover" 
                        placement="right" 
                        overlay={shieldPop}
                    >
                        <td>Shield</td>
                    </OverlayTrigger>
                    <td>10 gp</td>
                    <td>+2</td>
                    <td>-</td>
                    <td>-</td>
                    <td>6 lb.</td>
                </tr>
            </table>
            <Popover trigger='hover' placement='right'></Popover>
        </div> 
    )
}

export default Armor