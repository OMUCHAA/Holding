<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl transition-all duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- LOGO -->
        <router-link to="/" class="flex items-center gap-3 group rounded">
          <img
            src="../assets/image.png"
            alt="Mashbah Holdings Logo"
            class="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 rounded"
          />
        </router-link>

        <!-- DESKTOP MENU -->
        <ul class="hidden lg:flex items-center gap-8 text-sm font-medium">
          <li v-for="item in navItems" :key="item.name">
            <router-link
              :to="item.to"
              class="text-gray-200 hover:text-amber-400 transition duration-300 relative"
              active-class="text-amber-400"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>

        <!-- CONTACT BUTTON -->
        <div class="hidden lg:block">
          <router-link
            to="/contact-us"
            class="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-full transition duration-300"
          >
            Contact Us
          </router-link>
        </div>

        <!-- MOBILE BUTTON -->
        <button @click="toggleMenu" class="lg:hidden text-white text-2xl">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>

    <!-- OVERLAY -->
    <div
      v-if="isOpen"
      @click="closeMenu"
      class="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden"
    ></div>

    <!-- MOBILE DRAWER -->
    <aside
      class="fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-gradient-to-b from-black via-amber-950 to-black shadow-2xl transform transition-transform duration-300 lg:hidden"
      :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <!-- HEADER -->
      <div class="flex items-center justify-between p-6 border-b border-amber-500/20">
        <div>
          <h2 class="text-white font-bold text-lg">Mashbah Holdings</h2>

          <p class="text-amber-400 text-xs uppercase tracking-widest">Navigation</p>
        </div>

        <button @click="closeMenu" class="text-amber-400 text-2xl">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- LINKS -->
      <ul class="flex flex-col p-6 gap-3">
        <li v-for="item in navItems" :key="item.name">
          <router-link
            :to="item.to"
            @click="closeMenu"
            class="block px-4 py-4 rounded-xl text-gray-200 hover:bg-amber-700/20 transition"
            active-class="bg-amber-700/30 text-white"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>

      <!-- CTA -->
      <div class="px-6 mt-4">
        <router-link
          to="/contact-us"
          @click="closeMenu"
          class="block text-center bg-amber-500 hover:bg-amber-600 text-black font-semibold py-4 rounded-xl transition"
        >
          Contact Us
        </router-link>
      </div>
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
  { name: "About Us", to: "/about-us" },
  { name: "Contact", to: "/contact-us" },
];
</script>
