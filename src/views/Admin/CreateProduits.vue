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

                            <section>
                                    <div class="row">
                                        <div class="col-md-12">

                                            <div class="form-customer des-font">

                                                <div class="row mb-3 mb-2">
                                                    <div class="col-sm-9">
                                                       <h3> Etapes 1</h3> 
                                                     </div>
                                                </div>
                                                <br>

                                                <div class="row mb-3 mb-2">
                                                    <label for="colFormLabelSm" style="font-size: 17px" class="col-sm-3 col-form-label col-form-label-sm">Nom du produit*</label>
                                                    <div class="col-sm-9">
                                                        <input v-model="libelle" type="text" class="form-control form-control-sm" name="" placeholder="Nom du produit*">
                                                    </div>
                                                </div>
                                                
                                                
                                                <div class="row mb-3 mb-2">
                                                    <label for="colFormLabelSm"  style="font-size: 17px" class="col-sm-3 col-form-label col-form-label-sm"> Catégories*</label>
                                                    <div class="col-sm-9">
                                                            <v-select style="background-color:rgb(255, 255, 255) width:200px; font-size: 20px" class="default-form form-control-xs"  v-model="selected1" :reduce="(option) => option.id" :options=options1 />
                                                        </div>
                                                </div>

                                               
                                                <div class="row mb-3 mb-2">
                                                    <label for="colFormLabelSm"  style="font-size: 17px" class="col-sm-3 col-form-label col-form-label-sm">Sous categories*</label>
                                                    <div class="col-sm-9">
                                                        <v-select v-model="selected2" :reduce="(option) => option.id" :options=options2  style="background-color:rgb(255, 255, 255) width:200px; font-size: 20px"  class="default-form form-control-xs" />
                                                    </div>
                                                </div>

                                              
                                                <div class="row mb-3 mb-2">
                                                    <label for="colFormLabelSm"  style="font-size: 17px" class="col-sm-3 col-form-label col-form-label-sm">Sous sous categories*</label>
                                                    <div class="col-sm-9">
                                                        <v-select v-model="selected3" :reduce="(option) => option.id" :options=options3  style="background-color:rgb(255, 255, 255) width:200px; font-size: 20px"  class=" default-form form-control-xs" />
                                                    </div>
                                                </div>
                                            

                                                <div class="row mb-3 mb-2">
                                                    <div class="col-sm-9">
                                                       <h3> Etapes 2 </h3> 
                                                     </div>
                                                </div>
                                                <br>

                                                <div class="row mb-3 mb-2">
                                                    <h5><label for="colFormLabelSm"  style="font-size: 17px" class="col-sm-3 col-form-label col-form-label-sm"> Parametre*</label></h5>
                                                    <div class="col-sm-9">
                                                        <v-select v-model="selected6" :reduce="(option) => option.id" :options=dataOptionProduits style="background-color:rgb(255, 255, 255) width:200px; font-size: 20px"  class=" default-form form-control-xs" />
                                                    </div>
                                                </div>

                                               
                                                <div v-if="divshow==1" class="row mb-3 mb-2">
                                                    <h5><label for="colFormLabelSm"  style="font-size: 17px" class="col-sm-3 col-form-label col-form-label-sm">Options de commande sur le produits*</label></h5>
                                                    <div class="col-sm-9">
                                                        <v-select v-model="selected8" :reduce="(option) => option.id" :options=dataOptionStockProduits  style="background-color:rgb(255, 255, 255) width:200px; font-size: 20px" class=" default-form form-control-xs" />
                                                    </div>
                                                </div>

                                              
                                                <div class="row mb-3 mb-2">
                                                  <h5>  <label for="colFormLabelSm"  style="font-size: 17px" class="col-sm-3 col-form-label col-form-label-sm">Options de commande sur le produits*</label> </h5> 
                                                    <div class="col-sm-9">
                                                        <v-select v-model="selected7" :reduce="(option) => option.id" :options=OptionCommandeProduits style="background-color:rgb(255, 255, 255) width:200px; font-size: 20px" class=" default-form form-control-xs" />
                                                    </div>
                                                </div>

                                                <div class="row mb-3 mb-2">
                                                  <h5> <label for="colFormLabelSm"  style="font-size: 17px" class="col-sm-3 col-form-label col-form-label-sm">Occasion*</label> </h5> 
                                                    <div class="col-sm-9">
                                                       <v-select v-model="selected9" :reduce="(option) => option.id" :options=Occasion style="background-color:rgb(255, 255, 255) width:200px; font-size: 20px" class="default-form form-control-xs" />
                                                    </div>
                                                </div>

                                                <div class="row mb-3 mb-2">
                                                    <div class="col-sm-9">
                                                       <h3> Etapes 3</h3> 
                                                     </div>
                                                </div>
                                                <br>

                                                <div class="row mb-3 mb-2">
                                                    <h5> <label for="colFormLabelSm"  style="font-size: 17px" class="col-sm-3 col-form-label col-form-label-sm">Description*</label> </h5> 
                                                    <div class="col-sm-9">
                                                        <QuillEditor  :toolbar="toolbarOptions"  style="height: 200px; font-size: 20px;  "  v-model:content="description"  content-type="html" ref='textEditor'  theme="snow"/>
                                                    </div>
                                                </div>
                                                <div class="row mb-3 mb-2">
                                                    <h5> <label for="colFormLabelSm"  style="font-size: 17px" class="col-sm-3 col-form-label col-form-label-sm">Longue Description*</label> </h5> 
                                                    <div class="col-sm-9">
                                                        <QuillEditor  :toolbar="toolbarOptions"  style="height: 200px; font-size: 20px; "  v-model:content="longdescription"  content-type="html" ref='textEditor'  theme="snow"/>
                                                    </div>
                                                </div>

              
                                                <div class="row mb-3 mb-2">
                                                    <div class="col-sm-9">
                                                       <h3> Etapes 4</h3> 
                                                     </div>
                                                </div>
                                                <br>


                                                <div class="row mb-3 mb-2">
                                                   <h5><label for="colFormLabelSm"  style="font-size: 17px" class="col-sm-3 col-form-label col-form-label-sm"> Couleur (facultatif)*</label> </h5> 
                                                    <div class="col-sm-9">
                                                        <v-select multiple style="background-color:rgb(255, 255, 255) width:200px; font-size: 20px" class="default-form form-control-xs"  v-model="couleur" :reduce="(option) => option.id" :options=valeurCouleur />
                                                    </div>
                                                </div>

                                               
                                                <div class="row mb-3 mb-2">
                                                  <h5><label for="colFormLabelSm"  style="font-size: 17px" class="col-sm-3 col-form-label col-form-label-sm">Taille (facultatif)*</label></h5> 
                                                    <div class="col-sm-9">
                                                        <v-select multiple style="background-color:rgb(255, 255, 255) width:200px; font-size: 20px"  class="default-form form-control-xs"  v-model="taille" :reduce="(option) => option.id" :options=valeurTaille />
                                                    </div>
                                                </div>

                                                <div class="row mb-3 mb-2">
                                                   <h5> <label for="colFormLabelSm"  style="font-size: 17px" class="col-sm-3 col-form-label col-form-label-sm">Pointure (facultatif)*</label></h5> 
                                                    <div class="col-sm-9">
                                                        <v-select multiple style="background-color:rgb(255, 255, 255) width:200px; font-size: 20px"  class="default-form form-control-xs"  v-model="pointure" :reduce="(option) => option.id" :options=valeurPointure />
                                                    </div>
                                                </div>

                                                <div class="row mb-3 mb-2">
                                                    <label for="colFormLabelSm"  style="font-size: 17px" class="col-sm-3 col-form-label col-form-label-sm">Prix*</label>
                                                    <div class="col-sm-9">
                                                        <input style="font-size: 20px" v-model="prix" type="number" class="form-control form-control-sm" name="" placeholder="1000">
                                                    </div>
                                                </div>

                                                <div class="row mb-3 mb-2">
                                                    <label for="colFormLabelSm"  style="font-size: 17px" class="col-sm-3 col-form-label col-form-label-sm">Prix de vente *</label>
                                                    <div class="col-sm-9">
                                                        <input style="font-size: 20px" v-model="prixVente" type="number" class="form-control form-control-sm" name="" placeholder="1000">
                                                    </div>
                                                </div>

                                                <div class="row mb-3 mb-2">
                                                    <label for="colFormLabelSm"  style="font-size: 17px" class="col-sm-3 col-form-label col-form-label-sm">Quantité Stoks *</label>
                                                    <div class="col-sm-9">
                                                        <input style="font-size: 20px" v-model="quantiteStock" type="number" class="form-control form-control-sm" name="" placeholder="20">
                                                    </div>
                                                </div>

                                                <div class="row mb-3 mb-2">
                                                    <label for="colFormLabelSm"  style="font-size: 17px" class="col-sm-3 col-form-label col-form-label-sm">Boutiques *</label>
                                                    <div class="col-sm-9">
                                                        <v-select style="font-size: 20px" v-model="selected5" :reduce="(option) => option.id" :options=options5 class="" />
                                                    </div>
                                                </div>



                                                <div class="row mb-3 mb-2">
                                                    <div class="col-sm-9">
                                                       <h3> Etapes 5</h3> 
                                                     </div>
                                                </div>
                                                <br>

                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                       <h4> <label  style="font-size: 17px" for="exampleInputEmail1">Images *</label></h4>
                                                       <input id="files" type="file" multiple class="" ref="file" name="files" @change="fieldChange">
                                                    </div>
                                                </div>

                                                <div v-if="url" class="col-md-12">
                                                    <div style="width: 18rem;" class=" card col-md-6 mb-2">
                                                        <img :src="url" width="150" class="mb-2" alt="">
                                                    </div>
                                                </div>

                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                       <h4> <label  style="font-size: 17px"  for="exampleInputEmail1">Images variante (Vous pouvez télécharger plus de 10 images)</label></h4>
                                                       <input multiple type="file"  ref="files" name="file"  @change="onFileChange">
                                                    </div>
                                                </div>

                                                <div v-if="images.length" class="col-md-12 text-center">
                                                        <div class="form-group row">
                                                            <div v-for="(image, index) in images" class="card col-md-3">
                                                                 <img class="card-img-top" :src="image" width="200" alt="Card image">
                                                            </div>
                                                        </div>
                                                </div>

                                                <br> <br><br>

                                                <div class="col-md-3 text-center ">
                                                    <div  class="btn-button-group mg-top-30 mg-bottom-15 text-center">
                                                        <button @click="submits" type="submit" class="btn btn-prim text-center full-width number-font uppercase">
                                                          Sauvegarder...
                                                        </button>
                                                    </div>
                                                </div>

                                                <br><br><br>
                                                <div class="col-md-12">
                                                </div>
                                                <br>
                                            </div>

                                        </div>
                                    </div>
                             </section>

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
import Swal from 'sweetalert2';

