<template>
  <div :class="`${project.cols} col-span-12`">
    <div class="flex flex-col">
      <img 
        :src="project.image" 
        :alt="project.title"
        class="w-full md:w-1/2 h-auto mb-4"
      />
      <h2 class="text-xl font-bold mb-2">{{ project.title }}</h2>
      <a 
        :href="project.link" 
        :target="project.link.startsWith('http') ? '_blank' : '_self'"
        rel="noopener noreferrer"
        class="text-red-400 underline hover:text-red-600 transition-colors"
      >
        {{ project.link.startsWith('http') ? 'Have a look!' : 'It\'s the start of something beautiful!' }}
      </a>
    </div>
  </div>
</template>

<script setup>
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
</script>

<style scoped>
/* Component-specific styles if needed */
</style>