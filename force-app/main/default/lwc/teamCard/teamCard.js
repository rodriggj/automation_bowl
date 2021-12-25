import { LightningElement } from 'lwc';

// Import Team__c Schema
import NAME_FIELD from '@salesforce/schema/Team__c.Name'
import LOGO_URL_FIELD from '@salesforce/schema/Team__c.LogoURL__c'
import CONFERENCE_FIELD from '@salesforce/schema/Team__c.Conference__c'
import DIVISION_FIELD from '@salesforce/schema/Team__c.Division__c'
import WINS_FIELD from '@salesforce/schema/Team__c.Wins__c'
import LOSS_FIELD from '@salesforce/schema/Team__c.Loss__c'
import STADIUM_NAME_FIELD from '@salesforce/schema/Team__c.Stadium__c'
import STADIUM_TYPE_FIELD from '@salesforce/schema/Team__c.Stadium_Type__c'
import PLAYING_SURFACE_FIELD from '@salesforce/schema/Team__c.Playing_Surface__c'
import CAPACITY_FIELD from '@salesforce/schema/Team__c.Capacity__c'
import HEAD_COACH_FIELD from '@salesforce/schema/Team__c.Head_Coach__c'
import OFFENSE_FIELD from '@salesforce/schema/Team__c.Offense__c'
import DEFENSE_FIELD from '@salesforce/schema/Team__c.Defense__c'
import SPEACIAL_TEAMS_COACH_FIELD from '@salesforce/schema/Team__c.Special_Teams__c'

import { getFieldValue } from 'lightning/uiRecordApi';

export default class TeamCard extends LightningElement {
    conference_field = CONFERENCE_FIELD
    division_field = DIVISION_FIELD
    wins_field = WINS_FIELD
    loss_field = LOSS_FIELD
    stadiumName_field = STADIUM_NAME_FIELD
    stadiumType_field = STADIUM_TYPE_FIELD
    playingSurface_field = PLAYING_SURFACE_FIELD
    capacity_field = CAPACITY_FIELD
    headCoach_field = HEAD_COACH_FIELD
    offense_field = OFFENSE_FIELD
    defense_field = DEFENSE_FIELD
    specialTeamsCoach_field = SPEACIAL_TEAMS_COACH_FIELD

    recordId = 'a005f000005RYfWAAW'
    teamName
    teamURL

    handleRecordLoaded(e){
        const {records} = e.detail
        const recordData = records[this.recordId]
        this.teamName = getFieldValue(recordData, NAME_FIELD)
        this.teamURL = getFieldValue(recordData, LOGO_URL_FIELD)
    }
}