<template>
  <section class="pt-28 pb-20 bg-gradient-to-b from-amber-50 via-white to-amber-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- HERO -->
      <div class="relative overflow-hidden rounded-[32px] shadow-2xl" data-aos="fade-up">
        <img
          src="../../assets/mashbahbanner.jpeg"
          alt="Mashbah Packaging Manufacturing"
          class="w-full h-[350px] md:h-[500px] object-cover"
        />

        <div class="absolute inset-0 bg-black/60"></div>

        <div
          class="absolute inset-0 flex flex-col justify-center items-center text-center px-6"
        >
          <span
            class="inline-block px-4 py-2 rounded-full border border-amber-400 text-amber-300 text-xs sm:text-sm uppercase tracking-widest mb-5"
          >
            Sustainable Packaging Solutions
          </span>

          <h1
            class="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight max-w-4xl"
          >
            Premium Paper &
            <span class="text-amber-400"> Packaging Manufacturing </span>
          </h1>

          <p class="max-w-3xl mt-6 text-gray-200 text-sm sm:text-base md:text-lg">
            Mashbah Packaging manufactures high-quality packaging products designed for
            businesses, retailers, hospitals, institutions and industrial clients across
            Kenya.
          </p>
        </div>
      </div>

      <!-- ABOUT -->
      <div class="mt-20 text-center max-w-4xl mx-auto" data-aos="fade-up">
        <span class="text-amber-600 uppercase tracking-widest font-semibold text-sm">
          About Mashbah Packaging
        </span>

        <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
          Manufacturing Quality Packaging Products
        </h2>

        <p class="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
          Mashbah Packaging is committed to producing durable, reliable and
          environmentally responsible packaging products. Our manufacturing processes
          focus on quality control, sustainability and innovation to serve businesses
          across multiple industries.
        </p>
      </div>

      <!-- PRODUCTS -->
      <div class="mt-20">
        <div class="text-center mb-12">
          <span class="text-amber-600 uppercase tracking-widest font-semibold text-sm">
            Our Products
          </span>

          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            Packaging Solutions We Manufacture
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Product -->
          <div
            class="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300"
          >
            <div
              class="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mb-5"
            >
              <i class="fa-solid fa-bag-shopping text-2xl text-amber-700"></i>
            </div>

            <h3 class="text-xl font-bold mb-3">Khaki Paper Bags</h3>

            <p class="text-gray-600">
              Durable paper bags suitable for retail stores, packaging, restaurants and
              commercial use.
            </p>
          </div>

          <!-- Product -->
          <div
            class="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300"
          >
            <div
              class="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mb-5"
            >
              <i class="fa-solid fa-box text-2xl text-amber-700"></i>
            </div>

            <h3 class="text-xl font-bold mb-3">Packaging Materials</h3>

            <p class="text-gray-600">
              Reliable packaging products designed for industrial, manufacturing and
              logistics applications.
            </p>
          </div>

          <!-- Product -->
          <div
            class="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300"
          >
            <div
              class="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mb-5"
            >
              <i class="fa-solid fa-file-medical text-2xl text-amber-700"></i>
            </div>

            <h3 class="text-xl font-bold mb-3">Medical Envelopes</h3>

            <p class="text-gray-600">
              Professionally manufactured medical packaging and envelope solutions for
              healthcare institutions.
            </p>
          </div>
        </div>
      </div>

      <!-- WHY CHOOSE US -->
      <div class="mt-24">
        <div class="text-center mb-12">
          <span class="text-amber-600 uppercase tracking-widest font-semibold text-sm">
            Why Choose Us
          </span>

          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            Trusted Packaging Partner
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-3xl p-8 shadow-md text-center">
            <i class="fa-solid fa-award text-4xl text-amber-600 mb-4"></i>

            <h3 class="font-bold text-xl mb-3">Premium Quality</h3>

            <p class="text-gray-600">
              Consistent manufacturing standards and strict quality control.
            </p>
          </div>

          <div class="bg-white rounded-3xl p-8 shadow-md text-center">
            <i class="fa-solid fa-leaf text-4xl text-amber-600 mb-4"></i>

            <h3 class="font-bold text-xl mb-3">Sustainable Production</h3>

            <p class="text-gray-600">
              Environmentally conscious manufacturing processes and materials.
            </p>
          </div>

          <div class="bg-white rounded-3xl p-8 shadow-md text-center">
            <i class="fa-solid fa-truck-fast text-4xl text-amber-600 mb-4"></i>

            <h3 class="font-bold text-xl mb-3">Reliable Supply</h3>

            <p class="text-gray-600">
              Consistent production capacity to meet business demand.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div
        class="mt-24 bg-gradient-to-r from-black via-amber-900 to-black rounded-[32px] p-10 md:p-16 text-center text-white"
      >
        <h2 class="text-3xl md:text-5xl font-bold">Looking For Packaging Solutions?</h2>

        <p class="mt-5 max-w-2xl mx-auto text-gray-300">
          Partner with Mashbah Packaging for high-quality packaging products tailored to
          your business needs.
        </p>

        <router-link
          to="/contacts"
          class="inline-flex mt-8 bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 rounded-full transition duration-300"
        >
          Contact Us Today
        </router-link>
      </div>
    </div>
  </section>
</template>
