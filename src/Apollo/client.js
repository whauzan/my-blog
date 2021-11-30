import {ApolloClient, HttpLink, InMemoryCache, split} from '@apollo/client'
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from '@apollo/client/utilities';

const wsLink = new WebSocketLink({
  uri: 'wss://huge-cow-26.hasura.app/v1/graphql',
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        'x-hasura-admin-secret': process.env.REACT_APP_API_KEY
      }
    }
  }
})

const httpLink = new HttpLink({
  uri: 'https://huge-cow-26.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret': process.env.REACT_APP_API_KEY
  },
})

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
			definition.operation === "subscription"
    )
  },
  wsLink,
  httpLink
)

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
})

// const client = new ApolloClient({
//   uri: 'https://huge-cow-26.hasura.app/v1/graphql',
//   headers: {
//     'x-hasura-admin-secret': process.env.REACT_APP_API_KEY
//   },
//   cache: new InMemoryCache(),
// })

export default client;