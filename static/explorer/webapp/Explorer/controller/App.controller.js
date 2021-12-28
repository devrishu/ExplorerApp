sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel',
    'sap/m/TabContainerItem',
    'sap/m/MessageBox'
 ], (Controller,JSONModel,TabContainerItem,MessageBox) => Controller.extend("expapp.ui.Explorer.controller.App", {   
      
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
      
      const existingTabs = this.byId("idTabContainer").getItems();
      for(let index = 0; index < existingTabs.length ; index++){
         const tab = existingTabs[index];
         if(tab.getKey() == filePath){
            this.byId("idTabContainer").setSelectedItem(tab); 
            return;
         }
      }               
      

      const fileName = evt.getSource().getBindingContext().getProperty("name");
      const oModel = new JSONModel(`./fileService/readFile/?fileName=${  filePath}`);
      
      const tabItem =  new TabContainerItem({
         name: fileName ,
         key: filePath,
         
      });      

      this.byId("idTabContainer").addItem(tabItem);
      this.byId("idTabContainer").setSelectedItem(tabItem);
      this.initRichTextEditor(tabItem,oModel);
     
   },

   initRichTextEditor (tab,oModel) {      
      
      sap.ui.require(["sap/ui/richtexteditor/RichTextEditor"],
         (RTE) => {
            const rte   = new RTE( {  
               width: "500px",
               height: "600px",
               customToolbar: true,
               showGroupFont: true,
               showGroupLink: true,
               showGroupInsert: true,            
               value:"{/content}"
            });
         rte.setModel(oModel);
         tab.addContent(rte);
      });
      
   },

   itemCloseHandler(oEvent) {
      // prevent the tab being closed by default
      oEvent.preventDefault();

      const oTabContainer = this.byId("idTabContainer");
      const oItemToClose = oEvent.getParameter('item');

      MessageBox.confirm(`Do you want to close the tab '${  oItemToClose.getName()  }'?`, {
         onClose (oAction) {
            if (oAction === MessageBox.Action.OK) {
               oTabContainer.removeItem(oItemToClose);
               //MessageToast.show(`Item closed: ${  oItemToClose.getName()}`, {duration: 500});
            } else {
              // MessageToast.show(`Item close canceled: ${  oItemToClose.getName()}`, {duration: 500});
            }
         }
      });
   }

}));