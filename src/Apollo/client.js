import {ApolloClient, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://huge-cow-26.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret': process.env.REACT_APP_API_KEY
  },
  cache: new InMemoryCache(),
})

export default client;