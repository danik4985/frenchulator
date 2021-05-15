"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = void 0;
const chalk = require("chalk");
function error(d) {
    console.log(chalk `❌️ {bold.magenta ERROR}`);
    d.forEach((i) => {
        console.log(chalk ` - {italic ${i}}`);
    });
    process.exit(0);
    return ''; // TypeScript needs this :o~((
}
exports.error = error;
