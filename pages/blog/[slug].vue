<template>
	<div class="container m-auto">
		<div v-if="!post" class="flex justify-center items-center">
			<SmallLoader />
		</div>
		<div v-if="post" class="w-2/3 m-auto">
			<h1 class="text-2xl mb-8">{{ post.title }}</h1>
			<div v-html="post?.content.html" class="space-y-4"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import axios from 'axios';
	import {onMounted, ref} from 'vue';
	import {useRoute} from 'vue-router';
	const url = `http://localhost:2525/api/blog`;
	const route = useRoute();

	export interface Post {
		title: string;
		content: Content;
	}

	export interface Content {
		markdown: string;
		html: string;
	}

	const post = ref<Post>();

	async function getBlogPostBySlug() {
		const {data} = await axios.get(`/api/blog/${route.params.slug}`);
		post.value = data.body;
	}

	onMounted(async () => {
		await getBlogPostBySlug();
	});
</script>

<style scoped></style>
