"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolverMap = {
    Query: {
        helloWorld(_, args) {
            return `Hello world`;
        },
    },
};
exports.default = resolverMap;
