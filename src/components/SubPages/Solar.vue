```vue
<template>
  <section
    class="min-h-screen bg-gradient-to-br from-white via-amber-50 to-amber-100 pt-32 pb-20"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- HERO -->
      <div class="relative overflow-hidden rounded-[32px] shadow-2xl">
        <div
          class="relative min-h-[500px] md:min-h-[650px] bg-cover bg-center"
          :style="{ backgroundImage: `url(${heroImage})` }"
        >
          <div class="absolute inset-0 bg-black/70"></div>

          <div
            class="relative z-10 flex flex-col justify-center items-center text-center h-full px-6 py-20"
          >
            <span
              class="inline-block px-5 py-2 rounded-full bg-amber-500/20 border border-amber-400 text-amber-300 uppercase tracking-widest text-xs md:text-sm font-semibold"
            >
              Renewable Energy Solutions
            </span>

            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              class="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              SunRevo Solar Company
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              class="max-w-3xl mt-8 text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              Providing reliable solar power solutions for homes, businesses,
              institutions, and industries across Kenya. Harness clean energy, reduce
              electricity costs, and power your future sustainably.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="https://sunrevo.co.ke/"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 rounded-full transition duration-300"
              >
                Visit Official Website
              </a>

              <router-link
                to="/contacts"
                class="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full transition duration-300"
              >
                Contact Us
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- INTRO -->
      <div class="text-center mt-20">
        <span class="text-amber-600 uppercase tracking-widest font-semibold text-sm">
          About SunRevo
        </span>

        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
          Powering Kenya Through Solar Innovation
        </h2>

        <p
          class="max-w-4xl mx-auto mt-6 text-gray-600 text-base md:text-lg leading-relaxed"
        >
          SunRevo Solar Company is a subsidiary of Mashbah Holdings Ltd, specializing in
          solar panels, inverters, batteries, solar installations, and energy consulting
          services. We help households and businesses transition to clean, affordable, and
          sustainable energy solutions.
        </p>
      </div>

      <!-- SERVICES -->
      <div class="mt-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
            Our Solar Solutions
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Card 1 -->
          <div
            class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-amber-100"
          >
            <i class="fa-solid fa-solar-panel text-5xl text-amber-600 mb-5"></i>

            <h3 class="text-xl font-bold mb-3">Solar Panels</h3>

            <p class="text-gray-600">
              High-efficiency solar panels designed for residential, commercial, and
              industrial use.
            </p>
          </div>

          <!-- Card 2 -->
          <div
            class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-amber-100"
          >
            <i class="fa-solid fa-battery-full text-5xl text-amber-600 mb-5"></i>

            <h3 class="text-xl font-bold mb-3">Batteries & Storage</h3>

            <p class="text-gray-600">
              Reliable battery solutions for uninterrupted power supply and energy
              storage.
            </p>
          </div>

          <!-- Card 3 -->
          <div
            class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-amber-100"
          >
            <i class="fa-solid fa-bolt text-5xl text-amber-600 mb-5"></i>

            <h3 class="text-xl font-bold mb-3">Inverters</h3>

            <p class="text-gray-600">
              Advanced inverter systems delivering efficient energy conversion and
              performance.
            </p>
          </div>

          <!-- Card 4 -->
          <div
            class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-amber-100"
          >
            <i class="fa-solid fa-lightbulb text-5xl text-amber-600 mb-5"></i>

            <h3 class="text-xl font-bold mb-3">Energy Consulting</h3>

            <p class="text-gray-600">
              Professional guidance to help businesses and homes maximize energy
              efficiency.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div
        class="mt-24 bg-gradient-to-r from-black via-amber-900 to-black rounded-3xl p-10 md:p-14 text-center text-white shadow-2xl"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready To Switch To Solar?</h2>

        <p class="max-w-2xl mx-auto text-gray-300 mb-8">
          Visit the official SunRevo website to explore products, request quotations, and
          learn more about renewable energy solutions.
        </p>

        <a
          href="https://sunrevo.co.ke/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 rounded-full transition duration-300"
        >
          Explore SunRevo
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import heroImage from "../../assets/hero2.jpg";
</script>
```
