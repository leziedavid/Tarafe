<template>
    <div>
        <Header :outp="outp" />

          <main class="main">
            
            <div class="section block-breadcrumb mb-3">
                <div class="container"> 
                    <div class="breadcrumbs"> 
                        <ul> 
                            <li> <a href="/">Accueil</a></li>
                            <li> <a href="/">A propos de Tarafé</a></li>
                        </ul>
                    </div>
                </div>
           </div>

           <section class="section block-our-shop">

            <div  class="container">
                    <loader v-if="loadings==1" > </loader>
            </div>

            <div v-if="loadings==0">

                <div v-if="loadings==0 && reglages.length>0"  class="container"> 
                    <div class="text-center wow bounceIn"> 
                        <h3 class="mb-3">A propos de Tarafé </h3>
                       
                        <div v-for="item in reglages" :key="item.id_reglages" class="">
                            <p v-html="item.description_reglages" class=" body-p2 mr-30"> </p>
                            <!-- <p v-html="item.description_reglages" class="body-p2 neutral-medium-dark"> </p> -->

                        </div>

                    </div>

                    <div v-for="item in reglages" :key="item.id_reglages"  class="row mt-60 wow bounceIn"> 

                        <div  class="col-lg-6">
                            <img :src="url+item.desc_reglagesImg1" alt="Guza">
                        </div>
                        
                        
                        <div class="col-lg-6">
                            <img :src="url+item.desc_reglagesImg2" alt="Guza">
                        </div>

                    </div>

                </div>

            </div>

            </section>

          </main>

          <br> <br> <br>

      <Footer :reglages="reglages" /> 
      
    </div>
</template>

<script setup>
import '../assets/tables.css';
import 'vue-loading-overlay/dist/css/index.css';
import loader from '../components/loader.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { ref, reactive, computed, onMounted, watch, watchEffect } from 'vue';
import { VueTelInput } from 'vue-tel-input';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

import { useRouter, useRoute } from 'vue-router'
import { useShoppingStore } from '../store/index';
import { createToast } from 'mosha-vue-toastify';
import moment from 'moment';
import axios from 'axios';
import url from "../../ImgUrl";
import axiosClient from "../../ApiServices";

import useHomes from "../composable/Homes";
import useReglages from "../composable/Reglage";

const data = useShoppingStore();
const route = useRoute();

const usersid = localStorage.getItem("auth_users");
const { getreglages,reglages,politique,getAllpolitique} = useReglages();
const { outp, MegaMenu,getRealisationbyId,Realisation} = useHomes();

onMounted(async () => {
    await MegaMenu();
    await getreglages();
});

const loadings = ref(1);
setTimeout(() => {
    loadings.value = 0;
}, 4000);



watchEffect(() => {


});

</script>

<style scoped>


input[type=file]::file-selector-button {
  margin-right: 20px;
  border: none;
  background: #040D12;
  padding: 12px 20px;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  transition: background .2s ease-in-out;
  width: 100%;

}

input[type=file]::file-selector-button:hover {
  background: #0d45a5;
}

</style>