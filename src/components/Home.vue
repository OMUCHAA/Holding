<template>
  <div class="bg-gray-100">
    <section
    class="pt-48 text-center py-20 bg-gradient-to-bl from-black via-yellow-700 to-black text-white flex flex-col justify-center items-center"
  >
    <h1 data-aos="slide-right" data-aos-duration="3000" class="text-4xl md:text-6xl font-bold mb-4">MashBah Holdings</h1>
    <p class="text-lg md:text-2xl mb-6">Empowering Growth Across Industries</p>
    <a
      href="#subsidiaries"
      class="bg-white text-amber-950 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-color duration-600"
    >
      Explore Our Companies
    </a>
  </section>

  <section id="subsidiaries" class="py-20 bg-amber-100 text-center">
    <h2 class="text-3xl font-bold mb-10 text-amber-950">Our Subsidiaries</h2>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto items-stretch"
    >
      <div
        class="bg-amber-200 shadow-md rounded-2xl p-6 hover:shadow-xl transition flex flex-col justify-between h-full"
      >
        <h3 class="text-2xl font-semibold mb-3">SunRevo Solar Company</h3>
        <p class="text-gray-600 mb-4">
          We provide reliable, affordable, and sustainable solar energy
          solutions designed to help homes and businesses reduce energy costs
          and environmental impact.
        </p>
        <p class="mb-3"><span>Contacts: </span>+254 780818238</p>
        <router-link to="/solar">
          <button
          class="bg-amber-50 px-4 py-2 rounded-full hover:bg-amber-700 transition w-56 mx-auto"
        >
          Learn More
        </button>
        </router-link>
      </div>  
      <div
        class="bg-amber-100 shadow-md rounded-2xl p-6 hover:shadow-xl transition flex flex-col justify-between h-full"
      >
        <h3 class="text-2xl font-semibold mb-3">
          MashBah Packaging
        </h3>
        <p class="text-gray-600 mb-4">
          Committed to quality and sustainability, we produce high-grade paper
          products that support diverse industires while prioritizing
          echo-friendly practices.
        </p>
        <button
          @click="$router.push('/paper')"
          class="bg-amber-400 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition w-56 mx-auto"
        >
          Learn More
        </button>
      </div>

      <div
        class="bg-amber-200 shadow-md rounded-2xl p-6 hover:shadow-xl transition flex flex-col justify-between h-full"
      >
        <h3 class="text-2xl font-semibold mb-3">
          Delivery Company
        </h3>
        <p class="text-gray-600 mb-4">
          we offer a fast reliable and secure delivery services tailored to meet
          the needs of businesses and individuals, ensurikng your packages
          arrive on time-every time.
        </p>
        <button
          @click="$router.push('/delivery')"
          class="bg-amber-50 px-4 py-2 rounded-full hover:bg-amber-700 transition w-56 mx-auto"
        >
          Learn More
        </button>
      </div>

      <div
        class="bg-amber-100 shadow-md rounded-2xl p-6 hover:shadow-xl transition flex flex-col justify-between h-full"
      >
        <h3 class="text-2xl font-semibold mb-3">Water Company</h3>
        <p class="text-gray-600 mb-4">
          Providing safe and sustainable water solutions to households and
          industries.
        </p>

        <button
          @click="$router.push('/water')"
          class="bg-amber-400 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition w-56 mx-auto"
        >
          Learn More
        </button>
      </div>
    </div>
  </section>

  <section>
      <div class="pt-20 min-h-[86vh] lg:min-h-[91vh] bg-amber-50 flex flex-col items-center p-8">
    <h1 class="md:text-4xl sm:text-3xl text-2xl font-bold text-amber-950 mb-4 text-center">SunRevo Solar Company</h1>
     <div
    class="relative bg-cover bg-center"
    :style="{ backgroundImage: `url(${heroImage})`}"
  >
    <div class="absolute inset-0 bg-black/30"></div>
    <div class="relative z-10 flex flex-col items-center justify-center min-h-[70vh]">
      <h1
        data-aos="zoom-in"
        data-aos-duration="1000"
        class="text-orange-200 font-semibold text-center text-4xl sm:text-5xl md:text-7xl font-serif"
      >
        Advanced Solar Power Solutions...
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-duration="2000"
        class="font-mono text-white text-center py-10 text-sm sm:text-xl md:text-2xl"
      >
        SunRevo is the brand that brightens your world!
      </p>
      <a href="https://sunrevo.co.ke/" target="_blank"
        ><button
          data-aos="zoom-in"
          data-aos-duration="2500"
          class="text-white border-orange-100 border-[3px] font-semibold py-3 rounded px-4 hover:bg-orange-400 hover:text-black transition duration-500"
        >
          Our Website
        </button></a
      >
    </div>
  </div>
    <p class="text-amber-700 max-w-2xl text-center my-6">
      Harnessing solar energy to power a sustainable future for homes and businesses.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-amber-100 p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-2">Solutions</h2>
        <ul class="list-disc list-inside text-amber-700">
          <li>Residential solar panels</li>
          <li>Commercial solar solutions</li>
          <li>Solar energy consulting</li>
        </ul>
      </div>
      <div class="bg-amber-100 p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-2">About Us</h2>
        <p class="text-amber-700">
          We specialize in designing and implementing solar energy systems to maximize efficiency and reduce carbon footprint.
        </p>
      </div>
    </div>
  </div>

   <div class="pt-10 min-h-[86vh] lg:min-h-[91vh] bg-amber-50 flex flex-col items-center p-8">
    <h1 class="text-3xl font-bold text-amber-950 mb-4 text-center">Mashbah Packaging</h1>
    <p class="text-amber-950 max-w-2xl text-center mb-6">
      Producing high-quality paper products with sustainability at the core.
    </p>
    <img data-aos="slide-right" data-aos-duration="1500" src="../assets/mashbahbanner.jpeg" alt="banner" class="md:w-2/5 mb-10">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-amber-100 p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-2">Products</h2>
        <ul class="list-disc list-inside text-amber-700">
          <li>Recycled paper</li>
          <li>Packaging materials</li>
          <li>Stationery products</li>
        </ul>
      </div>
      <div class="bg-amber-100 p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-2">Our Mission</h2>
        <p class="text-amber-700">
          To innovate in paper production while reducing environmental impact.
        </p>
      </div>
    </div>
  </div>
  </section>

  <section id="about" class="pt-10 text-center max-w-5xl mx-auto">
    <h2 class="text-3xl font-bold mb-6 text-amber-950">About Us</h2>
    <p class="text-amber-950 leading-relaxed mb-8">
      MashBah Holdings is a diversified investment company with interests in
      technology, travel, construction, and water sectors. Our mission is to
      build sustainable businesses that empower communities and create long-term
      value for stakeholders.
    </p>

    <div class="grid md:grid-cols-3 gap-6 -mb-8">
      <div
        class="bg-gradient-to-b bg-amber-700 shadow-md rounded-2xl p-6"
      >
        <h3 class="text-xl font-semibold text-amber-100 mb-2">Our Mission</h3>
        <p class="text-amber-100">
          To drive innovation and growth across industries through sustainable
          investment and leadership.
        </p>
      </div>
      <div
        class="bg-amber-700 shadow-md rounded-2xl p-6"
      >
        <h3 class="text-xl font-semibold text-amber-100 mb-2">Our Vision</h3>
        <p class="text-amber-100">
          To become one of Africa’s most trusted and impactful holding
          companies.
        </p>
      </div>
      <div
        class=" bg-amber-700 shadow-md rounded-2xl p-6"
      >
        <h3 class="text-xl font-semibold text-amber-100 mb-2">Our Values</h3>
        <p class="text-amber-100">
          Integrity, innovation, community empowerment, and sustainable growth.
        </p>
      </div>
    </div>
  </section>

  <section
    id="contact"
    class="mt-16 py-16 bg-amber-100 text-yellow-900 text-center"
  >
    <h2 class="text-3xl font-bold mb-6">Reachout Today!</h2>
    <p class="mb-6 text-lg">
      We’d love to hear from you. Reach out for partnerships or inquiries.
    </p>

    <section
       >
      <!-- Contact Details -->
      <div  
        class="border-amber-600 rounded-lg shadow-lg text-amber-800 shadow-amber-600 flex flex-col items-center justify-center py-10 px-5"
      >
        <h2 class="lg:text-3xl text-2xl font-bold mb-6 text-amber-800">Contact Us</h2>
        <p class="mb-6 md:text-lg">
          Reach Out to us for any questions, assistance or clarification.
        </p>
        <div class="flex flex-col justify-center items-center lg:w-3/5 w-full text-center">
          <div class="text-balance border-amber-400 rounded-tr-3xl rounded-tl-3xl border py-4 sm:w-3/5 w-full">
            <i class="fa-solid fa-envelope text-4xl text-amber-950"></i><br>
            <span>sales@mashbahholdings.co.ke</span><br /><br />
            <p class="-mt-7">/</p>
            <span>accounts@mashbahholdings.co.ke</span><br /><br />
          </div>
          <div class="text-balance border-amber-400 border py-4 sm:w-3/5 w-full">
            <i class="fa-solid fa-phone-volume text-4xl text-amber-950"></i>
            <span class="md:text-xl">+254 780818238</span><br /><br />
          </div>
          <div class="text-balance border-amber-400 border sm:w-3/5 py-4 w-full">
            <i class="fa-solid fa-location-dot text-4xl text-amber-950"></i>
            <span class="md:text-xl">MSA Rd. NAIROBI</span>
          </div>
        </div>
      </div>
    </section>
  </section>
  </div>
</template>

<script setup>
import heroImage from "../assets/hero2.jpg";
</script>
