<template>
  <Nav />
  <RouterView/>
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
</script>
