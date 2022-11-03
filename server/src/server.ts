import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';
import path from 'path';

const mount = async (app: Application) => {
    try {

    const server = new ApolloServer({
    schema
    });

    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });

    const httpServer = createServer(app);

    app.use('*', cors());
    app.use(compression());

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, './client/public/index.html'));
      });

    
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
