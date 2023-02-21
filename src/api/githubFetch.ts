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
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}