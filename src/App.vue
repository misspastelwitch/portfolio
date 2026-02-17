<template>
  <div 
    class="min-h-screen font-mono text-red-400 transition-colors duration-100"
    :style="{ backgroundColor: bgColor }"
    @mousemove="handleMouseMove"
  >
    <!-- Header -->
    <header class="text-center mt-64 mb-8">
      <h1 class="text-6xl md:text-8xl font-bold">Stella Clough</h1>
    </header>

    <!-- Animated roles -->
    <div class="w-96 mx-auto px-4 mb-96">
      <div class="h-16 overflow-hidden">
        <ul 
          class="transition-transform duration-500"
          :style="{ transform: `translateY(-${currentRole * 70}px)` }"
        >
          <li 
            v-for="(role, index) in roles" 
            :key="index" 
            class="text-4xl h-[70px] leading-[70px]"
          >
            {{ role }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Scroll down button -->
    <div class="flex justify-center mb-20">
      <button 
        @click="scrollToBottom"
        class="w-8 h-8 border-2 border-red-400 rounded-full relative animate-bounce hover:scale-110 transition-transform"
      >
        <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border-2 border-red-400 border-t-0 border-r-0 rotate-[-45deg]" />
      </button>
    </div>

    <!-- About Me Section -->
    <section class="bg-[#ffdfdb] py-8 md:py-20 px-4 md:px-20 -mt-20">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold mb-6">About me</h2>
        <p class="text-lg leading-relaxed">
          Hey there! I'm Stella, a 24 year old (aspiring) frontend designer based
          in the Netherlands. I've always been interested in design and aesthetics,
          and routinely find myself wishing websites were designed better. I hope
          that I can one day make people's experiences on the internet a little smoother,
          easier and prettier. You can check out all of my latest work via the projects below.
        </p>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
          <ProjectCard 
            v-for="(project, index) in projects" 
            :key="index"
            :project="project" 
            :mouse-pos="mousePos"
          />
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section class="bg-[#dbdaf5] py-8 md:py-20 px-4 md:px-20 -mt-20">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold mb-6">Education</h2>
        <p class="text-lg leading-relaxed">
          I moved to the Netherlands in 2020 to study at Utrecht University, where I followed a Bachelor's in Linguistics for two years. 
          After realising that the atmosphere didn't suit my way of studying,
          I started my search for a career that would better suit my working style, as well as my creative interests.
          That's when I rediscovered my childhood interest in code and design!<br><br>I found the Associate's in Frontend Design & Development at the HvA, 
          the Amsterdam University of Applied Sciences, but without knowing any Dutch, I wasn't able to start right away.
          I decided to take a gap year, in which I focused on learning Dutch, as well as taking online courses to gain a strong basis in the world of frontend web development. 
          In the summer of 2023, I got my NT2 diploma and was finally eligible to study a dutch-language degree, and in September I started at FDND, where I am currently in my second and final year.
        </p>
      </div>
    </section>

    <!-- Bottom Projects -->
    <section class="py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
          <ProjectCard 
            v-for="(project, index) in bottomProjects" 
            :key="`bottom-${index}`"
            :project="project" 
            :mouse-pos="mousePos"
          />
        </div>
      </div>
    </section>

    <!-- Footer/Contact Section -->
    <section class="bg-[#a9c3f8] text-white py-8 md:py-20 px-4 md:px-20 -mt-20">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold mb-6">What now?</h2>
        <p class="text-lg leading-relaxed">
          At the moment I am looking for internships in frontend development, UX/UI, visual design, or similar roles for February - July 2026.
          <br><br>If you'd like to get in touch, 
          feel free to <a href="mailto:stellaclough@gmail.com" class="font-bold text-xl underline hover:text-red-400 transition-colors">send me an email</a>,
          or <a href="https://www.linkedin.com/in/stella-clough-7aa2491b2/" class="font-bold text-xl underline hover:text-red-400 transition-colors">message me on LinkedIn</a>!
        </p>
      </div>
    </section>

    <!-- Scroll up button -->
    <div class="flex justify-center py-10">
      <button 
        @click="scrollToTop"
        class="w-8 h-8 border-2 border-red-400 rounded-full relative hover:scale-110 transition-transform"
      >
        <span class="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border-2 border-red-400 border-t-0 border-r-0 rotate-[135deg]" />
      </button>
    </div>

    <!-- Footer -->
    <footer class="text-center pb-8">
      <p class="text-sm">© 2024 Stella Clough</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import ProjectCard from './components/ProjectCard.vue';

const currentRole = ref(0);
const bgColor = ref('rgb(254, 242, 241)');
const mousePos = ref({ x: 0, y: 0 });

const roles = [
  "I love web.",
  "I create.",
  "I learn.",
  "I travel.",
  "I bake.",
  "I read."
];

const projects = [
  {
    title: "Repositorie",
    category: "Have a look",
    image: "./public/static/assets/repositorie-Photoroom.png",
    link: "https://misspastelwitch.github.io/repositorie",
    cols: "md:col-span-4"
  },
  {
    title: "Dutch Digital Agencies",
    category: "Have a look",
    image: "./public/static/assets/DDA-photoroom.png",
    link: "https://dutchdigitalagencies-vacatures.onrender.com",
    cols: "md:col-span-4"
  },
  {
    title: "Weird Cool Stuff",
    category: "Have a look",
    image: "./public/static/assets/lab-digital-Photoroom.png",
    link: "https://github.com/misspastelwitch/the-startup-responsive-interactive-website",
    cols: "md:col-span-4"
  },
  {
    title: "I love web",
    category: "Have a look",
    image: "./public/static/assets/iloveweb-Photoroom.png",
    link: "https://misspastelwitch.github.io/I-love-web/",
    cols: "md:col-span-6"
  },
  {
    title: "FDND Squadpage",
    category: "Have a look",
    image: "./public/static/assets/squadpage-Photoroom.png",
    link: "https://github.com/julia-stevens/your-tribe-for-life-squad-page",
    cols: "md:col-span-6"
  },
  {
    title: "SRON - Nebula Explorer",
    category: "Something's coming here soon!",
    image: "./public/static/assets/SRON-Photoroom.png",
    link: "https://github.com/fdnd-agency/nebulaxplorer",
    cols: "md:col-span-6"
  },
  {
    title: "Your company here...?",
    category: "It's the start of something beautiful!",
    image: "./public/static/assets/you-Photoroom.png",
    link: "#",
    cols: "md:col-span-2"
  }
];

const bottomProjects = [
  {
    title: "An upcoming project",
    category: "Something's coming here soon!",
    image: "./public/static/assets/more-soon-Photoroom.png",
    link: "#",
    cols: "md:col-span-3"
  },
  {
    title: "My GitHub",
    category: "Take a peek at my code",
    image: "./public/static/assets/more-soon-1-Photoroom.png",
    link: "https://github.com/misspastelwitch",
    cols: "md:col-span-3"
  }
];

// acticities cycle
let roleInterval;
onMounted(() => {
  roleInterval = setInterval(() => {
    currentRole.value = (currentRole.value + 1) % roles.length;
  }, 4000 / roles.length);

  // scroll listener for background color
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  clearInterval(roleInterval);
  window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  const scrollPercentage = Math.min((scrolled - scrollHeight * 0.75) / (scrollHeight - scrollHeight * 0.75), 1);
  const clampedScrollPercentage = Math.max(0, Math.min(scrollPercentage, 1));

  const startColor = { r: 254, g: 242, b: 241 };
  const endColor = { r: 195, g: 214, b: 248 };

  const r = Math.round(startColor.r + (endColor.r - startColor.r) * clampedScrollPercentage);
  const g = Math.round(startColor.g + (endColor.g - startColor.g) * clampedScrollPercentage);
  const b = Math.round(startColor.b + (endColor.b - startColor.b) * clampedScrollPercentage);

  bgColor.value = `rgb(${r}, ${g}, ${b})`;
};

const handleMouseMove = (e) => {
  mousePos.value = { x: e.pageX, y: e.pageY };
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const scrollToBottom = () => {
  window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
};
</script>

<style scoped>
</style>