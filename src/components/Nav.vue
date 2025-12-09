<template>
  <nav class="border shadow p-6 fixed w-full z-50 top-0 bg-amber-50">
    <div class="flex justify-around items-center">
      <div id="logo" class="ml-4 font-semibold text-2xl md:text-3xl text-gold-900">
        <span class="italic font-bold"><img src="../assets/image.png" class="lg:h-20 md:h-16 h-14" alt="logo"></span>
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
      <div @click="toggleMenu" class="lg:hidden">
        <i v-if="!isOpen" class="fa-solid fa-bars text-3xl text-blue-900"></i>
        <i v-if="isOpen" class="fa-solid fa-xmark text-3xl text-blue-700"></i>
      </div>

      <!--Show the dropdown if the menu is open-->
      <div
        v-show="isOpen"
        class="mr-10 text-lg font-semibold absolute top-[72px] right-4 lg:hidden items-center"
      >
        <ul class="flex flex-col bg-blue-50 p-3 text-blue-900 justify-center items-center md:w-72 rounded shadow">
          <li @click="closeMenu" class="border-r-0 border-l-0 border-t-0 border-blue-200 w-full px-20 hover:bg-slate-400 hover:text-white transition">
            <router-link to="/" class="w-full">Home</router-link>
          </li>
          <li @click="closeMenu" class="border border-r-0 border-l-0 border-b-0 w-full px-20 hover:bg-slate-400 hover:text-white transition">
            <router-link to="/subsidiaries">Subsidiaries</router-link>
          </li>
          <li @click="closeMenu" class="border border-r-0 border-l-0 border-b-0 w-full px-20 hover:bg-slate-400 hover:text-white transition">
            <router-link to="/about">About Us</router-link>
          </li>
          <li @click="closeMenu" class="border border-r-0 border-l-0 border-b-0 w-full px-20 hover:bg-slate-400 hover:text-white transition">
            <router-link to="/contacts">Contacts</router-link>
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