import urlimage from "../../../ImgUrl";
import axiosClient from "../../../ApiServices";

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const data = useShoppingStore();
const route = useRoute();
const datas = 1;
const usersid = localStorage.getItem("auth_users");
const showModal = ref(false);
const viewMenu = ref(0);
const Type = ref('');
const error = ref('');
const pays = ref('');
const message = ref('');
const Souscategorie = ref([]);
const S_souscategorie = ref([]);

// Mes variable
const libelle = ref('');
const couleur = ref('');
const taille = ref('');
const pointure = ref('');
const description = ref('');
const longdescription = ref('');
const quantite = ref(1);
const quantiteStock = ref(1);
const prixVente = ref(1500);
const prix = ref(1500);
const url = ref('');
const produitsFormData = new FormData();
const attachments = ref([]);
const filesx = ref('');
const gallery = ref([]);
const fichiers = ref([]);
const images = ref([]);
const docFiles = ref([]);
const selected = ref([]);
const selected1 = ref([]);
const selected2 = ref([]);
const selected3 = ref([]);
const selected4 = ref([]);
const selected5 = ref([]);
const options = ref([]);
const options1 = ref([]);
const options2 = ref([]);
const options3 = ref([]);
const options4 = ref([]);
const options5 = ref([]);
const valeurImages = ref([]);

