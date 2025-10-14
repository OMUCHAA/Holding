import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Contacts from "./components/Contacts.vue";
import About from "./components/About.vue";
import OurServices from "./components/OurServices.vue";

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
		name: 'OurServices',
		component: OurServices,
		path: '/services'
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;