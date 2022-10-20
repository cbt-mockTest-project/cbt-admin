import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const token = 'token'
export const isLoggedInVar = makeVar(Boolean(token))
export const authTokenVar = makeVar(token)

const httpLink = createHttpLink({
  uri: 'http://localhost:8070/graphql',
})

const authLink = setContext((request, previousContext) => ({
  headers: { 'x-jwt': authTokenVar() || '' },
}))

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedInVar()
            },
          },
          token: {
            read() {
              return authTokenVar()
            },
          },
        },
      },
    },
  }),
  connectToDevTools: true,
})
