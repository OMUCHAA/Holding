<template>
  <nav class="border shadow p-6 fixed w-full z-50 top-0 bg-amber-50">
    <div class="flex justify-around items-center">
      <div
        id="logo"
        class="ml-4 font-semibold text-2xl md:text-3xl text-gold-900"
      >
        <span class="italic font-bold"
          ><img
            src="../assets/image.png"
            class="lg:h-20 md:h-16 h-14"
            alt="logo"
        /></span>
      </div>

      <!--Horizontal Menu Hidden on small screens-->
      <ul
        class="mr-10 text-xl font-semibold hidden lg:flex text-amber-900 space-x-8 items-center"
      >
        <li class="mr-6 relative group font-medium">
          <router-link to="/">Home</router-link>
        </li>
        <li class="relative group font-medium">
          <router-link to="/subsidiaries">Companies</router-link>
        </li>
        <li class="mr-6 relative group font-medium">
          <router-link to="/about">About Us</router-link>
        </li>
        <li class="mr-6 relative group font-medium">
          <router-link to="/contacts">Contacts</router-link>
        </li>
      </ul>

      <!--What is going to be visible on smaller screens-->
      <!-- Mobile Menu Toggle Button (bars only) -->
      <div @click="toggleMenu" class="lg:hidden">
        <i v-if="!isOpen" class="fa-solid fa-bars text-4xl text-amber-900"></i>
      </div>

      <!-- Slide-in Mobile Menu -->
      <div
        class="fixed top-0 right-0 h-full w-1/2 max-w-xs bg-gradient-to-bl from-black via-yellow-800 to-black text-amber-300 p-4 shadow-lg transform transition-transform duration-300 lg:hidden"
        :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <!-- X Close Button INSIDE Sidebar -->
        <button @click="closeMenu" class="absolute top-4 left-4">
          <i class="fa-solid fa-xmark text-4xl text-amber-500"></i>
        </button>

        <!-- Menu Items -->
        <ul class="flex flex-col gap-4 mt-16 font-semibold text-lg">
          <li @click="closeMenu">
            <router-link to="/" class="block hover:text-blue-600"
              >Home</router-link
            >
          </li>
          <li @click="closeMenu">
            <router-link to="/subsidiaries" class="block hover:text-blue-600"
              >Subsidiaries</router-link
            >
          </li>
          <li @click="closeMenu">
            <router-link to="/about" class="block hover:text-blue-600"
              >About Us</router-link
            >
          </li>
          <li @click="closeMenu">
            <router-link to="/contacts" class="block hover:text-blue-600"
              >Contacts</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function closeMenu() {
  isOpen.value = false;
}
</script>
