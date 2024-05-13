<template>

        <Header :outp="outp" />

          <main class="main">
            
            <div class="section block-breadcrumb">
                <div class="container"> 
                    <div class="breadcrumbs"> 
                        <ul> 
                        <li> <a href="/">Accueil</a></li>
                        <li> <a href="#">Nos produits</a></li>
                        </ul>
                    </div>
                </div>
           </div>

           

            <!-- <section class="section block-blog-list"> -->
                <section class="section block-content-shop">

                <div  class="container">
                    <loader v-if="loadings==1" > </loader>
                </div>

                <div v-if="loadings==0">

                    <div v-if="loadings==0" class="container">

                        <div class="row">

                            <div class=" col-md-12 mb-4">


                                <!-- <section class="section block-cat-homepage10"> -->

                                    <div class="container"> 
                                        <div class="text-center"> 
                                            <h2 class="mb-2 wow fadeInUp">DÉCOUVRIR NOS CRÉATIONS</h2>
                                            <div class="mb-40 breadcrumbs d-inline-block"> 
                                                <ul> 
                                                    <li>
                                                        <a style="font-size:22px"  href="#"> Retrouvez tout le savoir-faire et la créativité de notre équipe </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                
                                        <div class="row"> 

                                            <div class="col-md-12">
                                                <div class="box-your-filter">
                                                    <div class="block-ele-filter">
                                                        <a class="btn btn-tag-filter mb-3" @click="searchData(1)" >Tous <span class="close-tag"></span></a>
                                                        <a v-for="item in optionsRealisation" :key="item.id_option_reaalisation"  class="btn btn-tag-filter mb-3" @click="SelectOccasion(item.id_option_reaalisation)" >{{item.libelleOption_reaalisation}}<span class="close-tag"></span></a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="box-your-filter">

                                                <div v-if="realisationData.length>0" class="box-list-products">

                                                    <div v-for="item in realisationData" :key="item.id_realisations"  class="product-item">
                                                        
                                                            <div class="cardProductStyle3 cardProductType03 wow fadeInUp">

                                                                <div class="cardImage">
                                                                    <img class="imageMain" :src="url+item.images_realisations" alt="guza">
                                                                    <img class="imageHover" :src="url+item.images_realisations" alt="guza">
                                                                </div>

                                                                <div class="cardInfo">

                                                                    <h5 style="font-size:19px" class="mb-2"> <strong> {{item.libelle_realisations}} </strong> </h5>

                                                                    <h6> 
                                                                        <p  v-html="item.descript_real.length > 30 ? item.descript_real.slice(0, 30)+ ' ...' : item.descript_real"  class="neutral-medium-dark mb-3"> </p>
                                                                    </h6>

                                                                    <p class="body-p2 cardDesc">
                                                                        <a class="btn btn-border-medium text-center" :href="generateProductUrl(item.libelle_realisations)">Découvrir</a>
                                                                    </p>

                                                                </div>

                                                            </div>

                                                    </div>

                                                </div>

                                                <div v-else style="font-size:25px" class="text-center"> Aucun résultat trouvé </div>

                                            </div>

                                            <Pagination class=""  v-if="paginations.last_page > 1 && realisationData.length>0" :pagination="paginations" :offset="3" @paginate="query === '' ? getData() :searchData(paginations.current_page)"> </Pagination>

                                        </div>

                                    </div>

                                <!-- </section> -->

                            </div>

                        </div>
                        
                    </div>

                </div>

            </section>

          </main>

          <br> <br> <br>

      <Footer :reglages="reglages"  /> 
   
</template>

<script setup>

import Header from '../components/Header.vue';
import Pagination from '../components/Pagination.vue';

import Footer from '../components/Footer.vue';
import { ref, reactive, computed, onMounted, watch, watchEffect } from 'vue';
import { VueTelInput } from 'vue-tel-input';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import useHomes from "../composable/Homes";
import useProduits from "../composable/Produits";
import { useRouter, useRoute } from 'vue-router'
import { useShoppingStore } from '../store/index';
import { createToast } from 'mosha-vue-toastify';
import axios from 'axios';
import router from "../router/index";
import 'vue-loading-overlay/dist/css/index.css';
import loader from '../components/loader.vue';
import url from "../../ImgUrl";
import axiosClient from "../../ApiServices";
import Loading from 'vue-loading-overlay';

const route = useRoute();
const Datapaginations = 1;
const { getAllDatapages, Produit, outp, MegaMenu, confirmations,reglages } = useHomes();
const { paginations, Realisations, getAllRealisationsBystatus,optionsRealisation} = useProduits();
const data = useShoppingStore();
const usersid = localStorage.getItem("auth_users");
const codes = localStorage.getItem("codes");
const email = localStorage.getItem("email");
const id_commende = localStorage.getItem("id_commende");
const realisationData= ref([]);

onMounted(async () => {

    await getAllDatapages();
    await MegaMenu();
    await getAllRealisationsBystatus(Datapaginations);
    // await getAllRealisationsBystatus();

});


const getData = async () => {
    };

    const searchData = async (data) => {
        await getAllRealisationsBystatus(data);
    };
    
const loadings = ref(1);
setTimeout(() => {
    loadings.value = 0;
}, 4000);


function generateProductUrl(libelle) {
    const libelleModified = libelle.replace(/ /g, '-'); 
    return '/product/' + libelleModified;

  };

const getImg = async (index) => {
    dataImg.value = index;
};


const SelectOccasion = async (index) => {
    realisationData.value = [];
    paginations.value = [];

    if (index) {

        axiosClient.get('/api/selectRealisation/' + index)
            .then(response => {
                realisationData.value = response.data.datas.data;
                paginations.value = response.data.datas;

            }).catch(function (error) {
                realisationData.value = [];
                paginations.value = [];
                console.error(error);
            });

    } else {

        await getAllRealisationsBystatus(1);
    }


};


watchEffect(() => {

    if (Realisations.value.length > 0) {
        realisationData.value = Realisations.value;
    };

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