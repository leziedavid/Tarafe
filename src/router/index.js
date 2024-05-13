import { createRouter, createWebHistory } from 'vue-router';
import HomeViews from '../views/HomeViews.vue';
import ShowProducts from '../views/ShowProducts.vue';
import Panier from '../views/Panier.vue';
import Blogs from '../views/Blogs.vue';
import Articles from '../views/Articles.vue';
import apropos from '../views/apropos.vue';
import Nouveaute from '../views/Nouveaute.vue';
import Paiement from '../views/Paiement.vue';
import Sav from '../views/Sav.vue';
import Business from '../views/Business.vue';
import product from '../views/product.vue';
import Realisations from '../views/Realisations.vue';
import Dashboard from '../Views/Admin/Dashboard.vue';
import ListesBoutiques from '../Views/Admin/ListesBoutiques.vue';
import ListesCommandes from '../Views/Admin/ListesCommandes.vue';
import ListesProduits from '../Views/Admin/ListesProduits.vue';
import ListesRealisation from '../Views/Admin/ListesRealisation.vue';
import ListesUsers from '../Views/Admin/ListesUsers.vue';
import EditProduits from '../Views/Admin/EditProduits.vue';
import CreateProduits from '../Views/Admin/CreateProduits.vue';
import Listescategories from '../Views/Admin/Listescategories.vue';
import Listessouscategories from '../Views/Admin/Listessouscategories.vue';
import Listessoussouscategories from '../Views/Admin/Listessoussouscategories.vue';
import ListesBlog from '../Views/Admin/ListesBlog.vue';
import CreatBlog from '../Views/Admin/CreatBlog.vue';
import EditBlogs from '../Views/Admin/EditBlogs.vue';
import DetailCommandes from '../Views/Admin/DetailCommandes.vue';
import Reglages from '../Views/Admin/Reglages.vue';

import ListesCouleurs from '../Views/Admin/ListesCouleurs.vue';
import OptionRealisation from '../Views/Admin/OptionRealisation.vue';

import Messages from '../Views/Admin/Messages.vue';
import Options from '../Views/Admin/Options.vue';
import Galleries from '../Views/Admin/Galleries.vue';
import Gallerie from '../Views/Gallerie.vue';


const routes = [

    {
        path:'/Panier',
        name:'Panier',
        component:Panier,
    },
    {
        path:'/apropos',
        name:'apropos',
        component:apropos,
    },
    {
        path:'/',
        name:'HomeViews',
        component:HomeViews,
    },
    {
        path:'/Realisations',
        name:'Realisations',
        component:Realisations,
    },
    {
        path:'/blogs',
        name:'blogs',
        component:Blogs,
    },
    {
        path:'/Save',
        name:'Save',
        component:Sav,
    },
    {
        path:'/nouveaute',
        name:'nouveaute',
        component:Nouveaute,
    },
    {
        path:'/paiement',
        name:'Paiement',
        component:Paiement,
    },

    {
        path: '/products/:id',
        name: 'products',
        component: ShowProducts,
        props: true,
    },
    {
        path: '/business/:id',
        name: 'business',
        component: Business,
        props: true,
    },
    {
        path: '/product/:id',
        name: 'product',
        component: product,
        props: true,
    },
    {
        path: '/articles/:id',
        name: 'articles',
        component: Articles,
        props: true,
    },

    // Admin

    {
        path:'/Admin/Dashboard',
        name:'Dashboard',
        component:Dashboard,
        meta: {requiresAuth:true}
    },
    {
        path:'/Admin/Reglages',
        name:'Reglages',
        component:Reglages,
        meta: {requiresAuth:true}
    },
    {
        path:'/Admin/ListesCouleurs',
        name:'ListesCouleurs',
        component:ListesCouleurs,
        meta: {requiresAuth:true}
    },
    {
        path:'/Admin/optionRealisation',
        name:'OptionRealisation',
        component:OptionRealisation,
        meta: {requiresAuth:true}
    },
    {
        path:'/Admin/Messages',
        name:'Messages',
        component:Messages,
        meta: {requiresAuth:true}
    },
    {
        path:'/Admin/Options',
        name:'Options',
        component:Options,
        meta: {requiresAuth:true}
    },
    {
        path:'/Admin/galleries',
        name:'galleries',
        component:Galleries,
        meta: {requiresAuth:true}
    },
    {
        path:'/gallerie',
        name:'gallerie',
        component:Gallerie,
    },

    {
        path:'/Admin/ListesBoutiques',
        name:'ListesBoutiques',
        component:ListesBoutiques,
        meta: {requiresAuth:true}
    },
    {
        path:'/Admin/ListesCommandes',
        name:'ListesCommandes',
        component:ListesCommandes,
        meta: {requiresAuth:true}
    },
    {
        path:'/Admin/ListesProduits',
        name:'ListesProduits',
        component:ListesProduits,
        meta: {requiresAuth:true}
    },
    {
        path:'/Admin/ListesRealisation',
        name:'ListesRealisation',
        component:ListesRealisation,
        meta: {requiresAuth:true}
    },
    {
        path:'/Admin/ListesUsers',
        name:'ListesUsers',
        component:ListesUsers,
        meta: {requiresAuth:true}
    },
    {
        path:'/Admin/EditProduits/:id',
        name:'EditProduits',
        component:EditProduits,
        meta: {requiresAuth:true}
    },
    {
        path:'/Admin/CreateProduits',
        name:'CreateProduits',
        component:CreateProduits,
        meta: {requiresAuth:true}
    },

    {
        path:'/Admin/Listescategories',
        name:'Listescategories',
        component:Listescategories,
        meta: {requiresAuth:true}
    },
    {
        path:'/Admin/Listessouscategories',
        name:'Listessouscategories',
        component:Listessouscategories,
        meta: {requiresAuth:true}
    },
    {
        path:'/Admin/Listessoussouscategories',
        name:'Listessoussouscategories',
        component:Listessoussouscategories,
        meta: {requiresAuth:true}
    },

    {
        path:'/Admin/Listesblog',
        name:'Listesblog',
        component:ListesBlog,
        meta: {requiresAuth:true}
    },
    {
        path:'/Admin/CreatBlog',
        name:'CreatBlog',
        component:CreatBlog,
        meta: {requiresAuth:true}
    },
    {
        path:'/Admin/EditBlogs/:id',
        name:'EditBlogs',
        component:EditBlogs,
        meta: {requiresAuth:true}
    },
    {
        path:'/Admin/detailCommandes/:id',
        name:'detailCommandes',
        component:DetailCommandes,
        meta: {requiresAuth:true}
    },

    
];

const router = createRouter({
    history: createWebHistory(),
    mode: 'hash',
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
});

router.beforeEach((to, from, next) => {

    if (to.meta.requiresAuth && !localStorage.getItem("auth_users")) {
        localStorage.setItem("Notconnectionmethod", 'Vous devez renseigner vos identifiants de connexion');
        localStorage.clear();
        next({ name: "HomeViews" });
    } else {
        next();
    }
});
export default router;
