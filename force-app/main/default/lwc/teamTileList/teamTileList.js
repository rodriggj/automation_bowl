import { LightningElement, wire } from 'lwc';
import getTeams from '@salesforce/apex/TeamController.getTeams'
export default class TeamTileList extends LightningElement {
    teams
    error
    // filters = {}
    @wire(getTeams) 

    teamsHandler({data, error}){
        if(data){
            console.log(data)
            this.teams = data
        } else {
            console.error(error)
            this.error = error
        }
    }

    // handleTeamSelected(event){
    //     console.log("selected team id", event)
    // }
}