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

                            <div v-if="loadings==0" class="row mb-6">


                                <div class="container-fluid">

                                    <div v-for="item in ordersData" :key="item.id_orders" :v-bind="item.id_orders" class="d-flex justify-content-between align-items-center py-3">
                                        <h1 style="font-size:20px;" class="h5 mb-0 title-font title ">
                                            <a href="#" class=" text-decoration-underline">  Detail de la  Commande N° {{item.transaction_id}} </a>   
                                        </h1>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-6">

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
                                                                            <img @click="downloadImage(urls+item.images_realisations)" :src="urls+item.images_realisations" alt="" width="100" class="img-fluid rounded shadow-sm" >
                                                                        </div>

                                                                        <div class="flex-lg-grow-1 ms-3">
                                                                            <h6 style="font-size:20px;"  class="small mb-0">  <a href="#" class="text-reset title-font title">{{item.libelle_realisations}}</a> </h6>
                                                                    </div>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr v-for="item in OrdersDetail" :key="item.id_products">
                                                                <td>
                                                                    <div class="d-flex mb-2">
                                                                        <div class="flex-shrink-0">
                                                                            <td  style="font-size:18px;" colspan="2">
                                                                                <span  class="btn btn-red btn-sm">Couleur à respecter </span>
                                                                                &nbsp;	&nbsp;	&nbsp;
                                                                                <span  class="btn btn-prim btn-sm">{{item.couleursAchats}}  </span>
                                                                            </td>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr v-for="item in OrdersDetail" :key="item.id_products">
                                                                <td>
                                                                    <div class="d-flex mb-2">
                                                                        <td  style="font-size:18px;" colspan="2">
                                                                                <span  class="btn btn-red btn-sm">Texte à ajouter </span>
                                                                                &nbsp;	&nbsp;	&nbsp;
                                                                                <span  class="btn btn-prim btn-sm">{{item.texteAchats}}  </span>
                                                                            </td>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr v-for="item in OrdersDetail" :key="item.id_products">
                                                                <td>
                                                                    <div class="d-flex mb-2">
                                                                        
                                                                        <td  style="font-size:18px;" colspan="2">
                                                                                <span  class="btn btn-red btn-sm">Police d'écriture  </span>
                                                                                &nbsp;	&nbsp;	&nbsp;
                                                                                <span  class="btn btn-prim btn-sm">{{item.policeAchats}}  </span>
                                                                            </td>

                                                                    </div>
                                                                </td>
                                                            </tr>


                                                            <tr v-for="item in OrdersDetail" :key="item.id_products">
                                                                <td>
                                                                    <div class="d-flex mb-2">

                                                                        <td  style="font-size:18px;" colspan="2">
                                                                                <span  class="btn btn-red btn-sm">Dimension à respecter </span>
                                                                                &nbsp;	&nbsp;	&nbsp;
                                                                                <span  class="btn btn-prim btn-sm">{{item.dimensionAchats}}  </span>
                                                                            </td>

                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr v-for="item in OrdersDetail" :key="item.id_products">
                                                                <td>
                                                                    <div class="d-flex mb-2">

                                                                        <td  style="font-size:18px;" colspan="2">
                                                                                <span  class="btn btn-red btn-sm">Taille à respecter</span>
                                                                                &nbsp;	&nbsp;	&nbsp;
                                                                                <span  class="btn btn-prim btn-sm">{{item.taillesParamsAchats}}  </span>
                                                                            </td>

                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr v-for="item in OrdersDetail" :key="item.id_products">
                                                                <td>
                                                                    <div class="d-flex mb-2">
                                                                        <!-- {{urls+item.imgLogosAchats}}  -->
                                                                        <td  style="font-size:18px;" colspan="2">
                                                                                <span  class="btn btn-red btn-sm">Logos</span> &nbsp;	&nbsp;	&nbsp;
                                                                                <span  class="btn btn-prim btn-sm">
                                                                                
                                                                                    <img @click="downloadImage(urls+item.imgLogosAchats)" :src="urls+item.imgLogosAchats" alt="" width="80" class="img-fluid rounded shadow-sm" >
                                                                                </span>
                                                                            </td>

                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr v-for="item in OrdersDetail" :key="item.id_products">
                                                                <td>
                                                                    <div class="d-flex mb-2">

                                                                        <td  style="font-size:18px;" colspan="2">
                                                                                <span  class="btn btn-red btn-sm">Position du logo</span>
                                                                                &nbsp;	&nbsp;	&nbsp;
                                                                                <span  class="btn btn-prim btn-sm">{{item.PositionsFiles}}  </span>
                                                                            </td>

                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr v-for="item in OrdersDetail" :key="item.id_products">
                                                                <td>
                                                                    <div class="d-flex mb-2">

                                                                        <td  style="font-size:18px;" colspan="2">
                                                                                <span  class="btn btn-red btn-sm">Support d'impression </span>
                                                                                &nbsp;	&nbsp;	&nbsp;
                                                                                <img v-if="item.FileAchats" :src="urls+item.FileAchats" @click="downloadImage(urls+item.FileAchats)" alt="" width="80" class="img-fluid rounded shadow-sm">
                                                                                <span v-else class="btn btn-prim btn-sm">Aucun fichier transmis </span>
                                                                            </td>

                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            

                                                        </tbody>


                                                    </table>
                                                    </div>
                                                </div>
                                                <br>

                                                <div  class="col-md-12"> 
                                                    <div style="padding: 10px 20px;" class="card  mb-4">
                                                        <div class="card-body">
                                                            <div class="row">
                                                                <div v-for="item in OrdersDetail" :key="item.id_orders" style="font-size:18px;"  class="col-lg-12 title-font title">
                                                                    <h3 class="h3">Remarque du client</h3>
                                                                    <p v-html="item.remarques" class=" body-p2 mr-30"> </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <br>
                                                <div  class="col-md-12"> 
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

                                        </div>

                                        <div  class="col-lg-6">

                                                    <h1 style="font-size:18px;" class="h1">FICHIER DE COMMANDE </h1>

                                                    <table class="table table-borderless">
                                                            <tbody>
                                                                <tr v-for="item in OrdersDetail" :key="item.id_orders">

                                                                        <td v-if="item.modelfiles && item.typesmodeel==0">
                                                                            <div class="d-flex mb-2">
                                                                                <div class="flex-shrink-0">
                                                                                    <td  style="font-size:18px;" colspan="2">
                                                                                        <span  class="">
                                                                                            <img src="/images/pdf.jpeg" @click="downloadImage(urls+item.modelfiles)" alt="" width="100" class="img-fluid rounded shadow-sm mb-3">
                                                                                            <p class="mb-3"> Modelisation</p>
                                                                                            <div class="col-md-12 text-center"> 
                                                                                                <button  @click="sendMailsDevis(urls+item.modelfiles,item.id_orders,item.typesmodeel,item.objetmodels)" type="submit" class="btn btn-prim mb-4">Envoyer par mail</button> 
                                                                                            </div> &nbsp;
                                                                                        </span>
                                                                                    </td>
                                                                                </div>
                                                                            </div>
                                                                        </td>


                                                                        <td v-if="item.devisAchat && item.typesdevis==1">
                                                                            <div class="d-flex mb-2">
                                                                                <div class="flex-shrink-0">
                                                                                    <td  style="font-size:18px;" colspan="2">
                                                                                        <span  class="">
                                                                                            <img src="/images/pdf.jpeg" @click="downloadImage(urls+item.devisAchat)" alt="" width="100" class="img-fluid rounded shadow-sm mb-3">
                                                                                            <p class="mb-3"> Devis</p>
                                                                                            <div class="col-md-12 text-center"> 
                                                                                                <button  @click="sendMailsDevis(urls+item.devisAchat,item.id_orders,item.typesdevis,item.objetdevis)" type="submit" class="btn btn-prim mb-4">Envoyer par mail</button> 
                                                                                            </div> &nbsp;
                                                                                        </span>
                                                                                    </td>
                                                                                </div>
                                                                            </div>
                                                                        </td>

                                                                
                                                                        <td v-if="item.factures && item.typesfactures==2">
                                                                            <div class="d-flex mb-2">
                                                                                <div class="flex-shrink-0">
                                                                                    <td  style="font-size:18px;" colspan="2">
                                                                                        <span  class="">
                                                                                            <img src="/images/pdf.jpeg" @click="downloadImage(urls+item.factures)" alt="" width="100" class="img-fluid rounded shadow-sm mb-3">
                                                                                            <p class="mb-3"> Factures</p>
                                                                                            <div class="col-md-12 text-center"> 
                                                                                                <button  @click="sendMailsDevis(urls+item.factures,item.id_orders,item.typesfactures,item.objetfactures)" type="submit" class="btn btn-prim mb-4">Envoyer par mail</button>
                                                                                            </div>
                                                                                        </span>
                                                                                    </td>
                                                                                </div>
                                                                            </div>
                                                                        </td>

                                                                </tr>
                                                            </tbody>
                                                    </table>

                                                 

                                                   <br>
                                                <!-- 
                                                <div style="padding: 10px 20px;" class="card mb-4">
                                                    <div class="card-body title-font title">
                                                        <h1 style="font-size:18px;" class="h6">Ajouter le fichier de la commandes (PDF) </h1>
                                                        
                                                        <div  class="col-md-6"> 
                                                            <div class="form-group"> 
                                                                <input id="files" type="file"  class="" ref="file" name="files" @change="fieldChange">
                                                            </div>
                                                        </div>
                                                    <hr>
                                                   
                                                    </div>
                                                </div> -->

                                                <div style="padding: 10px 20px;" class="card mb-4">
                                                    <div class="card-body title-font title">
                                                        <h1 style="font-size:18px;" class="h6">Ajouter le devis ou la facture (PDF) </h1>

                                                        <div  class="col-md-12"> 
                                                            <div class="form-group"> 
                                                                <v-select v-model="optionsfichier" :reduce="(option) => option.id" :options=FichierTab style="background-color:beige width:200px; font-size:18px" class=" default-form form-control-xs" />
                                                            </div>
                                                        </div>

                                                        <div  class="col-md-12"> 
                                                            <div class="form-group"> 
                                                                <input style="font-size: 20px" v-model="objets" type="text" class="form-control form-account" name="" placeholder="Objet du mail">
                                                            </div>
                                                        </div>
                                                        
                                                        <div  class="col-md-12"> 
                                                            <div class="form-group"> 
                                                                <input id="files" type="file"  class="" ref="file" name="files" @change="fieldChange2">
                                                            </div>
                                                            <strong class=""> {{filesx}}</strong>
                                                        </div>

                                                        <hr>
                                                        <div class="col-md-12"> 
                                                            <button  @click="savefiles()" type="submit" class="btn btn-prim mb-4">Sauvegader...</button> 
                                                        </div>

                                                    </div>
                                                </div>

                                        </div>

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

