const fs = require('fs');
const fsPromises = fs.promises;

class FileService{
    constructor(dirPath){
        this.dirPath = dirPath;
    }

     async getList() {
        const data =  await this.getData();
        return data;
      }

     async getData() {
       let files;
       try {
          files = await fsPromises.readdir(this.dirPath);          
        } catch (error) {
          console.log(error);
        }
        let result = {};
        result[this.dirPath] = files;
        return result ;
      }

}

module.exports = FileService;