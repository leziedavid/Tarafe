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
                                <button type="button" class="btn btn-prim" @click="addCatégories"> <ion-icon size="small" name="create-outline"></ion-icon> CREE UN UTILISATEUR </button>&nbsp;&nbsp;
                            </div>

                            <div class="col-md-2 mb-3">
                                <button type="button" class="btn btn-brown" @click="printed"> IMPRIMER</button>
                            </div>


                            <div class="col-md-12">
                                <div class="form-group">
                                    <input v-model="searchUsers" type="search" class="form-control form-account" name="" placeholder="Rechercher un utilisateur*">
                                </div>
                            </div>


                            <br>
                                <section class="section block-head"> 
                                        <div class="container"> 
                                            <div class="text-center"> 
                                                <h3>LISTE DES COMPTES UTILISATEURS</h3>
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
                                                    <th>Image</th>
                                                    <th>Nom & Prenom</th>
                                                    <th>Email</th>
                                                    <th>Contact</th>
                                                    <th>Roles</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>

                                            <tbody>

                                                <tr v-for="item in Users" :key="item.id">

                                                    <th scope="row">
                                                        <span v-if="item.photo">
                                                        <img :src="item.photo" width="30" alt="" class="rounded-circle  mb-2"/></span>
                                                        <span else>
                                                            <img src="/images/user5.jpg" width="30" alt="" class="rounded-circle  mb-2"/>
                                                        </span>
                                                    </th>

                                                    <th scope="row"> {{item.name}} </th>
                                                    <th scope="row"> {{item.email}} </th>
                                                    <th scope="row"> {{item.contact}} </th>
                                                    <th scope="row"> {{item.is_admin}} </th>

                                                    <td>
                                                        <a v-if="item.status==1" @click="changes(item.id,0)"  class="" href="javascript:void(0)"> <ion-icon size="small" name="lock-open-outline"></ion-icon> </a>&nbsp;&nbsp;
                                                        <a v-if="item.status==0" @click="changes(item.id,1)" class="" href="javascript:void(0)"> <ion-icon size="small" name="lock-closed-outline"></ion-icon> </a>&nbsp;&nbsp;
                                                        <a  class="" @click="Details(item.id)" href="javascript:void(0)"> <ion-icon size="small" name="eye-outline"> </ion-icon> </a>&nbsp;&nbsp;
                                                        <a  class="" @click="deletes(item.id)" href="javascript:void(0)"> <ion-icon size="small" name="trash-outline"></ion-icon></a>
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

import {ref,reactive, computed, onMounted,watch,watchEffect} from 'vue';
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
    const datas=1;
    const usersid=localStorage.getItem("auth_users");

    const Datapaginations =1;
    const {getAllbUsers,Users,NbUsers ,changesstatUsers,deleteUsers,responseMsg,paginations} = useProduits();

    onMounted(async () => {
        await getAllbUsers(Datapaginations);
    });


    const isLoading=ref(false);
    const fullPage= ref(true);

    const nom_ntreprise= ref("");
    const nomPrenoms= ref("");
    const email= ref("");
    const respname= ref("");
    const numero= ref("");
    const pays= ref("");
    const villes= ref("");
    const quartiers= ref("");
    const commune= ref("");
    const livraisons= ref("");
    const photos= ref("");
    const is_admin= ref("");
    const idUsers= ref("");
    const password= ref("");

    const getData = async () => {
        };

    const Loadings = async () => {
         isLoading.value = true;
         setTimeout(() => { isLoading.value = false }, 300)
        };

    const searchData = async (data) => {
        await Loadings();
        await getAllbUsers(data);

          };

    const Modalhide = async (id) => {
        if (id == 1) {
            $('#userFormModal').modal('hide');
        }
    };

    const printed = async () => {
            var uri="api/pdfListeUsers";
            var link= url+uri;
                window.open(link,'_blank');
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
                }

                })

            };


    const Details = async (id) => {

        let tabDetails = [];
             tabDetails = Users.value.filter(data => data.id == id);

        if (id) {

            idUsers.value = tabDetails[0].id;
            nomPrenoms.value = tabDetails[0].name;
            email.value = tabDetails[0].email;
            numero.value = tabDetails[0].contact;
            nom_ntreprise.value = tabDetails[0].nom_ntreprise;
            password.value = tabDetails[0].password;

            photos.value = tabDetails[0].photo;

            pays.value = tabDetails[0].pays;
            villes.value = tabDetails[0].ville;
            quartiers.value = tabDetails[0].quartier;
            livraisons.value = tabDetails[0].lieu_livraison;
            is_admin.value = tabDetails[0].is_admin;
        }
        $('#userFormModal').modal('show');
    };


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