const attachments = ref('');
const filesx = ref('');
const error = ref('');
const link = ref('');
const factures = ref('');
const objets = ref('');
const optionsfichier = ref('Type de fichier');
const postFormData = new FormData();
const postFormData2 = new FormData();

const FichierTab = [
    {
        id: 0,
        label: 'Modification et création du designs ',
        value: 'Modification et création du designs',
    },
    {
        id: 1,
        label: 'Devis',
        value: 'Devis',
    },
    {
        id: 2,
        label: 'Facture Finale',
        value: 'Facture Finale',
    },

];

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

const { orders, getAllorders, Messages, OrdersDetail, ordersData, getdetailCommandes,sendEmailsDevis} = useOrders();

onMounted(async () => {
    await getdetailCommandes(route.params.id);
});



const searchCommandes = ref('');
const dataOrders = ref([]);

const getData = async () => {
};

const loadings = ref(1);

setTimeout(() => {
    loadings.value = 0;
}, 1000);


const fieldChange = async (e) => {
    attachments.value = e.target.files[0];
    const file = e.target.files[0];

    if (attachments.value.name.length > 0) {

        filesx.value = attachments.value.name;
        let x = attachments.value.name.split('.');
        let taille = x.length;
        let extension = x[(taille - 1)];

        if (extension == 'pdf') {

            link.value = URL.createObjectURL(attachments.value);
            URL.revokeObjectURL(file);
            error.value = "";

            postFormData.append('logo', attachments.value);
            postFormData.append('orderId', route.params.id);

            const config = { headers: { 'Content-Type': 'multipart/form-data' } };
            axiosClient.post('/api/addDevis', postFormData, config, {})
                .then(response => {
                    if (response.data.data) {
                            getdetailCommandes(route.params.id);

                            createToast("Fichier ajouter  avec succès.",
                                {
                                position: 'top-right',
                                type: 'success',
                                transition: 'bounce',
                                hideProgressBar: 'false',
                                showIcon: 'false',
                                showCloseButton: 'false',
                                swipeClose: 'false',
                                timeout: 3600,
                                 })
                        }

                }).catch(function (error) {

                    console.error(error);
                    
                });

        } else {

            createToast("Merci de charger un fichier pdf.",
                    {
                        position: 'top-right',
                        type: 'danger',
                        transition: 'bounce',
                        hideProgressBar: 'false',
                        showIcon: 'false',
                        showCloseButton: 'false',
                        swipeClose: 'false',
                        timeout: 3600,
                    })

            error.value = "Merci de charger un fichier pdf";
            window.scrollTo(0, 0);
        }

    } else {
        createToast("Merci de charger un fichier pdf.",
                    {
                        position: 'top-right',
                        type: 'danger',
                        transition: 'bounce',
                        hideProgressBar: 'false',
                        showIcon: 'false',
                        showCloseButton: 'false',
                        swipeClose: 'false',
                        timeout: 3600,
                    })
        error.value = "Merci de charger un fichier pdf";
        window.scrollTo(0, 0);
    }
};

