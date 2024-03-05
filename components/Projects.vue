<template>
	<div class="container">
		<h1 class="text-2xl text-center mb-6">Projects</h1>
		<div class="flex flex-wrap -mx-4">
			<div class="w-full md:w-1/2 lg:w-1/3 px-4" v-for="(project, index) in projects" :key="index">
				<div class="card bg-base-100 shadow-xl image-full mb-4">
					<figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
					<div class="card-body">
						<h2 class="card-title">{{ project.title }}</h2>
						<p>{{ project.description }}</p>
						<span>
							<span>Tech:</span>
							{{ project.stack }}
						</span>
						<div class="card-actions justify-end">
							<button class="btn btn-ghost"><a :href="`${project.github}`" target="_blank">Github</a></button>
							<button class="btn btn-neutral"><a :href="`${project.url}`" target="_blank">Live URL</a></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import projects from '../projectDetails';
</script>

<style lang="scss" scoped></style>
