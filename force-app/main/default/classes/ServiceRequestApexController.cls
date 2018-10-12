public with sharing class ServiceRequestApexController {
    

    public ServiceRequestApexController() { 
        
    }

   	public class MultiplePickList{
        @AuraEnabled public List<string> acctTypeList;
        @AuraEnabled public List<string> fundTypeList;
        @AuraEnabled public List<string> priorityList;
        @AuraEnabled public List<string> ReqTypeList;
    }

    @AuraEnabled
    public static MultiplePickList GetServiceRequestPickList(){
        MultiplePickList model = new MultiplePickList();
            model.acctTypeList = getPickList(ServiceRequest__c.Account_Type__c.getDescribe().getPicklistValues());
            model.fundTypeList = getPickList(ServiceRequest__c.Funding_Type__c.getDescribe().getPicklistValues());
            model.priorityList = getPickList(ServiceRequest__c.Priority__c.getDescribe().getPicklistValues());
            model.ReqTypeList = getPickList(ServiceRequest__c.Request_Type__c.getDescribe().getPicklistValues());
       return  model; 
    }

     @AuraEnabled
     public static void SaveServiceRequest(ServiceRequest__c model){
          system.debug(model);
          upsert model;
     }


    @TestVisible static List<string> getPickList(List<PicklistEntry> values) {
	List<string> picklist = new List<string>();
        for (PickListEntry entry : values) {
            picklist.add(String.valueOf(entry.getValue()));
        }
        return picklist; //return list
    }
}