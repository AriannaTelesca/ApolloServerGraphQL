"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const http_1 = require("http");
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const schema_1 = __importDefault(require("./schema"));
const mount = async (app) => {
    try {
        const server = new apollo_server_express_1.ApolloServer({
            schema: schema_1.default
        });
        await server.start();
        server.applyMiddleware({ app, path: '/graphql' });
        const httpServer = (0, http_1.createServer)(app);
        app.use('*', (0, cors_1.default)());
        app.use((0, compression_1.default)());
        app.use('/static', express_1.default.static(path_1.default.join(__dirname, 'public', 'index.html')));
        httpServer.listen({ port: process.env.PORT || 4000 }, () => console.log(`\ Graphql is now running on http://4000/graphql`));
    }
    catch (error) {
        console.log(error);
    }
};
mount((0, express_1.default)());
