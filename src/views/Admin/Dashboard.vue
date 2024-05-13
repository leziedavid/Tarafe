<template>

    <main class="main">

        <section class="section banner-homepage6">
        <div class="container-fluid mb-3">
            <br>
                <div class="row">
                    <br>
                    <Menu/>

                    <div class="col-lg-10">
                        <FilterTop :notifications="notifications"/>
                        
                        <div class="box-your-filter">
                    
                        </div>

                        <div class="box-list-products">

                            <div class="product-item">
                                
                                <div class="cardProduct wow fadeInUp">
                                    <div class="card">
                                        <div class="card-body">
                                            <h6 class="card-title text-center">

                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 64.001 64">
                                                    <path id="Path_66" data-name="Path 66" d="M146.431,117.56l-26.514-10.606a8.014,8.014,0,0,0-5.944,0L87.458,117.56a4,4,0,0,0-2.514,3.714v34.217a4,4,0,0,0,2.514,3.714l26.514,10.606a8.013,8.013,0,0,0,5.944,0L146.431,159.2a4,4,0,0,0,2.514-3.714V121.274a4,4,0,0,0-2.514-3.714m-31.714-8.748a5.981,5.981,0,0,1,4.456,0l26.1,10.44a1,1,0,0,1,0,1.858l-12.332,4.932-30.654-12.26Zm1.228,59.633L88.2,157.347a2,2,0,0,1-1.258-1.856V122.6l29,11.6Zm1-36L88.612,121.11a1,1,0,0,1,0-1.858L99.6,114.858l30.654,12.262Zm30,23.048a2,2,0,0,1-1.258,1.856l-27.742,11.1V134.2l13-5.2V146.61a1.035,1.035,0,0,0,2-.466V128.2l14-5.6Z" transform="translate(-84.944 -106.382)" fill="#FFFFFF"></path>
                                                    </svg> &nbsp; {{nbdataProduits}} Produits

                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div class="product-item">
                                
                                <div class="cardProduct wow fadeInUp">
                                    <div class="card">
                                        <div class="card-body">
                                            <h6 class="card-title text-center"> 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 64 64">
                                                    <g id="Group_25" data-name="Group 25" transform="translate(-1561.844 1020.618)">
                                                        <path id="Path_58" data-name="Path 58" d="M229.23,106.382h-12a6,6,0,0,0,0,12h12a6,6,0,0,0,0-12m0,10h-12a4,4,0,0,1,0-8h12a4,4,0,0,1,0,8" transform="translate(1370.615 -1127)" fill="#FFFFFF"></path>
                                                        <path id="Path_59" data-name="Path 59" d="M213.73,117.882h24a1,1,0,0,1,0,2h-24a1,1,0,0,1,0-2" transform="translate(1372.115 -1115.5)" fill="#FFFFFF"></path>
                                                        <path id="Path_60" data-name="Path 60" d="M210.23,117.382a2,2,0,1,0,2,2,2,2,0,0,0-2-2" transform="translate(1367.615 -1116)" fill="#FFFFFF"></path>
                                                        <line id="Line_1" data-name="Line 1" transform="translate(1578.047 -1014.618)" fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.142"></line>
                                                        <line id="Line_2" data-name="Line 2" transform="translate(1609.643 -1014.618)" fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.142"></line>
                                                        <path id="Path_61" data-name="Path 61" d="M213.73,123.882h24a1,1,0,0,1,0,2h-24a1,1,0,0,1,0-2" transform="translate(1372.115 -1109.5)" fill="#FFFFFF"></path>
                                                        <path id="Path_62" data-name="Path 62" d="M210.23,123.382a2,2,0,1,0,2,2,2,2,0,0,0-2-2" transform="translate(1367.615 -1110)" fill="#FFFFFF"></path>
                                                        <path id="Path_63" data-name="Path 63" d="M213.73,129.882h24a1,1,0,0,1,0,2h-24a1,1,0,1,1,0-2" transform="translate(1372.115 -1103.5)" fill="#FFFFFF"></path>
                                                        <path id="Path_64" data-name="Path 64" d="M210.23,129.382a2,2,0,1,0,2,2,2,2,0,0,0-2-2" transform="translate(1367.615 -1104)" fill="#FFFFFF"></path>
                                                        <line id="Line_3" data-name="Line 3" transform="translate(1609.643 -1015.618)" fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.142"></line>
                                                        <line id="Line_4" data-name="Line 4" transform="translate(1578.047 -1015.618)" fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.142"></line>
                                                        <path id="Path_65" data-name="Path 65" d="M265.23,116.382a8,8,0,0,0-8-8h-7.2a1,1,0,0,0,0,2h7.2a6,6,0,0,1,6,6v44a6,6,0,0,1-6,6h-48a6,6,0,0,1-6-6v-44a6,6,0,0,1,6-6h7.2a1,1,0,0,0,0-2h-7.2a8,8,0,0,0-8,8v44a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8Z" transform="translate(1360.615 -1125)" fill="#FFFFFF"></path>
                                                    </g>
                                                </svg> &nbsp; {{nbdataOrders}}
                                                Commande totale</h6>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div class="product-item">
                                
                                <div class="cardProduct wow fadeInUp">
                                    <div class="card">
                                        <div class="card-body">
                                            <h6 class="card-title text-center"> 

                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 64 64.001">
                                                    <g id="Group_26" data-name="Group 26" transform="translate(-1571.385 1123.29)">
                                                        <line id="Line_5" data-name="Line 5" transform="translate(1572.385 -1123.29)" fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.142"></line>
                                                        <path id="Path_67" data-name="Path 67" d="M214.771,65.71a2,2,0,0,1-2-2v-59a1,1,0,0,0-2,0v59a4,4,0,0,0,4,4h59a1,1,0,0,0,0-2Z" transform="translate(1360.615 -1127)" fill="#FFFFFF"></path>
                                                        <line id="Line_6" data-name="Line 6" y1="0.136" x2="0.136" transform="translate(1586.533 -1087.117)" fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.142"></line>
                                                        <path id="Path_68" data-name="Path 68" d="M264.6,10.027a3,3,0,0,0-4,4L247.536,27.1a2.994,2.994,0,0,0-2.594,0l-6.584-6.584a3,3,0,1,0-5.414,0L221.528,31.927a3,3,0,1,0,1.412,1.418l11.418-11.418a3,3,0,0,0,2.586,0l6.586,6.586a3,3,0,1,0,5.418,0l13.072-13.07a3,3,0,0,0,2.584-5.416M220.23,35.633a1,1,0,1,1,1-1,1,1,0,0,1-1,1m15.42-15.414a1,1,0,1,1,1-1,1,1,0,0,1-1,1M246.238,30.8a1,1,0,1,1,1-1,1,1,0,0,1-1,1m17.074-17.066a1,1,0,1,1,1-1,1,1,0,0,1-1,1" transform="translate(1367.074 -1120.976)" fill="#FFFFFF"></path>
                                                    </g>
                                                </svg>&nbsp;  Ventes totales {{ orders}} XOF

                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div class="product-item">
                                
                                <div class="cardProduct wow fadeInUp">
                                    <div class="card">
                                        <div class="card-body">
                                            <h6 class="card-title text-center"> 11 produits par catégorie</h6>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                        </div>

                        <Chart/>

                        <div class=" col-md-12 mb-4 dataTable-container table-responsive">
                            <h4 class="title-font mb-32">Historiques sur le stock</h4>
                            <ul class="list-group mb-4">
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <a style="font-size:18px;" @click="stocks(1)">  Produits en stock faible <span class="rounded-pill"><ion-icon size="large" name="notifications-outline"></ion-icon> {{Stockfaible}} </span> </a>
                                </li>

                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <a style="font-size:18px;" @click="stocks(2)"> Produits en rupture de stock <span class="rounded-pill"> <ion-icon size="large" name="notifications-outline"></ion-icon>  {{Rupturestock}} </span></a>
                                </li>
                            </ul>
                        </div>

                    </div>
                
                </div>

            </div>
        </section>

    </main>
    
