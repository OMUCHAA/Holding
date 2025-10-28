<template>
  <section class="mt-16 py-20 text-center min-h-[82vh] md:flex md:items-center md:justify-center gap-20">
    <!-- Contact Details -->
    <div class="min-h-[75vh] border rounded-lg shadow-lg flex flex-col items-center py-10 px-5 text-blue-800 shadow-blue-600">
     <h2 class="text-3xl font-bold mb-6 text-blue-800">Contact Us</h2>
     <p class="mb-6 text-lg">Reach Out to us for any questions, assistance or clarification.</p>
     <div class="mr-20">
     <i class="fa-solid fa-envelope text-4xl text-blue-800"></i>
     <span class="text-xl">Info@gmail.com</span><br><br>
     </div>
     <div class="mr-20">
     <i class="fa-solid fa-phone-volume text-4xl text-blue-800"></i> <span class="text-xl">+254100100101</span><br><br>
     </div>
     <div class="mr-16">
     <i class="fa-solid fa-location-dot text-4xl text-blue-800"></i>
     <span class="text-xl">Lusaka Rd. NAIROBI</span>
     </div>
    </div>

    <!-- Form -->
    <div
      id="contact"
      class="min-h-[75vh] py-6 px-5 bg-gradient-to-bl from-blue-950 via-blue-500 to-blue-950 text-white text-center shadow-lg rounded-lg"
    >

      <h2 class="text-3xl font-bold">Message Us...</h2>
      <p class="mb-6 text-lg">
         Reach out for partnerships or inquiries.
      </p>

      <form
        @submit.prevent="login"
        class="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-md text-gray-800"
      >
        <input
          type="text"
          placeholder="Your Name"
          class="w-full border p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          class="w-full border p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          class="w-full border p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          class="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>

<script setup></script>
