<template>
  <section id="subsidiaries" class="py-20 bg-gray-100 text-center">
    <h2 class="text-3xl font-bold mb-10 text-blue-700">Our Subsidiaries</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      <div v-for="company in companies" :key="company.name" class="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
        <h3 class="text-2xl font-semibold mb-3 text-blue-600">{{ company.name }}</h3>
        <p class="text-gray-600 mb-4">{{ company.description }}</p>
        <button class="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition">
          Learn More
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const companies = [
  { name: "Omucha Tech", description: "Innovating technology solutions for businesses and communities." },
  { name: "Omucha Travel", description: "Offering world-class travel and tour experiences across Kenya and beyond." },
  { name: "Omucha Cement", description: "Delivering high-quality cement and construction materials for a stronger future." },
  { name: "Omucha Water", description: "Providing safe and sustainable water solutions to households and industries." },
];
</script>