const divshow = ref(0);

const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
];

const selected7 = ref([]);
const OptionCommandeProduits = ref([]);
const optionCommandeProduits = [
    {
        id: 1,
        label: 'Produit personnalisable',
        value: 'Produit personnalisable',
    },

    {
        id: 2,
        label: 'Produit nom personnalisable',
        value: 'Produit nom personnalisable',
    },

];

const selected9 = ref([]);
const Occasion = ref([]);
const OptionOccasion = [
    {
        id: 1,
        label: 'Anniversaire',
        value: 'Anniversaire',
    },
    {
        id: 2,
        label: 'mariage',
        value: 'mariage',
    },
    {
        id: 3,
        label: 'défiler',
        value: 'défiler',
    },
    {
        id: 4,
        label: 'Soirée',
        value: 'Soirée',
    },
    {
        id: 5,
        label: 'Entréprise',
        value: 'Entréprise',
    },
    {
        id: 6,
        label: 'Decorations',
        value: 'Decorations',
    },
    {
        id: 7,
        label: 'Eclairage',
        value: 'Eclairage',
    },
    {
        id: 8,
        label: 'Cérémonie',
        value: 'Eclairage',
    },
    {
        id: 9,
        label: 'Mannequinat',
        value: 'Mannequinat',
    },
    {
        id: 10,
        label: 'Idées cadeaux',
        value: 'Idées cadeaux',
    },

    {
        id: 11,
        label: 'Pour un évènement',
        value: 'Pour un évènement',
    },

    {
        id: 12,
        label: 'Pour le bureau ',
        value: 'Pour le bureau ',
    },
    {
        id: 13,
        label: 'Pour la maison',
        value: 'Pour la maison',
    },
    {
        id: 14,
        label: 'Pour les enfant',
        value: 'Pour les enfant',
    },
    {
        id: 15,
        label: 'Pour ma marque / entreprise',
        value: 'Pour ma marque / entreprise',
    },

];

