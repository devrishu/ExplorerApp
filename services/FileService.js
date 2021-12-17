class FileService{
    constructor(dirPath){
        this.dirPath = dirPath;
    }

     getList() {
        const data =  this.getData();
        return data;
      }

     getData() {
        const data = '["abc","def"]';
        if (!data) return [];
        return JSON.parse(data);
      }

}

module.exports = FileService;