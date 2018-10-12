({
    doInit : function(cmp) {
        let action = cmp.get("c.GetServiceRequestPickList");
        action.setCallback(this, function(resp){
            let state = resp.getState();
            if(cmp.isValid() && state === "SUCCESS"){
                let {acctTypeList, fundTypeList, priorityList, ReqTypeList} = resp.getReturnValue();
                sessionStorage.setItem("AcctPickList",acctTypeList);
                sessionStorage.setItem("FundPickList",fundTypeList);
                sessionStorage.setItem("PriorityList", priorityList);
                cmp.set("v.ReqTypeList", ReqTypeList);
            }
        });
        $A.enqueueAction(action);

    }
})