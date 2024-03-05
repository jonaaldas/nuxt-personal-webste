import axios from 'axios';
async function getAllPosts(query: any, variables = {}) {
	try {
		const {data} = await axios.post('https://gql.hashnode.com/', {
			query,
			variables
		});
		return data.data.publication.posts.edges;
	} catch (error) {
		console.log('🚀 ~ asyncfunctiongql(query:any,variables ~ error:', error);
	}
}

const GET_USER_ARTICLES = `
    query Publication {
      publication(host: "aldas.hashnode.dev") {
        isTeam
        title
        posts(first: 10) {
          edges {
            node {
              title
              brief
              url
              slug
            }
          }
        }
      }
    }
`;

export default defineEventHandler(async event => {
	const posts = await getAllPosts(GET_USER_ARTICLES, {page: 0});
	return {
		body: posts
	};
});
