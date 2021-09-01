let fs = require("fs");
let path = require("path");

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    pictures: ['png','jpg','jpeg']
}

function organizeFun(srcPath) {
    let organizeFilePath = path.join(srcPath , 'organizeFile');
    if (!fs.existsSync(organizeFilePath)) {
        fs.mkdirSync(organizeFilePath);
    }

    let content = fs.readdirSync(srcPath);

    for (let file of content) {
        
        let pathFile = path.join(srcPath , file);
        if (fs.lstatSync(pathFile).isFile()) {

            let type = checkType(pathFile);

            let pathTypeFolder = path.join(organizeFilePath , type);

            if (!fs.existsSync(pathTypeFolder)) {
                fs.mkdirSync(pathTypeFolder);
            }
            
            let src = path.join(srcPath , file);
            let dest = path.join(pathTypeFolder , file);

            fs.copyFileSync(src , dest);
        }
        else {
            let a = path.basename(pathFile);
            console.log(a);
            if (a != "organizeFile") {
                organizeFun(pathFile);
            }
        }
    }
}

function checkType(file) {
    for (let type in types) {
        for (let ext of types[type]) {
            if (path.extname(file).split('.')[1] == ext) {
                return type;
            }
        }
    }
    return 'others';
}

module.exports = {
    organizeRecFn : organizeFun
};