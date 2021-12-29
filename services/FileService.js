const { dir } = require('console');
const fs = require('fs');

class FileService{
    constructor(dirPaths){
        this.dirPaths = dirPaths;
      }

     getList() {
      const result = [];      
      this.dirPaths.forEach(dir => {
         result.push(this.getDirData(dir,dir)); 
      });   
      return { "content" : result }; 
       
      }

     getDirData(dirPath,name) {
      const dirDetail = {};
      dirDetail.name = name;
      dirDetail.isDirectory = false;
      dirDetail.path = dirPath ;
      dirDetail.files = [];

      if(fs.statSync(`${dirPath }`).isDirectory() ){
        dirDetail.isDirectory = true ;
        const files = fs.readdirSync(dirPath);
        files.forEach(file=>{
          dirDetail.files.push(this.getDirData(`${dirPath  }/${  file}`,file))
        });
      }
      return dirDetail;
      
      }

      getFileContent(fileName){
        const obj = {};
        try{          
           const fileContent  =  fs.readFileSync(fileName,{encoding:'utf8', flag:'r'});       
           obj.content = fileContent; 
        } catch(err){
          console.error(err);
        }
        
     
        return obj;;

      }
}

module.exports = FileService;