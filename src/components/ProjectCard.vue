<template>
  <div 
    :class="`${project.cols} col-span-12 group cursor-pointer`"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <a 
      :href="project.link" 
      :target="project.link.startsWith('http') ? '_blank' : '_self'" 
      rel="noopener noreferrer"
    >
      <div class="relative overflow-hidden">
        <img 
          :src="project.image" 
          :alt="project.title"
          class="w-full h-auto transition-transform duration-300 group-hover:scale-105"
        />
        
        <!-- Hover card that follows mouse -->
        <div 
          v-if="isHovered"
          class="fixed bg-white p-4 rounded shadow-lg z-50 pointer-events-none whitespace-nowrap"
          :style="{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            transform: 'translate(-2rem, 1.25rem)'
          }"
        >
          <h2 class="text-gray-800 text-xl font-bold">{{ project.title }}</h2>
          <h3 class="text-gray-600 text-base">{{ project.category }}</h3>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  mousePos: {
    type: Object,
    required: true
  }
});

const isHovered = ref(false);
</script>

<style scoped>
</style>