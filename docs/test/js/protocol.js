"use strict";
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
var protobuf_1 = __importDefault(require("./protobuf"));
var Protocol = (function () {
    function Protocol(json, options) {
        this.__MSG_HEAD_STRING__ = "$";
        this.__MSG_FLAG_STRING__ = "##";
        this.__MSG_BYTE__ = 64;
        this.__MSG_FLAG_BYTE__ = 2;
        this.__MSG_TYPE_BYTE__ = 2;
        this.__MSG_SIZE_BYTE__ = 4;
        this.__MSG_FLAG_START__ = 1;
        this.__MSG_TYPE_START__ = 3;
        this.__MSG_SIZE_START__ = 5;
        this.__MSG_DATA_START__ = 9;
        this.__OPTIONS__ = {
            enumname: 'Types',
            headString: '$',
            flagString: '##'
        };
        if (options && options.enumname)
            this.__OPTIONS__.enumname = options.enumname;
        if (options && options.headString)
            this.__MSG_HEAD_STRING__ = options.headString;
        if (options && options.flagString)
            this.__MSG_FLAG_STRING__ = options.flagString;
        this.__MSG_FLAG_BYTE__ = this.__MSG_FLAG_STRING__.length;
        this.__MSG_FLAG_START__ = this.__MSG_HEAD_STRING__.length;
        this.__MSG_TYPE_START__ = this.__MSG_FLAG_START__ + this.__MSG_FLAG_BYTE__;
        this.__MSG_SIZE_START__ = this.__MSG_TYPE_START__ + this.__MSG_TYPE_BYTE__;
        this.__MSG_DATA_START__ = this.__MSG_SIZE_START__ + this.__MSG_SIZE_BYTE__;
        this.__PROTOBUF__ = new protobuf_1.default(json);
    }
    Protocol.prototype.encode = function (type, data) {
        if (data === void 0) { data = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var typeInt, dataBuf, flagBuf, typeBuf, sizeBuf, bodyBuf, headBuf, pageNum, arrBuf, i, tempBuf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.__PROTOBUF__.lookupEnum(this.__OPTIONS__.enumname, type)];
                    case 1:
                        typeInt = _a.sent();
                        return [4, this.__PROTOBUF__.encode(type, data)];
                    case 2:
                        dataBuf = _a.sent();
                        dataBuf = Buffer.from(dataBuf);
                        flagBuf = Buffer.from(this.__MSG_FLAG_STRING__);
                        typeBuf = Buffer.alloc(this.__MSG_TYPE_BYTE__);
                        sizeBuf = Buffer.alloc(this.__MSG_SIZE_BYTE__);
                        typeBuf.writeUInt16BE(typeInt, 0);
                        sizeBuf.writeUInt32BE(dataBuf.length, 0);
                        bodyBuf = Buffer.concat([
                            flagBuf,
                            typeBuf,
                            sizeBuf,
                            dataBuf
                        ], this.__MSG_FLAG_BYTE__ +
                            this.__MSG_TYPE_BYTE__ +
                            this.__MSG_SIZE_BYTE__ +
                            dataBuf.length);
                        headBuf = Buffer.from(this.__MSG_HEAD_STRING__);
                        pageNum = Math.ceil(bodyBuf.length / (this.__MSG_BYTE__ - 1));
                        arrBuf = [];
                        for (i = 0; i < pageNum; i++) {
                            tempBuf = bodyBuf.slice(i * (this.__MSG_BYTE__ - 1), (i + 1) * (this.__MSG_BYTE__ - 1));
                            arrBuf.push(Buffer.concat([headBuf, tempBuf], this.__MSG_BYTE__));
                        }
                        return [2, arrBuf];
                }
            });
        });
    };
    Protocol.prototype.decode = function (arrBuf) {
        return __awaiter(this, void 0, void 0, function () {
            var typeBuf, sizeBuf, dataBuf, typeInt, sizeInt, typeStr, i, tempBuf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        typeBuf = Buffer.alloc(this.__MSG_TYPE_BYTE__);
                        sizeBuf = Buffer.alloc(this.__MSG_SIZE_BYTE__);
                        dataBuf = Buffer.alloc(0);
                        typeInt = -1;
                        sizeInt = -1;
                        typeStr = '';
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < arrBuf.length)) return [3, 5];
                        if (!this.hasHead(arrBuf[i]))
                            return [2];
                        if (!this.hasFlag(arrBuf[i])) return [3, 3];
                        typeBuf = arrBuf[i].slice(this.__MSG_TYPE_START__, this.__MSG_SIZE_START__);
                        sizeBuf = arrBuf[i].slice(this.__MSG_SIZE_START__, this.__MSG_DATA_START__);
                        sizeInt = sizeBuf.readIntBE(0, this.__MSG_SIZE_BYTE__);
                        typeInt = typeBuf.readIntBE(0, this.__MSG_TYPE_BYTE__);
                        return [4, this.__PROTOBUF__.lookupEnum(this.__OPTIONS__.enumname, typeInt)];
                    case 2:
                        typeStr = _a.sent();
                        dataBuf = arrBuf[i].slice(this.__MSG_DATA_START__);
                        return [3, 4];
                    case 3:
                        tempBuf = arrBuf[i].slice(this.__MSG_FLAG_START__);
                        dataBuf = Buffer.concat([dataBuf, tempBuf], dataBuf.length + tempBuf.length);
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3, 1];
                    case 5:
                        if (sizeInt === -1)
                            return [2];
                        if (dataBuf.length < sizeInt)
                            return [2];
                        dataBuf = dataBuf.slice(0, sizeInt);
                        return [4, this.__PROTOBUF__.decode(typeStr, dataBuf)];
                    case 6: return [2, _a.sent()];
                }
            });
        });
    };
    Protocol.prototype.msgSize = function (buffer) {
        return buffer.slice(this.__MSG_SIZE_START__, this.__MSG_DATA_START__)
            .readIntBE(0, this.__MSG_SIZE_BYTE__)
            + this.__MSG_FLAG_BYTE__
            + this.__MSG_TYPE_BYTE__
            + this.__MSG_SIZE_BYTE__;
    };
    Protocol.prototype.msgPages = function (buffer) {
        return Math.ceil(this.msgSize(buffer) / (this.__MSG_BYTE__ - this.__MSG_HEAD_STRING__.length));
    };
    Protocol.prototype.hasHead = function (buffer) {
        return buffer.slice(0, this.__MSG_FLAG_START__).toString() === this.__MSG_HEAD_STRING__ ? true : false;
    };
    Protocol.prototype.hasFlag = function (buffer) {
        return buffer.slice(this.__MSG_FLAG_START__, this.__MSG_TYPE_START__).toString() === this.__MSG_FLAG_STRING__ ? true : false;
    };
    return Protocol;
}());
exports.default = Protocol;
