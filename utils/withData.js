import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { getDataFromTree } from '@apollo/react-ssr';
import { endpoint } from 'config';
import withApollo from 'next-with-apollo';

function createClient({ headers, initialState }) {
  return new ApolloClient({
    uri: endpoint,
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // TODO: We will add this together!
            // allProducts: paginationField(),
          },
        },
      },
    }).restore(initialState || {}),
  });
}

export default withApollo(createClient, { getDataFromTree });
