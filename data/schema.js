import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const schema = `
  type Order {
    id: Int!
  }

  type Query {
    orders: [Order]
  }
`;

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});