const fieldChange2 = async (e) => {
    attachments.value = e.target.files[0];
    const file = e.target.files[0];

    if (attachments.value.name.length > 0) {

        filesx.value = attachments.value.name;
        let x = attachments.value.name.split('.');
        let taille = x.length;
        let extension = x[(taille - 1)];

        if (extension == 'pdf') {

            link.value = URL.createObjectURL(attachments.value);
            URL.revokeObjectURL(file);
            error.value = "";

            postFormData2.append('logo', attachments.value);
            postFormData2.append('orderId', route.params.id);

            // postFormData2.append('factures', factures.value);
            postFormData2.append('options', optionsfichier.value);
            postFormData2.append('objets', objets.value);
        } else {

            createToast("Merci de charger un fichier pdf.",
                    {
                        position: 'top-right',
                        type: 'danger',
                        transition: 'bounce',
                        hideProgressBar: 'false',
                        showIcon: 'false',
                        showCloseButton: 'false',
                        swipeClose: 'false',
                        timeout: 3600,
                    })
            error.value = "Merci de charger un fichier pdf";
            window.scrollTo(0, 0);
        }

    } else {
        createToast("Merci de charger un fichier pdf.",
                    {
                        position: 'top-right',
                        type: 'danger',
                        transition: 'bounce',
                        hideProgressBar: 'false',
                        showIcon: 'false',
                        showCloseButton: 'false',
                        swipeClose: 'false',
                        timeout: 3600,
                    })
        error.value = "Merci de charger un fichier pdf";
        window.scrollTo(0, 0);
    }
};


