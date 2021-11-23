import {ApolloClient, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://huge-cow-26.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret': 'hFiE6Be1eY1DPnGSQEfoarH3E3ObI25y19qxz9tfrun9hQF06QWBIMGTkgfiMzOX'
  },
  cache: new InMemoryCache(),
})

export default client;