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
                                <h3>Liste des Catégories de produits</h3>
                            </div>

                            <br>
                            <div class="row">

                                <div class="col-md-4 mb-2">
                                    <a  href="/Admin/Listessouscategories" type="" class="btn btn-brown" >SOUS-CATEGORIES </a>
                                </div>

                                <!-- <div class="col-md-4 mb-2">
                                    <a  href="/Admin/Listessoussouscategories" type="" class="btn btn-brown" >SOUS SOUS-CATEGORIES </a>
                                </div> -->

                                <div class="col-md-8 mb-3">
                                    <button type="button" class="btn btn-prim" @click="addCatégories">  <ion-icon size="small" name="create-outline"></ion-icon>Ajouter une catégories  </button>&nbsp;&nbsp;
                                </div>

                            </div>

                         

                            <!-- <div class="col-md-12">
                                <div class="form-group">
                                    <input v-model="searchUsers" type="search" class="form-control form-account" name="" placeholder="Rechercher un utilisateur*">
                                </div>
                            </div> -->



                            <div class="vl-parent">
                                    <loading v-model:active="isLoading"  :can-cancel="true" :on-cancel="onCancel" :is-full-page="fullPage"/>
                            </div>

                            <div class="col-md-12 mb-4 dataTable-container table-responsive">

                                    <div class="table-responsive text-nowrap">
                                        <table class="table table-striped">

                                            <thead>
                                                <tr>
                                                    <th>Libelle</th>
                                                    <th>Slug</th>
                                                    <th>Date de créations</th>
                                                    <th>Statut</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>

                                            <tbody>

                                                <tr v-for="item in Categories" :key="item.id_categories_produits">

                                                    <th scope="row"> {{item.libelle_categories_produits}} </th>
                                                        <th scope="row"> {{item.slug_categories_produits}} </th>
                                                        <th scope="row">{{ moment(item.created_at).format('DD-MM-YYYY') }} </th>
                                                        <th scope="row">
                                                            <span style="color:#27b827;" v-if="item.state_categories_produits==1" class="">Activé</span>
                                                            <span  style="color: red;" v-else class="">Desactivé</span>
                                                        </th>
                                                        <td>
                                                            <a  v-if="item.state_categories_produits==1" class="" @click="valide(item.id_categories_produits,0)" href="javascript:void(0)"> <ion-icon size="small" name="lock-closed-outline"></ion-icon> </a>&nbsp;&nbsp;
                                                            <a v-else class="" @click="valide(item.id_categories_produits,1)" href="javascript:void(0)">  <ion-icon size="small" name="lock-open-outline"></ion-icon> </a>&nbsp;&nbsp;
                                                            <a class="" @click="edit(item.id_categories_produits)" href="javascript:void(0)"> <ion-icon size="small" name="create-outline"></ion-icon>  </a>&nbsp;&nbsp;
                                                            <a class="" @click="deletes(item.id_categories_produits)"  href="javascript:void(0)"> <ion-icon size="small" name="trash-outline"></ion-icon> </a>
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
                                                <h3 class="modal-title" id="staticBackdropLabel">
                                                    <span v-if="id_categories>0" > Modifier la catégories </span>
                                                    <span v-else > Nouvelle catégories</span>
                                                </h3>
                                                <button type="button" class="close" @click="Modalhide(1)" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <form>

                                                <div class="modal-body">

                                                    <div class="alert alert-success" v-if="message !== ''">
                                                            <h5> {{message}} </h5>
                                                    </div>
                                                    <div class="alert alert-danger" v-if="error !== ''">
                                                            <h5> {{error}} </h5>
                                                    </div>

                                                    <div class="row mb-4">

                                                        <div class="col-md-12 ">
                                                         <label for=""> Libelle</label>
                                                            <div class="form-group">
                                                              <input v-model="libelle" type="text" class="form-control form-account" name="" placeholder="libelle*">
                                                           </div>
                                                       </div>

                                                        <div class="col-md-12 ">
                                                            <div class="form-group">
                                                              <img v-if="Urlimages" :src="url+Urlimages" width="250" class="mb-2"  alt="">
                                                            </div>
                                                          </div>

                                                           <div class="col-md-4 ">
                                                              <label for=""> Médias</label>
                                                                <div class="form-group">
                                                                 <input @change="fieldChange" id="files" type="file" multiple ref="file" name="files" class="" >
                                                                </div>
                                                            </div>


                                                            <div class="col-md-12">
                                                                 <button v-if="id_categories>0" @click="update" type="submit" class="btn btn-prim mb-4">Mettre à jour</button>
                                                                 <button v-else  @click="addclick" type="submit" class="btn btn-prim mb-4">Sauvegarder</button>
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

                    </div>
                
                </div>
            </div>
        </section>

    </main>

