({
    save : function(component) {
        
        component.find("edit").get("e.recordSave").fire();
        
        var evt = $A.get("e.force:navigateToComponent");
        evt.setParams({
            componentDef: "c:LightningForceRecordSaveDemo"
        });
        evt.fire();
    }
})