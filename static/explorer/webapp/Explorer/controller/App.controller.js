sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
 ], function (Controller,MessageToast) {
    "use strict";
    return Controller.extend("expapp.ui.Explorer.controller.App", {   


      onHomePress : function (evt) {
         var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("appHome");

      }
    });
 });