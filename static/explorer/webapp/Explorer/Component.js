sap.ui.define([
    "sap/ui/core/UIComponent"
 ], (UIComponent) => UIComponent.extend("expapp.ui.Explorer.Component", {
      metadata : {
         manifest: "json"
   },
       init () {
          // call the init function of the parent
          UIComponent.prototype.init.apply(this, arguments);
          
       },
   
    }));