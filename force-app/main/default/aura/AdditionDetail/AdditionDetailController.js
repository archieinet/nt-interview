({
    doInit:function(component){
        component.set("v.PriorityList",sessionStorage.getItem("PriorityList").split(','));
    },
    goBack: function (component, event, helper) {
        let evtType = component.getEvent("cmpReqType");
        evtType.setParams({"RequestTypeSelected": ""});
        evtType.fire();
    }, 
    saveData:function(component,event,helper){
    
        let ServiceRequest__c = {
            From_Account__c:component.get("v.FromAcct"),
            To_Account__c:component.get("v.ToAcct"),
            Request_Type__c: component.get("v.RequestedType"),
            Account_Type__c: component.get("v.AcctTypeSelected"),
            Funding_Type__c: component.get("v.FundTypeSelected"),
            Funding_Amount__c : component.get("v.FundAmount"),
            Additional_Details__c: component.find("AdditDetail").get("v.value"),
            Priority__c : component.find("Priority").get("v.value"),
        }; //console.log(ServiceRequest__c);

        //SaveServiceRequest
        helper.SaveServiceRequest(component, ServiceRequest__c);



    },
    storedData:function(component,event){
        component.set("v.FromAcct",event.getParams().eFromAccount); 
        component.set("v.ToAcct",event.getParams().eToAccount); 
        component.set("v.AcctTypeSelected",event.getParams().eAccType); 
        component.set("v.FundTypeSelected",event.getParams().eFundType); 
        component.set("v.FundAmount",event.getParams().eFundingAmount);
        component.set("v.RequestedType",event.getParams().RequestTypeSelected);
        
    }

})
