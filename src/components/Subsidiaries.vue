<template>
  <section id="subsidiaries" class="py-28 bg-gray-100 text-center">
    <h2 class="text-3xl font-bold mb-10 text-blue-700">Our Subsidiaries</h2>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
    >
      <div
        v-for="company in companies"
        :key="company.name"
        class="bg-blue-100 shadow-md rounded-2xl p-6 hover:shadow-xl transition"
      >
        <h3 class="text-2xl font-semibold mb-3 text-blue-600">
          {{ company.name }}
        </h3>
        <p class="text-gray-600 mb-4">{{ company.description }}</p>
        <button
          class="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition"
        >
          Learn More
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import "aos/dist/aos.css";

const companies = [
  {
    name: "Solar Company",
    description:
      "We provide reliable, affordable, and sustainable solar energy solutions designed to help homes and businesses reduce energy costs and environmental impact.",
  },
  {
    name: "Paper Industry",
    description:
      "Committed to quality and sustainability, we produce high-grade paper products that support diverse industires while prioritizing echo-friendly practices. ",
  },
  {
    name: "Delivery Company",
    description:
      "we offer a fast reliable and secure delivery services tailored to meet the needs of businesses and individuals, ensurikng your packages arrive on time-every time",
  },
  {
    name: "Water Company",
    description:
      "Providing safe and sustainable water solutions to households and industries.",
  },
];
</script>
