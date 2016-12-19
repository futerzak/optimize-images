const fs = require("fs");

module.exports = isPathExists;


/**
 * Check wherther file or directory exists
 * @param  {string}  dir path to file or directory
 * @return {Boolean}     result
 */
function isPathExists(dir){
    if(fs.existsSync(dir)){
        return true;
    }
    return false;
}
