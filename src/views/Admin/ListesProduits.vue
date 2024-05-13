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

                            <div class="row mb-6">

                                <div class="col-md-10">
                                    <a href="/Admin/CreateProduits" type="button" class="btn btn-prim"> CREE UN NOUVEAU PRODUIT</a>

                                        <div class="row">
                                             <br>
                                                <section class="section block-head"> 
                                                    <div class="container"> 
                                                            <div class="text-center"> 
                                                                <h3>LISTE DES PRODUITS</h3>
                                                            </div>
                                                    </div>
                                                </section>

                                                <div class="col-md-6 form-customer des-font">
                                                    <div class="form-group">
                                                        <label> De la date de </label>
                                                        <input type="date" class="form-control form-account" v-model="checkByDate" placeholder="Search Products.....">
                                                    </div>
                                                </div>

                                                <div class="col-md-6 form-customer des-font">
                                                    <div class="form-group">
                                                        <label> à </label>
                                                        <input type="date" class="form-control form-account" v-model="checkByDate1" placeholder="Search Products.....">
                                                    </div>
                                                </div>

                                                <div class="col-md-6 form-customer des-font">
                                                    <div class="form-group">
                                                        <label> Ctegories </label>
                                                        <v-select  v-model="selected1" :reduce="(option) => option.id" :options=options1  class="default-select form-control-lg" />
                                                    </div>
                                                </div>

                                                <div class="col-md-6 form-customer des-font">
                                                    <div class="form-group">
                                                        <label> Boutique </label>
                                                        <v-select  v-model="selected" :reduce="(option) => option.id" :options=options class="default-select form-control-lg" />
                                                    </div>
                                                </div>
                                        </div>

                                </div>

                                <div class="col-md-12 mb-4 dataTable-container table-responsive">

                                    <div class="table-responsive text-nowrap">
                                            <table class="table table-striped">

                                                <thead>
                                                    <tr>
                                                        <th>Images</th>
                                                        <th>Libelle</th>
                                                        <th>Boutique</th>
                                                        <th>Quantité</th>
                                                        <th>Prix</th>
                                                        <th>Prix de vente</th>
                                                        <th>Etat</th>
                                                        <th>Catalloges</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                        <tr v-for="item in tabproduits" :key="item.id_products">
                                                            <th scope="row"><img :src="url+item.imageUrl" width="30"  class="mb-2" alt=""></th>
                                                            <th scope="row"> {{item.name_product}} </th>
                                                            <th scope="row"> {{item.nom_stores}} </th>
                                                            <th scope="row"> {{item.stoks}} </th>
                                                            <th scope="row"> {{item.price}} </th>
                                                            <th scope="row"> {{item.Sale_price}} </th>
                                                            <th scope="row">
                                                                
                                                                <span class="btn btn-prim btn-sm text-center"  v-if="item.status_products==1">Publier </span>
                                                                <span class="btn btn-red btn-sm text-center"  v-if="item.status_products==0">En attente </span>
                                                            </th>

                                                            <th>
                                                                <a class=""  @click="addUser(item.id_products)"> <ion-icon size="small" name="images-outline"> </ion-icon> </a>&nbsp;
                                                                <a class=""  @click="showCatalorge(item.id_products)"> <ion-icon size="small" name="document-outline"> </ion-icon> </a>
                                                            </th>

                                                            <td> 
                                                                <a class="" :href="'/Admin/EditProduits/'+item.code_products" > <ion-icon size="small" name="create-outline"></ion-icon> </a>&nbsp;
                                                                <a class=""  :href="FichesProduits"> <ion-icon size="small" name="document-outline"> </ion-icon> </a>&nbsp;
                                                                <a  class="" @click="setting(item.id_products)" > <ion-icon size="small" name="cog-outline"> </ion-icon> </a>&nbsp;
                                                                <a v-if="item.status_products==1" @click="changes(item.id_products,0)"  class="item-color color-5" > <ion-icon size="small" name="lock-closed-outline"></ion-icon>  </a>&nbsp;
                                                                <a v-if="item.status_products==0" @click="changes(item.id_products,1)" class="item-color color-5">  <ion-icon size="small" name="lock-open-outline"></ion-icon></a>&nbsp;
                                                                <a  class="" @click="deletes(item.id_products)" > <ion-icon size="small" name="trash-outline"></ion-icon></a>
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
                                                <div class="modal-header">
                                                    <h6 class="modal-title" id="staticBackdropLabel">
                                                        <span > Catalogue produits</span>
                                                    </h6>
                                                    <button type="button" class="close btn btn-red" @click="Modalhide(1)" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <form>

                                                    <div class="modal-body">

                                                        <div class="row mb-4">
                                                            <div v-for="item in Tablecatalogue" :key="item.id_catalogue" class="col-md-4 mb-3">
                                                                <img :src="url+item.Urlcatalogue" width="200"  class="img-fluid rounded shadow-sm ext-center card mb-10" alt="" />
                                                                <a class="btn btn-red btn-sm" @click="removeImage(item.id_catalogue,item.id_produits)">Supprimer l'image</a>
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
                                                    <h6 class="modal-title" id="staticBackdropLabel">
                                                        <span> Ajouter des images aux catalogue du produits</span>
                                                    </h6>
                                                    <button type="button" class="close btn btn-red" @click="Modalhide(2)" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <form>

                                                    <div class="modal-body">

                                                        <div class="row mb-4">
                                                            <div class="col-md-12">
                                                                <div class="form-group">
                                                                    <h4> <label for="exampleInputEmail1">Images *</label></h4>
                                                                <input id="files" type="file" multiple class="" ref="file" name="files" @change="fieldChange">
                                                                </div>
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

                            <div class="modal fade bd-example-modal-xl" id="setting" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h6 class="modal-title" id="staticBackdropLabel">
                                                        <span>Parametrage</span>
                                                    </h6>
                                                    <button type="button" class="close btn btn-red" @click="Modalhide(3)"  data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>

                                                    <div class="modal-body">

                                                        <div class="row mb-4">

                                                            <div class="col-md-12">
                                                                <div class="form-group">
                                                                    <h4> <label for="exampleInputEmail1">Selectionner une options sur le produits *</label></h4>
                                                                    <v-select v-model="selectedParams" :reduce="(option) => option.id" :options=Parametres style="background-color:beige width:200px; font-size: 18px" class=" default-form form-control-xs" />
                                                                </div>
                                                            </div>

                                                            <div v-if="selectedParams==1" class="col-md-12">
                                                                <div class="form-group">
                                                                    <h4> <label for="exampleInputEmail1">Selectionner La couleur</label>  </h4>
                                                                    <v-select multiple v-model="radio" :reduce="(option) => option.id" :options=colorsTab style="background-color:beige width:200px; font-size: 18px" class=" default-form form-control-xs" />
                                                                </div>
                                                            </div>

                                                            <div v-if="selectedParams==1" class="col-md-12">
                                                                <div class="form-group">
                                                                <h4> <label for="exampleInputEmail1">Saisiser le prix *</label></h4>
                                                                    <input style="font-size: 18px;" v-model="prix" type="number" class="form-control form-account" name="" placeholder="Nom du produit*">
                                                                </div>
                                                            </div>

                                                            <div v-if="selectedParams==2 && btnShow==1" class="col-md-12">
                                                                <div class="form-group">
                                                                <h4> <label for="exampleInputEmail1">Saisiser la taille *</label></h4>
                                                                    <input style="font-size: 18px;" v-model="tailles" type="text" class="form-control form-account" name="" placeholder="XL*">
                                                                </div>
                                                            </div>

                                                            <div v-if="selectedParams==2 && btnShow==1" class="col-md-12">
                                                                <div class="form-group">
                                                                <h4> <label for="exampleInputEmail1">Saisiser le prix *</label></h4>
                                                                    <input style="font-size: 18px;" v-model="prix" type="number" class="form-control form-account" name="" placeholder="Nom du produit*">
                                                                </div>
                                                            </div>

                                                            <div v-if="selectedParams==3 && btnShow==1" class="col-md-12">
                                                                <div class="form-group">
                                                                <h4> <label for="exampleInputEmail1">Saisiser la Pointure *</label></h4>
                                                                    <input style="font-size: 18px;" v-model="pointures" type="text" class="form-control form-account" name="" placeholder="32">
                                                                </div>
                                                            </div>

                                                            <div v-if="selectedParams==3 && btnShow==1" class="col-md-12">
                                                                <div class="form-group">
                                                                <h4> <label for="exampleInputEmail1">Saisiser le prix *</label></h4>
                                                                    <input style="font-size: 18px;" v-model="prix" type="number" class="form-control form-account" name="" placeholder="Nom du produit*">
                                                                </div>
                                                            </div>



                                                            <div v-if="selectedParams==5 && btnShow==1" class="col-md-12">
                                                                <div class="form-group">
                                                                <h4> <label for="exampleInputEmail1">Dimensions (m) *</label></h4>
                                                                    <input style="font-size: 18px;" v-model="dimensions" type="text" class="form-control form-account" name="" placeholder="10">
                                                                </div>
                                                            </div>

                                                            <div v-if="selectedParams==5 && btnShow==1" class="col-md-12">
                                                                <div class="form-group">
                                                                <h4> <label for="exampleInputEmail1">Saisiser le prix*</label></h4>
                                                                    <input style="font-size: 18px;" v-model="prix" type="number" class="form-control form-account" name="" placeholder="Nom du produit*">
                                                                </div>
                                                            </div>


                                                            <div v-if="selectedParams==6 && btnShow==1" class="col-md-12">
                                                                <div class="form-group">
                                                                <h4> <label for="exampleInputEmail1">Texte sur le produits*</label></h4>
                                                                    <input style="font-size: 18px;" v-model="texteProduits" type="text" class="form-control form-account" name="" placeholder="OUI">
                                                                </div>
                                                            </div>

                                                            <div v-if="selectedParams==6 && btnShow==1" class="col-md-12">
                                                                <div class="form-group">
                                                                <h4> <label for="exampleInputEmail1">Saisiser le prix*</label></h4>
                                                                    <input style="font-size: 18px;" v-model="prix" type="number" class="form-control form-account" name="" placeholder="Nom du produit*">
                                                                </div>
                                                            </div>

                                                            <div v-if="selectedParams==7 && btnShow==1" class="col-md-12">
                                                                <div class="form-group">
                                                                <h4> <label for="exampleInputEmail1">Texte sur le produits*</label></h4>
                                                                    <input style="font-size: 18px;" v-model="logoParams" type="text" class="form-control form-account" name="" placeholder="OUI">
                                                                </div>
                                                            </div>

                                                            <div v-if="selectedParams==7 && btnShow==1" class="col-md-12">
                                                                <div class="form-group">
                                                                <h4> <label for="exampleInputEmail1">Saisiser le prix*</label></h4>
                                                                    <input style="font-size: 18px;" v-model="prix" type="number" class="form-control form-account" name="" placeholder="Nom du produit*">
                                                                </div>
                                                            </div>


                                                            <div v-if="selectedParams==4" class="col-md-12">
                                                                <div class="form-group">
                                                                <h4> <label for="exampleInputEmail1">Saisiser le prix*</label></h4>
                                                                    <input style="font-size: 18px;" v-model="prix" type="number" class="form-control form-account" name="" placeholder="Nom du produit*">
                                                                </div>
                                                            </div>

                                                            <div v-if="selectedParams==4" class="col-md-12">

                                                            <div class="form-group">
                                                                <h4> <label for="exampleInputEmail1">Ajouter le/les  image(s) du pagne*</label></h4>
                                                                <input id="files" type="file" multiple class="" ref="file" name="files" @change="onFileChange">
                                                            </div>

                                                            </div>

                                                            <div v-if="images.length" class="col-md-12 text-center">
                                                                <div class="form-group row">
                                                                    <div v-for="(image, index) in images" class="card col-md-3">
                                                                        <img class="card-img-top" :src="image" width="200" alt="Card image">
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <button v-if="selectedParams==4"  @click="SaveData" type="button" class="btn btn-prim">Sauvegarder...</button>
                                                        <button v-if="selectedParams==1 || selectedParams==2  || selectedParams==3 || selectedParams==5 || selectedParams==6 || selectedParams==7 && btnShow==1" @click="AddParametre" type="button" class="btn btn-prim uppercase">Sauvegarder</button> &nbsp; &nbsp;
                                                        <button type="button" class="btn btn-red" @click="Finish" data-dismiss="modal">Terminer</button>

                                                    </div>

                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-red" @click="Modalhide(3)" data-dismiss="modal">Cancel</button>
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
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import useHomes from "../../composable/Homes";
import loader from '../../components/loader.vue';
import useBlogs from "../../composable/Blogs";
import Pagination2 from '../../components/Pagination2.vue';
import useProduits from "../../composable/Produits";
import { useRouter, useRoute } from 'vue-router';
import router from "../../router/index";
import { useShoppingStore } from '../../store/index';
import { createToast } from 'mosha-vue-toastify';
import moment from 'moment';
import axios from 'axios';
import Swal from 'sweetalert2';

