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
exports.tokenizeString = void 0;
const wtn = require("words-to-numbers");
const StringToken_1 = require("./StringToken");
const translate_1 = require("./translate");
function tokenizeString(string) {
    return __awaiter(this, void 0, void 0, function* () {
        var arr = [];
        const split = string.split(' ');
        for (const _i in split) {
            const i = split[_i];
            if (i === 'plus'
                || i === 'moins'
                || i === 'fois'
                || i === 'divisé') {
                arr.push({
                    type: StringToken_1.StringToken.OPERATOR,
                    value: i
                });
            }
            else if (!isNaN(Number(wtn.default(yield translate_1.transtale(i))))) {
                arr.push({
                    type: StringToken_1.StringToken.NUMBER,
                    value: i
                });
            }
            else if (['(', ')', '[', ']', '{', '}'].includes(i)) {
                arr.push({
                    type: StringToken_1.StringToken.BRACKET,
                    value: i
                });
            }
            else if (i != 'par') {
                arr.push({
                    type: StringToken_1.StringToken.OTHER,
                    value: i
                });
            }
        }
        return arr;
    });
}
exports.tokenizeString = tokenizeString;
