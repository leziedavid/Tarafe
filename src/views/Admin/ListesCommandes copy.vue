<template>
        <main class="main">

            <section class="section banner-homepage6">
                <div class="container-fluid mb-3">
                    <br>

                    <div class="row">

                        <Menu/>

                        <div class="col-md-10">
                            <FilterTop :notifications="notifications"/>

                            <loader v-if="loadings==1" > </loader>

                            <div v-if="loadings==0">

                                <br>
                                    <section class="section block-head"> 
                                        <div class="container"> 
                                            <div class="text-center"> 
                                                <h3>HISTORIQUE DES COMMANDES</h3>
                                            </div>
                                        </div>
                                    </section>
                                <br>

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input v-model="searchCommandes" type="search" class="form-control form-account" name="" placeholder="Rechercher une commande par le code, Ex: TRANS-70619K">
                                    </div>
                                </div>

                                <div v-if="loadings==0"  class="col-md-12 mb-4 dataTable-container table-responsive">

                                        <div class="table-responsive text-nowrap">
                                            <table class="table table-striped">

                                                <thead>
                                                    <tr>
                                                        <th>N°</th>
                                                        <th>Date</th>
                                                        <th>Heurs</th>
                                                        <th>Status</th>
                                                        <th>Parametre</th>
                                                        <th>Total</th>
                                                        <th>Type de commande</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                        <tr v-for="item in dataOrders" :key="item.id_orders" :v-bind="item.id_orders">

                                                        <th scope="row">
                                                            <span  class="btn btn-prim btn-sm">{{item.transaction_id}} </span>
                                                        </th>

                                                        <th scope="row"> <span>{{ moment(item.date_orders).format('DD-MM-YYYY') }}</span></th>
                                                        <th scope="row"> <span>{{item.heurs_orders}} Min </span></th>
                                                        
                                                        <th scope="row">
                                                            <span  class="btn btn-red btn-sm text-center" v-if="item.status_orders==0" >à valider </span>
                                                            <span class="btn btn-green btn-sm text-center" v-if="item.status_orders==1">Commande validée </span>
                                                            <span  class="btn btn-red btn-sm text-center" v-if="item.status_orders==2">Commande Annulée </span>
                                                            <span class="btn btn-prim btn-sm text-center" v-if="item.status_orders==3">Commande En préparation </span>
                                                            <span class="btn btn-brown btn-sm text-center" v-if="item.status_orders==4">Livraison en cours</span>
                                                            <span class="btn btn-green btn-sm text-center" v-if="item.status_orders==5">Livrée</span>
                                                         </th>

                                                        <th scope="row">

                                                            <div v-if="item.status_orders==5">

                                                            </div>

                                                            <div v-else class="col-xl-12 col-lg-4 col-md-4 mb-2">
                                                                <div class="dropdown">
                                                                 <Dropdown title="Action" :items="services" :id="item.id_orders"/>
                                                                </div>
                                                            </div>

                                                        </th>

                                                        <th> {{item.total}} Fr</th>

                                                        <td scope="row">
                                                             <span class="btn btn-add  btn-sm " v-if="item.personnalise==1"> Commande personnalisé</span>&nbsp;&nbsp;
                                                             <span v-if="item.personnalise==0" class="btn btn-add  btn-sm "> Commande simple</span>&nbsp;&nbsp;
                                                             <span v-if="item.personnalise==2" class="btn btn-add  btn-sm "> Commande à personnalisé</span>&nbsp;&nbsp;
                                                        </td>

                                                        <td>
                                                            <!-- <a @click="addLivreur(item.id_orders)" class="" >  <ion-icon size="small" name="person-add-outline"></ion-icon> </a>&nbsp;&nbsp; -->
                                                            <a v-if="item.personnalise==1"  @click="showCommandes(item.id_orders)" class="" > <ion-icon size="small" name="eye-outline"> </ion-icon> </a>&nbsp;&nbsp;
                                                            <a  v-if="item.personnalise==2" :href="'/Admin/detailCommandes/'+item.id_orders" class="" > <ion-icon size="small" name="eye-outline"> </ion-icon> </a>&nbsp;&nbsp;
                                                            <a v-if="item.personnalise!=2" @click="printed(item.id_orders)" href="javascript:void(0)"> <ion-icon size="small" name="reader-outline"></ion-icon> </a>&nbsp;&nbsp;
                                                        </td> 

                                                        </tr>

                                                    </tbody>

                                            </table>
                                        </div>


                                </div>

                                <Pagination2 class=""  v-if="paginations.last_page > 1" :pagination="paginations" :offset="3" @paginate="query === '' ? getData() :searchData(paginations.current_page)"> </Pagination2>

                            </div>

                            <div class="modal fade bd-example-modal-lg" id="userFormModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                   
                                   <div class="modal-dialog modal-lg">
                                       <div class="modal-content">

                                           <form>

                                               <div class="modal-body">

                                                   <div class="container-fluid">

                                                       <div v-for="item in ordersData" :key="item.id_orders" :v-bind="item.id_orders" class="d-flex justify-content-between align-items-center py-3">
                                                           <h1 style="font-size:20px;" class="h5 mb-0 title-font title ">
                                                               <a href="#" class=" text-decoration-underline">  Detail de la  Commande N° {{item.transaction_id}} </a>   
                                                           </h1>
                                                       </div>
                                              
                                                       <div class="row">
                                                           <div class="col-lg-8">

                                                           <div class="card mb-4">
                                                               <div class="card-body">

                                                                   <div v-for="item in ordersData" :key="item.id_orders" :v-bind="item.id_orders" class="mb-3 d-flex justify-content-between">
                                                                       <div style="font-size:20px;" class="title-font title" >
                                                                       Date : le <span class="me-3">{{ moment(item.date_orders).format('DD-MM-YYYY') }}</span>
                                                                       </div>
                                                                   </div>

                                                               <table class="table table-borderless">
                                                         
                                                                   <tbody>

                                                                       <tr v-for="item in OrdersDetail" :key="item.id_products">
                                                                           <td>
                                                                               <div class="d-flex mb-2">

                                                                                   <div class="flex-shrink-0">
                                                                                       <img :src="urls+item.imageUrl" alt="" width="50" class="img-fluid rounded shadow-sm" >
                                                                                   </div>

                                                                                   <div class="flex-lg-grow-1 ms-3">

                                                                                   <h6 style="font-size:20px;"  class="small mb-0">
                                                                                       <a href="#" class="text-reset title-font title">{{item.name_product}}</a>
                                                                                   </h6>

                                                                                   <span  style="font-size:20px;"  class="small">color: Black</span> </div>
                                                                               </div>
                                                                           </td>

                                                                           <td>{{item.quantity}}</td>
                                                                           <td  style="font-size:20px;"  class="text-end">{{ (item.price * item.quantity) }} Fcfa</td>
                                                                       </tr>

                                                                   </tbody> <br>
                                                           
                                                                   <tfoot>

                                                                       <tr style="font-size:20px;" class="title-font title" v-for="item in ordersData" :key="item.id_orders">
                                                                           <td colspan="2">Sous-Total</td>
                                                                           <td class="text-end">{{item.total}} FCFA</td>
                                                                       </tr>

                                                                       <tr style="font-size:20px;" class="title-font title fw-bold" v-for="item in ordersData" :key="item.id_orders">
                                                                           <td colspan="2">TOTAL</td>
                                                                           <td class="text-end">{{item.total}} FCFA</td>
                                                                       </tr>

                                                                   </tfoot>

                                                               </table>
                                                               </div>
                                                           </div>
                                                           <br>
                                                           <!-- Payment -->
                                                               <div style="padding: 10px 20px;" class="card  mb-4">
                                                                   <div class="card-body">
                                                                       <div class="row">

                                                                           <div v-for="item in ordersData" :key="item.id_orders" style="font-size:18px;"  class="col-lg-6 title-font title">
                                                                               <h3 class="h3">Mode de paiement</h3>
                                                                               <p>{{item.Mode_paiement}}<br>
                                                                               Total: {{item.total}} FCFA <span class="badge bg-success rounded-pill">A PAYÉ</span></p>
                                                                           </div>

                                                                           <div class="col-lg-6">
                                                                               <h3  style="font-size:18px;" class="title-font title">Adresse de facturation</h3>
                                                                               <address class="title-font title" v-for="item in ordersData" :key="item.id_orders" style="font-size:18px;" >
                                                                                       Nom&Prenom: <strong >{{item.nomUsers_orders}}</strong><br>
                                                                                       email : {{item.email_orders}}<br>
                                                                                       AD livraison :  {{item.adresse_paiement}}<br>
                                                                                       Tel: <abbr title="Phone"> </abbr> {{item.contact_paiement}}
                                                                           </address>

                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>

                                                           </div>

                                                           <div  class="col-lg-4">

                                                                   <div style="padding: 10px 18px;" class="card mb-4">
                                                                           <div style="font-size:18px;" class="card-body title-font title">
                                                                               <h1 style="font-size:18px;" class="h1">Remarques client </h1>

                                                                               <div v-for="item in ordersData" :key="item.id_orders"> 
                                                                                   <p v-if="item.notes_orders">  {{ item.notes_orders }}</p>
                                                                                   <p v-else>  Aucune remarque concernant cette commande.</p>  
                                                                               </div>
                                                                           
                                                                           </div>
                                                                   </div>
                                                                   <br>

                                                                   <div style="padding: 10px 20px;" class="card mb-4">

                                                                       <div class="card-body title-font title">
                                                                           <h1 style="font-size:18px;" class="h6">Information sur la commande</h1>
                                                                           <div v-for="item in ordersData" :key="item.id_orders">
                                                                           
                                                                               <span v-if="item.personnalise==1">
                                                                                   <a style="font-size:18px;" href="#" class="text-decoration-underline">
                                                                                   Commande personnalisée
                                                                                   </a> 
                                                                                   <i class="bi bi-box-arrow-up-right"></i> 
                                                                               </span>

                                                                               <span v-else>
                                                                                   <a style="font-size:18px;" href="#" class="text-decoration-underline">
                                                                                   Commande nom personnalisée
                                                                                   </a> 
                                                                                   <i class="bi bi-box-arrow-up-right"></i> 
                                                                               </span>

                                                                           </div>
                                                                       <hr>
                                                                       <br>
                                                                       <h3 class="title-font title">Address</h3>
                                                                           <address v-for="item in Users" :key="item.id" style="font-size:18px;" >
                                                                                   Nom&Prenom: <strong >{{item.name}}</strong><br>
                                                                                   Email : {{item.email}}<br>
                                                                                   Pays : {{item.pays}}<br>
                                                                                   Ville: {{item.ville}}<br>
                                                                                   Commune/quartier : {{item.quartier}}<br>
                                                                                   AD livraison :  {{item.lieu_livraison}}<br>
                                                                                   Tel: <abbr title="Phone"> </abbr> {{item.contact}}
                                                                           </address>
                                                                       </div>

                                                                   </div>
                                                           </div>
                                                       </div>

                                                   </div>

                                               </div>

                                               <div class="modal-footer">
                                                   <button type="button" class="btn btn-red" @click="Modalhide(1)" data-dismiss="modal">Cancel</button>
                                               </div>

                                           </form>
                                       </div>
                                   </div>

                            </div>

                            <div class="modal fade bd-example-modal-lg" id="userFormModal2" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                  
                                   <div class="modal-dialog modal-lg">
                                       <div class="modal-content">
                                           <div class="modal-header">
                                               <h1 class="modal-title" id="staticBackdropLabel">
                                                   <span >Detail de la commandes </span>
                                               </h1>
                                               <button type="button" class="close" @click="Modalhide(2)" data-dismiss="modal" aria-label="Close">
                                                   <span aria-hidden="true">&times;</span>
                                               </button>
                                           </div>

                                           <form>
                                               <div class="modal-body">

                                                  <div class="bio-block">
                                                       <div class="dataTable-container table-responsive">

                                                           <table class="datatable-init table dataTable-table" data-nk-container="table-responsive">
                                                                           <thead class="table-light">
                                                                               <tr>
                                                                                   <th class="tb-col" style="width: 10%;"><span class="overline-title">Image</span></th>
                                                                                   <th class="tb-col" style="width: 10%;"><span class="overline-title">Produit</span></th>
                                                                                   <th class="tb-col" style="width: 10%;"><span class="overline-title">Quantité</span></th>
                                                                                   <th class="tb-col" style="width: 10%;"><span class="overline-title">Total (FCFA)</span></th>
                                                                               </tr>
                                                                           </thead>

                                                                           <tbody>
                                                                               <tr  v-for="item in OrdersDetail" :key="item.id_products">
                                                                                   <td class="tb-col"> <span><img  :src="urls+item.imageUrl" width="30"  class="mb-2" alt=""></span> </td>
                                                                                   <td class="tb-col"><span>{{item.name_product}}</span></td>
                                                                                   <td class="tb-col"><span>{{item.quantity}}</span></td>
                                                                                   <td class="tb-col"><span>{{ (item.price * item.quantity) }}</span></td>
                                                                               </tr>

                                                                           </tbody>
                                                           </table>
                                                               
                                                       </div>
                                                   </div>

                                               </div>

                                               <div class="modal-footer">
                                                   <button type="button" class="btn btn-red" @click="Modalhide(2)" data-dismiss="modal">Cancel</button>
                                               </div>

                                           </form>
                                       </div>
                                   </div>
                                   
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
import { ref, reactive, computed, onMounted, watch, watchEffect } from 'vue';
import { VueTelInput } from 'vue-tel-input';
// import 'vue-tel-input/dist/vue-tel-input.css';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import Pagination2 from '../../components/Pagination2.vue';
import { useRouter, useRoute } from 'vue-router'
import { useShoppingStore } from '../../store/index';
import router from "../../router/index";
import { createToast } from 'mosha-vue-toastify';
import moment from 'moment';
import axios from 'axios';
import loader from '../../components/loader.vue';

