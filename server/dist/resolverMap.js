"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("./api"));
const resolvers = {
    Query: {
        getQuotes: () => {
            return api_1.default;
        },
        quote: (_, { author }, context) => {
            return api_1.default.filter((quote) => quote.author === author);
        },
        search: (_, { text }, context) => {
            return api_1.default.filter((quote) => quote.author.match(text));
        }
    }
};
exports.default = resolvers;
