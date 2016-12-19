"use strict"

const parseUrl = require("parseurl");
const tinify = require("tinify");
const send = require("send");
const path = require("path")
const fs = require("fs");

const createOptimizedDirectory = require("./createOptimizedDirectory");
const isPathExists = require("./isPathExists");
const isImage = require("./isImage");


module.exports = optimizeImage;
module.exports.mime = send.mime;

/**
 * Middleware use tinypng's api to optimize served images
 * @param  {string} root   path to directory with images
 * @param  {string} apiKey secret api key from https://tinypng.com/developers
 * @return {function}
 */
function optimizeImage(root, apiKey) {
    if (!root) {
      throw new TypeError('root path required');
    }

    if (typeof root !== 'string') {
      throw new TypeError('root path must be a string');
    }

    // setup options for send
    const opts = {};
    opts.maxage = 0;
    opts.root = path.resolve(root);

    tinify.key = apiKey;

    return function optimizeImage(req, res, next) {
        if(req.method !== "GET" && req.method !== 'HEAD') {
            res.statusCode = 405;
            res.setHeader("Allow", "GET, HEAD");
            res.setHeader("Content-Length", "0");
            res.end();
            return
        }


        const originalUrl = parseUrl.original(req);
        let urlPath = parseUrl(req).pathname;

        const splitPath = urlPath.split("/");

        const fileName = splitPath.pop();
        const dirPath = splitPath.join("/");
        const dir = path.join(root, "/", dirPath);
        const optimizedPath = path.join(dirPath, "/", "optimized");
        const optimizedDir = path.join(root, "/", optimizedPath);

        if (!isImage(fileName)) {
            next();
            return;
        }

        if (urlPath === '/' && originalUrl.pathname.substr(-1) !== '/') {
          urlPath = ''
        }

        // check directories exists
        if(isPathExists(dir)){
            if (!isPathExists(optimizedDir)){
                // create directory root/path.dir/optimized
                createOptimizedDirectory(optimizedDir);
            }
        } else {
            next();
            return;
        }

        // check file in directory root/path.dir/optimized
        if (!isPathExists(path.join(optimizedDir, "/", fileName))) {
            // send file to optimized
            const source = tinify.fromFile(path.join(dir, "/", fileName));
            source.toFile(path.join(optimizedDir, "/", fileName));
        } else {
            urlPath = path.join(optimizedPath, "/",fileName);
        }


        // create send stream
        const stream = send(req, urlPath, opts);

        // add directory handler
        stream.on('directory', () => { this.error(404) });

        // forward errors
        stream.on('error', (err) => {
          if (!(err.statusCode < 500)) {
            next(err);
            return;
          }

          next();
        });

        // pipe
        stream.pipe(res);
    }

}
