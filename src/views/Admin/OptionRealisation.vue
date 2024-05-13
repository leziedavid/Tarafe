<template>

    <main class="main">

        <section class="section banner-homepage6">
                <div class="container-fluid mb-3">
                    <br>

                <div class="row">

                    <Menu/>

                    <div class="col-lg-10">
                        <FilterTop :notifications="notifications"/>

                        <div class="row mb-6">

                            <div class="col-md-8 mb-3">
                                <button type="button" class="btn btn-prim" @click="addCatégories"> <ion-icon size="small" name="create-outline"></ion-icon>CREE UNE CATEGORIE </button>&nbsp;&nbsp;
                            </div>

                                <br>
                                    <section class="section block-head"> 
                                        <div class="container"> 
                                            <div class="text-center"> 
                                                <h3>LISTE DES CATEGORIES</h3>
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
                                                    <th>Libelle</th>
                                                    <th>Statut</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>

                                            <tbody v-if="OptionRealisation.length>0">

                                                <tr v-for="item in OptionRealisation" :key="item.id_option_reaalisation">

                                                    <th style="font-size:18px" scope="row"> 
                                                        {{item.libelleOption_reaalisation}}
                                                     </th>

                                                    <th scope="row">
                                                        <span v-if="item.stateOption_reaalisation==1" class="btn btn-prim  text-center">Activé</span>
                                                        <span v-else class="btn btn-red  text-center">Desactivé</span>
                                                    </th>

                                                    <td>
                                                        <a  v-if="item.stateOption_reaalisation==1" class="" @click="valide(item.id_option_reaalisation,0)" href="javascript:void(0)"> <ion-icon size="small" name="lock-closed-outline"></ion-icon>  </a> &nbsp;
                                                        <a v-else class="" @click="valide(item.id_option_reaalisation,1)" href="javascript:void(0)"> <ion-icon size="small" name="lock-open-outline"></ion-icon> </a>&nbsp;

                                                        <a class=""  @click="edit(item.id_option_reaalisation)" href="javascript:void(0)"> <ion-icon size="small" name="create-outline"> </ion-icon> </a>&nbsp;
                                                        <a class="" @click="deletes(item.id_option_reaalisation)" href="javascript:void(0)"> <ion-icon size="small" name="trash-outline"></ion-icon></a>
                                                    </td>

                                                </tr>

                                            </tbody>

                                            <tbody v-else>

                                                <h6  class=" text-center item-size  mb-10">AUCUNE DONNEE DISPONIBLE </h6>

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
                                                            <h5  v-if="id_option_realisation>0"  class="section-main-title mb-35">MODIFICATION DE CATEGORIE</h5>
                                                            <h5 v-else class="section-main-title mb-35"> NOUVELLE CATEGORIE </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <br>

                                            <div class="modal-body">

                                                <div class="row">

                                                    <div class="col-md-12">
                                                        <label for="">Libelle</label>
                                                        <div class="form-group">
                                                            <input v-model="libelle"  type="text" class="form-control form-account" name="" >
                                                        </div>
                                                    </div>
                                                    
                                                    <div  v-if="id_option_realisation>0"  class="col-md-12">
                                                        <button @click="update" class="btn btn-prim">Mettre à jour</button>
                                                    </div>

                                                    <div v-else class="col-md-12">
                                                        <button @click="addclick" class="btn btn-prim">Enregistré</button>
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
    const id_option_realisation = ref(0);
    const name = ref('');
    const tabs = ref(1);
    const showDiv = ref(0);
    const tableau = ref([]);
    const selected = ref([]);
    const options1 = ref([]);


    const Datapaginations = 1;
    const {getAllOptionRealisation,deleteOptionRealisation,changeStateOptionRealisation,OptionRealisation,responseMsg, paginations,Categories } = useProduits();

    onMounted(async () => {
        await getAllOptionRealisation(Datapaginations);
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
        await getAllOptionRealisation(data);

    };


    const addCatégories = async (id) => {
        libelle.value = "";
        id_option_realisation.value = "";
        $('#userFormModal').modal('show');
        showDiv.value = 1;
    };

    const Modalhide = async (id) => {
        libelle.value = "";
        id_option_realisation.value = "";
        if (id == 1) {
            $('#userFormModal').modal('hide');
        }

    };

    const valide = async (id,item) => {

        if (item==1) {

            Swal.fire({

                title: 'Attention !',
                text: "Voulez-vous vraiment Activé cette  catégorie ?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'OUI',
                cancelButtonText: 'NOM'

                }).then((result) => {

                    if (result.isConfirmed) {
                        //   requet avec reponse
                        axiosClient.get('/api/changeStateOptionRealisation/'+id+'/'+item)
                        .then(response => {
                            let vars =1;
                            getAllOptionRealisation(vars);
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
            text: "Voulez-vous vraiment desacctivé cette  catégorie ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'OUI',
            cancelButtonText: 'NOM'

            }).then((result) => {

                if (result.isConfirmed) {
                        //   requet avec reponse
                        axiosClient.get('/api/changeStateOptionRealisation/'+id+'/'+item)
                        .then(response => {

                            let vars =1;
                            getAllOptionRealisation(vars);
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
                deleteOptionRealisation(id);
                let data = 1;
                getAllOptionRealisation(data);
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
        axiosClient.post('/api/SaveOptionRealisation', {
            libelle: libelle.value,
        }).then(response => {

            $('#userFormModal').modal('hide');
            libelle.value = "";
            message.value = response.data.messages;

            let data=1;
            getAllOptionRealisation(data);
            createToast("Categorie ajouter avec succes!",
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
        axiosClient.post('/api/updateOptionRealisation', {

            id_option_realisation: id_option_realisation.value,
            libelle: libelle.value,

        }).then(response => {

            $('#userFormModal').modal('hide');
            libelle.value = "";
            message.value = "Opération effectuée avec succès";
            let data=1;
            getAllOptionRealisation(data);

            createToast("Categorie mise à jour avec succes!",
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
        axiosClient.get('/api/editOptionRealisation/'+id)

            .then(response => {
                let tableaus = response.data.data;

                tableaus.map(function (element) {

                    id_option_realisation.value = element.id_option_realisation;
                    libelle.value = element.libelleOption_reaalisation;
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
                    id: element.id_option_realisation_produits,
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