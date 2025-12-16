<template>
  <section id="subsidiaries" class="mt-24 py-28 bg-amber-100 text-center min-h-[82vh]">
    <h2 class="text-3xl font-bold mb-10 text-amber-950">Our Subsidiaries</h2>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto items-stretch"
    >
      <div
        class="bg-amber-200 shadow-md rounded-2xl p-6 hover:shadow-xl transition flex flex-col justify-between h-full"
      >
        <h3 class="text-2xl font-semibold mb-3">Solar Company</h3>
        <p class="text-gray-600 mb-4">
          We provide reliable, affordable, and sustainable solar energy
          solutions designed to help homes and businesses reduce energy costs
          and environmental impact.
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
</template>

<script setup></script>
