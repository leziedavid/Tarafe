<template>

    <main class="main">

        <section class="section banner-homepage6">
            <div class="container-fluid mb-3">
                <br>

                <div class="row">

                    <Menu/>

                    <div class="col-md-10">
                        <FilterTop :notifications="notifications"/>

                        <div class="row mb-6">

                            <div class="col-md-10">
                                <div class="form-group">
                                    <input v-model="searchUsers" type="search" class="form-control form-account" name="" placeholder="Rechercher un utilisateur*">
                                </div>
                            </div>

                            <div class="col-md-2 mb-3">
                                <button type="button" class="btn btn-brown" @click="printed"> Imprimer </button>
                            </div>

                            <br>
                                <section class="section block-head"> 
                                    <div class="container"> 
                                      <div class="text-center"> 
                                         <h3>LISTE DES BOUTIQUES</h3>
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
                                                <th>Responsable</th>
                                                <th>Nom de la boutique</th>
                                                <th>Email</th>
                                                <th>Contact</th>
                                                <th>Action</th>

                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr v-for="item in boutiques" :key="item.id">

                                                <th scope="row">
                                                    <span v-if="item.photo">
                                                    <img :src="item.photo" width="30" alt="" class="rounded-circle  mb-2"/></span>

                                                    <span else>
                                                    <img src="/images/user5.jpg" width="30" alt="" class="rounded-circle  mb-2"/>
                                                    </span>
                                                </th>

                                                <th scope="row"> {{item.name}} </th>
                                                <th scope="row"> {{item.nom_stores}} </th>
                                                <th scope="row"> {{item.email}} </th>
                                                <th scope="row"> {{item.contact}} </th>
                                                <td>
                                                    <a v-if="item.status_stores==1" @click="changes(item.id_stores,0)"  class="" href="javascript:void(0)"> <ion-icon size="small" name="lock-open-outline"></ion-icon> </a>&nbsp;&nbsp;
                                                    <a v-if="item.status_stores==0" @click="changes(item.id_stores,1)" class="" href="javascript:void(0)"> <ion-icon size="small" name="lock-closed-outline"></ion-icon> </a>&nbsp;&nbsp;
                                                    <a  class="" @click="Details(item.id_stores)" href="javascript:void(0)"> <ion-icon size="small" name="eye-outline"> </ion-icon> </a>&nbsp;&nbsp;
                                                    <a  class="" @click="deletes(item.id_stores)" href="javascript:void(0)"> <ion-icon size="small" name="trash-outline"></ion-icon></a>&nbsp;
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
                                                    <h2 class="section-main-title mb-35">DETAIL DE LA BOUTIQUE</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br>

                                    <div class="modal-body">

                                        <div class="col-md-12 ">
                                            <label for=""> NOM DE LA BOUTIQUE</label>
                                            <div class="form-group">
                                                <input v-model="nomboutique" @change="verifBoutique"  type="text" class="form-control form-account" name="" placeholder="Rechercher un utilisateur*">
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <label for=""> RESPONSABLE</label>
                                            <div class="form-group">
                                                <input v-model="respname"  type="text" class="form-control form-account" name="" placeholder="Rechercher un utilisateur*">
                                            </div>
                                        </div>

                                        <div class="col-md-12 ">
                                            <label for=""> EMAIL</label>
                                            <div class="form-group">
                                                <input v-model="email" @change="verifemail" type="text" class="form-control form-account" name="" placeholder="Rechercher un utilisateur*">
                                            </div>
                                        </div>

                                        <div class="col-md-12 ">
                                            <label for=""> TELEPHONE</label>
                                            <div class="form-group">
                                                <input v-model="numero" type="number" class="form-control form-account" name="" placeholder="Rechercher un utilisateur*">
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <label for=""> DOCUMENT ADMINISTRATIF</label>
                                            <div class="form-group">
                                                <a target="_blank" :href=" '/Stores/' + fichiers " class="" title="Télécharger">
                                                    <i style="color:red" class="fa fa-file-pdf-o fa-5x"/>
                                                  </a>
                                            </div>
                                        </div>

                                        <div class="col-md-12 ">
                                            <label for=""> MODIFIER LE DOCUMENT</label>

                                            <div class="form-group"> 
                                                <input id="files" type="file" multiple  class="" ref="file" placeholder="Téléchargez votre pièce d'identité*" name="files" @change="fieldChange">
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <button @click="addvendeurs" class="btn btn-add">Mettre à jour les informations</button>
                                        </div>

                                    </div>

                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-red" @click="Modalhide()" data-dismiss="modal">Cancel</button>
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
import { VueTelInput } from 'vue-tel-input'
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
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import Swal from 'sweetalert2';

import url from "../../../ImgUrl";
import axiosClient from "../../../ApiServices";

const data = useShoppingStore();
const route = useRoute();
const datas = 1;
const usersid = localStorage.getItem("auth_users");

const searchstores = ref('');
const id_stores = ref('');
const email = ref('');
const nomboutique = ref('');
const respname = ref('');
const numero = ref('');
const description = ref('');
const questions = ref('');
const password = ref('');
const passwordvalidate = ref('');
const checkbox = ref('');
const attachments = ref([]);
const nbresultats = ref(0);
const visibiliy = ref(false);
const filesx = ref('');
const btnvalide = ref(0);
const error = ref('');
const message = ref('');
const errorInput = ref('');
const etapes = ref('');
const fichiers = ref('');
const idUsers_stores = ref('');
const composition = "";
const showDta = ref('');


const Datapaginations = 1;
const { boutiques, getAllboutiques, nboutiques, changesstatStores, deleteStores, responseMsg, paginations } = useProduits();

