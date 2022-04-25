import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/auth/Sign-In.vue'),
	},
	{
		path: '/logout',
		name: 'Logout',
		component: () => import('../views/auth/logout.vue'),
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		layout: "dashboard",
		component: () => import('../views/dashboard/Dashboard.vue'),
	},
	{
		path: '/layout',
		name: 'Layout',
		layout: "dashboard",
		component: () => import('../views/Layout.vue'),
	},
	{
		path: '/launship/demande',
		name: 'Launship_demande',
		layout: "dashboard",
		component: () => import('../views/launship/demande.vue'),
	},
	{
		path: '/launship/liste/:id',
		name: 'Launship_liste',
		layout: "dashboard",
		component: () => import('../views/launship/liste.vue'),
	},
	{
		path: '/launship/detail/:id',
		name: 'Launship_detail',
		layout: "dashboard",
		component: () => import('../views/launship/detail.vue'),
	},
	{
		path: '/launship/point',
		name: 'Launship_point',
		layout: "dashboard",
		component: () => import('../views/launship/point.vue'),
	},
	{
		path: '/carnets',
		name: 'Carnets',
		layout: "dashboard",
		component: () => import('../views/carnets/carnets.vue'),
	},
	{
		path: '/carnets/:id',
		name: 'Carnets_detail',
		layout: "dashboard",
		component: () => import('../views/carnets/detail_carnet.vue'),
	},
	{
		path: '/carnets-stock',
		name: 'Carnets_stock',
		layout: "dashboard",
		component: () => import('../views/carnet-stock/carnets.vue'),
	},
	{
		path: '/carnets-stock/:id',
		name: 'Carnets_stock_detail',
		layout: "dashboard",
		component: () => import('../views/carnet-stock/detail_carnet.vue'),
	},
	{
		path: '/epargne',
		name: 'Epargne',
		layout: "dashboard",
		component: () => import('../views/epargne/liste.vue'),
	},
	{
		path: '/epargne/:id',
		name: 'Epargne_detail',
		layout: "dashboard",
		component: () => import('../views/epargne/detail.vue'),
	},
	{
		path: '/produit',
		name: 'Produit',
		layout: "dashboard",
		component: () => import('../views/produit/liste.vue'),
	},
	{
		path: '/produit/:id',
		name: 'Produit_detail',
		layout: "dashboard",
		component: () => import('../views/produit/detail.vue'),
	},
	{
		path: '/stockage',
		name: 'Produit_stock',
		layout: "dashboard",
		component: () => import('../views/stock/liste.vue'),
	},
	{
		path: '/produit/stock/:id',
		name: 'Produit_stock_detail',
		layout: "dashboard",
		component: () => import('../views/stock/detail.vue'),
	},
	{
		path: '/client',
		name: 'Client',
		layout: "dashboard",
		component: () => import('../views/clients/liste.vue'),
	},
	{
		path: '/client/new',
		name: 'Client_new',
		layout: "dashboard",
		component: () => import('../views/clients/new.vue'),
	},
	{
		path: '/client/:id',
		name: 'Client_detail',
		layout: "dashboard",
		component: () => import('../views/clients/detail.vue'),
	},
	{
		path: '/collecteur',
		name: 'Collecteur',
		layout: "dashboard",
		component: () => import('../views/collecteur/liste.vue'),
	},
	{
		path: '/collecteur/:id',
		name: 'Collecteur_detail',
		layout: "dashboard",
		component: () => import('../views/collecteur/detail.vue'),
	},
	{
		path: '/collecteur/:id/client',
		name: 'Collecteur_client',
		layout: "dashboard",
		component: () => import('../views/collecteur/client.vue'),
	},
	{
		path: '/collecteur/:id/visite/none',
		name: 'Collecteur_client_non_visité',
		layout: "dashboard",
		component: () => import('../views/collecteur/client_n.vue'),
	},
	{
		path: '/superviseur',
		name: 'Superviseur',
		layout: "dashboard",
		component: () => import('../views/superviseur/liste.vue'),
	},
	{
		path: '/superviseur/:id',
		name: 'Superviseur_detail',
		layout: "dashboard",
		component: () => import('../views/superviseur/detail.vue'),
	},
	{
		path: '/livreur',
		name: 'Livreur',
		layout: "dashboard",
		component: () => import('../views/livreur/liste.vue'),
	},
	{
		path: '/livreur/:id',
		name: 'Livreur_detail',
		layout: "dashboard",
		component: () => import('../views/livreur/detail.vue'),
	},
	{
		path: '/agence',
		name: 'Agence',
		layout: "dashboard",
		component: () => import('../views/agences/liste.vue'),
	},
	{
		path: '/agence/:id',
		name: 'Agence_detail',
		layout: "dashboard",
		component: () => import('../views/agences/detail.vue'),
	},
	{
		path: '/agence/:id/depot',
		name: 'Agence_depot',
		layout: "dashboard",
		component: () => import('../views/agences/depot.vue'),
	},
	{
		path: '/caissier',
		name: 'Caissier',
		layout: "dashboard",
		component: () => import('../views/agences/gerant/liste.vue'),
	},
	{
		path: '/caissier/:id',
		name: 'Caissier_detail',
		layout: "dashboard",
		component: () => import('../views/agences/gerant/detail.vue'),
	},
	{
		path: '/chef_agence',
		name: 'Chef_agence',
		layout: "dashboard",
		component: () => import('../views/chef_agence/liste.vue'),
	},
	{
		path: '/chef_agence/transaction',
		name: 'Chef_agence_transaction',
		layout: "dashboard",
		component: () => import('../views/chef_agence/transaction.vue'),
	},
	{
		path: '/chef_agence/historique',
		name: 'Chef_agence_historique',
		layout: "dashboard",
		component: () => import('../views/chef_agence/historique.vue'),
	},
	{
		path: '/deploiement',
		name: 'Deploiement',
		layout: "dashboard",
		component: () => import('../views/deploiement/liste.vue'),
	},
	{
		path: '/admin',
		name: 'Admin',
		layout: "dashboard",
		component: () => import('../views/admin/liste.vue'),
	},
	{
		path: '/admin/:id',
		name: 'Admin_detail',
		layout: "dashboard",
		component: () => import('../views/admin/detail.vue'),
	},
	{
		path: '/synchronisation',
		name: 'Synchronisation',
		layout: "dashboard",
		component: () => import('../views/synchro/liste.vue'),
	},
	{
		path: '/synchronisation/:id',
		name: 'Synchronisation_detail',
		layout: "dashboard",
		component: () => import('../views/synchro/detail.vue'),
	},
	{
		path: '/compte',
		name: 'Compte',
		layout: "dashboard",
		meta: {
			layoutClass: 'layout-profile',
		},
		component: () => import('../views/compte/compte.vue'),
	},
	{
		path: '*',
		component: () => import('../views/404.vue'),
	},
]

// Adding layout property from each route to the meta
// object so it can be accessed later.
function addLayoutToRoute(route, parentLayout = "default") {
	route.meta = route.meta || {};
	route.meta.layout = route.layout || parentLayout;

	if (route.children) {
		route.children = route.children.map((childRoute) => addLayoutToRoute(childRoute, route.meta.layout));
	}
	return route;
}

routes = routes.map((route) => addLayoutToRoute(route));

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return {
				selector: to.hash,
				behavior: 'smooth',
			}
		}
		return {
			x: 0,
			y: 0,
			behavior: 'smooth',
		}
	}
})

export default router
