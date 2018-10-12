({
   doInit:function(component){
        component.set("v.AcctPickList",sessionStorage.getItem("AcctPickList").split(','));
        component.set("v.FundPickList",sessionStorage.getItem("FundPickList").split(','));
   },
   onSelected:function(component){
    //    let accType = component.find("AccType").get("v.value");
    //    let fundType = component.find("FundType").get("v.value");

    //     if(accType!=="")
    //         $A.get("e.c:ServiceRequestEvent").setParams({"eAccType": accType});
    //     if(fundType!=="")
    //         $A.get("e.c:ServiceRequestEvent").setParams({"eFundType": fundType});
    //    console.info('you have selected ' + accType + ' > ' + fundType);

       /// ***** *** *** this solution doesn't work
   },
   onBlurAmt:function(component, event){
        let accType = component.find("AccType").get("v.value");
        let fundType = component.find("FundType").get("v.value");
        let fundAmt = component.find("FundingAmount").get("v.value");
       
        $A.get("e.c:ServiceRequestEvent").setParams({
            "RequestTypeSelected" : "Trust & Investment Onboarding",
            "eAccType": accType,
            "eFundType": fundType,
            "eFundingAmount": fundAmt
        }).fire();
        
   }

})