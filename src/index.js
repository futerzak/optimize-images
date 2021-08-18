"use strict"
const send = require("send");
const optimizeImages = require("./utils/optimizeImages");

/**
 * Middleware use tinypng's api to optimize served images
 * @param  {string} root     path to directory with images
 * @param  {string} apiKey   secret api key from https://tinypng.com/developers
 * @param  {object} options  middleware options
 * @return {function}
 */
module.exports = optimizeImages;
module.exports.mime = send.mime;