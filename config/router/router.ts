import { createRouter, createWebHistory } from "vue-router"

const routes = [
	{
		path: "/",
		component: () => import("../../src/components/HelloWorld.vue"),
	},
	{
		path: "/product",
		component: () => import("../../src/components/Product.vue"),
	},
	{
		path: "/:pathMatch(.*)*",
		name: "NotFound",
		component: () => import("../../src/components/NotFound.vue"),
	},
]

const Router = createRouter({
	history: createWebHistory(),
	routes,
})

export default Router
