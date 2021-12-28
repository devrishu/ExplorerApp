sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel',
    "sap/m/IconTabFilter",
    "sap/m/Text"
 ], (Controller,JSONModel,IconTabFilter,Text) => Controller.extend("expapp.ui.Explorer.controller.App", {   
      
   onInit (evt) {
      // set explored app's demo model on this sample
      const oModel = new JSONModel("./fileService");
      this.getView().setModel(oModel);
      const socket = io();

      socket.on('file change', (msg) => {
         console.log(`${msg  }client`);
      });
   },

   handleTreeItemPress(evt){
      const filePath = evt.getSource().getBindingContext().getProperty("path");  
      
      const existingTabs = this.byId("idIconTabBar").getItems();
      for(let index = 0; index < existingTabs.length ; index++){
         const tab = existingTabs[index];
         if(tab.getKey() == filePath){
            this.byId("idIconTabBar").setSelectedKey(filePath); 
            return;
         }
      }               
      

      const fileName = evt.getSource().getBindingContext().getProperty("name");
      const oModel = new JSONModel(`./fileService/readFile/?fileName=${  filePath}`);
      
      const iconTabFilter =  new IconTabFilter({
         text: fileName ,
         key: filePath,
         
      });      

      this.byId("idIconTabBar").addItem(iconTabFilter);
      this.byId("idIconTabBar").setSelectedKey(filePath);
      this.initRichTextEditor(iconTabFilter,oModel);
     
   },





   initRichTextEditor (tabFilter,oModel) {      
      
      sap.ui.require(["sap/ui/richtexteditor/RichTextEditor"],
         (RTE) => {
            let rte   = new RTE( {  
               width: "100%",
               height: "600px",
               customToolbar: true,
               showGroupFont: true,
               showGroupLink: true,
               showGroupInsert: true,            
               value:"{/content}"
            });
         rte.setModel(oModel);
          tabFilter.addContent(rte);
      });
      
   }

}));