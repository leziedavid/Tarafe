<template>
    <div>

      <Header :outp="outp" />
          <main class="main">
                <Banner :reglages="reglages" />
                <Decouvrir :Realisations="Realisations"  :reglages="reglages"/>
                <PubCard :Publicites="Publicites" />
                <!-- <SingleProduct :Products="productsHomes"/>
                <Blogs :blogs="blogs" /> -->
                <Subscribe :reglages="reglages"  :politique="politique"/>
              
                <!-- <Customers /> -->
                <!-- <Politique /> -->
          </main>
      <Footer :reglages="reglages" /> 

    </div>
</template>

<script setup>
import PubCard from "../components/PubCard.vue";
import Politique from "../components/Politique.vue";
import Header from "../components/Header.vue";
import SingleProduct from "../components/SingleProduct.vue";
import Banner from "../components/Banner.vue";
import Decouvrir from "../components/Decouvrir.vue";
import Subscribe from "../components/subscribe.vue";
import Blogs from "../components/Blogs.vue";
import Footer from "../components/Footer.vue";
import Customers from "../components/Customers.vue";

import {ref,reactive, computed, onMounted,watch,watchEffect} from 'vue';
import useHomes from "../composable/Homes";
import useProduits from "../composable/Produits";
import { useRouter, useRoute } from 'vue-router'
import { useShoppingStore } from '../store/index';
import { createToast } from 'mosha-vue-toastify';
import axios from 'axios';
import router from "../router/index";
import 'vue-loading-overlay/dist/css/index.css';
import url from "../../ImgUrl";
import axiosClient from "../../ApiServices";


// Definission de nos variables
// const { paginations,Realisations,getAllRealisationsBystatus} = useProduits();
const {Realisations,getAllDatapages,Categories,Categorie,
    Produits,Produit,Slider,Products,productsHomes,blogs,
    nbblogs,outp,MegaMenu,partenaires,reglages,Publicites,politique} = useHomes();


onMounted(async () => {
        MegaMenu();
        getAllDatapages();
    });



watchEffect(() => {

      localStorage.removeItem('codes');
      localStorage.removeItem('email');
      localStorage.removeItem('id_commende');

  });

</script>
