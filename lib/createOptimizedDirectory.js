const fs = require("fs");

module.exports = createOptimizedDirectory;

/**
 * Create a directory where will be saved optimized images
 * @param  {string} directoryName name of directory to create
 * @return {Boolean}              result
 */
function createOptimizedDirectory(directoryName) {
    try {
        fs.mkdirSync(directoryName);
    } catch(e) {
        if ( e.code != 'EEXIST' ){ console.error(e) /* throw e */ };
        return false;
    }
    return true;
}
