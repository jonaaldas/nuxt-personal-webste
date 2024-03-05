<template>
	<div class="container m-auto">
		<h1 class="text-3xl">Blogs</h1>
		<div class="card w-96 bg-base-100 shadow-xl" v-for="(post, index) in posts" :key="index">
			<figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
			<div class="card-body">
				<h2 class="card-title">
					{{ post.node.title }}
					<!-- <div class="badge badge-secondary">NEW</div> -->
				</h2>
				<p>{{ post.node.brief }}</p>
				<div class="card-actions justify-end">
					<routerLink :to="`/blog/${post.node.slug}`" class="btn btn-neutral">Read more</routerLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import {onMounted, ref} from 'vue';
	import axios from 'axios';
	const posts = ref();
	async function getBlogsPosts() {
		const {data} = await axios.get('api/blog');
		posts.value = data.body;
	}
	onMounted(async () => {
		await getBlogsPosts();
	});
</script>

<style scoped></style>
