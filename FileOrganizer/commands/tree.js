let fs = require("fs");
let path = require("path");

function treeFun(srcPath) {
    let baseName = path.basename(srcPath);
    console.log(baseName + "\n     "+"└──");
    let allEntities = "";
    let content = fs.readdirSync(srcPath);
    for (let i = 0 ; i < content.length ; i++) {
        if (i == 0) {
            allEntities += "\t"+"├──" + content[i];
        }
        else {
            allEntities += "\n\t" + "├──" + content[i];
        }
    }
    console.log(allEntities);
}

module.exports = {
    treeFn : treeFun
};