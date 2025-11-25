import Vue from "vue";
import Router from "vue-router";
import store from "../store";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(Router);

const HomeView = () => import("../views/HomeView.vue");
const ProductDetail = () => import("../views/ProductDetail.vue");
const ProductForm = () => import("../views/ProductForm.vue");
const Login = () => import("../views/LoginView.vue");

const router = new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      redirect: { name: "Login" } // 👈 al abrir la app, te manda a login
    },
    {
      path: "/home",
      name: "HomeView",
      component: HomeView,
      meta: { requiresAuth: true } // 👈 ahora Home también requiere login
    },
    {
      path: "/products/:id",
      name: "ProductDetail",
      component: ProductDetail,
      props: true
      // puedes decidir si quieres que también requiera auth añadiendo meta aquí
    },
    {
      path: "/admin/products/new",
      name: "ProductCreate",
      component: ProductForm,
      meta: { requiresAuth: true }
    },
    {
      path: "/admin/products/:id/edit",
      name: "ProductEdit",
      component: ProductForm,
      meta: { requiresAuth: true },
      props: true
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
});


router.beforeEach((to, from, next) => {
  NProgress.start();

  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuth = store.getters["auth/isAuthenticated"];

  if (requiresAuth && !isAuth) {
    // Guardar la ruta destino en query ?redirect=
    next({
      name: "Login",
      query: { redirect: to.fullPath }
    });
  } else if (to.name === "Login" && isAuth) {
    // Si ya está logueado y va a /login, mándalo al home
    next({ name: "HomeView" });
  } else {
    next();
  }
});


router.afterEach(() => {
  NProgress.done();
});

export default router;
