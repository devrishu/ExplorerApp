const fs = require('fs');

class FileService{
    constructor(dirPaths){
        this.dirPaths = dirPaths;
      }

     getList() {
      const result = [];
      let files ;
      let obj = {};
      this.dirPaths.forEach(dir => {
        files = this.getData(dir);
        obj.name = dir;
        obj.files = files;
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
        if(fs.statSync(`${dirPath  }/${  file}`).isDirectory()){
         obj.files = this.getData(`${dirPath  }/${  file}`);
        }
        result.push(obj);        
      });
      
      return result;       
      }

}

module.exports = FileService;