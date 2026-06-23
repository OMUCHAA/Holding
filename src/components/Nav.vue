<template>
  <nav class="fixed top-0 z-50 w-full border-b border-amber-200 bg-white shadow-sm">
    <div
      class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
    >
      <!-- LOGO -->
      <router-link to="/" class="flex items-center gap-3">
        <img
          src="../assets/image.png"
          alt="logo"
          class="h-12 md:h-14 lg:h-16 w-auto object-contain"
        />
      </router-link>

      <!-- DESKTOP MENU -->
      <ul
        class="hidden lg:flex items-center gap-10 text-[16px] font-medium text-amber-900"
      >
        <li v-for="item in navItems" :key="item.name">
          <router-link
            :to="item.to"
            class="relative transition hover:text-black"
            active-class="text-black font-semibold"
          >
            <span
              class="after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-amber-700 after:transition-all hover:after:w-full"
            >
              {{ item.name }}
            </span>
          </router-link>
        </li>
      </ul>

      <!-- MOBILE BUTTON -->
      <button @click="toggleMenu" class="lg:hidden text-3xl text-amber-900">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>

    <!-- OVERLAY -->
    <div
      v-if="isOpen"
      @click="closeMenu"
      class="fixed inset-0 bg-black/40 lg:hidden"
    ></div>

    <!-- MOBILE DRAWER -->
    <aside
      class="fixed top-0 right-0 h-full w-[78%] max-w-xs bg-gradient-to-b from-black via-amber-900 to-black text-amber-200 shadow-2xl transform transition-transform duration-300 lg:hidden"
      :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <!-- HEADER -->
      <div class="flex items-center justify-between p-5 border-b border-amber-700/30">
        <span class="text-lg font-semibold text-amber-300">Menu</span>

        <button @click="closeMenu">
          <i class="fa-solid fa-xmark text-2xl text-amber-400"></i>
        </button>
      </div>

      <!-- LINKS -->
      <ul class="flex flex-col gap-2 p-5 text-lg">
        <li v-for="item in navItems" :key="item.name">
          <router-link
            :to="item.to"
            @click="closeMenu"
            class="block rounded-lg px-3 py-3 transition hover:bg-amber-800/40"
            active-class="bg-amber-800/60 text-white"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </aside>
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

const navItems = [
  { name: "Home", to: "/" },
  { name: "Companies", to: "/subsidiaries" },
  { name: "About Us", to: "/about" },
  { name: "Contacts", to: "/contacts" },
];
</script>
