({
    
    onBlurAcct:function(component){
        let fromAccount = component.find("FromAccount").get("v.value");
        let toAccount = component.find("ToAccount").get("v.value");
       
        $A.get("e.c:ServiceRequestEvent").setParams({
            "RequestTypeSelected" : "Money Movement",
            "eFromAccount": fromAccount,
            "eToAccount": toAccount
        }).fire();
        
   }
})