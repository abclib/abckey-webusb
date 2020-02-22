"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logs = (function () {
    function Logs() {
    }
    Logs.add = function (title, data) {
        if (data === void 0) { data = ''; }
        var obj = { id: String(++Logs.id), time: new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, ''), title: title, data: data };
        Logs._dispatch(obj);
    };
    Logs.listen = function (cb) {
        Logs.subscribers.push(cb);
        return function () {
            var i = Logs.subscribers.indexOf(cb);
            if (i !== -1) {
                Logs.subscribers[i] = Logs.subscribers[Logs.subscribers.length - 1];
                Logs.subscribers.pop();
            }
        };
    };
    Logs._dispatch = function (log) {
        for (var i = 0; i < Logs.subscribers.length; i++) {
            try {
                Logs.subscribers[i](log);
            }
            catch (e) {
                console.error(e);
            }
        }
    };
    Logs.id = 0;
    Logs.subscribers = [];
    return Logs;
}());
exports.default = Logs;
