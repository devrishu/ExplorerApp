sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel'
 ], (Controller,JSONModel) => Controller.extend("expapp.ui.Explorer.controller.App", {   
      
   onInit (evt) {
      // set explored app's demo model on this sample
      const oModel = new JSONModel("./fileService");
      this.getView().setModel(oModel);
   },

   handleTreeItemPress(evt){
      var filePath = evt.getSource().getBindingContext().getProperty("path");
      const oModel = new JSONModel("./fileService/readFile/?fileName=" + filePath);
      this.getView.setModel("fileContent",oModel);

   }

    
    }));