</template>

<script setup>

import Menu from './Menu.vue';
import {ref,reactive, computed, onMounted,watch,watchEffect} from 'vue';
import { VueTelInput } from 'vue-tel-input';
// import 'vue-tel-input/dist/vue-tel-input.css';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import useHomes from "../../composable/Homes";
import useBlogs from "../../composable/Blogs";
import Pagination2 from '../../components/Pagination2.vue';
import useProduits from "../../composable/Produits";
import { useRouter, useRoute } from 'vue-router';
import router from "../../router/index";
import { useShoppingStore } from '../../store/index';
import { createToast } from 'mosha-vue-toastify';
import moment from 'moment';
import axios from 'axios';
import Swal from 'sweetalert2'
import loader from '../../components/loader.vue';

import url from "../../../ImgUrl";
import axiosClient from "../../../ApiServices";

    const data = useShoppingStore();
    const route = useRoute();
    const datas=1;
    const usersid=localStorage.getItem("auth_users");

    const showModal=ref(false);
    const viewMenu=ref(0);
    const Type=ref('');
    const slug=ref('');
    const isOpened=ref(false);
    const error=ref('');
    const pays=ref('');
    const message=ref('');
    const tabcategories=ref([]);
    const searchProduct=ref('');
    const attachments=ref([]);
    const filesx=ref('');
    const libelle=ref('');
    const Urlimages=ref('');
    const id_categories=ref('');
    const name=ref('');
    const tabs=ref(1);
    const showDiv=ref(0);
    const tableau=ref([]);

    const Datapaginations =1;
    const {getAllcategoriesByProduits,Categories,nbCategories,responseMsg,deletecategoriesproduits,notifications,Notification,paginations} = useProduits();

    onMounted(async () => {
        await getAllcategoriesByProduits(Datapaginations);
    });

    const loadings = ref(1);

    setTimeout(() => {
        loadings.value = 0;
    }, 2000);

    const loading = async () => {

        setTimeout(() => { 
            loadings.value = 0;
         }, 300)
    };


    const getData = async () => {
        };

    const searchData = async (data) => {
        await loading();
        await getAllcategoriesByProduits(data);

          };


    const addCatégories = async (id) => {
            libelle.value="";
            Urlimages.value="";
            id_categories.value="";
            $('#userFormModal').modal('show');
            showDiv.value = 1;
        };

        const Modalhide = async (id) => {

            libelle.value="";
            Urlimages.value="";
            id_categories.value="";

            if (id == 1) {

                $('#userFormModal').modal('hide');
            }

        };

        const update = async (e) => {

            e.preventDefault();
            const formData = new FormData();

            if (attachments.value.length > 0) {

                formData.append('pics', attachments.value);
                formData.append('id_categories',id_categories.value);
                formData.append('slug',slug.value);
                formData.append('libelle',libelle.value);

            } else {

                formData.append('Urlimages', Urlimages.value);
                formData.append('id_categories', id_categories.value);
                formData.append('slug',slug.value);
                formData.append('libelle',libelle.value);
            }
            const config = { headers: { 'Content-Type': 'multipart/form-data' } };
            axiosClient.post('/api/updatecategories', formData, config, {

            }).then(response => {
                id_categories.value = "";
                name.value = "";
                Urlimages.value = "";
                attachments.value = [];
                message.value = response.data.messages;
                let vars =1;
                getAllcategoriesByProduits(vars);
                Modalhide(vars);
                createToast("Categories Ajouter avec succès!",
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
             }).catch(response => {

            });
        };


    const addclick = async (e) => {
            e.preventDefault();

            if (libelle.value.length > 0) {

                error.value = "";
                const formData = new FormData();
                formData.append('pics', attachments.value);
                formData.append('libelle', libelle.value);

                const config = { headers: { 'Content-Type': 'multipart/form-data' } };
                axiosClient.post('/api/addcategories', formData, config, {

                }).then(response => {
                    let vars =1;
                    getAllcategoriesByProduits(vars);
                    Modalhide(vars);

                    libelle.value = "",
                    id_categories.value = "";
                    Urlimages.value = "";
                    attachments.value = [],

                    message.value = response.data.messages;
                    window.scrollTo(0, 0);

                  }).catch(err => {
                    error.value = "le fichier est tros volumineux";
                    window.scrollTo(0, 0);
                });

            } else {
                error.value = "Merci de renseigner tous les champs";
                window.scrollTo(0, 0);
            }
        };

    const fieldChange = async (e) => {
            attachments.value= e.target.files[0];

            if (attachments.value.name.length > 0) {

                let x = attachments.value.name.split('.');
                let taille = x.length;
                let extension = x[(taille - 1)];

                if (extension == 'png' || 'jpeg' || 'jpg') {

                    error.value = "";

                } else {

                    error.value = "Merci de charger un fichier png";
                    window.scrollTo(0, 0);

                }

             } else {

                filesx.value = "";
                btnvalide.value = 0;
                error.value = "Merci de charger un fichier png";
                window.scrollTo(0, 0);
            }

        };

    const valide = async (id,item) => {

        if (item==0) {

            Swal.fire({

                title: 'Attention !',
                text: "Voulez-vous vraiment Activé cette catégorie ?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'OUI',
                cancelButtonText: 'NOM'

                }).then((result) => {

                    if (result.isConfirmed) {
                         //   requet avec reponse
                        axiosClient.get('/api/changescategoriesStates/'+id+'/'+item)
                        .then(response => {
                            let vars =1;
                            getAllcategoriesByProduits(vars);
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
            text: "Voulez-vous vraiment desacctivé cette catégorie ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'OUI',
            cancelButtonText: 'NOM'

            }).then((result) => {

                if (result.isConfirmed) {
                         //   requet avec reponse
                         axiosClient.get('/api/changescategoriesStates/'+id+'/'+item)
                        .then(response => {

                            let vars =1;
                            getAllcategoriesByProduits(vars);
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
                    deletecategoriesproduits(id);
                    let vars =1;
                    getAllcategoriesByProduits(vars);
                    tabs.value = 1,
                    message.value  = responseMsg;
                    tabcategories.value  = Categories;

                createToast("categories supprimer avec succès!",
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

    const edits = async (valeur) => {

            tabs.value = 2;
            showDiv.value = 0;
            $('#userFormModal').modal('show');

            if (valeur > 0) {

                let tableaus= Categories.value.filter((item) => item.id_categories == valeur);
                let datas = Categories.value.filter((item) => item.id_categories == valeur);

                let tables = [];
                datas.map(function (element) {

                    const objet = {
                        Urlimages2: element.Urlimages,
                        id_categories: element.id_categories,
                        libelle2: element.name,
                    }

                    tables.push(objet);
                })

                tabs.value = 2;
                tableau.value = tables;
                window.scrollTo(0, 0);
            }

        };

    const edit = async (id) => {

            if (id > 0) {

                $('#userFormModal').modal('show');
                axiosClient.get('/api/editCatégories/' + id)

                    .then(response => {

                       let  tableaus = response.data.data;
                            tableaus.map(function (element) {
                            id_categories.value= element.id_categories_produits;
                            libelle.value= element.libelle_categories_produits;
                            slug.value= element.slug_categories_produits;
                            Urlimages.value= element.logos_categories_produits;
                        });

                       }).catch(function (error) {

                        window.scrollTo(0, 0);
                        console.error(error);

                    });

            } else {
                window.scrollTo(0, 0);
            }
        };

    watchEffect(() => {

        if(libelle){

            libelle.value=libelle.value.toUpperCase();
         }

        });

</script>

<style scoped>


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