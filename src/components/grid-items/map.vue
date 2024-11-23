<script lang="ts" setup>
import mapboxgl from 'mapbox-gl';
import { ref, onMounted } from 'vue';

// Reference to the map container
const mapContainer = ref<HTMLElement | null>(null);

// Load Mapbox token from .env file
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

// Initialize the map
onMounted(() => {
  if (mapContainer.value) {
    const map = new mapboxgl.Map({
      container: mapContainer.value, // Container ID
      style: 'mapbox://styles/mapbox/streets-v11', // Mapbox style
      center: [-79.94, 32.79], // Your city's longitude, latitude
      zoom: 11, // Initial zoom level
    });

    // Optional: Add zoom and rotation controls
    map.addControl(new mapboxgl.NavigationControl());
  }
});
</script>

<template>
  <div class="w-full h-full" ref="mapContainer"></div>
</template>

<style scoped>
/* Ensures the map takes up the full width and height */
div {
  width: 100%;
  height: 100%;
}
</style>
