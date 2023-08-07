const express = require('express');
const path = require('path');

// Importing ApolloServer and middleware function for Auth
const { ApolloServer } = require('@apollo/server');
const { authMiddleware } = require('./utils/auth');

// Importing typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas')

const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Creating an Apollo Server
// const server= new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware
// });

// Use Apollo server with Express application
let apolloServer = null;
async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        context: authMiddleware
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
