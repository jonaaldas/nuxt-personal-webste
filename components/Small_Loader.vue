<template>
	<div class="glow text-xl lg:text-3xl">ALDAS</div>
</template>

<script setup lang="ts"></script>

<style scoped>
	@keyframes glow {
		0% {
			text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
		}
		50% {
			text-shadow: 0 0 20px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 1), 0 0 40px rgba(255, 255, 255, 1), 0 0 50px rgba(255, 255, 255, 1), 0 0 60px rgba(255, 255, 255, 1);
		}
		100% {
			text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
		}
	}

	.glow {
		animation: glow 2s ease-in-out infinite;
		color: #fff; /* Change as needed */
		/* Additional styling with Tailwind utilities can go here */
	}
</style>
