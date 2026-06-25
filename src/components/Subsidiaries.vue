<template>
  <section
    id="subsidiaries"
    class="relative mt-10 py-24 bg-gradient-to-b from-white via-amber-50 to-white overflow-hidden"
  >
    <!-- Background Decorations -->
    <div
      class="absolute top-0 left-0 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"
    ></div>

    <div
      class="absolute bottom-0 right-0 w-72 h-72 bg-amber-300/20 rounded-full blur-3xl"
    ></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center max-w-4xl mx-auto mb-16">
        <span
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-semibold uppercase tracking-widest text-sm"
        >
          <i class="fa-solid fa-building"></i>
          Our Companies
        </span>

        <h1 class="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
          Businesses Driving Sustainable Growth
        </h1>

        <p class="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
          Mashbah Holdings Ltd is a diversified Kenyan holding company overseeing
          businesses in solar energy, water supply, and packaging manufacturing. Each
          subsidiary operates independently while sharing a common commitment to quality,
          innovation, and sustainable growth.
        </p>
      </div>

      <!-- Companies Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <!-- SunRevo -->
        <div
          class="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden border border-gray-100 flex flex-col"
        >
          <div class="h-2 bg-gradient-to-r from-amber-500 to-yellow-400"></div>

          <div class="p-8 flex flex-col flex-1">
            <div
              class="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mb-6"
            >
              <i class="fa-solid fa-solar-panel text-3xl text-amber-600"></i>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mb-4">SunRevo Solar</h2>

            <p class="text-gray-600 leading-relaxed mb-6 flex-1">
              Providing solar panels, inverters, battery systems, installation services,
              and renewable energy solutions for homes, businesses, institutions, and
              industrial projects across Kenya.
            </p>

            <button
              @click="$router.push('/solar')"
              class="mt-auto w-full bg-black text-white py-3 rounded-xl hover:bg-amber-600 transition duration-300"
            >
              Learn More
            </button>
          </div>
        </div>

        <!-- Packaging -->
        <div
          class="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden border border-gray-100 flex flex-col"
        >
          <div class="h-2 bg-gradient-to-r from-amber-500 to-yellow-400"></div>

          <div class="p-8 flex flex-col flex-1">
            <div
              class="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mb-6"
            >
              <i class="fa-solid fa-box-open text-3xl text-amber-600"></i>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mb-4">Mashbah Packaging</h2>

            <p class="text-gray-600 leading-relaxed mb-6 flex-1">
              Manufacturers of khaki bags, medical envelopes, brown packaging materials,
              and non-woven bags designed for businesses, institutions, and commercial
              applications.
            </p>

            <button
              @click="$router.push('/paper')"
              class="mt-auto w-full bg-black text-white py-3 rounded-xl hover:bg-amber-600 transition duration-300"
            >
              Learn More
            </button>
          </div>
        </div>

        <!-- Aqualina -->
        <div
          class="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden border border-gray-100 flex flex-col"
        >
          <div class="h-2 bg-gradient-to-r from-amber-500 to-yellow-400"></div>

          <div class="p-8 flex flex-col flex-1">
            <div
              class="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mb-6"
            >
              <i class="fa-solid fa-droplet text-3xl text-amber-600"></i>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mb-4">Aqualina Water</h2>

            <p class="text-gray-600 leading-relaxed mb-6 flex-1">
              Supplying purified bottled drinking water and bulk water delivery services
              through tankers for homes, businesses, institutions, and industrial
              customers.
            </p>

            <button
              @click="$router.push('/water')"
              class="mt-auto w-full bg-black text-white py-3 rounded-xl hover:bg-amber-600 transition duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <!-- Bottom CTA -->
      <div
        class="mt-20 bg-gradient-to-r from-black via-amber-900 to-black rounded-3xl p-8 md:p-12 text-center"
      >
        <h3 class="text-2xl md:text-4xl font-bold text-white mb-4">
          One Holding Company. Multiple Industries.
        </h3>

        <p class="text-gray-300 max-w-3xl mx-auto mb-8">
          Through strategic investments and operational excellence, Mashbah Holdings
          continues to create sustainable businesses that serve communities, empower
          industries, and contribute to Kenya's economic growth.
        </p>

        <router-link
          to="/contacts"
          class="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 rounded-full transition"
        >
          Contact Our Team
          <i class="fa-solid fa-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup></script>
