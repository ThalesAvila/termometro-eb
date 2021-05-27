import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { getDataFromTree } from '@apollo/react-ssr';
import withApollo from 'next-with-apollo';

function createClient({ headers, initialState }) {
  return new ApolloClient({
    uri: 'https://termometro.staging.matchbox.digital/api/graphql',
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
