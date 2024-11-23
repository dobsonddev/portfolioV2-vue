<script lang="ts" setup></script>

<template>


	<div class="personal-info">
		<div class="flex items-center justify-center gap-10 mb-6">
			<div class="rounded-full w-1/3"><img alt="headshot" class="rounded-full" src="/headshot.png"></div>
			<h2 class="text-[2.3rem] font-bold">Dobson Dunavant</h2>
		</div>
		<p class="font-light">I am passionate about building high-quality solutions.</p>
	</div>


</template>

<style scoped>

.personal-info {
	@apply px-8 py-6 dark:text-white;
	font-family: 'Poppins', 'Montserrat', sans-serif;
}

.personal-info p {
	@apply text-gray-700/90 dark:text-wh font-mono;
}

</style>