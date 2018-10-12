({
    SaveServiceRequest: function(cmp, model){
        console.log(model);
        let action = cmp.get("c.SaveServiceRequest");
        action.setParams({
            "model": model
        });
        $A.enqueueAction(action);
        
    }
})
