import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';

const mount = async (app: Application) => {

    const express = require("express");
    const path = require("path");

    try {

    const server = new ApolloServer({
    schema
    });

    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });

    const httpServer = createServer(app);

    app.use('*', cors());
    app.use(compression());



//This will create a middleware.
//When you navigate to the root page, it would use the built react-app
    app.use(express.static(path.resolve(__dirname, "./client/build")));



    httpServer.listen(
        { port: process.env.PORT || 4000 },
        (): void => console.log(`\ Graphql is now running on http://4000/graphql`)
    );
    }
    catch(error) {
        console.log(error)
    }
}

mount(express());
