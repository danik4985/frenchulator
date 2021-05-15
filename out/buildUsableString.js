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
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildUsableString = void 0;
const wtn = require("words-to-numbers");
const StringToken_1 = require("./StringToken");
const translate_1 = require("./translate");
const warn_1 = require("./warn");
function buildUsableString(arr) {
    return __awaiter(this, void 0, void 0, function* () {
        var str = '';
        for (const _i in arr) {
            const i = arr[_i];
            if (i.type === StringToken_1.StringToken.NUMBER) {
                str += wtn.default(yield translate_1.transtale(i.value));
            }
            else if (i.type === StringToken_1.StringToken.OPERATOR) {
                switch (i.value) {
                    case 'plus':
                        str += '+';
                        break;
                    case 'moins':
                        str += '-';
                        break;
                    case 'fois':
                        str += '*';
                        break;
                    case 'divisé':
                        str += '/';
                        break;
                }
            }
            else if (i.type === StringToken_1.StringToken.BRACKET) {
                if ((['(', '[', '{']).includes(i.value)) {
                    str += '(';
                }
                else
                    str += ')';
            }
            else {
                warn_1.warn(['Unknown value: ' + i.value, 'Skipping this token!']);
            }
        }
        return str;
    });
}
exports.buildUsableString = buildUsableString;
