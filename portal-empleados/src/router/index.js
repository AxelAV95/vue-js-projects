import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import store from '../store';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/producto/:id',
        name: 'product-detail',
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "product-detail" */ '../views/ProductDetail.vue'),
        children:[
              {
                path: 'descripcion',
                component: () => import(/* webpackChunkName: "product-desc" */ '../components/ProductDesc.vue')
              },
              {
                path: 'reviews',
                component: () => import(/* webpackChunkName: "product-reviews" */ '../components/ProductReviews.vue')
              }
                
        ]
        // component: ProductDetail,
        // children:[
        //    {
        //      path: 'descripcion',
        //     component: ProductDesc
        //    },
        //    {
        //      path: 'reviews',
        //     component: ProductReviews
        //    }
        // ]
    }


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {

    if(to.matched.some(record => record.meta.requiresAuth)) {
        
        if (!store.getters.isAuthenticated) {
            next({ name: 'login' });
        } else {
            next();
        }
    } else {
        next();
    }
});
export default router;