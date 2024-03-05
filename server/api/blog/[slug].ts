import axios from 'axios';
const GET_SINGLE_POST = `
query GetSinglePost($slug: String!) {
  publication(host: "aldas.hashnode.dev") {
    isTeam
    title
    post(slug: $slug) {
      title
      content {
        markdown
        html
      }
    }
  }
}
`;

async function getSinglePost(query: string, slug: string) {
	try {
		const response = await axios.post('https://gql.hashnode.com/', {
			query,
			variables: {slug}
		});
		return response.data;
	} catch (error) {
		console.error('Error fetching single post:', error);
		throw error;
	}
}

export default defineEventHandler(async event => {
	const {slug} = getRouterParams(event);

	const post = await getSinglePost(GET_SINGLE_POST, slug);

	const singlePost = post.data.publication.post;

	return {body: singlePost};
});
