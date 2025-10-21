<template>
  <nav class="border shadow p-6 fixed w-full z-50 top-0 bg-white">
    <div class="flex justify-between">
      <div id="logo" class="ml-4 font-semibold text-2xl text-blue-900">
        <span class="italic font-bold text-blue-600">MashBah</span>-Holdings
        Kenya
      </div>

      <!--Horrizontal Menu Hidden on small screens-->
      <ul
        class="mr-10 text-xl font-semibold hidden lg:flex text-blue-900 space-x-8"
      >
        <li class="mr-6 relative group text-blue-900 font-medium">
          <router-link to="/">Home</router-link>
          <span
            class="absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"
          ></span>
        </li>
        <li class="relative group text-blue-900 font-medium">
          <router-link to="/subsidiaries">Subsidiaries</router-link>
          <span
            class="absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"
          ></span>
        </li>
        <li class="mr-6 relative group text-blue-900 font-medium">
          <router-link to="/about">About Us</router-link>
          <span
            class="absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"
          ></span>
        </li>
        <li class="mr-6 relative group text-blue-900 font-medium">
          <router-link to="/contacts">Contacts</router-link>
          <span
            class="absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"
          ></span>
        </li>
      </ul>

      <!--What is going to be visible on smaller screens-->
      <div @click="toggleMenu" class="lg:hidden">
        <i v-if="!isOpen" class="fa-solid fa-bars text-2xl"></i>
        <i v-if="isOpen" class="fa-solid fa-xmark text-2xl"></i>
      </div>

      <!--Show the dropdown if the menu is open-->
      <div
        v-show="isOpen"
        class="mr-10 text-lg font-semibold absolute top-[72px] right-4 lg:hidden justify-center items-center"
      >
        <ul class="flex flex-col bg-blue-50 p-3 text-blue-900">
          <li class="border-r-0 border-l-0 border-t-0 border-blue-200">
            <router-link to="/">Home</router-link>
          </li>
          <li class="border border-r-0 border-l-0 border-b-0">
            <router-link to="/subsidiaries">Subsidiaries</router-link>
          </li>
          <li class="border border-r-0 border-l-0 border-b-0">
            <router-link to="/about">About Us</router-link>
          </li>
          <li class="border border-r-0 border-l-0 border-b-0">
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
</script>
