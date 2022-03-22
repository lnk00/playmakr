import { graphqlHTTP } from 'koa-graphql';
import { buildSchema } from 'graphql';
// eslint-disable-next-line import/no-unresolved
import Schema from './schema.gql?raw';
import Resolvers from '../resolvers';

export default graphqlHTTP({
  schema: buildSchema(Schema),
  rootValue: Resolvers,
  graphiql: true,
});