import Swal from 'sweetalert2'
import Dropdown from '../../components/Dropdown.vue';
import useOrders from "../../composable/Orders";

import urls from "../../../ImgUrl";
import axiosClient from "../../../ApiServices";

const services = [
    {
        id: '1',
        name: 'Commande disponible',
    },
    {
        id: '2',
        name: 'Annulée la Commande',
    },
    {
        id: '3',
        name: 'En préparation',
    },
    {
        id: '4',
        name: 'Livraison en cours',
    },

    {
        id: '5',
        name: 'Livrée',
    }

];

const data = useShoppingStore();
const route = useRoute();
const datas = 1;
const usersid = localStorage.getItem("auth_users");

const Datapaginations = 1;
const { orders, nborders, getAllorders, changesstatOrder, Messages, paginations, OrdersDetail, ordersData, getOrdersDetail, getListeLivreurs, listeLivreurs } = useOrders();

onMounted(async () => {

    await getAllorders(Datapaginations);
});



const searchCommandes = ref('');
const dataOrders = ref([]);

const getData = async () => {
};

const loadings = ref(1);

setTimeout(() => {
    loadings.value = 0;
}, 1000);


const loading = async () => {
    setTimeout(() => {
        loadings.value = 0;
    }, 300)
};


const searchData = async (data) => {
    await loading();
    await getAllorders(data);

};

