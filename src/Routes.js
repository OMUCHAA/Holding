import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Contacts from "./components/Contacts.vue";
import About from "./components/About.vue";
import Subsidiaries from "./components/Subsidiaries.vue";

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
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;