const savefiles = async (urls) => {
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    axiosClient.post('/api/addfactures', postFormData2, config, {})
        .then(response => {

            if (response.data.data) {
                 getdetailCommandes(route.params.id);

                 attachments.value="";   
                 optionsfichier.value="";   
                 objets.value=""; 
                 filesx.value=""; 

                 createToast("Fichier ajouter  avec succès.",
                    {
                        position: 'top-right',
                        type: 'success',
                        transition: 'bounce',
                        hideProgressBar: 'false',
                        showIcon: 'false',
                        showCloseButton: 'false',
                        swipeClose: 'false',
                        timeout: 3600,
                    })
            }

        }).catch(function (error) {

            console.error(error);
        });
 }

const downloadImage = async (urls) => {
    window.open(urls, '_blank');
 }

const sendMailsDevis = async (fichiers,idOrders,typesfactures,objetfactures) => {
   
        axiosClient.post('/api/sendEmailsDevis', {
                    fichiers: fichiers,
                    idOrders: idOrders,
                    typesfactures: typesfactures,
                    objetfactures: objetfactures,

                }).then(response => {
                createToast("Mail transmis avec succès.",
                    {
                        position: 'top-right',
                        type: 'success',
                        transition: 'bounce',
                        hideProgressBar: 'false',
                        showIcon: 'false',
                        showCloseButton: 'false',
                        swipeClose: 'false',
                        timeout: 3600,
                    })

            }).catch(function (error) {
             
            });

        // sendEmailsDevis(fichiers,idOrders);
 }

const printed = async (id) => {
    var uri = 'api/getInvoice/';
    var link = urls + uri + id;
    window.open(link, '_blank');
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

});

</script>

<style scoped>

    input[type=file]::file-selector-button {
    margin-right: 10px;
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