"use strict";
exports.__esModule = true;
exports.rndId = function () {
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
        .toString(36)
        .toUpperCase();
};
exports.rndSig = function (recieverName) {
    return recieverName + "&" + Date.now() + "&" + exports.rndId();
};
