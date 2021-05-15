"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.warn = void 0;
const chalk = require("chalk");
function warn(d) {
    console.log(chalk `⚠️ {bold.yellow WARN}`);
    d.forEach((i) => {
        console.log(chalk ` - {italic ${i}}`);
    });
    return ''; // TypeScript needs this :o~((
}
exports.warn = warn;
