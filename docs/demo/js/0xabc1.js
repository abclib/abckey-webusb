"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _0xabc1_json_1 = __importDefault(require("./0xabc1.json"));
var protocol_1 = __importDefault(require("./protocol"));
var Pabc1 = (function () {
    function Pabc1() {
    }
    Pabc1.protocol = function () {
        return new protocol_1.default(this.json, this.conf);
    };
    Pabc1.json = _0xabc1_json_1.default;
    Pabc1.conf = {
        enumname: 'Types',
        headString: '$',
        flagString: '##'
    };
    Pabc1.device = {
        vendorId: 0x1209,
        productId: 0xABC1
    };
    return Pabc1;
}());
exports.default = Pabc1;
