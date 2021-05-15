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
const chalk = require("chalk");
const rl = require("readline-sync");
const Meth = require("mathjs");
const buildUsableString_1 = require("./buildUsableString");
const error_1 = require("./error");
const prepareString_1 = require("./prepareString");
const tokenizeString_1 = require("./tokenizeString");
const fancyResponse_1 = require("./fancyResponse");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(chalk `{bold Welcome to {rgb(231, 76, 60) Frenchu}{rgb(41, 128, 185) Lator}}`);
        console.log();
        const query = rl.question(chalk `Your {bold.rgb(231, 76, 60) math query:} `)
            ||
                error_1.error(['You must enter a query!', 'At\tconst query = rl.que(...)', 'At\terror([\'Yo(...)']);
        const preparedStr = prepareString_1.prepareString(query);
        const tokenized = yield tokenizeString_1.tokenizeString(preparedStr);
        const usable = yield buildUsableString_1.buildUsableString(tokenized);
        const value = Meth.evaluate(usable);
        yield fancyResponse_1.fancyResponse({ equation: usable, result: value });
    });
}
main().catch((err) => {
    error_1.error(['An error has occured while running async function main()', 'Data: ' + err]);
});