const printed = async (id) => {
    var uri = 'api/getInvoice/';
    var link = urls + uri + id;
    window.open(link, '_blank');
};

const changes = async (id, item) => {

    if (item == 1) {

        Swal.fire({
            title: 'Attention !',
            text: "Voulez-vous vraiment activé cet  compte ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Oui',
            cancelButtonText: 'Annuler'
        }).then((result) => {

            if (result.isConfirmed) {
                let status = 1;
                changesstatUsers(id, status);
                getAllbUsers();
                createToast("Compte activé avec succès!",
                    {
                        position: 'top-right',
                        type: 'success',
                        transition: 'bounce',
                        hideProgressBar: 'false',
                        showIcon: 'false',
                        showCloseButton: 'false',
                        swipeClose: 'false',
                        timeout: 3600,
                    });
            }
        })

    } else if (item == 0) {

        Swal.fire({
            title: 'Attention !',
            text: "Voulez-vous vraiment desactivé cet compte ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Oui',
            cancelButtonText: 'Annuler'
        }).then((result) => {

            if (result.isConfirmed) {
                let status = 0;
                changesstatUsers(id, status);
                getAllbUsers();
                createToast("Compte desactivé avec succès",
                    {
                        position: 'top-right',
                        type: 'success',
                        transition: 'bounce',
                        hideProgressBar: 'false',
                        showIcon: 'false',
                        showCloseButton: 'false',
                        swipeClose: 'false',
                        timeout: 3600,
                    });
            }
        })

    }
};

