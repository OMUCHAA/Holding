<template>
  <div class="bg-gray-100">
    <section
      class="relative min-h-screen flex items-center justify-center pt-20 lg:pt-0 overflow-hidden bg-gradient-to-r from-black via-amber-900 to-black text-white"
    >
      <div class="absolute inset-0 bg-black/50"></div>

      <div class="relative z-10 max-w-6xl mx-auto pt-2 px-6 text-center">
        <span
          class="inline-flex items-center gap-2 mb-6 px-4 sm:px-5 rounded-full border border-amber-400/50 bg-amber-500/10 backdrop-blur-sm text-amber-300 text-xs sm:text-sm tracking-wider uppercase"
        >
          <i class="fa-solid fa-award"></i>
          Building Sustainable Businesses Across Kenya
        </span>

        <h1
          class="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Packaging, Solar & Water Solutions
          <span class="block text-amber-400"> Powered by Mashbah Holdings Ltd </span>
        </h1>

        <p
          class="max-w-3xl mx-auto mt-8 text-lg md:text-xl text-gray-300 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Mashbah Holdings Ltd is a diversified Kenyan holding company overseeing
          industry-leading businesses in bottled water, bulk water supply, solar energy
          solutions, and sustainable packaging manufacturing.
        </p>

        <div
          class="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <router-link
            to="/subsidiaries"
            class="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 rounded-full transition duration-300"
          >
            Explore Our Companies
          </router-link>

          <router-link
            to="/contacts"
            class="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            Contact Us
          </router-link>
        </div>
      </div>
    </section>

    <section
      class="relative py-24 bg-gradient-to-b from-white via-amber-50 to-white overflow-hidden"
    >
      <!-- Background Decoration -->
      <div
        class="absolute top-0 left-0 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl"
      ></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Heading -->
        <div class="text-center max-w-4xl mx-auto mb-16">
          <span
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold uppercase tracking-widest"
          >
            <i class="fa-solid fa-award"></i>
            Why Choose Mashbah Holdings
          </span>

          <h2
            class="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
          >
            Driving Growth Through Innovation, Reliability & Sustainability
          </h2>

          <p class="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            Through our diversified portfolio of businesses, we provide essential products
            and services that empower homes, businesses, institutions and communities
            throughout Kenya.
          </p>
        </div>

        <!-- Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <!-- Card -->
          <div
            class="group bg-white border border-amber-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-500"
          >
            <div
              class="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mb-6 mx-auto"
            >
              <i class="fa-solid fa-droplet text-3xl text-amber-600"></i>
            </div>

            <h3 class="text-xl font-bold text-center text-gray-900 mb-4">
              Water Solutions
            </h3>

            <p class="text-gray-600 text-center leading-relaxed">
              Reliable bottled water and bulk water supply through Aqualina Water, serving
              homes, institutions and industries.
            </p>
          </div>

          <!-- Card -->
          <div
            class="group bg-white border border-amber-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-500"
          >
            <div
              class="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mb-6 mx-auto"
            >
              <i class="fa-solid fa-solar-panel text-3xl text-amber-600"></i>
            </div>

            <h3 class="text-xl font-bold text-center text-gray-900 mb-4">
              Renewable Energy
            </h3>

            <p class="text-gray-600 text-center leading-relaxed">
              Delivering solar panels, inverters, installations and energy solutions that
              power sustainable growth.
            </p>
          </div>

          <!-- Card -->
          <div
            class="group bg-white border border-amber-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-500"
          >
            <div
              class="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mb-6 mx-auto"
            >
              <i class="fa-solid fa-box-open text-3xl text-amber-600"></i>
            </div>

            <h3 class="text-xl font-bold text-center text-gray-900 mb-4">
              Packaging Excellence
            </h3>

            <p class="text-gray-600 text-center leading-relaxed">
              Manufacturing premium khaki bags, non-woven bags and medical envelopes for
              diverse industries.
            </p>
          </div>

          <!-- Card -->
          <div
            class="group bg-white border border-amber-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-500"
          >
            <div
              class="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mb-6 mx-auto"
            >
              <i class="fa-solid fa-shield-halved text-3xl text-amber-600"></i>
            </div>

            <h3 class="text-xl font-bold text-center text-gray-900 mb-4">
              Trusted Partner
            </h3>

            <p class="text-gray-600 text-center leading-relaxed">
              Built on integrity, reliability and long-term partnerships that help our
              clients achieve lasting success.
            </p>
          </div>
        </div>

        <!-- Stats -->
        <div
          class="mt-20 bg-gradient-to-r from-black via-amber-900 to-black rounded-3xl p-8 md:p-12"
        >
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <h3 class="text-3xl md:text-4xl font-bold text-amber-400">3+</h3>
              <p class="text-white mt-2">Business Divisions</p>
            </div>

            <div>
              <h3 class="text-3xl md:text-4xl font-bold text-amber-400">100%</h3>
              <p class="text-white mt-2">Commitment to Quality</p>
            </div>

            <div>
              <h3 class="text-3xl md:text-4xl font-bold text-amber-400">Kenya</h3>
              <p class="text-white mt-2">Nationwide Reach</p>
            </div>

            <div>
              <h3 class="text-3xl md:text-4xl font-bold text-amber-400">24/7</h3>
              <p class="text-white mt-2">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="about"
      class="relative py-24 bg-gradient-to-b from-white via-amber-50 to-white overflow-hidden"
    >
      <!-- Background Effects -->
      <div
        class="absolute top-0 left-0 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"
      ></div>

      <div
        class="absolute bottom-0 right-0 w-72 h-72 bg-amber-300/10 rounded-full blur-3xl"
      ></div>

      <div class="relative max-w-7xl mx-auto -mt-20 px-4 sm:px-6 lg:px-8">
        <!-- Heading -->
        <div class="text-center max-w-4xl mx-auto mb-16">
          <span
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold uppercase tracking-widest"
          >
            <i class="fa-solid fa-building"></i>
            About Mashbah Holdings
          </span>

          <h2
            class="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
          >
            Building Sustainable Businesses Across Kenya
          </h2>

          <p class="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            Mashbah Holdings Ltd is a diversified Kenyan holding company providing
            leadership, investment, and operational support to businesses in water supply,
            solar energy, and packaging manufacturing. Through our subsidiaries, we
            deliver innovative products and services that support homes, institutions,
            industries, and communities across Kenya.
          </p>
        </div>

        <!-- Main Content -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left -->
          <div>
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              A Vision for Sustainable Growth
            </h3>

            <p class="text-gray-600 leading-relaxed mb-6">
              As the parent company of Aqualina Water, SunRevo Solar Company, and Mashbah
              Packaging, our mission is to create lasting value by building businesses
              that solve real-world challenges while promoting economic development and
              environmental sustainability.
            </p>

            <p class="text-gray-600 leading-relaxed">
              By combining innovation, quality, and strong leadership, we continue to
              expand our impact across multiple sectors while maintaining the highest
              standards of service and customer satisfaction.
            </p>
          </div>

          <!-- Right -->
          <div
            class="bg-gradient-to-br from-black via-amber-900 to-black rounded-3xl p-8 md:p-10 shadow-2xl"
          >
            <div class="space-y-8">
              <div class="flex gap-4">
                <div
                  class="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center flex-shrink-0"
                >
                  <i class="fa-solid fa-bullseye text-black text-xl"></i>
                </div>

                <div>
                  <h4 class="text-xl font-bold text-white mb-2">Our Mission</h4>

                  <p class="text-gray-300">
                    To deliver innovative and sustainable solutions through our
                    subsidiaries while creating long-term value for customers,
                    communities, and stakeholders.
                  </p>
                </div>
              </div>

              <div class="flex gap-4">
                <div
                  class="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center flex-shrink-0"
                >
                  <i class="fa-solid fa-eye text-black text-xl"></i>
                </div>

                <div>
                  <h4 class="text-xl font-bold text-white mb-2">Our Vision</h4>

                  <p class="text-gray-300">
                    To become one of East Africa's most respected and impactful business
                    groups recognized for excellence and sustainable growth.
                  </p>
                </div>
              </div>

              <div class="flex gap-4">
                <div
                  class="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center flex-shrink-0"
                >
                  <i class="fa-solid fa-handshake text-black text-xl"></i>
                </div>

                <div>
                  <h4 class="text-xl font-bold text-white mb-2">Our Core Values</h4>

                  <p class="text-gray-300">
                    Integrity, accountability, innovation, customer focus, sustainability,
                    and commitment to quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="contact"
      class="relative py-24 bg-gradient-to-br from-black via-amber-950 to-black overflow-hidden"
    >
      <!-- Background Glow -->
      <div
        class="absolute top-0 left-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"
      ></div>

      <div
        class="absolute bottom-0 right-0 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl"
      ></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center max-w-4xl mx-auto mb-16">
          <span
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm uppercase tracking-widest font-semibold"
          >
            <i class="fa-solid fa-headset"></i>
            Contact Mashbah Holdings
          </span>

          <h2 class="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Let's Build The Future Together
          </h2>

          <p
            class="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
          >
            Whether you're seeking water supply solutions, solar energy services,
            packaging products, strategic partnerships, or investment opportunities, our
            team is ready to assist.
          </p>
        </div>

        <!-- Contact Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Email -->
          <div
            class="group bg-white/5 backdrop-blur-lg border border-amber-500/20 rounded-3xl p-8 text-center hover:border-amber-500 transition duration-500"
          >
            <div
              class="w-16 h-16 mx-auto rounded-2xl bg-amber-500 flex items-center justify-center mb-6"
            >
              <i class="fa-solid fa-envelope text-black text-2xl"></i>
            </div>

            <h3 class="text-xl font-bold text-white mb-4">Email Us</h3>

            <a
              href="mailto:sales@mashbahholdings.co.ke"
              class="block text-gray-300 hover:text-amber-400 transition break-all"
            >
              sales@mashbahholdings.co.ke
            </a>

            <a
              href="mailto:accounts@mashbahholdings.co.ke"
              class="block text-gray-300 hover:text-amber-400 transition break-all mt-2"
            >
              accounts@mashbahholdings.co.ke
            </a>
          </div>

          <!-- Phone -->
          <div
            class="group bg-white/5 backdrop-blur-lg border border-amber-500/20 rounded-3xl p-8 text-center hover:border-amber-500 transition duration-500"
          >
            <div
              class="w-16 h-16 mx-auto rounded-2xl bg-amber-500 flex items-center justify-center mb-6"
            >
              <i class="fa-solid fa-phone-volume text-black text-2xl"></i>
            </div>

            <h3 class="text-xl font-bold text-white mb-4">Call Us</h3>

            <a
              href="tel:+254780818238"
              class="text-gray-300 hover:text-amber-400 transition text-lg"
            >
              +254 780 818 238
            </a>

            <p class="mt-3 text-sm text-gray-500">Monday - Saturday</p>
          </div>

          <!-- Location -->
          <div
            class="group bg-white/5 backdrop-blur-lg border border-amber-500/20 rounded-3xl p-8 text-center hover:border-amber-500 transition duration-500"
          >
            <div
              class="w-16 h-16 mx-auto rounded-2xl bg-amber-500 flex items-center justify-center mb-6"
            >
              <i class="fa-solid fa-location-dot text-black text-2xl"></i>
            </div>

            <h3 class="text-xl font-bold text-white mb-4">Visit Us</h3>

            <p class="text-gray-300">Mombasa Road</p>

            <p class="text-gray-300">Nairobi, Kenya</p>
          </div>
        </div>

        <!-- Bottom CTA -->
        <div
          class="mt-16 text-center bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-8 md:p-10 shadow-2xl"
        >
          <h3 class="text-2xl md:text-3xl font-bold text-black mb-4">
            Ready to Partner With Us?
          </h3>

          <p class="text-black/80 max-w-2xl mx-auto mb-8">
            Join businesses, institutions, and organizations across Kenya that trust
            Mashbah Holdings and its subsidiaries for quality products and reliable
            services.
          </p>

          <router-link
            to="/contacts"
            class="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-900 transition"
          >
            Contact Our Team
            <i class="fa-solid fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import heroImage from "../assets/hero2.jpg";
</script>
