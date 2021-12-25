public with sharing class TeamController {
    @AuraEnabled(Cacheable=true)
    public static List<Team__c> getTeams(){
        return [SELECT ID__c, City__c, Conference__c, Division__c, LogoURL__c, Background_URL__c, Wins__c, Loss__c, Name, Team__c FROM Team__c];
    }
}