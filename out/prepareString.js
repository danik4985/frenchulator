"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareString = void 0;
function prepareString(string) {
    // Split ()
    const _spl = ['(', ')', '[', ']', '{', '}'];
    _spl.forEach((i) => {
        string = string.split(i).join(` ${i} `);
    });
    // Remove more spaces
    string = string.split(/  +/gm).join(' ');
    // Trim
    string = string.trim();
    return string;
}
exports.prepareString = prepareString;
