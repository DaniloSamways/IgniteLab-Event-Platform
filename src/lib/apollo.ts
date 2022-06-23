import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q6izd2348s01z4hbbt0kn2/master',
  cache: new InMemoryCache()
});