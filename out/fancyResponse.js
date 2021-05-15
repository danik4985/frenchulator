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
exports.fancyResponse = void 0;
const chalk = require("chalk");
const ntw = require("number-to-words");
const reverseTranslate_1 = require("./reverseTranslate");
function fancyResponse({ equation, result }) {
    return __awaiter(this, void 0, void 0, function* () {
        const $$$ = yield reverseTranslate_1.reverseTranstale(ntw.toWords(result));
        console.log(chalk `
┏━▋
┣━━ {dim Equation: {bold ${equation}}}
┃ {blue ▋}▋{red ▋}
┣━━━━ {bold Result: {whiteBright.underline ${result}}}
┣━━━━━ {bold Résultat: {whiteBright.underline ${$$$}}}
┗━━━━━━━▋
`);
    });
}
exports.fancyResponse = fancyResponse;
// (quatre-vingt-trois moins [quinze divisé cinq]) fois treize