const selected6 = ref([]);
const dataOptionProduits = ref([]);
const optionproduits = [
    {
        id: 1,
        label: 'Stock',
        value: 'Stock',
    },

    {
        id: 2,
        label: 'Produits sur commande',
        value: 'Produits sur commande',
    },

];
const selected8 = ref([]);
const dataOptionStockProduits = ref([]);
const optionStockproduits = [
    {
        id: 1,
        label: 'En rupture',
        value: 'En rupture',
    },
    {
        id: 2,
        label: 'En rupture sur commande',
        value: 'En rupture sur commande',
    },
    {
        id: 3,
        label: 'En stock',
        value: 'En stock',
    },

];


const valeurCouleur = ref([]);
const valeurTaille = ref([]);
const valeurPointure = ref([]);

const fields = {
    category_id: "",
};
const check1 = ref(1);
const check2 = ref(1);
const check3 = ref(1);
const check4 = ref(1);
const stepe = ref(1);
const DataTable = ref([]);
const categoriesItem = ref('');
const Instock = ref('En stock');
const typesimages = ref('');
const showBtn = ref(0);

const Datapaginations = 1;
const { boutiques, getAllboutiquesByAdd, pointures, tailles, getAllPropriete, colors, Categories } = useProduits();

onMounted(async () => {
    await getAllPropriete();
});

const isLoading = ref(false);
const fullPage = ref(true);

const Loadings = async () => {
    isLoading.value = true;
    setTimeout(() => { isLoading.value = false }, 300)
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

            url.value = URL.createObjectURL(attachments.value);
            URL.revokeObjectURL(file);
            error.value = "";
            showBtn.value = 1;

        } else {

            error.value = "Merci de charger un fichier png";
            window.scrollTo(0, 0);
            showBtn.value = 0;
        }

    } else {

        filesx.value = "";
        btnvalide.value = 0;
        error.value = "Merci de charger un fichier png";
        window.scrollTo(0, 0);
    }
};

const onFileChange = async (e) => {

    let files = e.target.files || e.dataTransfer.files;
    //  fichiers.value=e.target.files;
    if (!files.length) return;
    createImage(files);
    console.log(files);

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

    produitsFormData.append('fileData', attachments.value);
    produitsFormData.append('libelle', libelle.value);
    produitsFormData.append('prix', prix.value);
    produitsFormData.append('prixVente', prixVente.value);
    produitsFormData.append('selected1', selected1.value);
    produitsFormData.append('selected2', selected2.value);
    produitsFormData.append('selected3', selected3.value);
    produitsFormData.append('idboutique', selected5.value);
    produitsFormData.append('Parametre', selected6.value);
    produitsFormData.append('Optionsdecommande', selected7.value);
    produitsFormData.append('Optionsproduits', selected8.value);
    produitsFormData.append('Occasion', selected9.value);
    produitsFormData.append('couleur', couleur.value);
    produitsFormData.append('pointure', pointure.value);
    produitsFormData.append('taille', taille.value);
    produitsFormData.append('quantite', quantiteStock.value);
    produitsFormData.append('quantiteStock', quantiteStock.value);
    produitsFormData.append('description', description.value);
    produitsFormData.append('longdescription', longdescription.value);
    produitsFormData.append('usersId', usersid);

};

const removeImage = async (index) => {
    images.value.splice(index, 1)
    fichiers.value.splice(index, 1)
};

