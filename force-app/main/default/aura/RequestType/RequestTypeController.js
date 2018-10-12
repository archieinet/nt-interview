({
    doInit: function(component,event,helper){
        helper.doInit(component);
    },
    onSelectedType:function(component){
        let reqType = component.find("ReqType").get("v.value");
        let evtType = component.getEvent("cmpReqType");
        
        if(reqType==="") {
            evtType.setParams({"RequestTypeSelected": ""});
            evtType.fire();
            return;
        }
        
        
        evtType.setParams({"RequestTypeSelected": reqType});
        evtType.fire();
    }, 
    CancelRequest:function(component,event,helper){
        let evtType = component.getEvent("cmpReqType");
        evtType.setParams({"RequestTypeSelected": ""});
        evtType.fire();
    }
    
    
})