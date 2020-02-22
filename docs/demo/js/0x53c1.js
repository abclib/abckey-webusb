"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _0x53c1_json_1 = __importDefault(require("./0x53c1.json"));
var protocol_1 = __importDefault(require("./protocol"));
var P53c1 = (function () {
    function P53c1() {
    }
    P53c1.protocol = function () {
        return new protocol_1.default(this.json, this.conf);
    };
    P53c1.json = _0x53c1_json_1.default;
    P53c1.conf = {
        enumname: 'MessageType',
        headString: '?',
        flagString: '##'
    };
    P53c1.device = {
        vendorId: 0x1209,
        productId: 0x53C1
    };
    return P53c1;
}());
exports.default = P53c1;
