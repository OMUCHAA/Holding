import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Contacts from "./components/Contacts.vue";
import About from "./components/About.vue";
import Subsidiaries from "./components/Subsidiaries.vue";
import WaterCompany from "./components/SubPages/WaterCompany.vue";
import Paper from "./components/SubPages/Paper.vue";
import Delivery from "./components/SubPages/Delivery.vue";
import Solar from "./components/SubPages/Solar.vue";

const routes = [
	{
		name: 'Home',
		component: Home,
		path: '/'
	},
	{
		name: 'Contacts',
		component: Contacts,
		path: '/contacts'
	},
	{
		name: 'About',
		component: About,
		path: '/about'
	},
	{
		name: 'Subsidiaries',
		component: Subsidiaries,
		path: '/subsidiaries'
	},
	{
		name: 'WaterCompany',
		component: WaterCompany,
		path: '/water'
	},
	{
		name: 'Paper',
		component: Paper,
		path: '/paper'
	},
	{
		name: 'Delivery',
		component: Delivery,
		path: '/delivery'
	},
	{
		name: 'Solar',
		component: Solar,
		path: '/solar'
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // When navigating back/forward
      return savedPosition;
    } else if (to.hash) {
      // Scroll to anchor hash with smooth behavior
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else {
      // Scroll to top of page with smooth behavior
      return { top: 0, behavior: 'smooth' };
    }
  },
});

export default router;