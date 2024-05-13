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

                            <a href="/Admin/CreatBlog" type="button" class="btn btn-prim"> AJOUTER UN ARTICLE</a>

                            <br>
                                <section class="section block-head"> 
                                        <div class="container"> 
                                            <div class="text-center"> 
                                                <h3>LISTE DES ARTICLE DE BLOG</h3>
                                            </div>
                                        </div>
                                </section>
                                <br>

                            <div class="col-md-12 mb-4 dataTable-container table-responsive">

                                <div class="table-responsive text-nowrap">
                                     <table class="table table-striped">
                                                    <thead>
                                                        <tr>
                                                        <th>Image</th>
                                                        <th>Libelle</th>
                                                        <th>Catégories</th>
                                                        <th>Status</th>
                                                        <th>Date</th>
                                                        <th>Action</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        <tr v-for="item in listeBloge" :key="item.id">

                                                        <th scope="row">
                                                            <span v-if="item.imagePath">
                                                                <img :src="(url+item.imagePath)" width="50" alt="" class="mb-2"/>
                                                             </span>

                                                            <span v-else>
                                                                <img src="/images/user5.jpg" width="50" alt="" class="mb-2"/>
                                                            </span>
                                                        </th>
                                                        <th style="font-size: 18px;" scope="row"> {{item.posts_title}} </th>
                                                        <th style="font-size: 18px;" scope="row"> {{item.name_categories_blog}}</th>

                                                        <th scope="row">
                                                            <span v-if="item.posts_status==1"><span style="color: green;" class="">Valider</span></span>
                                                            <span v-if="item.posts_status==0"><span style="color: red;" >En attente</span></span>
                                                            <span v-if="item.posts_status==2"><span style="color: orangered;">Archivé</span></span>
                                                        </th>

                                                        <th scope="row"> {{moment(item.created_at).format('DD-MM-YYYY') }}  </th>

                                                         <td>
                                                            <a  @click="Catalorgues(item.posts_id)" href="javascript:void(0)"> <ion-icon size="small" name="images-outline"></ion-icon> </a>&nbsp;&nbsp;
                                                            <a class="" :href="'/Admin/EditBlogs/'+item.posts_id"  href="javascript:void(0)">  <ion-icon size="small" name="create-outline"></ion-icon>  </a>&nbsp;&nbsp;
                                                            <a class="" @click="deletes(item.posts_id)"  href="javascript:void(0)"> <ion-icon size="small" name="trash-outline"></ion-icon> </a>&nbsp;&nbsp;
                                                            <a v-if="item.posts_status==2" class="" @click="Valider(item.posts_id,1)" href="javascript:void(0)"> <ion-icon name="close-circle-outline"></ion-icon> </a>&nbsp;&nbsp;
                                                            <a v-if="item.posts_status==1" class="" @click="Valider(item.posts_id,2)" href="javascript:void(0)"> <ion-icon size="small" name="archive-outline"></ion-icon> </a>&nbsp;&nbsp;
                                                        </td>

                                                        </tr>

                                                    </tbody>

                                        </table>
                                    </div>

                            </div>

                            <Pagination2 class=""  v-if="paginations.last_page > 1" :pagination="paginations" :offset="3" @paginate="query === '' ? getData() :searchData(paginations.current_page)"> </Pagination2>

                        <div class="modal fade bd-example-modal-lg" id="userFormModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h4 class="modal-title" id="staticBackdropLabel"><span> Catalogue blog</span> </h4>
                                                <button type="button" class="close" @click="Modalhide(1)" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <form>

                                                <div class="modal-body">
                                                    <div class="row mb-4">
                                                        <div v-for="item in Tablecatalogue" :key="item.gallery_id" class="col-md-4 mb-3">

                                                            <img :src="url+item.Path_gallery" width="200"  class="mb-3" alt="" />
                                                            <br><br>
                                                             <a class="btn btn-red" @click="removeImage(item.gallery_id,idPostes)">Supprimer l'image</a>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-prim" @click="Modalhide(1)" data-dismiss="modal">Cancel</button>
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
import {ref,reactive, computed, onMounted,watch,watchEffect} from 'vue';
import { VueTelInput } from 'vue-tel-input';
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
import Swal from 'sweetalert2';

import url from "../../../ImgUrl";
import axiosClient from "../../../ApiServices";

    const data = useShoppingStore();
    const route = useRoute();
    const datas=1;
    const usersid=localStorage.getItem("auth_users");
    const message=ref('');
    const success=ref('');
    const idPostes=ref('');
    const Tablecatalogue=ref([]);
    const Datapaginations =1;
    const { getAllBlogs,listeBloge,nbAllArticles,Messages,ValiderArticles,paginations,deletePoste} = useBlogs();

    onMounted(async () => {
        await getAllBlogs(Datapaginations);
    });


    const isLoading=ref(false);
    const fullPage= ref(true);

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
        } else if (id == 2) {
            $('#userFormModal2').modal('hide');
        } else if (id == 3) {
            $('#setting').modal('hide');
        }
    };
    const Catalorgues = async (id) => {

        if (id > 0) {
            axiosClient.get('/api/getcatalogueBlog/' + id)
                .then(response => {
                    idPostes.value = id;
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
                axiosClient.get('/api/removeImagesCatalogueBlog/' + cataloges + '/' + produits)

                    .then(response => {

                        let data=1;
                        getAllBlogs(data);
                        Catalorgues(produits);

                        createToast("images supprimer avec succes!",
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
                        message.value = "images supprimer avec succes";

                    }).catch(function (error) {

                    });
            }
        })
    };

    const Valider = async (id,status) => {

                Swal.fire({
                title: 'Attention !',
                text: "Voulez-vous vraiment Valider cet article ?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Valider',
                cancelButtonText: 'Annuler'
                }).then((result) => {

                    if (result.isConfirmed) {

                        ValiderArticles(id,status);
                        getAllBlogs();
                        message.value = Messages;
                        success.value = true;

                        setInterval(() => {
                            success.value = false;
                        }, 2500);
                    }
                })
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
                    deletePoste(id);
                    getAllBlogs();
                    message.value = Messages;
                    success.value = true;

                    setInterval(() => {
                        success.value = false;
                    }, 2500);
                }
            })
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