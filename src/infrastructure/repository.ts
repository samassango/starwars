
import {
    ApolloClient,
    InMemoryCache,
    gql
  } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://cm2xh.sse.codesandbox.io',
    cache: new InMemoryCache()
  });

export const getPeoples= async(pageNo:String)=>await client.query({ 
    query:gql`query getList($page:String){ peoples(page: $page){
        name,
        gender,
        height,
        mass,
        homeworld
    }
}`,
variables:{
    page:pageNo
}});

export const searchPeople= async(searchName: String)=>await client.query({
     query:gql`query getSearch($search:String!){ search(search: $search){
        name,
        gender,
        height,
        mass,
        homeworld
     }}`,
     variables:{
         search:searchName
        }
    });