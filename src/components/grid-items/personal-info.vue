<script lang="ts" setup></script>

<template>


	<div class="personal-info">
		<div class="flex items-center max-sm:flex-col max-sm:gap-4 justify-center gap-10 mb-8">
			<div class="rounded-full w-1/4 max-sm:w-1/5 h-1/4">
        <img alt="headshot" class="rounded-full" src="/headshot.png">
			</div>
			<h2 class="text-4xl/normal font-bold max-sm:text-center max-sm:font-semibold">Dobson Dunavant</h2>
		</div>
		<p class="font-light text-xl max-sm:text-base text-gray-700/90 dark:text-wh font-mono">Welcome! I am passionate about solving unique problems with performant, scalable solutions.</p>
	</div>


</template>

<style scoped>

.personal-info {
	@apply px-8 py-6 dark:text-white;
	font-family: 'Poppins', 'Montserrat', sans-serif;
}

</style>