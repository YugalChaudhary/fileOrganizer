let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organize");
let treeRecObj = require("./commands/treeRec");
let organizeRecObj = require("./commands/organizeRec");

let inputArr = process.argv.slice(2);

let cmd = inputArr[0];
let path = inputArr[1];

switch(cmd) {
    case "help" :
        helpObj.helpFn();
        break;
    case "tree" :
        treeObj.treeFn(path); 
        break;
    case "organize" :
        organizeObj.organizeFn(path);
        break;
    case "treeRec" :
        treeRecObj.treeFn(path);
        break;    
    case "organizeRec" :
        organizeRecObj.organizeRecFn(path);
        break;
    default :
    console.log(`Kindly enter a valid command
    try help command to know the different commands`);        
}