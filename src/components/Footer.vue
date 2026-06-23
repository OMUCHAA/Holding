<template>
  <footer
    class="bg-gradient-to-r from-black via-amber-900 to-black text-gray-300 py-8 text-center"
  >
    <div
      class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left"
    >
      <!-- Company Info -->
      <div>
        <h2 class="text-2xl font-bold mb-3 text-amber-300">MASHBAH HOLDINGS</h2>
        <div class="flex md:justify-start justify-center mb-4">
          <img src="../assets/image.png" alt="Company-Logo" class="h-12" />
        </div>
        <p class="text-amber-400">
          MashBah Holdings is a diversified company that manages and invests in
          high-potential businesses across multiple sectors to drive growth and long-term
          value
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-lg font-semibold mb-3 text-amber-300">Quick Links</h3>
        <ul class="space-y-2 text-blue-300">
          <li>
            <router-link to="/" class="hover:text-white transition">Home</router-link>
          </li>
          <li>
            <router-link to="/contacts" class="hover:text-white transition"
              >Contact</router-link
            >
          </li>
          <li>
            <router-link to="/about" class="hover:text-white transition"
              >About</router-link
            >
          </li>
          <li>
            <router-link to="/subsidiaries" class="hover:text-white transition"
              >Our Companies</router-link
            >
          </li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div class="text-amber-300">
        <h3 class="text-lg font-bold mb-3">Get in Touch</h3>
        <p class="text-amber-500">MSA Rd, Kenya</p>
        <p class="text-amber-500">+254 780818238</p>
        <p class="text-amber-500">
          sales@mashbahholdings.co.ke <br />
          accounts@mashbahholdings.co.ke
        </p>
      </div>
    </div>
    <div
      class="border-t border-amber-200 flex flex-col justify-center text-amber-100 items-center mt-3 pt-3"
    >
      <p>© {{ new Date().getFullYear() }} MashBah Holdings. All rights reserved.</p>
      <router-link class="hover:text-blue-100" to="/">Back to top</router-link>
    </div>
  </footer>
</template>

<script setup></script>
