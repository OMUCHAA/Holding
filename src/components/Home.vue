<template>
  <section class="scroll-smooth pt-36 text-center py-20 bg-gradient-to-bl from-blue-950 via-blue-500 to-blue-950 text-white flex flex-col justify-center items-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">MashBah Holdings</h1>
      
      <p class="text-lg md:text-2xl mb-6">Empowering Growth Across Industries</p>
      <a
        href="#subsidiaries"
        class="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-900 transition-colors hover:text-white duration-600"
      >
        Explore Our Companies
      </a>
    </section>
    <Subsidiaries/>
    <About/>
    <Contacts/>
</template>

 
<script setup>
import Contacts from "./Contacts.vue";
import About from "./About.vue";
import Subsidiaries from "./Subsidiaries.vue";
</script>
