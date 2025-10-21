<template>
  <Nav/>
  <section id="contact" class="mt-16 min-h-screen py-20 bg-gradient-to-bl from-blue-950 via-blue-500 to-blue-950 text-white text-center">
    <h2 class="text-3xl font-bold mb-6">Contact Us</h2>
    <p class="mb-6 text-lg">We’d love to hear from you. Reach out for partnerships or inquiries.</p>

    <form @submit.prevent="login" class="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-md text-gray-800">
      <input type="text" placeholder="Your Name" class="w-full border p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input type="email" placeholder="Your Email" class="w-full border p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <textarea placeholder="Your Message" rows="4" class="w-full border p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition w-full">
        Send Message
      </button>
    </form>
  </section>
</template>

<script setup>
import Nav from './Nav.vue';
</script>