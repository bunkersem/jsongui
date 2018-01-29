"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var Store = (function () {
    function Store(name, readyCb) {
        var _this = this;
        this.name = name;
        var fileName = this.fileName = path.join(__dirname, "./" + name.toLocaleLowerCase() + ".json");
        console.log('created object store:', fileName);
        fs.exists(fileName, function (exists) {
            if (!exists) {
                fs.writeFile(fileName, '{}', readyCb);
            }
            fs.readFile(fileName, 'utf8', function (err, data) {
                if (err) {
                    readyCb(err);
                }
                var result = {};
                try {
                    result = JSON.parse(data);
                }
                catch (jsonErr) {
                    return readyCb(jsonErr);
                }
                if (typeof result !== 'object') {
                    return readyCb(new Error('Object store data can only be of type object.'));
                }
                _this.memStore = result;
                // Ready!
                readyCb();
            });
        });
    }
    Store.prototype.access = function (func) {
        var _this = this;
        func(this.memStore, function (result, doneCb) {
            if (typeof result !== 'object') {
                throw Error('Result is not of type object');
            }
            _this.memStore = result;
            var fileName = _this.fileName;
            var data = JSON.stringify(_this.memStore, null, process.env.NODE_ENVIRONMENT !== 'Production' ? 2 : null);
            fs.writeFile(fileName, data, doneCb);
        });
    };
    return Store;
}());
exports["default"] = Store;
