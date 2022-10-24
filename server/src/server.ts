import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';

const mount = async (app: Application) => {
    try {

    const server = new ApolloServer({
    schema,
    validationRules : [depthLimit(7)],
    });

    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });

    const httpServer = createServer(app);

    app.use('*', cors());
    app.use(compression());


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
