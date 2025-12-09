<template>
<<<<<<< HEAD
  <section class="mt-16 py-20 text-center min-h-[82vh] md:flex md:items-center justify-center gap-20">
    <!--Contact Details-->
    <div
        class="border-amber-600 rounded-lg shadow-lg text-amber-800 shadow-amber-600 flex flex-col items-center py-10 px-5"
=======
  <section class="mt-16 py-20 text-center min-h-[82vh] md:flex md:items-center md:justify-center gap-20">
    <!-- Contact Details -->
    <div class="lg:min-h-[75vh] md:min-h-[65vh] sm:min-h-[50vh] mb-10 sm:mb-0 border rounded-lg shadow-lg flex flex-col items-center py-10 px-5 text-blue-800 shadow-blue-600">
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
      class="lg:min-h-[75vh] md:min-h-[65vh] sm:min-h-[50vh] py-6 px-5 bg-gradient-to-bl from-blue-950 via-blue-500 to-blue-950 text-white text-center shadow-lg rounded-lg"
    >

      <h2 class="text-3xl font-bold">Message Us...</h2>
      <p class="mb-6 text-lg">
         Reach out for partnerships or inquiries.
      </p>

      <form
        @submit.prevent="login"
        class="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-md text-gray-800"
>>>>>>> b71286a0a7eba7a46d76b9fa679320fce73d24a5
      >
        <h2 class="text-3xl font-bold mb-6 text-amber-800">Contact Us</h2>
        <p class="mb-6 text-lg">
          Reach Out to us for any questions, assistance or clarification.
        </p>
        <div class="mr-20">
          <i class="fa-solid fa-envelope text-4xl text-amber-950"></i>
          <span class="text-xl">Info@mashbah.com</span><br /><br />
        </div>
        <div class="mr-24">
          <i class="fa-solid fa-phone-volume text-4xl text-amber-950"></i>
          <span class="text-xl">+254 780 818238</span><br /><br />
        </div>
        <div class="mr-20">
          <i class="fa-solid fa-location-dot text-4xl text-amber-950"></i>
          <span class="text-xl">Lusaka Rd. NAIROBI</span>
        </div>
      </div>
  </section>
</template>

<script setup></script>