const submits = async (index) => {
    if (libelle.value.length > 0 && selected5.value > 0 && quantiteStock.value > 0 && description.value.length > 0 && selected1.value > 0) {

        const config = { headers: { 'Content-Type': 'multipart/form-data' } };

        axiosClient.post('/api/addProduits', produitsFormData, config, {

        }).then(response => {

            if (response.data.success == true) {
                window.scrollTo(0, 0);
                error.value = "";
                message.value = response.data.message;
                createToast("Produits ajouter avec succès!",
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

            } else {

                window.scrollTo(0, 0);
                error.value = response.data.message;
                message.value = "";
                createToast("Quelque chose c'est mal passer mercis de rajouter à nouveau votre produits!",
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
            }

            setTimeout(() => {
                error.value = "";
                message.value = "";
                router.push("/ListesProduits");
            }, 3600);

        }).catch((error) => {

            error.value = "Quelque chose c'est mal passer mercis de rajouter à nouveau votre produits ou changer le nom de votre produits";
            window.scrollTo(0, 0);

            createToast("Quelque chose c'est mal passer mercis de rajouter à nouveau votre produits ou changer le nom de votre produits!",
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
            setTimeout(() => {
                error.value = "";
                message.value = "";
            }, 5600);
        });

    } else {

        error.value = "Mercis de reseingner obligatoirement les champs requis";
        window.scrollTo(0, 0);
        createToast("Mercis de reseingner obligatoirement les champs requis!",
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
    }

};

watchEffect(() => {

    if (selected6.value == 1) {
        divshow.value = 1;
    } else {
        divshow.value = 0;
    };

    if (OptionOccasion) {
        let tables1 = [];
        OptionOccasion.map(function (element) {
            const objet1 = {
                id: element.label,
                label: element.label,
            }
            tables1.push(objet1);
        })
        Occasion.value = tables1;
    };

    if (optionStockproduits) {
        let tables1 = [];
        optionStockproduits.map(function (element) {
            const objet1 = {
                id: element.id,
                label: element.label,
            }
            tables1.push(objet1);
        })
        dataOptionStockProduits.value = tables1;
    };

    if (optionproduits) {

        let tables1 = [];
        optionproduits.map(function (element) {
            const objet1 = {
                id: element.id,
                label: element.label,
            }
            tables1.push(objet1);
        })
        dataOptionProduits.value = tables1;
    };

    if (optionCommandeProduits) {

        let tables1 = [];
        optionCommandeProduits.map(function (element) {
            const objet1 = {
                id: element.id,
                label: element.label,
            }
            tables1.push(objet1);
        })
        OptionCommandeProduits.value = tables1;
    };

    //Option2

    if (colors.value.length > 0) {

        let tables1 = [];
        colors.value.map(function (element) {
            const objet1 = {
                id: element.id_couleurs,
                label: element.name_couleurs,
            }
            tables1.push(objet1);
        })
        valeurCouleur.value = tables1;
    };

    //Option3

    if (tailles.value.length > 0) {
        let tables2 = [];
        tailles.value.map(function (element) {
            const objet2 = {
                id: element.id_size,
                label: element.name_size,
            }
            tables2.push(objet2);

        })
        valeurTaille.value = tables2;
    };

    //Option4

    if (pointures.value.length > 0) {
        let tables3 = [];
        pointures.value.map(function (element) {
            const objet3 = {
                id: element.id_pointures,
                label: element.name_pointures,
            }
            tables3.push(objet3);
        })
        valeurPointure.value = tables3;

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
        options5.value = tables2;
    };

    if (Categories.value) {

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


    if (selected1.value) {

        axiosClient.get('/sanctum/csrf-cookie').then(response => {
            axiosClient.get('/api/getsouscategories/' + selected1.value)
                .then(response => {

                    let souscategories = response.data.data;
                    //    Souscategorie = response.data.data;
                    let tables1 = [];
                    souscategories.map(function (element) {

                        const objet = {
                            id: element.id_sous_categories_produits,
                            label: element.libelle_sous_categories_produits,
                        }

                        tables1.push(objet);
                    })
                    options2.value = tables1;

                }).catch(function (error) {

                });
        })
    };

    if (selected2.value) {

        axiosClient.get('/sanctum/csrf-cookie').then(response => {
            axiosClient.get('/api/getSousSousCategories/' + selected2.value)

                .then(response => {
                    let soussouscategories = response.data.data;
                    if (soussouscategories.length > 0) {
                        let tables = [];
                        soussouscategories.map(function (element) {
                            const objet = {
                                id: element.id_sous_sous_categories_produits,
                                label: element.libelle_sous_sous_categories,
                            }
                            tables.push(objet);
                        })

                        options3.value = tables;
                    }

                }).catch(function (error) {
                    // console.error(error);
                });
        })
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