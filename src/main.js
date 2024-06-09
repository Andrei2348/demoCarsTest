import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./store/store.js";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import { createRouter, createWebHistory } from "vue-router";
import Profile from "./components/Profile.vue";
import Vehicles from "./components/Vechicles.vue";
import Settings from "./components/Settings.vue";

const app = createApp(App);
const routes = [
	{
		path: "/",
		name: "vehicles",
		component: Vehicles,
		props: true,
	},
	{
		path: "/profile",
		name: "profile",
		component: Profile,
		props: true,
	},
	{
		path: "/settings",
		name: "settings",
		component: Settings,
		props: true,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

app.use(autoAnimatePlugin);
app.use(router);
app.use(store);
app.mount("#app");
