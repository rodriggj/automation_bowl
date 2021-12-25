import { LightningElement, wire } from 'lwc';
import {getObjectInfo} from 'lightning/uiObjectInfoApi';
import {getPicklistValues} from 'lightning/uiObjectInfoApi';

//Team Schema
// import TEAM_OBJECT from '@salesforce/schema/Team__c';
import CONFERENCE_FIELD from '@salesforce/schema/Team__c.Conference__c'
import DIVISION_FIELD from '@salesforce/schema/Team__c.Division__c'

//Constants
const CONFERENCE_ERROR = 'Error loading Conferences'
const DIVISION_ERROR = 'Error loading Divisions'

export default class TeamFilters extends LightningElement {
    filters = {
        searchKey: '', 
        maxRecord: 16
    }

    conferenceError = CONFERENCE_ERROR
    divisionError = DIVISION_ERROR

    // @wire(getObjectInfo, {objectApiName: TEAM_OBJECT })
    // teamObjectInfo

    @wire(getPicklistValues, {recordTypeId: '012000000000000AAA', fieldApiName: CONFERENCE_FIELD})
    // conferenceHandler(res){console.log(res)}
    conferences

    @wire(getPicklistValues, {recordTypeId: '012000000000000AAA',fieldApiName: DIVISION_FIELD})
    // divisionHandler(res){console.log(res)}
    divisions

    handleSearchKeyChange(){

    }

    handleMaxRecordChange(){

    }
}
