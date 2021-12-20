const fs = require('fs');

class FileService{
    constructor(dirPaths){
        this.dirPaths = dirPaths;
      }

     getList() {
      const result = [];
      
      this.dirPaths.forEach(dir => {
        let files ;
        const obj = {};
        obj.name = dir;
        obj.isDirectory = true;
        obj.path = dir ;
        obj.files = this.getData(dir);
        result.push(obj); 
      });   
      return result; 
       
      }

     getData(dirPath) {
       const result = [];         
       const files = fs.readdirSync(dirPath);
      files.forEach(file=>{
        const obj = {};
        obj.name = file;
        obj.isDirectory = false;
        obj.path = `${dirPath  }/${  file}` ;
        if(fs.statSync(`${dirPath  }/${  file}`).isDirectory()){
         obj.isDirectory = true;
         obj.files = this.getData(`${dirPath  }/${  file}`);
        }
        result.push(obj);        
      });
      
      return result;       
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