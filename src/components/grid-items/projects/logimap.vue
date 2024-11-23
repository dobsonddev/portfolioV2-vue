<script lang="ts" setup>

import Project from "@/components/grid-items/projects/project-card.vue";

const technologies: string[] = ['Solo Project', 'NextJs', 'React', 'Django', 'AWS', 'MapBox']
const link = 'https://github.com/dobsonddev'

</script>

<template>
  <Project :project-link="link" :technologies="technologies"
           img-src="@/assets/img/logimap.jpg" project-name="Logimap">
    <img alt="" src="@/assets/img/logimap.jpg">
  </Project>
</template>

<style scoped>

</style>