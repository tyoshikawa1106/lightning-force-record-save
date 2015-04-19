({
    doEdit : function(component) {
        var evt = $A.get("e.force:navigateToComponent");
        evt.setParams({
            componentDef: "c:LightningForceRecordEditDemo",
            componentAttributes: {
                account : component.get("v.account")
            }
        });
        evt.fire();
    }
})