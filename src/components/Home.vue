<template>
  <section
    class="pt-36 text-center py-20 bg-gradient-to-bl from-blue-950 via-blue-500 to-blue-950 text-white flex flex-col justify-center items-center">
    <h1 class="text-4xl md:text-6xl font-bold mb-4">
      MashBah Holdings
    </h1>

    <p class="text-lg md:text-2xl mb-6">Empowering Growth Across Industries</p>
    <a href="#subsidiaries"
      class="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-900 transition-colors hover:text-white duration-600">
      Explore Our Companies
    </a>
  </section>

  <section id="subsidiaries" class="py-28 bg-gray-100 text-center">
    <h2 class="text-3xl font-bold mb-10 text-blue-700">Our Subsidiaries</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto items-stretch">

      <div
        class="bg-blue-100 shadow-md rounded-2xl p-6 hover:shadow-xl transition flex flex-col justify-between h-full">
        <h3 class="text-2xl font-semibold mb-3 text-blue-600">Solar Company</h3>
        <p class="text-gray-600 mb-4">
          We provide reliable, affordable, and sustainable solar energy
          solutions designed to help homes and businesses reduce energy costs
          and environmental impact.
        </p>
        <button @click="$router.push('/solar')"
          class="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition w-56 mx-auto">
          Learn More
        </button>
      </div>

      <div
        class="bg-blue-100 shadow-md rounded-2xl p-6 hover:shadow-xl transition flex flex-col justify-between h-full">
        <h3 class="text-2xl font-semibold mb-3 text-blue-600">
          Paper Industry
        </h3>
        <p class="text-gray-600 mb-4">
          Committed to quality and sustainability, we produce high-grade paper
          products that support diverse industires while prioritizing
          echo-friendly practices.
        </p>
        <button @click="$router.push('/paper')"
          class="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition w-56 mx-auto">
          Learn More
        </button>
      </div>

      <div
        class="bg-blue-100 shadow-md rounded-2xl p-6 hover:shadow-xl transition flex flex-col justify-between h-full">
        <h3 class="text-2xl font-semibold mb-3 text-blue-600">
          Delivery Company
        </h3>
        <p class="text-gray-600 mb-4">
          we offer a fast reliable and secure delivery services tailored to meet
          the needs of businesses and individuals, ensurikng your packages
          arrive on time-every time.
        </p>
        <button @click="$router.push('/delivery')"
          class="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition w-56 mx-auto">
          Learn More
        </button>
      </div>

      <div
        class="bg-blue-100 shadow-md rounded-2xl p-6 hover:shadow-xl transition flex flex-col justify-between h-full">
        <h3 class="text-2xl font-semibold mb-3 text-blue-600">Water Company</h3>
        <p class="text-gray-600 mb-4">
          Providing safe and sustainable water solutions to households and
          industries.
        </p>

        <button @click="$router.push('/water')"
          class="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition w-56 mx-auto">
          Learn More
        </button>
      </div>
    </div>
  </section>

  <section id="about" class="mt-16 py-20 text-center max-w-5xl mx-auto">
    <h2 class="text-3xl font-bold mb-6 text-blue-700">About Us</h2>
    <p class="text-gray-700 leading-relaxed mb-8">
      MashBah Holdings is a diversified investment company with interests in
      technology, travel, construction, and water sectors. Our mission is to
      build sustainable businesses that empower communities and create long-term
      value for stakeholders.
    </p>

    <div class="grid md:grid-cols-3 gap-6">
      <div class="bg-gradient-to-b from-blue-200 to-white shadow-md rounded-2xl p-6">
        <h3 class="text-xl font-semibold text-blue-600 mb-2">Our Mission</h3>
        <p class="text-gray-600">
          To drive innovation and growth across industries through sustainable
          investment and leadership.
        </p>
      </div>
      <div class="bg-gradient-to-b from-blue-200 to-white shadow-md rounded-2xl p-6">
        <h3 class="text-xl font-semibold text-blue-600 mb-2">Our Vision</h3>
        <p class="text-gray-600">
          To become one of Africa’s most trusted and impactful holding
          companies.
        </p>
      </div>
      <div class="bg-gradient-to-b from-blue-200 to-white shadow-md rounded-2xl p-6">
        <h3 class="text-xl font-semibold text-blue-600 mb-2">Our Values</h3>
        <p class="text-gray-600">
          Integrity, innovation, community empowerment, and sustainable growth.
        </p>
      </div>
    </div>
  </section>

  <!-- <section id="contact" class="mt-16 min-h-[80vh] py-20 bg-gradient-to-bl from-blue-950 via-blue-500 to-blue-950 text-white text-center">
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
  </section> -->
  <hr class="h-2 shadow-md bg-blue-700 shadow-blue-400">
  <section class="py-20 text-center min-h-[82vh] md:flex md:items-center md:justify-center gap-20">
    <!-- Contact Details -->
    <div class="min-h-[75vh] md:min-h-[65vh] sm:min-h-[50vh] border rounded-lg shadow-lg flex flex-col mb-10 sm:mb-0 items-center py-10 px-5 text-blue-800 shadow-blue-600">
      <h2 class="text-3xl font-bold mb-6 text-blue-800">Contact Us</h2>
      <p class="mb-6 text-lg">Reach Out to us for any questions, assistance or clarification.</p>
      <div class="mr-20">
        <i class="fa-solid fa-envelope text-4xl text-blue-800"></i>
        <span class="text-xl">Info@gmail.com</span><br><br>
      </div>
      <div class="mr-20">
        <i class="fa-solid fa-phone-volume text-4xl text-blue-800"></i> <span
          class="text-xl">+254100100101</span><br><br>
      </div>
      <div class="mr-16">
        <i class="fa-solid fa-location-dot text-4xl text-blue-800"></i>
        <span class="text-xl">Lusaka Rd. NAIROBI</span>
      </div>
    </div>
    <!-- Form -->
    <div id="contact"
      class="min-h-[75vh] md:min-h-[65vh] sm:min-h-[50vh] py-6 px-5 bg-gradient-to-bl from-blue-950 via-blue-500 to-blue-950 text-white text-center shadow-lg rounded-lg">

      <h2 class="text-3xl font-bold">Message Us...</h2>
      <p class="mb-6 text-lg">
        Reach out for partnerships or inquiries.
      </p>

      <form @submit.prevent="login" class="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-md text-gray-800">
        <input type="text" placeholder="Your Name"
          class="w-full border p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="email" placeholder="Your Email"
          class="w-full border p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <textarea placeholder="Your Message" rows="4"
          class="w-full border p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition w-full">
          Send Message
        </button>
      </form>
    </div>
  </section>


</template>

<script setup>
// import Contacts from "./Contacts.vue";
// import About from "./About.vue";
// import Subsidiaries from "./Subsidiaries.vue";
</script>
