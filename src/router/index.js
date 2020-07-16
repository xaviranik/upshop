import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import( /* webpackChunkName: "admin" */ "../views/Admin.vue"),
    children: [{
        path: "overview",
        name: "overview",
        component: () =>
          import( /* webpackChunkName: "overview" */ "../views/Overview.vue"),
      },
      {
        path: "products",
        name: "products",
        component: () =>
          import( /* webpackChunkName: "products" */ "../views/Products.vue"),
      },
      {
        path: "orders",
        name: "orders",
        component: () =>
          import( /* webpackChunkName: "orders" */ "../views/Orders.vue"),
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;