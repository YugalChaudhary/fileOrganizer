let fs = require("fs");
let path = require("path");

let allEntities = "";
let count = 0;
function treeFun(srcPath) {
    let baseName = path.basename(srcPath);
    for (let i = 0 ; i < count ; i++) {
        allEntities += "\t";
    }
    allEntities += baseName + "\n";
    for (let i = 0 ; i < count ; i++) {
        allEntities += "\t";
    }
    allEntities += "     "+"└──";

    let content = fs.readdirSync(srcPath);
    for (let i = 0 ; i < content.length ; i++) {

        let pathFile = path.join(srcPath , content[i]);

        if (fs.lstatSync(pathFile).isFile()) {
                allEntities += "\n";
                for (let i = 0 ; i <= count ; i++) {
                    allEntities += "\t";
                }
                allEntities += "├──" + content[i];
        }
        else {
            count++;
            console.log(allEntities);
            allEntities = "";
            treeFun(pathFile);
        }
    }
    console.log(allEntities);
    allEntities = "";
    count--;
}

module.exports = {
    treeFn : treeFun
};