onMounted(async () => {
    await getAllboutiques(Datapaginations);
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
    await getAllboutiques(data);

};

const printed = async () => {
    var uri = "api/pdfListeUsers";
    var link = url + uri;
    window.open(link, '_blank');
};

const fieldChange = async (e) => {

    attachments.value = e.target.files[0];
    if (this.attachments.name.length > 0) {

        filesx.value = attachments.value.name;
        let x = attachments.value.name.split('.');
        let taille = x.length;
        let extension = x[(taille - 1)];
        if (extension == 'pdf') {

            btnvalide.value = 1;
            error.value = "";

        } else {

            btnvalide.value = 0;
            error.value = "Merci de charger un fichier pdf";
            window.scrollTo(0, 0);
        }

    } else {
        filesx.value = "";
        btnvalide.value = 0;
        error.value = "Merci de charger un fichier pdf";
        window.scrollTo(0, 0);
    }
};


const reste = async () => {
    email.value = '';
    nomboutique.value = '';
    numero.value = '';
    description.value = '';
    respname.value = '';
    questions.value = '';
    password.value = '';
    passwordvalidate.value = '';
    checkbox.value = '';
    attachments.value = [];
};


const verifBoutique = async () => {

    axiosClient.get('/api/verifboutique/' + nomboutique)
        .then(res => {

            if (res.data.data > 0) {
                message.value = '';
                error.value = 'Cette boutique exste déjé';
                window.scrollTo(0, 0);

            } else if (res.data.data == 0) {
                error.value = '';
                message.value = 'Le nom de votre boutique est valide';
                window.scrollTo(0, 0);
            }

        }).catch(err => console.log(err));

};

const verifemail = async () => {
    axiosClient.get('/api/verifEmail/' + email)
        .then(res => {

            if (res.data.data > 0) {

                message.value = '';
                error.value = 'Cette addresse exste déja';
                window.scrollTo(0, 0);

            } else if (res.data.data == 0) {

                error.value = '';
                message.value = 'Le nom de votre boutique est valide';
                window.scrollTo(0, 0);
            }

        }).catch(err => console.log(err));

};

const checknumber = async () => {

    if (numero.value.length < 10) {

        errorInput.value = "Merci de saisie un nuemro a 10 chiffres svp";
        etapes.value = 1;
    } else {

        errorInput.value = "";
        etapes.value = "";
    }
};

const Details = async (id) => {

    let tabDetails = [];
    showDta.value = 1;
    tabDetails = boutiques.value.filter(store => store.id_stores == id);

    if (id) {

        id_stores.value = tabDetails[0].id_stores;
        email.value = tabDetails[0].emaile_stores;
        nomboutique.value = tabDetails[0].nom_stores;
        respname.value = tabDetails[0].name;
        numero.value = tabDetails[0].tel_stores;
        description.value = tabDetails[0].description_stores;
        password.value = tabDetails[0].password;
        attachments.value = tabDetails[0].urllogo_stores;
        fichiers.value = tabDetails[0].urllogo_stores;
        idUsers_stores.value = tabDetails[0].idUsers_stores;
        questions.value = tabDetails[0].questions_stores;
    }

    $('#userFormModal').modal('show');
};

const getliens = async (Files) => {
    let link = Files;
    let liens = "/Stores/" + link;
    return liens;
};

const addvendeurs = async (e) => {
    e.preventDefault();
    if (respname.value.length > 0 && nomboutique.value.length > 0 && numero.value > 0 && email.value.length > 0) {

        const formData = new FormData();
        formData.append('pics', attachments.value);
        formData.append('email', email.value);
        formData.append('respname', respname.value);
        formData.append('nomboutique', nomboutique.value);
        formData.append('numero', numero.value);
        formData.append('description', description.value);
        formData.append('questions', questions.value);
        formData.append('password', password.value);
        formData.append('passwordvalidate', passwordvalidate.value);
        formData.append('checkbox', checkbox.value);
        const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        axiosClient.post('/api/saveStore/', formData, config, {

        }).then(response => {

            libelleInfo.value = 0;
            reste();
            showMessage.value = true;
            message.value = response.data.message;
            error.value = "";
            window.scrollTo(0, 0);

        }).catch(response => {

        });

    } else {
        error.value = "Merci de renseigner tous les champs";
        window.scrollTo(0, 0);
    }
};

const Modalhide = async (e) => {
    $('#userFormModal').modal('hide');
};

const changes = async (id, item) => {

    if (item == 1) {

        Swal.fire({
            title: 'Attention !',
            text: "Voulez-vous vraiment activé cette boutique ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Oui',
            cancelButtonText: 'Annuler'
        }).then((result) => {

            if (result.isConfirmed) {
                let status = 1;
                changesstatStores(id, status);
                getAllboutiques();
                message.value = "boutique activé avec succès";
            }
        })

    } else if (item == 0) {

        Swal.fire({
            title: 'Attention !',
            text: "Voulez-vous vraiment desactivé cette boutique ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Oui',
            cancelButtonText: 'Annuler'
        }).then((result) => {

            if (result.isConfirmed) {
                let status = 0;
                changesstatStores(id, status);
                getAllboutiques();
                message.value = "boutique desactivé avec succès";
            }
        })

    }


};


const deletes = async (id) => {

    Swal.fire({
        title: 'Attention !',
        text: "Voulez-vous vraiment supprimer cette boutique ?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Supprimer',
        cancelButtonText: 'Annuler'
    }).then((result) => {

        if (result.isConfirmed) {
            deleteStores(id);
            message.value = responseMsg;
            getAllboutiques();
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
</style>