const deletes = async (id) => {

    Swal.fire({
        title: 'Attention !',
        text: "Voulez-vous vraiment supprimer cet compte ?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Supprimer',
        cancelButtonText: 'Annuler'
    }).then((result) => {

        if (result.isConfirmed) {
            deleteStores(id);
            createToast("Compte supprimé avec succès",
                {
                    position: 'top-right',
                    type: 'success',
                    transition: 'bounce',
                    hideProgressBar: 'false',
                    showIcon: 'false',
                    showCloseButton: 'false',
                    swipeClose: 'false',
                    timeout: 3600,
                });
            getAllboutiques();
            // this.message = this.responseMsg;
            // this.this.getAllboutiques();
        }
    })

};



const addLivreur = async (id) => {
    getListeLivreurs()
    $('#userFormModal2').modal('show');
};

const showCommandes = async (id) => {
    getOrdersDetail(id)
    $('#userFormModal').modal('show');

};

const Modalhide = async (id) => {

    if (id == 1) {
        $('#userFormModal').modal('hide');
    }
    if (id == 2) {
        $('#userFormModal2').modal('hide');
    }
};


watchEffect(() => {

    dataOrders.value = orders.value;

    if (searchCommandes.value.length > 0) {

        axiosClient.get('/api/searchCommandes/' + searchCommandes.value)
            .then(response => {

                dataOrders.value = response.data.datas.data;

                console.log(response.data.datas.data);

            }).catch(function (error) {

                dataOrders.value = [];
            });

    } else {
        dataOrders.value = orders.value;
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

.table {
	border-spacing: 0 15px;
	border-collapse: separate;
}
.table thead tr th,
.table thead tr td,
.table tbody tr th,
.table tbody tr td {
	vertical-align: middle;
	border: none;
}
.table thead tr th:nth-last-child(1),
.table thead tr td:nth-last-child(1),
.table tbody tr th:nth-last-child(1),
.table tbody tr td:nth-last-child(1) {
	text-align: center;
}
.table tbody tr {
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
}
.table tbody tr td {
	background: #fff;
}
.table tbody tr td:nth-child(1) {
	border-radius: 5px 0 0 5px;
}
.table tbody tr td:nth-last-child(1) {
	border-radius: 0 5px 5px 0;
}

.card {
    box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
}
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,.125);
    border-radius: 1rem;
}
.text-reset {
    --bs-text-opacity: 1;
    color: inherit!important;
}


</style>