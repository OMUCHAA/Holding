<template>
  <div class="pt-36 min-h-[86vh] lg:min-h-[91vh] bg-amber-50 flex flex-col items-center p-8">
    <h1 class="text-4xl font-bold text-amber-950 mb-4 text-center">SunRevo Solar Company</h1>
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
        Advanced Solar Power Solutions..
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
          Explore Website
        </button></a
      >
    </div>
  </div>
    <p class="text-amber-700 max-w-2xl text-center mb-6">
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
</template>

<script setup>
import heroImage from "../../assets/hero2.jpg";
</script>
