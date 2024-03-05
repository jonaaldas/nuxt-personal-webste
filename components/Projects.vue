<template>
	<div class="container">
		<h1 class="text-2xl text-center mb-6">Projects</h1>
		<div class="flex flex-wrap -mx-4">
			<div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 flex justify-center" v-for="(project, index) in projects" :key="index">
				<div class="card w-96 bg-base-200 shadow-xl gap-1">
					<figure class="px-10 pt-10">
						<img :src="project.image" onerror="this.error=null; this.src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'" alt="Shoes" class="rounded-xl" />
					</figure>
					<div class="card-body items-center text-center">
						<h2 class="card-title">{{ project.title }}</h2>
						<p>{{ project.description }}</p>
						<div class="card-actions">
							<div v-if="project.ready">
								<a target="_blank" class="btn btn-primary mr-2" :href="project.github">Github</a>
								<a target="_blank" class="btn btn-secondary" :href="project.url">Live Site</a>
							</div>
							<div v-if="!project.ready">
								<div class="badge badge-primary p-3">In Development</div>
							</div>
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
