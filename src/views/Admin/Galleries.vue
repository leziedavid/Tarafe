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

                                <button type="button" class="btn btn-prim" @click="AddGalleryModal"> AJOUTER DES IMAGES A LA GALLERIE</button>

                                 <br>
                                    <section class="section block-head"> 
                                        <div class="container"> 
                                            <div class="text-center"> 
                                                <h3>NOS REALISATIONE</h3>
                                            </div>
                                        </div>
                                    </section>
                                <br>
  
                                <div  v-if="gallerieImages.length>0" class="box-list-products">
                                        <div  v-for="item in gallerieImages" :key="item.id_gallerie_images" class="product-item">
                                            
                                                <div class="cardProductStyle3 cardProductType03 wow fadeInUp">
                                                    <div class="cardImage">
                                                    
                                                        <img class="imageMain" :src="url+item.files_gallerie_images" alt="guza">
                                                        <img class="imageHover" :src="url+item.files_gallerie_images" alt="guza">
                                            
                                                        <div class="button-select">
                                                        
                                                            <div class="flex-parent jc-center">
                                                            <button @click="deletes(item.id_gallerie_images)" class="btn btn-red" type="button"> <ion-icon size="small" name="trash-outline"></ion-icon> </button>&nbsp;
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>    
                                </div>

                                <Pagination class=""  v-if="paginations.last_page > 1" :pagination="paginations" :offset="3" @paginate="query === '' ? getData() :searchData(paginations.current_page)"> </Pagination>

                            </div>

                            <div class="modal fade bd-example-modal-lg" id="galleryModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h3 class="modal-title text-center" id="staticBackdropLabel">
                                                    <span> Nouvelle image dans la gallerie</span>
                                                </h3>
                                                <button type="button" class="close btn btn-red" @click="Modalhide(1)" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <!-- <form> -->

                                                <div class="modal-body">

                                                    <loader v-if="times==1" > </loader>

                                                    <div v-if="times==0" class="row mb-4">

                                                        <br>
                                                        <div class="col-md-12 text-center">
                                                             <div class="form-group">
                                                                <h4> <label for="exampleInputEmail1">Télécharger les images * uniquement (10 images) </label></h4>
                                                                <input id="files" type="file" multiple class="" ref="files" name="files" @change="onFileChange">
                                                            </div>
                                                        </div>

                                                        <div  class="col-md-12 text-center">
                                                            <div class="form-group row">
                                                                <div v-for="(image, index) in images" class="card col-md-3">
                                                                    <img class="card-img-top" :src="image" width="200" alt="Card image">
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <br>
                                                        <div class="col-md-12 text-center">
                                                            <button  @click="SaveDataBtn" type="submit" class="btn btn-prim mb-4">Sauvegarder...</button>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-red" @click="Modalhide(1)" data-dismiss="modal">Cancel</button>
                                                </div>

                                            <!-- </form> -->
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
import loader from '../../components/loader.vue';
import Menu from './Menu.vue';
import FilterTop from './FilterTop.vue';
import { ref, reactive, computed, onMounted, watch, watchEffect } from 'vue';
import { VueTelInput } from 'vue-tel-input';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import useHomes from "../../composable/Homes";
import useBlogs from "../../composable/Blogs";
import Pagination from '../../components/Pagination.vue';
import useProduits from "../../composable/Produits";
import { useRouter, useRoute } from 'vue-router';
import router from "../../router/index";
import Pagination2 from '../../components/Pagination2.vue';
import { useShoppingStore } from '../../store/index';
import { createToast } from 'mosha-vue-toastify';
import moment from 'moment';
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import Swal from 'sweetalert2';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import url from "../../../ImgUrl";
import axiosClient from "../../../ApiServices";

    const data = useShoppingStore();
    const route = useRoute();
    const datas = 1;
    const usersid = localStorage.getItem("auth_users");
 
    const message = ref('');
    const Urls=ref([]);
    const images=ref([]);
    const filesx = ref('');
    const libelle = ref('');
    
    const Urlimages = ref('');

    const id_gallerie_images = ref('');
    const libelle_gallerie_images = ref('');
    const tabs = ref(1);
    const etapes = ref(0);
    const states = ref(0);
    const positions = ref(1);
    const id_realisation = ref(0);
    const times=ref(0);
    const produitsFormData= new FormData();
    const attachments=ref([]);
    const fichiers=ref([]);

    const Datapaginations = 1;
    const {gallerieImages,geAllgallerieImages,paginations,deleteImagesGalleries} = useProduits();

    onMounted(async () => {
        await geAllgallerieImages(Datapaginations);
    });

    const loadings = ref(1);

    setTimeout(() => {
        loadings.value = 0;
    }, 4000);

    const isLoading = ref(false);
    const fullPage = ref(true);

    const getData = async () => {
    };


    const searchData = async (data) => {
        await Loadings();
        await geAllgallerieImages(data);

    };

    const Loadings = async () => {
        isLoading.value = true;
        setTimeout(() => { isLoading.value = false }, 300)
    };

    const AddGalleryModal = async (id) => {
        attachments.value = [];
        fichiers.value = [];
        times.value=0
        $('#galleryModal').modal('show');
    };

    const removeImage = async (id_img_realisations,realisations_id) => {
         Swal.fire({
            title: 'Attention !',
            text: "Voulez-vous vraiment supprimer cette image ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Oui',
            cancelButtonText: 'Annuler'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosClient.get('/api/removeImagesRealisation/'+id_img_realisations + '/' + realisations_id)

                    .then(response => {

                    getAllimgRealisations(realisations_id);
                    createToast("Image supprimer avec succès!",
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

                        
                    }).catch(function (error) {

                    });
            }
        })};


    const Modalhide = async (id) => {

        states.value=0;
        libelle.value = "";
        attachments.value = [];
        fichiers.value = [];
        Urls.value= [];

        if (id == 1) {
            times.value=0
            $('#galleryModal').modal('hide');
        }
        if (id == 2) {
            times.value=0
            $('#galleryModal').modal('hide');
        }
    };

    const valide = async (id,item) => {

        if (item==1) {

            Swal.fire({

                title: 'Attention !',
                text: "Voulez-vous vraiment Activé cette cet image?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'OUI',
                cancelButtonText: 'NOM'
                }).then((result) => {

                    if (result.isConfirmed) {
                        axiosClient.get('/api/changestatRealisations/'+id+'/'+item)
                        .then(response => {
                            let vars =1;
                            geAllgallerieImages(vars);
                            message.value  = responseMsg;
                            createToast("Image Activé avec succès!",
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
            text: "Voulez-vous vraiment desacctivé cette image?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'OUI',
            cancelButtonText: 'NOM'

            }).then((result) => {

                if (result.isConfirmed) {
                        axiosClient.get('/api/changestatRealisations/'+id+'/'+item)
                        .then(response => {

                            let vars =1;
                            geAllgallerieImages(vars);
                            tabs.value = 1,
                            message.value  = responseMsg;
                            createToast("Image desacctivé avec succès!",
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
            text: "Voulez-vous vraiment supprimer cette image ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Supprimer',
            cancelButtonText: 'Annuler'

        }).then((result) => {

            if (result.isConfirmed) {
                deleteImagesGalleries(id);
                let data = 1;
                geAllgallerieImages(data);
                message.value = responseMsg;
                createToast("Image supprimer avec succès!",
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

    const onFileChange = async (e) => {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            createImage(files);
        };
        

    const createImage = async (item) => {

        for (let index = 0; index < item.length; index++) {

            fichiers.value.push(item[index]);
            produitsFormData.append('files[]', item[index]);
            let reader = new FileReader();

            reader.onload = function (event) {
                const imageUrl = event.target.result;
                images.value.push(imageUrl);
            }
            reader.readAsDataURL(item[index]);

        }
        produitsFormData.append('libelle_gallerie_images',libelle_gallerie_images.value);

    };

    const  SaveDataBtn = async (e) => {
        times.value=1
        const config = {  headers: { 'Content-Type': 'multipart/form-data'}};
            axiosClient.post('/api/SavegallerieImages', produitsFormData, config, {
            }).then(response => {

                geAllgallerieImages(1);               
                createToast("Image ajouter avec succès!",
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
                times.value=0
                $('#galleryModal').modal('hide');
                                   
         })
    };


watchEffect(() => {

});

</script>

<style scoped>

.flex-parent {
  display: flex;
}

.jc-center {
  justify-content: center;
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