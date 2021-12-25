import { LightningElement, api } from 'lwc';

export default class TeamTile extends LightningElement {
    @api team = {}

    // handleClick(){
    //     this.dispatchEvent(new CustomEvent('selected', {
    //         detail:this.team.Id
    //     }))
    // }
}