import url from "../../../ImgUrl";
import axiosClient from "../../../ApiServices";

const data = useShoppingStore();
const route = useRoute();
const datas = 1;
const usersid = localStorage.getItem("auth_users");

const showModal = ref(false);
const viewMenu = ref(0);
const Type = ref('');
const slug = ref('');
const isOpened = ref(false);
const error = ref('');
const pays = ref('');
const message = ref('');
const tabcategories = ref([]);
const searchProduct = ref('');
const libelle = ref('');
const Urlimages = ref('');
const id_categories = ref('');
const name = ref('');
const tabs = ref(1);
const showDiv = ref(0);
const tableau = ref([]);

const tabproduits = ref([]);
const checkByDate = ref('');
const checkByDate1 = ref('');

const id_produits = ref('');
const Tablecatalogue = ref([]);
const Tablesetting = ref([]);
const images = ref([]);
const options = ref([]);
const selected = ref([]);

const options1 = ref([]);
const selected1 = ref([]);
const produitsFormData = new FormData();
const attachments = ref([]);
const filesx = ref('');
const positions = ref([]);

const fichiers = ref([]);

const Datapaginations = 1;
const { Products, getAllproduis, nbProducts,getAllPropriete,colors,status_products, responseMsg, deleteproducts, boutiques, getAllboutiquesByAdd, getAllcategoriesBySearche, Categories, paginations } = useProduits();
const {paramsColors, paramsColorsPrice} = useHomes();

