({
    // doInit:function(c, e, h){
    //     h.doInit(c);
    // },
    handleComponentEvent:function(component,event){
        // c.set({"AcctPickList": e.getParam("AcctPickList")});
        // c.set({"FundPickList": e.getParam("FundPickList")});
        component.set("v.showTrust",
            event.getParam("RequestTypeSelected")==="Trust & Investment Onboarding");
        component.set("v.showMoney",
            event.getParam("RequestTypeSelected")==="Money Movement");
    }

})