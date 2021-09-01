function helpFunc() {
    console.log(`List of all commands
    1. node main.js tree <pathName>
    2. node main.js organize <pathName>
    3. node main.js treeRec <pathname>
    4. node main.js organizeRec <pathname>
    3. node main.js help`);
}

module.exports = {
    helpFn : helpFunc
};