onMounted(async () => {
    await getAllproduis(Datapaginations);
    await getAllcategoriesBySearche();
    await getAllPropriete();
    await getAllboutiquesByAdd();
});


const loadings = ref(1);
setTimeout(() => {
    loadings.value = 0;
}, 2000);

const valueradio = ref('');
const prix = ref(0);
const UrlImages = ref(0);
const DataUrlImages = ref(0);

const tailles = ref('OUI');
const pointures = ref('OUI');
const Pagnes = ref('');
const dimensions = ref('OUI');
const texteProduits = ref('OUI');
const logoParams = ref('OUI');
const btnShow = ref(0);

const selectedParams = ref([]);
const Parametres = ref([]);
const radio = ref([]);
const colorsTab = ref([]);

const optionpParametre = [
    {
        id: 1,
        label: 'Couleurs',
        value: 'Couleurs',
    },
    {
        id: 2,
        label: 'Tailles',
        value: 'Tailles',
    },
    {
        id: 3,
        label: 'pointures',
        value: 'pointures',
    },
    {
        id: 4,
        label: 'Pagnes',
        value: 'Pagnes',
    },
    {
        id: 5,
        label: 'Dimensions',
        value: 'Dimensions',
    },
    {
        id: 6,
        label: 'Texte',
        value: 'Texte',
    },
    {
        id: 7,
        label: 'Logo',
        value: 'Logo',
    },

];

