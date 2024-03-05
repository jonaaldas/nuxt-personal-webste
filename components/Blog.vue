<template>
	<div class="container">
		<h1 class="text-2xl text-center mb-6">My Thoughts</h1>
		<div class="flex flex-wrap -mx-4">
			<div class="w-full md:w-1/2 lg:w-1/3 px-4" v-for="(post, index) in posts" :key="index">
				<div class="card bg-base-100 shadow-xl image-full mb-4">
					<figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
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
	const url = `http://localhost:2525/api/blogs`;

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
		const {data} = await axios.get(url);
		posts.value = data;
	}

	onMounted(async () => {
		await getAllPosts();
	});
</script>

<style lang="scss" scoped></style>
