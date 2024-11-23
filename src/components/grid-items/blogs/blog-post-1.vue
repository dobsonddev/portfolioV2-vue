<script lang="ts" setup>

import Post from "@/components/grid-items/blogs/post-card.vue";

const technologies: string[] = ['Solo Project', 'VueJs', 'NuxtJs', 'Pinia', 'Appwrite']
const link = 'https://github.com/dobsonddev'

</script>

<template>
	<Post :project-link="link" :technologies="technologies"
	         img-src="@/assets/img/logimap.jpg" project-name="Logimap">
		<img alt="" src="@/assets/img/logimap.jpg">
	</Post>
</template>

<style scoped>

</style>