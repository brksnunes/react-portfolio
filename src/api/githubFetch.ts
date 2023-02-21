import { dataFormatter } from "../utils/dataFormatter";
import { IGithubReturn } from "../interfaces/IGithubReturn";
export const githubFetch = async () => {
  try {
    const response = await fetch(`https://api.github.com/graphql`, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json',
       'Authorization': `${import.meta.env.VITE_GITHUB_AUTH}`
     },
     body: JSON.stringify({
       query: `
       {
        user(login: "brksnunes") {
          pinnedItems(first: 6, types: [REPOSITORY]) {
            edges {
              node {
                ... on Repository {
                  name
                  description
                  homepageUrl
                  url
                }
              }
            }
          }
        }
      }`
     })
    });
    const data: IGithubReturn = await response.json();
    const prettyData = dataFormatter(data);
    console.log("🚀 ~ file: githubFetch.ts:33 ~ githubFetch ~ prettyData:", prettyData)
    return prettyData
  } catch (error) {
    console.log(error);
  }
}