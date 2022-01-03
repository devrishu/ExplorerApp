const FileService = require('./FileService');


describe('getList',() =>{
    it('should return the file and folder details of services folder',()=>{
        const dirPath = "services";
        const fileService = new FileService([dirPath]);
        const expected = {"content":[{"name":"services", "isDirectory" : true , "path": "services", 
                            "files":[
                                        {"name":"FileService.js", "isDirectory" : false , "path": "services/FileService.js","files":[]},
                                        {"name":"FileService.test.js", "isDirectory" : false , "path": "services/FileService.test.js","files":[]},
                                        {"name":"FileSystemChangeService", "isDirectory" : false , "path": "services/FileSystemChangeService","files":[]}
                                    ]
                        }]};
        const actual = fileService.getList();
        expect(actual).toEqual(expected);
    });
});


describe('getDirData',() =>{
    it('should return the file and folder details of services folder',()=>{
        const dirPath = "services";
        const fileService = new FileService([dirPath]);
        const expected = {"name":"services", "isDirectory" : true , "path": "services", 
                            "files":[
                                        {"name":"FileService.js", "isDirectory" : false , "path": "services/FileService.js","files":[]},
                                        {"name":"FileService.test.js", "isDirectory" : false , "path": "services/FileService.test.js","files":[]},
                                        {"name":"FileSystemChangeService", "isDirectory" : false , "path": "services/FileSystemChangeService","files":[]}
                                    ]
                        };
        const actual = fileService.getDirData(dirPath,dirPath);
        expect(actual).toEqual(expected);
    });
});