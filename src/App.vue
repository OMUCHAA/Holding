<template>
  <Nav />
  <RouterView/>
   <a
    v-show="show"
    href="https://wa.me/254780818238"
    target="_blank"
    class="fixed bottom-6 right-6 z-50
           bg-green-500 hover:bg-green-600
           text-white p-4 rounded-full shadow-xl
           transition-all duration-300"
  >
    <i class="fa-brands fa-whatsapp text-3xl"></i>
  </a>
  <!-- 
  <Home/>
  <Subsidiaries />
  <About />
  <Contacts />
  -->
   <Footer/>
</template>

<script setup>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
import { ref, onMounted, onUnmounted } from "vue"

const show = ref(false)

const handleScroll = () => {
  show.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>
