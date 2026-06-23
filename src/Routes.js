import { createWebHistory, createRouter } from "vue-router";

const Home = () => import("./components/Home.vue");
const Contacts = () => import("./components/Contacts.vue");
const About = () => import("./components/About.vue");
const Subsidiaries = () => import("./components/Subsidiaries.vue");
const WaterCompany = () => import("./components/SubPages/WaterCompany.vue");
const Paper = () => import("./components/SubPages/Paper.vue");
const Delivery = () => import("./components/SubPages/Delivery.vue");
const Solar = () => import("./components/SubPages/Solar.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title:
        "Mashbah Holdings Kenya | Water, Solar, Delivery & Paper Solutions",
      description:
        "Mashbah Holdings Kenya provides innovative water solutions, solar energy services, paper products, and delivery services across Kenya.",
    },
  },

  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "About Us | Mashbah Holdings Kenya",
      description:
        "Learn about Mashbah Holdings Kenya, our mission, vision, values, and commitment to excellence.",
    },
  },

  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
    meta: {
      title: "Contact Us | Mashbah Holdings Kenya",
      description:
        "Contact Mashbah Holdings Kenya for inquiries, partnerships, support, and business opportunities.",
    },
  },

  {
    path: "/subsidiaries",
    name: "Subsidiaries",
    component: Subsidiaries,
    meta: {
      title: "Our Subsidiaries | Mashbah Holdings Kenya",
      description:
        "Explore Mashbah Holdings Kenya subsidiaries and discover our diverse business solutions.",
    },
  },

  {
    path: "/subsidiaries/water-company",
    name: "WaterCompany",
    component: WaterCompany,
    meta: {
      title: "Mashbah Water Company | Clean & Reliable Water Solutions",
      description:
        "Providing dependable water supply and distribution solutions across Kenya.",
    },
  },

  {
    path: "/subsidiaries/paper-products",
    name: "Paper",
    component: Paper,
    meta: {
      title: "Mashbah Paper Products | Quality Paper Solutions",
      description:
        "High-quality paper products and packaging solutions for businesses and households.",
    },
  },

  {
    path: "/subsidiaries/delivery-services",
    name: "Delivery",
    component: Delivery,
    meta: {
      title: "Mashbah Delivery Services | Fast & Reliable Logistics",
      description:
        "Professional delivery and logistics solutions tailored to your needs.",
    },
  },

  {
    path: "/subsidiaries/solar-solutions",
    name: "Solar",
    component: Solar,
    meta: {
      title: "Mashbah Solar Solutions | Sustainable Energy for Kenya",
      description:
        "Affordable and sustainable solar energy systems for homes and businesses.",
    },
  },

  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Mashbah Holdings Kenya";

  let descriptionTag = document.querySelector(
    'meta[name="description"]'
  );

  if (!descriptionTag) {
    descriptionTag = document.createElement("meta");
    descriptionTag.setAttribute("name", "description");
    document.head.appendChild(descriptionTag);
  }

  descriptionTag.setAttribute(
    "content",
    to.meta.description || ""
  );

  let canonicalTag = document.querySelector(
    'link[rel="canonical"]'
  );

  if (!canonicalTag) {
    canonicalTag = document.createElement("link");
    canonicalTag.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalTag);
  }

  canonicalTag.setAttribute(
    "href",
    `https://mashbahholdings.co.ke${to.path}`
  );

  next();
});

export default router;