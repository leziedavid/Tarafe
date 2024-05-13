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
                                
                                <div class="row">
                                    <div class="col-md-6">
                                        <a type="button" class="btn btn-prim mb-3" href="/Admin/optionRealisation"> AJOUTER UNE NOUVELLE CATEGORIE</a>
                                    </div>

                                    <div class="col-md-6">
                                        <button type="button" class="btn btn-prim mb-3" @click="addCatégories"> AJOUTER UNE NOUVELLE CREATION</button>
                                    </div>
                                    
                                </div>

                                 <br>
                                    <section class="section block-head"> 
                                        <div class="container"> 
                                            <div class="text-center"> 
                                                <h3>NOS PRODUITS PERSONNALISE</h3>
                                            </div>
                                        </div>
                                    </section>
                                <br>
  
                                <div  v-if="Realisations.length>0" class="box-list-products">
                                        <div  v-for="item in Realisations" :key="item.id_realisations" class="product-item">
                                            
                                                <div class="cardProductStyle3 cardProductType03 wow fadeInUp">
                                                    <div class="cardImage">
                                                    
                                                        <img class="imageMain" :src="url+item.images_realisations" alt="guza">
                                                        <img class="imageHover" :src="url+item.images_realisations" alt="guza">
                                            
                                                        <div class="button-select">
                                                        
                                                            <div class="flex-parent jc-center">
                                                                
                                                            
                                                            <button @click="valide(item.id_realisations,1)" v-if="item.statut_realisations==0" class="btn btn-green" type="button"><ion-icon size="small" name="checkmark-circle-outline"></ion-icon></button> &nbsp;
                                                            <button @click="valide(item.id_realisations,0)" v-if="item.statut_realisations==1" class="btn btn-red" type="button"><ion-icon size="small" name="checkmark-circle-outline"></ion-icon></button> &nbsp;
                                                            <button @click="Edite(item.id_realisations,item.images_realisations,item.libelle_realisations,item.descript_real)" class="btn btn-prim" type="button"> <ion-icon size="small" name="brush-outline"></ion-icon> </button>&nbsp;
                                                            <button @click="AddGalleryModal(item.id_realisations,item.images_realisations,item.code_realisation)" class="btn btn-prim" type="button"> <ion-icon size="small" name="images-outline"></ion-icon> </button>&nbsp;
                                                            <button @click="DetailSwho(item.id_realisations,item.libelle_realisations)" class="btn btn-prim" type="button"> <ion-icon size="small" name="globe-outline"></ion-icon> </button>&nbsp;
                                                            <button @click="deletes(item.id_realisations)" class="btn btn-red" type="button"> <ion-icon size="small" name="trash-outline"></ion-icon> </button>&nbsp;
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>    
                                </div>

                                <Pagination class=""  v-if="paginations.last_page > 1" :pagination="paginations" :offset="3" @paginate="query === '' ? getData() :searchData(paginations.current_page)"> </Pagination>

                            </div>

                            <div class="modal fade bd-example-modal-lg" id="userFormModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h3 class="modal-title" id="staticBackdropLabel"><span> Nouvelle création</span></h3>
                                                <button type="button" class="close btn btn-red" @click="Modalhide(1)" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <!-- <form> -->

                                                <div class="modal-body">
                                                    <div class="row mb-4">
                                                        <div  class="col-md-12 ">
                                                            <label for=""> Libelle</label>
                                                            <div class="form-group">
                                                                 <input v-model="libelle" type="text" class="form-control form-account" name=""  placeholder="Libelle*">
                                                            </div>
                                                        </div>

                                                        <div class="col-md-12">
                                                            <div class="form-group">
                                                                <h4> <label for="exampleInputEmail1">Catégories*</label></h4>
                                                                <v-select style="background-color:beige width:200px; font-size:18px" class="default-form form-control-xs" multiple v-model="selected" :reduce="(option) => option.id" :options=options />
                                                            </div>
                                                        </div>

                                                        <div class="col-md-12 ">
                                                            <label for=""> Description (Facultatif)</label> 
                                                            <div class="form-group">
                                                                <QuillEditor  :toolbar="toolbarOptions"  style="height: 100px; font-size: 15px; " v-model:content="description"  content-type="html" ref='textEditor'  theme="snow"/>
                                                            </div>
                                                        </div>

                                                        <div v-if="etapes==0 || etape==0" class="col-md-12 ">
                                                             <div class="form-group">
                                                                <h4> <label for="exampleInputEmail1">Télécharger les images principale *</label></h4>
                                                                <input id="file" type="file" multiple class="" ref="file" name="files" @change="fieldChange">
                                                            </div>
                                                        </div>
                                                      
                                                        
                                                    <div v-if="id_realisation>0 && states==0">

                                                        <div  v-if="Urlimages.length" class="col-md-12 text-center">
                                                            <div class="form-group row">
                                                                <div class="card col-md-3">
                                                                   
                                                                    <img class="card-img-top" :src="url+Urlimages" width="200" alt="Card image">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div v-else>  

                                                        <div  v-if="Urls.length && etapes==0 || etape==0" class="col-md-12 text-center">
                                                            <div class="form-group row">
                                                                <div class="card col-md-3">
                                                                
                                                                    <img class="card-img-top" :src="Urls" width="200" alt="Card image">
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>


                                                        <br>

                                                        <!-- v-if="states==1 && btnState==1"  -->
                                                        <div v-if="id_realisation>0" class="col-md-12">
                                                            <button  @click="update" type="submit" class="btn btn-prim mb-4">Mise à jour...</button>
                                                        </div>

                                                        <div v-if="btnState==1 && id_realisation==0" class="col-md-12">
                                                            <button  @click="SaveData" type="submit" class="btn btn-prim mb-4">Sauvegarder...</button>
                                                        </div>

                                                        <!-- <div v-if="etapes==1 || etape==1" class="col-md-12">
                                                            <button  @click="SaveDataBtn" type="submit" class="btn btn-prim mb-4">Terminer...</button>
                                                        </div> -->

                                                    </div>

                                                </div>

                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-red" @click="Modalhide(1)" data-dismiss="modal">Cancel</button>
                                                </div>

                                            <!-- </form> -->
                                        </div>
                                    </div>
                            </div>


                            <div class="modal fade bd-example-modal-lg" id="galleryModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h3 class="modal-title" id="staticBackdropLabel">
                                                    <span> Ajouter des images a votre creation</span>
                                                </h3>
                                                <button type="button" class="close btn btn-red" @click="Modalhide(2)" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                                <div class="modal-body">
                                                    <!-- {{ AllImages }} -->
                                                    <div class="row mb-4">
                                                        <div class="col-md-12 text-center">
                                                             <div class="form-group">
                                                                <h4> <label for="exampleInputEmail1">Télécharger autre images de la creation *</label></h4>
                                                                <input id="files" type="file" multiple class=""  accept="image/*" ref="files" name="files" @change="onFileChange">
                                                            </div>
                                                        </div>

                                                        <div  class="col-md-12 text-center">
                                                            <div class="form-group row">
                                                                <div v-for="(image, index) in images" class="card col-md-3">
                                                                    <img class="card-img-top" :src="image" width="200" alt="Card image">
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div class="col-md-12 text-center">
                                                            <button  @click="SaveDataBtn" type="submit" class="btn btn-prim mb-4">Terminer...</button>
                                                        </div> 
                                                    <br>
                                                    <br>

                                                        <div v-if="AllImages" class="row mb-4">
                                                            <div v-for="item in AllImages" :key="item.id_img_realisations" class="col-md-4 mb-3">
                                                                <img :src="url+item.filles_img_realisations" width="200"  class="img-fluid rounded shadow-sm ext-center card mb-10" alt="" />
                                                                <a class="btn btn-red btn-sm" @click="removeImage(item.id_img_realisations,item.realisations_id)">Supprimer l'image</a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-red" @click="Modalhide(2)" data-dismiss="modal">Cancel</button>
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
import UrlSite from "../../../UrlSite";
import axiosClient from "../../../ApiServices";

    const data = useShoppingStore();
    const route = useRoute();
    const datas = 1;
    const usersid = localStorage.getItem("auth_users");
    const etape = localStorage.getItem("etapes");
    const showModal = ref(false);
    const viewMenu = ref(0);
    const Type = ref('');
    const slug = ref('');
    const isOpened = ref(false);
    const error = ref('');
    const pays = ref('');
    const message = ref('');
    const tabcategories = ref([]);
    const Urls=ref([]);
    const images=ref([]);
    const filesx = ref('');
    const libelle = ref('');
    const one_img_realisations = ref('');
    const Urlimages = ref('');
    const name = ref('');
    const description = ref('');
    const tabs = ref(1);
    const etapes = ref(0);
    const states = ref(0);
    const btnState = ref(0);
    const editBtn = ref(0);
    const positions = ref(1);
    const id_realisation = ref(0);
    const code_realisation = ref('');
    const realisationsId = ref('');
    const tableau = ref([]);
    const selected = ref([]);
    const options = ref([]);

    const produitsFormData= new FormData();
    const attachments=ref([]);
    const fichiers=ref([]);

    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']                                         // remove formatting button
        ];

    const customToolbar= [
        ["bold", "italic", "underline"],
        [
            { list: "ordered" },
            { list: "bullet" }
            ],
        ["image", "code-block"]
     ]


    const Datapaginations = 1;
    const {getRealisations,deleteRealisations,responseMsg, paginations,Realisations,getAllimgRealisations,AllImages,getOptionRealisationByState,OptionRealisation} = useProduits();

    onMounted(async () => {
        await getRealisations(Datapaginations);
        await getOptionRealisationByState();
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
        await getRealisations(data);

    };

    const Loadings = async () => {
        isLoading.value = true;
        setTimeout(() => { isLoading.value = false }, 300)
    };

    const addCatégories = async () => {

        let tables1 = [];
            OptionRealisation.value.map(function (element) {
                const objet = {
                    id: element.id_option_reaalisation,
                    label: element.libelleOption_reaalisation,
                }
                tables1.push(objet);
            })
            options.value = tables1;
         axiosClient.get('/api/getPositions')
        .then(res => {
           

         if(res.data.data && res.data.data==1)
            {
               positions.value= 2;

            }else if(res.data.data && res.data.data==2)
            {
                positions.value= 1;

            }else {
                positions.value= 1;
            }

            // console.log(positions.value);

            }).catch(function (error) {
                positions.value= 1;
            });


        id_realisation.value=0;
        // btnState.value=1;
        states.value=1;
        libelle.value = "";
        description.value = "";
        attachments.value = [];
        fichiers.value = [];
        $('#userFormModal').modal('show');
        // console.log(description.value);
    };
    
    const AddGalleryModal = async (id,images_realisation,code_realisations) => {
        id_realisation.value = id;
        one_img_realisations.value = images_realisation;
        code_realisation.value = code_realisations;
        getAllimgRealisations(id);
        attachments.value = [];
        fichiers.value = [];
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
    })
};

    const Edite = async (id_realisations,images_realisations,libelle_realisations,descript_real) => {
           
            states.value=0;
            btnState.value=0;
            etapes.value==1;
            
            // Urlimages.value="";
            // libelle.value = "";
            // description.value="";
            // attachments.value = [];
            // fichiers.value = [];

            if(id_realisations>0){

            id_realisation.value=id_realisations;
            Urlimages.value=images_realisations;
            libelle.value = libelle_realisations;
            description.value=descript_real,
            attachments.value = [];
            fichiers.value = [];
            selected.value = [];

            axiosClient.get('/api/getOpRealisation/'+id_realisations)
                .then(response => {

                    let tables= [];
                    response.data.data.map(function (element) {
                    tables.push(element.idoption_realis_op_realisation);
                 })
                 
                 selected.value=tables;

                }).catch(function (error) {

                });
             
                let tables1 = [];
                OptionRealisation.value.map(function (element) {
                    const objet = {
                        id: element.id_option_reaalisation,
                        label: element.libelleOption_reaalisation,
                    }
                    tables1.push(objet);
                })
                options.value = tables1;
                
                $('#userFormModal').modal('show');

            }else{

            }

    };

    const Modalhide = async (id) => {
        router.go();
        description.value = "";
        if (id == 1) {
            Urlimages.value="";
            states.value=0;
            libelle.value = "";
            description.value = "";
            attachments.value = [];
            fichiers.value = [];
            Urls.value= [];
            selected.value= [];
            $('#userFormModal').modal('hide');
        }
        if (id == 2) {

            Urlimages.value="";
            states.value=0;
            libelle.value = "";
            description.value = "";
            attachments.value = [];
            fichiers.value = [];
            Urls.value= [];
            selected.value= [];

            $('#galleryModal').modal('hide');
        }
    };

    const DetailSwho = async (id,item) => {
        var liens = 'product/';
        const libelleModified = item.replace(/ /g, '-'); 
        var link = UrlSite + liens + libelleModified;
        window.open(link, '_blank');
    }

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
                            getRealisations(vars);
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
                            getRealisations(vars);
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
                deleteRealisations(id);
                let data = 1;
                getRealisations(data);
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

    const update = async (e) => {
        e.preventDefault();

        if(states.value==1){

          const config = {  headers: { 'Content-Type': 'multipart/form-data'}};
            axiosClient.post('/api/updateRealisations', produitsFormData, config, {

            }).then(res => {
                createToast("Réalisation ajouter avec succès!",
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
                setInterval(() => {

                    message .value = "";
                    states.value = 0;
                    id_realisation.value="";
                    Urlimages.value="";
                    libelle.value = "";
                    description.value="";
                    attachments.value = [];
                    fichiers.value = [];
                         router.go();
                 }, 3600);                   
         })

        }else{

            axiosClient.post('/api/updateRealisations', {
            id_realisations: id_realisation.value,
            states: states.value,
            libelle: libelle.value,
            description: description.value,
            selected: selected.value,
            usersid: usersid,

        }).then(response => {
            $('#userFormModal').modal('hide');
            message.value = "Opération effectuée avec succès";
            let data=1;
            getRealisations(data);
            createToast("Opération effectuée avec succès!",
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
                id_realisation.value = "";
                states.value = 0;
                libelle.value = "";
                description.value = "";
                router.go();
            }, 2500);

        }).catch(response => {

        });

        }


    };


    const fieldChange = async (e) => {
        attachments.value = e.target.files[0];
        const file = e.target.files[0];

        if (attachments.value.name.length > 0) {

            filesx.value = attachments.value.name;
            let x = attachments.value.name.split('.');
            let taille = x.length;
            let extension = x[(taille - 1)];

            if (extension == 'png' || extension == 'jpg' || extension == 'jpeg') {
           
                states.value=1;
                btnState.value=1;
              
                Urls.value = URL.createObjectURL(attachments.value);
                URL.revokeObjectURL(file);
                error.value = "";

            } else {
                
                states.value=0;
                btnState.value=0;


                createToast("Merci de charger un fichier png!",
                {
                    position: 'top-right',
                    type: 'danger',
                    transition: 'bounce',
                    hideProgressBar: 'false',
                    showIcon: 'false',
                    showCloseButton: 'false',
                    swipeClose: 'false',
                    timeout: 3600,
                });
                error.value = "Merci de charger un fichier png";
                window.scrollTo(0, 0);
                showBtn.value = 0;
            }

                produitsFormData.append('states', states.value);
                produitsFormData.append('fileData', attachments.value);
                produitsFormData.append('libelle', libelle.value);
                produitsFormData.append('description', description.value);
                produitsFormData.append('usersid', usersid);
                produitsFormData.append('positions', positions.value);
                produitsFormData.append('selected', selected.value);

                if(id_realisation.value> 0)
                    {
                     produitsFormData.append('id_realisations', id_realisation.value);
                    }

        } else {

            filesx.value = "";
            btnvalide.value = 0;
            createToast("Merci de charger un fichier png!",
                {
                    position: 'top-right',
                    type: 'danger',
                    transition: 'bounce',
                    hideProgressBar: 'false',
                    showIcon: 'false',
                    showCloseButton: 'false',
                    swipeClose: 'false',
                    timeout: 3600,
                });
            window.scrollTo(0, 0);
        }
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
        produitsFormData.append('realisationsId',realisationsId.value);
        produitsFormData.append('usersid', usersid);
        produitsFormData.append('id_realisation', id_realisation.value);
        produitsFormData.append('one_img_realisations', one_img_realisations.value);
        produitsFormData.append('code_realisation', code_realisation.value);
        // SaveDataBtn();

    };

    const  SaveDataBtn = async (e) => {

        const config = {  headers: { 'Content-Type': 'multipart/form-data'}};
            axiosClient.post('/api/SaveAllImages', produitsFormData, config, {

            }).then(response => {

                getRealisations(1);               
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
                $('#galleryModal').modal('hide');
                                   
         })
    };

    const  SaveData = async (e) => {

        const config = {  headers: { 'Content-Type': 'multipart/form-data'}};
            axiosClient.post('/api/SaveRealisations', produitsFormData, config, {

            }).then(res => {

                createToast("Réalisation ajouter avec succès!",
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

                setInterval(() => {
                    message .value = "";
                    id_realisation.value = "";
                    states.value = 0;
                    libelle.value = "";
                    description.value = "";
                    one_img_realisations.value = "";
                    selected.value = [];
                    router.go();
                 }, 3600);                   
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

    /* debu nouvelle table */

    /* .custom-table {
  min-width: 900px; }
  .custom-table thead tr, .custom-table thead th {
    border-top: none;
    border-bottom: none !important;
    color: #fff; }
  .custom-table tbody th, .custom-table tbody td {
    color: #777;
    font-weight: 400;
    padding-bottom: 20px;
    padding-top: 20px;
    font-weight: 300; }
    .custom-table tbody th small, .custom-table tbody td small {
      color: #b3b3b3;
      font-weight: 300; }
  .custom-table tbody tr:not(.spacer) {
    border-radius: 7px;
    overflow: hidden;
    -webkit-transition: .3s all ease;
    -o-transition: .3s all ease;
    transition: .3s all ease; }
    .custom-table tbody tr:not(.spacer):hover {
      -webkit-box-shadow: 0 2px 10px -5px rgba(0, 0, 0, 0.1);
      box-shadow: 0 2px 10px -5px rgba(0, 0, 0, 0.1); }
  .custom-table tbody tr th, .custom-table tbody tr td {
    background: #25252b;
    border: none;
    -webkit-transition: .3s all ease;
    -o-transition: .3s all ease;
    transition: .3s all ease; }
    .custom-table tbody tr th a, .custom-table tbody tr td a {
      color: #b3b3b3; }
    .custom-table tbody tr th:first-child, .custom-table tbody tr td:first-child {
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px; }
    .custom-table tbody tr th:last-child, .custom-table tbody tr td:last-child {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px; }
  .custom-table tbody tr.spacer td {
    padding: 0 !important;
    height: 3px;
    border-radius: 0 !important;
    background: transparent !important; }
  .custom-table tbody tr.active th, .custom-table tbody tr.active td, .custom-table tbody tr:hover th, .custom-table tbody tr:hover td {
    color: #fff;
    background: #2e2e36; }
    .custom-table tbody tr.active th a, .custom-table tbody tr.active td a, .custom-table tbody tr:hover th a, .custom-table tbody tr:hover td a {
      color: #fff; } */

    /* fin  */



    /* debu table */
/* .table {
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
} */

/* fin */

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