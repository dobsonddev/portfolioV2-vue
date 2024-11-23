<script lang="ts" setup>

import Project from "@/components/grid-items/projects/project.vue";

const technologies: string[] = ['Solo Project', 'NextJs', 'React', 'Django', 'AWS', 'MapBox']
const link = 'https://github.com/dobsonddev'

</script>

<template>
	<Project :project-link="link" :technologies="technologies" project-name="LogiMap">
		<img alt="LogiMap screenshot" class="w-full h-full object-cover" src="@/assets/img/logimap.jpg">
	</Project>
</template>

<style scoped>

</style>