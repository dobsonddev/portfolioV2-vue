<script lang="ts" setup>

import Post from "@/components/grid-items/blogs/post.vue";

const technologies: string[] = ['Solo Post', 'NextJs', 'React', 'Django', 'AWS', 'MapBox']
const link = 'https://github.com/dobsonddev'

</script>

<template>
	<Post :post-link="link" :technologies="technologies" post-name="LogiMap">
		<img alt="LogiMap screenshot" class="w-full h-full object-cover" src="@/assets/img/logimap.jpg">
	</Post>
</template>

<style scoped>

</style>