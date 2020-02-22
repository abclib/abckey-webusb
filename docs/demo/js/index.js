"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = require("events");
var webusb_1 = __importDefault(require("./webusb"));
var _0xabc1_1 = __importDefault(require("./0xabc1"));
var _0x53c1_1 = __importDefault(require("./0x53c1"));
var ABCKEY = (function (_super) {
    __extends(ABCKEY, _super);
    function ABCKEY(options) {
        var _this = _super.call(this) || this;
        _this.__DEVICES__ = [
            _0xabc1_1.default.device,
            _0x53c1_1.default.device
        ];
        _this.__PROTOCOL__ = _0x53c1_1.default.protocol();
        _this.__WEBUSB__ = new webusb_1.default({
            debug: options.debug,
            selectConfiguration: 1,
            claimInterface: 0
        });
        _this.loopRead();
        return _this;
    }
    ABCKEY.prototype.add = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.__WEBUSB__.requestDevice(this.__DEVICES__)];
                    case 1:
                        result = _a.sent();
                        if (!result)
                            return [2, false];
                        if (result.productId === 0x53c1)
                            this.__PROTOCOL__ = _0x53c1_1.default.protocol();
                        else if (result.productId === 0xabc1)
                            this.__PROTOCOL__ = _0xabc1_1.default.protocol();
                        else
                            return [2, false];
                        this.emit('add', result);
                        return [2, true];
                }
            });
        });
    };
    ABCKEY.prototype.cmd = function (type, data) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var err_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.write(type, data)];
                    case 1:
                        _a.sent();
                        Object.defineProperty(this, '__MSG__', {
                            set: function (msg) { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (msg === undefined)
                                                return [2];
                                            _a = msg.type;
                                            switch (_a) {
                                                case 'PinMatrixRequest': return [3, 1];
                                                case 'ButtonRequest': return [3, 2];
                                            }
                                            return [3, 4];
                                        case 1: return [3, 5];
                                        case 2: return [4, this.write('ButtonAck')];
                                        case 3:
                                            _b.sent();
                                            return [3, 5];
                                        case 4:
                                            resolve(msg);
                                            _b.label = 5;
                                        case 5: return [2];
                                    }
                                });
                            }); }
                        });
                        return [3, 3];
                    case 2:
                        err_1 = _a.sent();
                        reject(err_1);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        }); });
    };
    ABCKEY.prototype.onMsg = function (cb) {
        var _this = this;
        var arrBuf = [];
        var arrLen = 0;
        this.on('read', function (e) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.__PROTOCOL__)
                            return [2];
                        if (!this.__PROTOCOL__.hasHead(e))
                            return [2];
                        if (this.__PROTOCOL__.hasFlag(e)) {
                            arrBuf = [];
                            arrLen = this.__PROTOCOL__.msgPages(e);
                            arrBuf.push(e);
                        }
                        else {
                            arrBuf.push(e);
                        }
                        if (arrLen === 0)
                            return [2];
                        if (arrLen > arrBuf.length)
                            return [2];
                        arrLen = 0;
                        return [4, this.__PROTOCOL__.decode(arrBuf)];
                    case 1:
                        result = _a.sent();
                        this.__MSG__ = result;
                        cb(result);
                        return [2];
                }
            });
        }); });
    };
    ABCKEY.prototype.onAdd = function (cb) {
        this.on('add', function (e) { return cb(e); });
    };
    ABCKEY.prototype.onErr = function (cb) {
        this.__WEBUSB__.onDisconnect(function (e) { return cb(e); });
    };
    ABCKEY.prototype.resetDevice = function (proto) {
        return __awaiter(this, void 0, void 0, function () {
            var msg, entropy;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.cmd('GetEntropy', { size: 32 })];
                    case 1: return [4, _a.sent()];
                    case 2:
                        msg = _a.sent();
                        if (msg.type === 'Failure')
                            return [2, msg];
                        entropy = Buffer.from(msg.data.entropy, 'base64');
                        return [4, this.cmd('ResetDevice', proto)];
                    case 3:
                        msg = _a.sent();
                        if (msg.type !== 'EntropyRequest')
                            return [2, msg];
                        return [4, this.cmd('EntropyAck', { entropy: entropy })];
                    case 4: return [2, _a.sent()];
                }
            });
        });
    };
    ABCKEY.prototype.signTx = function (proto) {
        return __awaiter(this, void 0, void 0, function () {
            var inputScriptType, outputScriptType, _i, _a, item, _b, _c, item, txAck, serialized, signatures, serialized_tx, msg, _d, serialized_1, item, success;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        inputScriptType = {
                            SPENDADDRESS: 0,
                            SPENDMULTISIG: 1,
                            EXTERNAL: 2,
                            SPENDWITNESS: 3,
                            SPENDP2SHWITNESS: 4
                        };
                        outputScriptType = {
                            PAYTOADDRESS: 0,
                            PAYTOSCRIPTHASH: 1,
                            PAYTOMULTISIG: 2,
                            PAYTOOPRETURN: 3,
                            PAYTOWITNESS: 4,
                            PAYTOP2SHWITNESS: 5,
                        };
                        for (_i = 0, _a = proto.inputs; _i < _a.length; _i++) {
                            item = _a[_i];
                            item.prev_hash = Buffer.from(item.prev_hash, 'hex');
                            item.script_type = item.script_type ? inputScriptType[item.script_type] : 0;
                        }
                        for (_b = 0, _c = proto.outputs; _b < _c.length; _b++) {
                            item = _c[_b];
                            item.script_type = item.script_type ? outputScriptType[item.script_type] : 0;
                        }
                        txAck = function (msg, proto) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, inputs, outputs;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = msg.data.request_type;
                                        switch (_a) {
                                            case 'TXINPUT': return [3, 1];
                                            case 'TXOUTPUT': return [3, 3];
                                        }
                                        return [3, 5];
                                    case 1:
                                        inputs = [proto.inputs[msg.data.details.request_index]];
                                        return [4, this.cmd('TxAck', { tx: { inputs: inputs } })];
                                    case 2: return [2, _b.sent()];
                                    case 3:
                                        outputs = [proto.outputs[msg.data.details.request_index]];
                                        return [4, this.cmd('TxAck', { tx: { outputs: outputs } })];
                                    case 4: return [2, _b.sent()];
                                    case 5: return [2, { type: 'Success', data: '' }];
                                }
                            });
                        }); };
                        serialized = [];
                        signatures = [];
                        serialized_tx = '';
                        return [4, this.cmd('SignTx', {
                                coin_name: proto.coin_name,
                                inputs_count: proto.inputs.length,
                                outputs_count: proto.outputs.length,
                                version: proto.version || 1,
                                lock_time: proto.lock_time || 0
                            })];
                    case 1:
                        msg = _e.sent();
                        _e.label = 2;
                    case 2:
                        if (!1) return [3, 5];
                        if (msg.data.serialized)
                            serialized.push(msg.data.serialized);
                        if (!(msg.type === 'TxRequest')) return [3, 4];
                        return [4, txAck(msg, proto)];
                    case 3:
                        msg = _e.sent();
                        _e.label = 4;
                    case 4:
                        if (msg.type === 'Failure')
                            return [3, 5];
                        if (msg.type === 'Success')
                            return [3, 5];
                        return [3, 2];
                    case 5:
                        if (msg.type === 'Failure')
                            return [2, msg];
                        for (_d = 0, serialized_1 = serialized; _d < serialized_1.length; _d++) {
                            item = serialized_1[_d];
                            serialized_tx += Buffer.from(item.serialized_tx, 'base64').toString('hex');
                            if (!item.signature)
                                continue;
                            signatures.push(Buffer.from(item.signature, 'base64').toString('hex'));
                        }
                        success = {
                            type: 'Success',
                            data: {
                                signatures: signatures,
                                serialized_tx: serialized_tx
                            }
                        };
                        return [2, success];
                }
            });
        });
    };
    ABCKEY.prototype.write = function (type, data) {
        return __awaiter(this, void 0, void 0, function () {
            var outBuf, _i, outBuf_1, buf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.__MSG__ = undefined;
                        return [4, this.__PROTOCOL__.encode(type, data)];
                    case 1:
                        outBuf = _a.sent();
                        _i = 0, outBuf_1 = outBuf;
                        _a.label = 2;
                    case 2:
                        if (!(_i < outBuf_1.length)) return [3, 5];
                        buf = outBuf_1[_i];
                        return [4, this.__WEBUSB__.transferOut(1, buf)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3, 2];
                    case 5: return [2];
                }
            });
        });
    };
    ABCKEY.prototype.loopRead = function () {
        return __awaiter(this, void 0, void 0, function () {
            var inBuf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!1) return [3, 3];
                        return [4, new Promise(function (resolve) { return setTimeout(resolve, 22); })];
                    case 1:
                        _a.sent();
                        return [4, this.__WEBUSB__.transferIn(1, 64)];
                    case 2:
                        inBuf = _a.sent();
                        this.emit('read', inBuf);
                        return [3, 0];
                    case 3: return [2];
                }
            });
        });
    };
    return ABCKEY;
}(events_1.EventEmitter));
exports.default = ABCKEY;
