const fs = require("fs");

module.exports = isImage;

/**
 * Chceck whether file is an image (supported by tinypng api)
 * @param  {string}  fileName file name with extension
 * @return {Boolean}          result
 */
function isImage(fileName) {
    const fileExtension = fileName.split(".").pop();
    if (fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'png') {
        return true;
    }
    return false;
}
