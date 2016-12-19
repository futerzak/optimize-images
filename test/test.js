const assert = require('assert')
const fs = require('fs')

const optimizeImage = require('..')
const createOptimizedDirectory = require("../createOptimizedDirectory");
const isPathExists = require("../isPathExists");
const isImage = require("../isImage");

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });

    describe('#push()', function() {
        it('should return 1 when put new value to empty array', function() {
            assert.equal(1, [].push(4));
        });
    });
});

describe('optimizeImage', function() {
    describe('#isImage()', function() {
        it('should return true when the value is xxx.jpg', function() {
            assert.equal(true, isImage("xxx.jpg"));
        });
        it('should return false when the value is xxx.txt', function() {
            assert.equal(false, isImage("xxx.txt"));
        });
    });
    describe('#isPathExists', function() {
        it('should return true when the value is set to "test"', function() {
            assert.equal(true, isPathExists("test"));
        });
        it('should return false when the value is set to "test1"', function() {
            assert.equal(false, isPathExists("test1"));
        });
    });
    describe('#createOptimizedDirectory', function() {
        it('should return true when the value is set to "test1"', function() {
            assert.equal(true, createOptimizedDirectory("test1"));
            fs.rmdir("test1");
        });
        it('should return false when the value is set to "test"', function() {
            assert.equal(false, createOptimizedDirectory("test"));
        });
    });
});
