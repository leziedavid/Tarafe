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

                        <div class="form-customer des-font">
                                     <h3 class="title-font text-center">Information sur l'article</h3>
                                      <br>  <br>

                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                       <h4> <label for="exampleInputEmail1">Libelle*</label></h4>
                                                        <input style="font-size: 18px" v-model="libelle" type="text" class="form-control form-account" name="" placeholder="Nom du produit*">
                                                    </div>
                                                </div>

                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <h4> <label for="exampleInputEmail1">Catégories*</label></h4>
                                                        <v-select style="background-color:beige width:200px;" class="default-form form-control-xs"  v-model="selected1" :reduce="(option) => option.id" :options=options1 />
                                                    </div>
                                                </div>


                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <h4> <label for="exampleInputEmail1">Contenu *</label></h4>
                                                         <QuillEditor  :toolbar="toolbarOptions"  style="height: 200px;"  v-model:content="description"  content-type="html" ref='textEditor'  theme="snow"/>
                                                    </div>
                                                </div>

                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                       <h4> <label for="exampleInputEmail1">Images *</label></h4>
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
                                                       <h4> <label for="exampleInputEmail1">Images variante (Vous pouvez télécharger plus de 10 images)</label></h4>
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

                                                <button @click="submit" type="submit" class="btn btn-prim uppercase" > Sauvegarder...  </button>

            
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

import {ref,reactive, computed,onMounted,watch,watchEffect} from 'vue';
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
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import urlimage from "../../../ImgUrl";
import axiosClient from "../../../ApiServices";

    const data = useShoppingStore();
    const route = useRoute();
    const datas=1;
    const usersid=localStorage.getItem("auth_users");
    const slug_categories_blog=ref('');
    const id_categories=ref('');

    const { getlisteCategories,getCategoriesById,CategoriesDetail,NblisteCategories,listeCategories,Messages} = useBlogs();
    onMounted(async () => {
        await getlisteCategories();
    });


    const isLoading=ref(false);
    const fullPage= ref(true);

    const libelle=ref('');
    const title=ref('');
    const description=ref('');
    const message=ref('');
    const category_id=ref('');
    const selected1=ref([]);
    const options1=ref([]);

    const attachments=ref([]);
    const gallery=ref([]);
    const images=ref([]);
    const fichiers=ref([]);
    const docFiles=ref([]);
    const filesx=ref('');
    const url=ref('');
    const postFormData=new FormData();
    const error=ref('');
    const showBtn=ref(0);
    const success=ref(false);

    const content= "<h1>Html For Editor</h1>";

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
        if (!files.length) return;
        createImage(files);
         console.log(files);

    };

    const createImage = async (item) => {


        for (let index = 0; index < item.length; index++) {
            fichiers.value.push(item[index]);
            postFormData.append('files[]', item[index]);
            let reader = new FileReader();

            reader.onload = function (event) {
                const imageUrl = event.target.result;
                images.value.push(imageUrl);
            }
            reader.readAsDataURL(item[index]);
        }

        postFormData.append('title', libelle.value);
        postFormData.append('images', attachments.value);
        postFormData.append('posts_category_id', selected1.value);
        postFormData.append('posts_title', libelle.value);
        postFormData.append('posts_description', description.value);
        postFormData.append('posts_user_id', usersid);
        showBtn.value = 1;
    };

    const removeImage = async (index) => {
        images.value.splice(index, 1)
        fichiers.value.splice(index, 1)
    };

    const submit = async (valeur) => {
        console.log(description.value);
        // && description.value.length > 0
        if (libelle.value.length > 0 ) {
            error.value = "";
            const config = {  headers: { 'Content-Type': 'multipart/form-data'}};
            axiosClient.post('/api/createarticles', postFormData, config, {})
                .then(response => {

                    message.value = "Blog Ajouter avec success";
                    error.value = "";
                    success.value = true;

                    createToast("Article ajouter avec succès!",
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

                    setInterval(() => {
                        success.value = false;
                        message.value = "";
                        router.push("/ListesBlog");
                    }, 3600);

                }).catch(response => {

                });

        } else {
            createToast("Merci de renseigner tous les champs!",
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
            error.value = "Merci de renseigner tous les champs";
            window.scrollTo(0, 0);
        }

    };

    watchEffect(() => {

        if(libelle){
            libelle.value=libelle.value.toUpperCase();
         };

        if(listeCategories.value.length) {
            let tables1 = [];
            listeCategories.value.map(function (element) {
                const objet = {
                    id: element.categories_blog_id,
                    label: element.name_categories_blog,
                }
                tables1.push(objet);
            })
            options1.value = tables1;
        }



        });

</script>


<style scoped>

input[type=file]::file-selector-button {
  margin-right: 20px;
  border: none;
  background: #084cdf;
  padding: 10px 20px;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  transition: background .2s ease-in-out;
}

input[type=file]::file-selector-button:hover {
  background: #0d45a5;
}
    .main-content{
            margin-left: 0;
        }

    .preview img {
    max-width: 100%;
    max-height: 120px;
    }


</style>