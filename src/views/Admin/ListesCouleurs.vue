<template>

    <main class="main">

        <section class="section block-content-shop">
            <div class="container">
                <div class="row">

                    <Menu/>

                    <div class="col-lg-10">
                        <FilterTop :notifications="notifications"/>

                        <div class="row mb-6">

                            <div class="col-md-8 mb-3">
                                <button type="button" class="btn btn-prim" @click="addCatégories"> <ion-icon size="small" name="create-outline"></ion-icon>CREE UNE COULEUR </button>&nbsp;&nbsp;
                            </div>

                                <br>
                                    <section class="section block-head"> 
                                        <div class="container"> 
                                            <div class="text-center"> 
                                                <h3>LISTE DES COULEURS</h3>
                                            </div>
                                        </div>
                                    </section>
                                <br>

                            <div class="vl-parent">
                                    <loading v-model:active="isLoading"  :can-cancel="true" :on-cancel="onCancel" :is-full-page="fullPage"/>
                            </div>

                            <div class="col-md-12 mb-4 dataTable-container table-responsive">

                                    <div class="table-responsive text-nowrap">
                                        <table class="table table-striped">

                                            <thead>
                                                <tr>
                                                    <th>Nom de la couleur</th>
                                                    <!-- <th>Date de créations</th> -->
                                                    <th>Statut</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>

                                            <tbody>

                                                <tr v-for="item in colors" :key="item.id_couleurs">

                                                    <th scope="row"> 
                                                            <!-- <div class="block-size"> -->
                                                                <div class="box-list-sizes">
                                                                     <div class="list-sizes">
                                                                        <span  class="item-size  mb-10"> {{item.name_couleurs}} </span>
                                                                    </div>
                                                                </div>
                                                            <!-- </div> -->
                                                     </th>

                                                    <!-- <th scope="row">{{ moment(item.created_at).format('DD-MM-YYYY') }}</th> -->
                                                    <th scope="row">
                                                        <span v-if="item.state_couleurs==1" class="btn btn-prim  text-center">Activé</span>
                                                        <span v-else class="btn btn-red  text-center">Desactivé</span>
                                                    </th>

                                                    <td>
                                                        <a  v-if="item.state_couleurs==1" class="" @click="valide(item.id_couleurs,0)" href="javascript:void(0)"> <ion-icon size="small" name="lock-closed-outline"></ion-icon>  </a> &nbsp;
                                                        <a v-else class="" @click="valide(item.id_couleurs,1)" href="javascript:void(0)"> <ion-icon size="small" name="lock-open-outline"></ion-icon> </a>&nbsp;

                                                        <a class=""  @click="edit(item.id_couleurs)" href="javascript:void(0)"> <ion-icon size="small" name="create-outline"> </ion-icon> </a>&nbsp;
                                                        <a class="" @click="deletes(item.id_couleurs)" href="javascript:void(0)"> <ion-icon size="small" name="trash-outline"></ion-icon></a>
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
                                                <div class="row justify-content-center">
                                                    <div class="col-xl-12 text-center">
                                                        <div class="section-title text-center">
                                                            <h5 class="section-main-title mb-35">DETAIL DU COMPTE</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <br>

                                            <div class="modal-body">

                                                <div class="row">

                                                    <div class="col-md-3">
                                                        <div v-if="photos" class="product-img">
                                                            <img :src="('/'+photos)"  width="150" class="img-responsive" alt="">
                                                        </div>

                                                    <div v-else class="product-img">
                                                        <img src="/images/user5.jpg" width="150"  alt="" class="rounded-circle  mb-2"/>
                                                    </div>

                                                    </div>

                                                    <div class="col-md-12">
                                                        <label for=""> Nom/Prenom</label>
                                                        <div class="form-group">
                                                            <input v-model="nomPrenoms"  type="text" class="form-control form-account" name="" >
                                                        </div>
                                                    </div>

                                                    <div class="col-md-12 ">
                                                        <label for=""> EMAIL</label>
                                                        <div class="form-group">
                                                            <input v-model="email" @change="verifemail" type="text" class="form-control form-account" name="" >
                                                        </div>
                                                    </div>

                                                    <div class="col-md-12 ">
                                                        <label for=""> TELEPHONE</label>
                                                        <div class="form-group">
                                                            <input v-model="numero" type="number" class="form-control form-account" name="" >
                                                        </div>
                                                    </div>

                                                    <div class="col-md-12 ">
                                                        <label for=""> ENTREPRISE</label>
                                                        <div class="form-group">
                                                            <input v-model="nom_ntreprise" type="number" class="form-control form-account" name="" >
                                                        </div>
                                                    </div>

                                                    <div class="col-md-12 ">
                                                        <label for=""> PAYS</label>
                                                        <div class="form-group">
                                                            <input v-model="pays" type="number" class="form-control form-account" name="" >
                                                        </div>
                                                    </div>

                                                    <div class="col-md-12 ">
                                                        <label for=""> VILLE</label>
                                                        <div class="form-group">
                                                            <input v-model="villes" type="number" class="form-control form-account" name="" >
                                                        </div>
                                                    </div>

                                                    <div class="col-md-12 ">
                                                        <label for=""> QUARTIER</label>
                                                        <div class="form-group">
                                                            <input v-model="quartiers" type="number" class="form-control form-account" name="" >
                                                        </div>
                                                    </div>

                                                    <div class="col-md-12 ">
                                                        <label for=""> lIEU DE LIVRAISON</label>
                                                        <div class="form-group">
                                                            <input v-model="livraisons" type="number" class="form-control form-account" name="" >
                                                        </div>
                                                    </div>

                                                    <div class="col-md-12 ">
                                                        <label for="">TYPE DE COMPTE</label>
                                                        <div class="form-group">
                                                            <input v-model="is_admin" type="number" class="form-control form-account" name="" >
                                                        </div>
                                                    </div>

                                                    <div class="col-md-12">
                                                        <button @click="addvendeurs" class="btn btn-prim">Mettre à jour les informations</button>
                                                    </div>

                                                </div>

                                            </div>

                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-red" @click="Modalhide(1)" data-dismiss="modal">Cancel</button>
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
import useHomes from "../../composable/Homes";
import useBlogs from "../../composable/Blogs";
import Pagination from '../../components/Pagination.vue';
import useProduits from "../../composable/Produits";
import { useRouter, useRoute } from 'vue-router';
import router from "../../router/index";
import { useShoppingStore } from '../../store/index';
import { createToast } from 'mosha-vue-toastify';
import moment from 'moment';
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import Swal from 'sweetalert2'

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
    const attachments = ref([]);
    const filesx = ref('');
    const libelle = ref('');
    const Urlimages = ref('');
    const id_couleur = ref('');
    const name = ref('');
    const tabs = ref(1);
    const showDiv = ref(0);
    const tableau = ref([]);
    const selected = ref([]);
    const options1 = ref([]);
    const datacategories = ref([]);
    const categories_id_sub = ref('');

    const Datapaginations = 1;
    const {getAllCouleurs,deleteCouleurs,changesstatCouleurs,responseMsg, paginations,colors, Categories } = useProduits();

    onMounted(async () => {
        await getAllCouleurs(Datapaginations);
    });


    const isLoading = ref(false);
    const fullPage = ref(true);

    const getData = async () => {
    };

    const Loadings = async () => {
        isLoading.value = true;
        setTimeout(() => { isLoading.value = false }, 300)
    };

    const searchData = async (data) => {
        await Loadings();
        await getAllCouleurs(data);

    };


    const addCatégories = async (id) => {
        libelle.value = "";
        id_couleur.value = "";
        $('#userFormModal').modal('show');
        showDiv.value = 1;
    };

    const Modalhide = async (id) => {
        libelle.value = "";
        id_couleur.value = "";
        if (id == 1) {
            $('#userFormModal').modal('hide');
        }

    };

    const valide = async (id,item) => {

        if (item==0) {

            Swal.fire({

                title: 'Attention !',
                text: "Voulez-vous vraiment Activé cette sous catégorie ?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'OUI',
                cancelButtonText: 'NOM'

                }).then((result) => {

                    if (result.isConfirmed) {
                        //   requet avec reponse
                        axiosClient.get('/api/changesstatCouleurs/'+id+'/'+item)
                        .then(response => {
                            let vars =1;
                            getAllCouleurs(vars);
                            tabs.value = 1,
                            message.value  = responseMsg;
                            tabcategories.value  = Categories;
                            createToast("categories Activé avec succès!",
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
                    }

                })

        }else{

            Swal.fire({
            title: 'Attention !',
            text: "Voulez-vous vraiment desacctivé cette sous catégorie ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'OUI',
            cancelButtonText: 'NOM'

            }).then((result) => {

                if (result.isConfirmed) {
                        //   requet avec reponse
                        axiosClient.get('/api/changesstatCouleurs/'+id+'/'+item)
                        .then(response => {

                            let vars =1;
                            getAllCouleurs(vars);
                            tabs.value = 1,
                            message.value  = responseMsg;
                            tabcategories.value  = Categories;
                            createToast("categories desacctivé avec succès!",
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

                }

            })

        }


        };

    const deletes = async (id) => {

        Swal.fire({

            title: 'Attention !',
            text: "Voulez-vous vraiment supprimer cette catégorie ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Supprimer',
            cancelButtonText: 'Annuler'

        }).then((result) => {

            if (result.isConfirmed) {
                deleteCouleurs(id);
                let data = 1;
                getAllCouleurs(data);
                message.value = responseMsg;
                tabcategories.value = Categories;
                createToast("Couleur supprimer avec succès!",
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

                tabs.value = 1;
            }
        })



    };

    const addclick = async (e) => {
        e.preventDefault();
        axiosClient.post('/api/SaveCouleurs', {
            libelle: libelle.value,
        }).then(response => {
            $('#userFormModal').modal('hide');
            libelle.value = "";
            message.value = response.data.messages;
            let data=1;
            getAllCouleurs(data);
            createToast("Couleur ajouter avec succes!",
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

            window.scrollTo(0, 0);
            setInterval(() => {
                message.value = "";
            }, 2500);

            }).catch(response => {

            });
    };


    const update = async (e) => {
        e.preventDefault();
        axiosClient.post('/api/updateCouleurs', {
            id_couleur: id_couleur.value,
            libelle: libelle.value,

        }).then(response => {

            $('#userFormModal').modal('hide');
            libelle.value = "";
            message.value = "Opération effectuée avec succès";
            let data=1;
            getAllCouleurs(data);
            createToast("Couleur mise à jour avec succes!",
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

           window.scrollTo(0, 0);
            setInterval(() => {
                message .value = "";
            }, 2500);

        }).catch(response => {

        });
    };

    const edit = async (id) => {
        axiosClient.get('/api/editCouleurs/'+id)

            .then(response => {
                let tableaus = response.data.data;

                tableaus.map(function (element) {

                    id_couleur.value = element.id_couleurs;
                    libelle.value = element.name_couleurs;
                });

            }).catch(function (error) {

                window.scrollTo(0, 0);
                console.error(error);

            });

        $('#userFormModal').modal('show');

    };


    watchEffect(() => {

        if (Categories.value.length) {

            let tables1 = [];
            Categories.value.map(function (element) {
                const objet = {
                    id: element.id_couleur_produits,
                    label: element.libelle_categories_produits,
                }
                tables1.push(objet);
            })
            options1.value = tables1;
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