const getData = async () => {
};

const loading = async () => {
    setTimeout(() => {
        loadings.value = 0;
    }, 300)
};

const searchData = async (data) => {
    await loading();
    await getAllproduis(data);
    tabproduits.value = Products.value;
};

const removeImage = async (cataloges, produits) => {
    Swal.fire({
        title: 'Attention !',
        text: "Voulez-vous vraiment supprimer ce image ?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Oui',
        cancelButtonText: 'Annuler'
    }).then((result) => {
        if (result.isConfirmed) {
            axiosClient.get('/api/removeImages/' + cataloges + '/' + produits)
                .then(response => {
                    addUser(produits);
                    getAllproduis();
                    message.value = "Images activé avec succès";
                }).catch(function (error) {

                });
        }
    })
};

const changes = async (id, item) => {

    if (item == 1) {

        Swal.fire({
            title: 'Attention !',
            text: "Voulez-vous vraiment activé ce produit ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Oui',
            cancelButtonText: 'Annuler'
        }).then((result) => {

            if (result.isConfirmed) {
                let status = 1;
                status_products(id, status);
                getAllproduis();
                message.value = "Produit activé avec succès";
                createToast("Produit activé avec succès!",
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
        })

    } else if (item == 0) {

        Swal.fire({
            title: 'Attention !',
            text: "Voulez-vous vraiment desactivé ce produit ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Oui',
            cancelButtonText: 'Annuler'
        }).then((result) => {

            if (result.isConfirmed) {
                let status = 0;
                status_products(id, status);
                getAllproduis();
                message.value = "Produit desactivé avec succès";
                createToast("Produit desactivé avec succès!",
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
        })

    }
};


const deletes = async (id) => {
    Swal.fire({
        title: 'Attention !',
        text: "Voulez-vous vraiment supprimer ce produit ?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Supprimer',
        cancelButtonText: 'Annuler'
    }).then((result) => {

        if (result.isConfirmed) {
            deleteproducts(id);
            message.value = responseMsg.value;
            getAllproduis();
            createToast("Produit supprimer avec succès!",
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
    })

};

const onFileChange = async (e) => {
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;
    createImage(files);
};

const createImage = async (item) => {

    for (let index = 0; index < item.length; index++) {
        positions.value.push(index + 1);
        fichiers.value.push(item[index]);
        produitsFormData.append('files[]', item[index]);
        let reader = new FileReader();

        reader.onload = function (event) {
            const imageUrl = event.target.result;
            images.value.push(imageUrl);
        }
        reader.readAsDataURL(item[index]);


    }
    // console.log(positions.value)
    produitsFormData.append('selectedParams', selectedParams.value);
    produitsFormData.append('id_produits', id_produits.value);
    produitsFormData.append('positions', positions.value);
    produitsFormData.append('prix', prix.value);
    produitsFormData.append('usersid', usersid);

};

const AddParametre = async (e) => {
    e.preventDefault();
    axiosClient.post('/api/addparametre', {
        dimensions: dimensions.value,
        texteProduits: texteProduits.value,
        logoParams: logoParams.value,
        id_produits: id_produits.value,
        prix: prix.value,
        couleur: radio.value,
        tailles: tailles.value,
        pointures: pointures.value,
        selectedParams: selectedParams.value,
        usersid: usersid,

    }).then(res => {
        createToast("Parametre ajouter avec succès!",
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
    }).catch(err => console.log(err));

};

const SaveData = async (e) => {
    e.preventDefault();
    const urls = '/api/addparametre';
    axiosClient.post(urls, produitsFormData, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then((res) => {
            createToast("Parametre ajouter avec succès!",
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
        })
};

const fieldChange = async (e) => {
    console.log(e);
    attachments.value = e.target.files;
    let formData = new FormData();
    const url = '/api/fileupload';
    for (var i = 0; i < files.length; i++) {
        let file = files[i];
        formData.append('files[' + i + ']', file);
    }
    axiosClient.post(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } }).then((res) => {
        $('#userFormModal2').modal('hide')
        message.value = "Catallogue ajouter avec succes"
        createToast("Catallogue ajouter avec succès!",
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
    })
};

const addUser = async (id) => {

    if (id > 0) {
        axiosClient.get('/api/getcatalogue/' + id)
            .then(response => {
                $('#userFormModal').modal('show');
                Tablecatalogue.value = response.data.data;

            }).catch(function (error) {

                Tablecatalogue.value = [];
                console.error(error);
            });

    } else {

        Tablecatalogue.value = [];
    }
};

const showCatalorge = async (id) => {
    $('#userFormModal2').modal('show');
    id_produits.value = id;
};

const setting = async (id) => {

    prix.value = "";
    $('#setting').modal('show');
    id_produits.value = id;
};

const Finish = async () => {
    router.go();
}

const Modalhide = async (id) => {

    if (id == 1) {
        $('#userFormModal').modal('hide');
    } else if (id == 2) {
        $('#userFormModal2').modal('hide');
    } else if (id == 3) {
        $('#setting').modal('hide');
    }
};


watchEffect(() => {

    if (selectedParams.value > 0) {
        btnShow.value = 0;
        if (selectedParams.value == 2 || selectedParams.value == 3 || selectedParams.value == 5 || selectedParams.value == 6 || selectedParams.value == 7) {

            axiosClient.get('/api/checkPrams/' + selectedParams.value + '/' + id_produits.value)
                .then(response => {
                    if (response.data.data.length > 0) {
                        createToast("Cette option a été déja ajouter à ce produit !",
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
                    } else {
                        btnShow.value = 1;
                    }

                }).catch(function (error) {

                    btnShow.value = 0;
                });

        } else {
            btnShow.value = 0;
        }


    }

    if (Categories.value.length > 0) {

        let tables1 = [];
        Categories.value.map(function (element) {
            const objet = {

                id: element.id_categories_produits,
                label: element.libelle_categories_produits,
            }
            tables1.push(objet);
        })
        options1.value = tables1;
    };

    if (Products.value) {
        tabproduits.value = Products.value;
    };

    if (selected.value.length > 0) {

        error.value = "";
        axiosClient.get('/api/searchProductByStores/' + selected.value)
            .then(response => {
                tabproduits.value = response.data.data;
                error.value = "";

            }).catch(function (error) {
                tabproduits.value = [];
            });

    } else {

        tabproduits.value = Products.value;
        error.value = "Veiller selectionner une interval de date svp!";
        // createToast("Veiller selectionner une interval de date svp!",
        //     {
        //         position: 'top-right',
        //         type: 'danger',
        //         transition: 'bounce',
        //         hideProgressBar: 'false',
        //         showIcon: 'false',
        //         showCloseButton: 'false',
        //         swipeClose: 'false',
        //         timeout: 3600,
        //     })

    };

    if (checkByDate1.value && checkByDate.value) {

        error.value = "";
        axiosClient.get('/api/searchProductbyDate/' + checkByDate1.value + '/' + checkByDate.value)
            .then(response => {

                tabproduits.value = response.data.data;
                error.value = "";

            }).catch(function (error) {
                tabproduits.value = [];
            });

    } else {
        error.value = "Veiller selectionner une interval de date svp !";
    };

    if (searchProduct.value.length > 0) {

        axiosClient.get('/api/searchProduct/' + searchProduct.value)
            .then(response => {
                tabproduits.value = response.data.data;
            }).catch(function (error) {
                tabproduits.value = [];
            });

    } else {
        tabproduits.value = Products.value;
    };

    if (boutiques.value.length > 0) {

        let tables2 = [];
        boutiques.value.map(function (element) {
            const objet = {
                id: element.id_stores,
                label: element.nom_stores,
            }
            tables2.push(objet);
        })
        options.value = tables2;
    };

    if (optionpParametre) {
        let tables1 = [];
        optionpParametre.map(function (element) {
            const objet = {
                id: element.id,
                label: element.label,
            }
            tables1.push(objet);
        })
        Parametres.value = tables1;
    }

    if (colors.value.length > 0) {

        let tables1 = [];
        colors.value.map(function (element) {
            const objet1 = {
                id: element.id_couleurs,
                label: element.name_couleurs,
            }
            tables1.push(objet1);
        })
        colorsTab.value = tables1;
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