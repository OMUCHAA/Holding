# Using AOS in Vue.js

> Install AOS: npm install aos --save_
> Import aos into main.js:
> _import AOS from 'aos'_,
> _import 'aos/dist/aos.css'_
> AOS.init();

> import { onMounted } from 'vue'
> import AOS from 'aos'
> import 'aos/dist/aos.css'

onMounted(() => {
AOS.init({ once: true }) // 'once: true' ensures it animates only once
})

> Add data-aos attribute to HTML

<!-- **<template>
  <section>
    <h1 data-aos="fade-up">Hello Animation</h1>
    <p data-aos="fade-right" data-aos-delay="300">
      This text fades in from the right after 300ms.
    </p>
  </section>
</template>** -->

# Customising AOS

You can pass options to AOS.init({
duration: 800, // Animation duration
easing: 'ease-in-out',
once: true, // Whether animation should happen only once
mirror: false // Animate out while scrolling past
})
