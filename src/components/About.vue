<template>
  <section
    class="relative mt-20 py-24 bg-gradient-to-b from-white via-amber-50 to-white overflow-hidden"
  >
    <!-- Background Effects -->
    <div
      class="absolute top-0 left-0 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"
    ></div>

    <div
      class="absolute bottom-0 right-0 w-72 h-72 bg-amber-300/20 rounded-full blur-3xl"
    ></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Hero -->
      <div class="text-center max-w-4xl mx-auto mb-20">
        <span
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-semibold uppercase tracking-widest text-sm"
        >
          <i class="fa-solid fa-building"></i>
          About Mashbah Holdings
        </span>

        <h1 class="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
          Building Sustainable Businesses Across Kenya
        </h1>

        <p class="mt-6 text-lg text-gray-600 leading-relaxed">
          Mashbah Holdings Ltd is a diversified Kenyan holding company providing
          leadership, investment, and operational support to businesses in water supply,
          solar energy, and packaging manufacturing.
        </p>
      </div>

      <!-- Company Story -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>

          <p class="text-gray-600 leading-relaxed mb-6">
            Mashbah Holdings was established with a vision of creating sustainable
            businesses that solve everyday challenges while contributing to Kenya's
            economic growth.
          </p>

          <p class="text-gray-600 leading-relaxed">
            Through strategic investments and operational excellence, we oversee
            businesses that provide clean water solutions, renewable energy technologies,
            and quality packaging products to homes, institutions, industries, and
            commercial customers.
          </p>
        </div>

        <div
          class="bg-gradient-to-br from-black via-amber-900 to-black rounded-3xl p-10 text-white shadow-2xl"
        >
          <h3 class="text-2xl font-bold mb-6">Our Purpose</h3>

          <p class="text-gray-300 leading-relaxed">
            To create long-term value by building businesses that improve lives, support
            communities, and contribute to sustainable economic development throughout
            Kenya and East Africa.
          </p>
        </div>
      </div>

      <!-- Mission Vision Values -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <div class="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
          <i class="fa-solid fa-bullseye text-4xl text-amber-600 mb-6"></i>

          <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>

          <p class="text-gray-600">
            To deliver innovative, reliable, and sustainable solutions through our
            subsidiaries while creating lasting value for customers, communities, and
            stakeholders.
          </p>
        </div>

        <div class="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
          <i class="fa-solid fa-eye text-4xl text-amber-600 mb-6"></i>

          <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>

          <p class="text-gray-600">
            To become one of East Africa's most trusted and impactful business groups
            recognized for excellence, innovation, and sustainable growth.
          </p>
        </div>

        <div class="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
          <i class="fa-solid fa-handshake text-4xl text-amber-600 mb-6"></i>

          <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>

          <p class="text-gray-600">
            Integrity, accountability, innovation, customer focus, sustainability, and
            commitment to quality.
          </p>
        </div>
      </div>

      <!-- Industries -->
      <div class="text-center mb-20">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Industries We Serve
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-amber-50 rounded-3xl p-8">
            <i class="fa-solid fa-droplet text-5xl text-amber-600 mb-6"></i>

            <h3 class="text-xl font-bold mb-4">Water Supply</h3>

            <p class="text-gray-600">Bottled water and bulk water delivery solutions.</p>
          </div>

          <div class="bg-amber-50 rounded-3xl p-8">
            <i class="fa-solid fa-solar-panel text-5xl text-amber-600 mb-6"></i>

            <h3 class="text-xl font-bold mb-4">Renewable Energy</h3>

            <p class="text-gray-600">Solar power solutions for homes and businesses.</p>
          </div>

          <div class="bg-amber-50 rounded-3xl p-8">
            <i class="fa-solid fa-box-open text-5xl text-amber-600 mb-6"></i>

            <h3 class="text-xl font-bold mb-4">Packaging Manufacturing</h3>

            <p class="text-gray-600">
              Khaki bags, medical envelopes, and non-woven bags.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div
        class="bg-gradient-to-r from-black via-amber-900 to-black rounded-3xl p-10 md:p-14 text-center"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Partner With Mashbah Holdings
        </h2>

        <p class="text-gray-300 max-w-3xl mx-auto mb-8">
          We are committed to creating sustainable businesses, delivering quality
          products, and building meaningful partnerships across Kenya and beyond.
        </p>

        <router-link
          to="/contacts"
          class="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 rounded-full transition"
        >
          Contact Us Today
          <i class="fa-solid fa-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup></script>
