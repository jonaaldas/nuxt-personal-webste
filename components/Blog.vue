<template>
	<div class="container">
		<h1 class="text-2xl text-center mb-6">My Thoughts</h1>
		<div class="flex flex-wrap justify-center">
			<div class="w-full md:w-1/2 lg:w-1/3 px-4" v-for="(post, index) in posts" :key="index">
				<div class="card w-96 bg-base-100">
					<div class="card-body">
						<h2 class="card-title">{{ post?.node.title }}</h2>
						<p>{{ post?.node.brief }}</p>
						<div class="card-actions justify-end">
							<routerLink class="btn btn-ghost" :to="`/blog/${post?.node.slug}`" target="_blank">View</routerLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import {ref, onMounted} from 'vue';
	import axios from 'axios';
	const posts = ref<Posts[]>([]);

	export interface Posts {
		node: Node;
	}

	export interface Node {
		title: string;
		brief: string;
		url: string;
		slug: string;
	}
	async function getAllPosts() {
		const {data} = await axios.get('/api/blog');
		posts.value = data.body;
	}

	onMounted(async () => {
		await getAllPosts();
	});
</script>

<style lang="scss" scoped></style>
