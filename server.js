const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema.js');

const app = express();

app.use(
	'/graphql',
  graphqlHTTP({
		schema,
    graphiql: true,
  })
);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  return console.log(`Server started on ${PORT}`);
});