</template>

<script setup>

import Menu from './Menu.vue';
import FilterTop from './FilterTop.vue';
import {ref,reactive, computed, onMounted,watch,watchEffect} from 'vue';
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import useHomes from "../../composable/Homes";
import useBlogs from "../../composable/Blogs";
import Pagination from '../../components/Pagination.vue';
import loader from '../../components/loader.vue';

import { useRouter, useRoute } from 'vue-router';
import { useShoppingStore } from '../../store/index';
import router from "../../router/index";
import { createToast } from 'mosha-vue-toastify';
import moment from 'moment';
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import Chart from '../../components/Chart.vue';
import ChartBar from "../../components/ChartBar.vue"
import ChartDoughnut from "../../components/ChartDoughnut.vue"
import ChartLine from "../../components/ChartLine.vue"
import useProduits from "../../composable/Produits";
import url from "../../../ImgUrl";
import axiosClient from "../../../ApiServices";

    const data = useShoppingStore();
    const route = useRoute();
    const datas=1;
    const gains=ref(0);
    const etats=ref(0);
    const usersid=localStorage.getItem("auth_users");
    const auth_names=localStorage.getItem("auth_names");

    const { getdashboard, dataBoutique, dataOrders, dataCategories, dataSub_categories, dataSub_sub_categories, ListeRupturestock, ListeStockfaible, Stockfaible, Rupturestock,
            nbdataBoutique, nbdataOrders, nbdataCategories, nbdataSub_categories, nbdataSub_sub_categories, nbdataUsers, dataUsers, nbdataProduits,
            dataProduits, ordersListes, OrdersHistoriques, meilleuresboutiques, orders} = useHomes();
    const {notifications,Notification} = useProduits();

    onMounted(async () => {

        await Notification();
        await getdashboard();
    });


    const loadings = ref(1);

    const stocks = async (index)=> {

            loadings.value = 1;

            if(index==1){
                $('#exampleModal').modal('show');
                setTimeout(() => {
                loadings.value = 0;
              }, 2000);

            etats.value=index;
            }else if(index==2){

                $('#exampleModal').modal('show');
                setTimeout(() => {
                loadings.value = 0;
            }, 2000);

            etats.value=index;
            }

       };

       const Modalhide = async (id) => {

            if (id == 1) {

                loadings.value = 0;
                etats.value = 0;
                $('#exampleModal').modal('hide');

            } else if (id == 2) {
                $('#userFormModal2').modal('hide');
            } else if (id == 3) {
                $('#setting').modal('hide');
            }
            };


        watchEffect(() => {
            // gains.value=orders.value[0].total_pays;
        });

</script>


<style scoped>

.card {
    box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
}
.card{
    
    border-radius: 6px;
    border: 1px solid #deebfd;
    box-shadow: 0 3px 10px rgba(62,85,120,.045);
    margin: 0 8px 10px;
    position: relative;
    background-color: #242079;
    /* background-color: #2e294e; */
    height: 94px;
    padding: 20px;
    color:#ffffff;
}

.containers {
  margin: 0 auto;
  width: 91.666667%;
  display: grid;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.chart-container {
  background-color: #eee8d5;
  border-radius: 0.5rem;
}


@media only screen and (max-width: 768px) {

}

.button {
  background-color: #04AA6D;
  border: none;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
}

</style>
