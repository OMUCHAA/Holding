<template>
  <section id="about" class="mt-16 py-16 text-center max-w-7xl mx-auto min-h-[82vh]">
    <h2 class="text-3xl font-bold mb-6 text-amber-950 mt-6">About Us</h2>
    <p class="text-amber-950 leading-relaxed mb-8">
      MashBah Holdings is a diversified investment company with interests in technology,
      travel, construction, and water sectors. Our mission is to build sustainable
      businesses that empower communities and create long-term value for stakeholders.
    </p>

    <div class="grid md:grid-cols-3 gap-6">
      <div class="bg-gradient-to-b from-amber-700 to-gray-200 shadow-md rounded-2xl p-6">
        <h3 class="text-xl font-semibold text-amber-100 mb-2">Our Mission</h3>
        <p class="text-amber-950">
          To drive innovation and growth across industries through sustainable investment
          and leadership.
        </p>
      </div>
      <div class="bg-gradient-to-b from-amber-700 to-gray-200 shadow-md rounded-2xl p-6">
        <h3 class="text-xl font-semibold text-amber-100 mb-2">Our Vision</h3>
        <p class="text-amber-950">
          To become one of Africa's most trusted and impactful holding companies.
        </p>
      </div>
      <div class="bg-gradient-to-b from-amber-700 shadow-md rounded-2xl p-6">
        <h3 class="text-xl font-semibold text-amber-100 mb-2">Our Values</h3>
        <p class="text-amber-950">
          Integrity, innovation, community empowerment, and sustainable growth.
        </p>
      </div>
    </div>
    <h2 class="text-3xl font-bold mb-10 text-amber-950 mt-9">Our Subsidiaries</h2>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto items-stretch"
    >
      <div
        class="bg-amber-200 shadow-md rounded-2xl p-6 hover:shadow-xl transition flex flex-col justify-between h-full"
      >
        <h3 class="text-2xl font-semibold mb-3">SunRevo Solar Company</h3>
        <p class="text-gray-600 mb-4">
          We provide reliable, affordable, and sustainable solar energy solutions designed
          to help homes and businesses reduce energy costs and environmental impact.
        </p>
        <button
          @click="$router.push('/solar')"
          class="bg-amber-50 px-4 py-2 rounded-full hover:bg-amber-700 transition w-56 mx-auto"
        >
          Learn More
        </button>
      </div>
      <div
        class="bg-amber-100 shadow-md rounded-2xl p-6 hover:shadow-xl transition flex flex-col justify-between h-full"
      >
        <h3 class="text-2xl font-semibold mb-3">MashBah Packaging</h3>
        <p class="text-gray-600 mb-4">
          Committed to quality and sustainability, we produce high-grade paper products
          that support diverse industires while prioritizing echo-friendly practices.
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
        <h3 class="text-2xl font-semibold mb-3">Delivery Company</h3>
        <p class="text-gray-600 mb-4">
          we offer a fast reliable and secure delivery services tailored to meet the needs
          of businesses and individuals, ensurikng your packages arrive on time-every
          time.
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
          Providing safe and sustainable water solutions to households and industries.
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
</template>

<script setup></script>
