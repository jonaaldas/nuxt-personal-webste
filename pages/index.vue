<template>
	<div class="flex justify-center flex-col items-center">
		<Hero />
		<Projects />
		<Blog />
		<transition name="fade">
			<Loader v-if="showLoader" class="fixed top-0 left-0 w-full h-screen z-50 bg-black" />
		</transition>
	</div>
</template>

<script setup lang="ts">
	import {ref, onMounted} from 'vue';

	const showLoader = ref(true);
	onMounted(() => {
		setTimeout(() => {
			showLoader.value = !showLoader.value;
		}, 1000);
	});
</script>

<style scoped>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s ease;
	}
	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>
