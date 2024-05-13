<template>
    <div>
        <Header :outp="outp" />

          <main class="main">

            <div class="section block-breadcrumb">
                <div class="container"> 
                <div class="breadcrumbs wow bounceIn"> 
                    <ul> 
                        <li> <a href="#">Home </a></li>
                        <li> <a href="#">Blog</a></li>
                    </ul>
                </div>
                </div>
            </div>


            <section class="section block-blog-single">

                <div  class="container">
                    <loader v-if="loadings==1" > </loader>
                </div>

                <div v-if="loadings==0">
                    <div v-if="loadings==0 && ArticlesById.length>0"  class="container-blog-single">

                        <div v-for="item in ArticlesById" :key="item.posts_id" class="blog-head wow bounceIn">
                            <div class="text-center">
                            <h2>{{item.posts_title}}</h2>

                            <div class="meta-post text-17">
                                <span class="neutral-medium">Posté par</span> &nbsp;
                                <span>Tarafé</span>&nbsp;
                                <span class="neutral-medium">le</span>&nbsp;
                                <span>{{moment(item.created_at).format('DD-MM-YYYY') }}</span>
                            </div>

                            </div>
                        </div>

                        <div  v-for="item in ArticlesById" :key="item.posts_id" class="blog-content wow bounceIn">
                            <img class="w-100" :src="(url+item.imagePath)"  alt="Guza">

                            <div class="blog-content-inner">

                            <p  v-html="item.posts_body"></p>
                        
                            <div class="row">
                                <div  v-for="items in gallery" :key="items.id_galleryBlog"  class="col-md-6">
                                    <img class="w-100" :src="(url+items.Path_gallery)" alt="Guza">
                                </div>
                            </div>
                            
                            <div class="block-related-post">
                                <h4 class="mb-30">Articles connexes</h4>
                                <div class="row">
                                <div  v-for="item in Allblogs" :key="item.posts_id"  class="col-lg-4 col-md-6">
                                    <div class="cardBlog wow fadeInUp">
                                    <div class="cardImage">
                                    <a :href="('/articles/'+item.posts_id)">
                                        <img :src="(url+item.imagePath)"  alt="guza"></a></div>
                                    <div class="cardInfo">
                                        <div class="cardTags">
                                            <span class="date-post">{{moment(item.created_at).format('DD-MM-YYYY') }}</span></div>
                                            <a class="cardTitle" :href="('/articles/'+item.posts_id)">
                                                <h6>{{item.posts_title}} </h6>
                                            </a>
                                    </div>
                                    </div>
                                </div>

                                </div>
                            </div>
                            <div class="block-comments">
                                <h4 class="mb-30">Commentaires</h4>
                                <div class="list-comments">

                                <div v-for="itemx in AllComments" :key="itemx.blog_comment_id" class="item-comment">
                                    <!-- <div class="comment-image">
                                        <img src="/assets/users.png" width="10x0px" alt="Guza">
                                    </div> -->
                                    <div class="comment-info">
                                    <div class="comment-info-top">
                                        <div class="comment-author-name">{{itemx.nom_blog_comment}}</div>
                                        <div class="comment-date"> {{moment(itemx.created_at).format('DD-MM-YYYY') }}</div>
                                    </div>
                                    <div class="comment-info-bottom">
                                        <p class="body-p2">
                                            {{itemx.texte_blog_comment}}
                                        </p>
                                    </div>
                                    </div>
                                </div>

                                </div>
                            </div>
                            <div class="block-form-comment">
                                <h4>Laisser un commentaire</h4>
                                <p class="text-16 neutral-medium mb-30">Votre adresse électronique ne sera pas publiée. Les champs obligatoires sont marqués *</p>
                                
                                <div class="row">

                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="form-group">
                                        <input  v-model="nomPrenom"  class="form-control" type="text" placeholder="Nom & Prenom*">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="form-group">
                                            <input v-model="email" class="form-control" type="text" placeholder="Email *">
                                        </div>
                                    </div>
                
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                        <textarea   v-model="contents" class="form-control" placeholder="Message" rows="6"></textarea>
                                        </div>
                                    </div>
                                
                                    <div class="col-lg-12">
                                        <div class="text-center mt-10">
                                        <button @click="valider" class="btn btn-black">Envoyer</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>


            </section>

          </main>

          <br> <br> <br>

      <Footer :reglages="reglages"  /> 
    </div>
</template>

<script setup>

import Header from '../components/Header.vue';


import 'vue-loading-overlay/dist/css/index.css';
import loader from '../components/loader.vue';

import Footer from '../components/Footer.vue';
import { ref, reactive, computed, onMounted, watch, watchEffect } from 'vue';
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import useHomes from "../composable/Homes";
import useBlogs from "../composable/Blogs";

import { useRouter, useRoute } from 'vue-router'
import { useShoppingStore } from '../store/index';
import { createToast } from 'mosha-vue-toastify';
import moment from 'moment';
import axios from 'axios';

import url from "../../ImgUrl";
import axiosClient from "../../ApiServices";

const data = useShoppingStore();
const route = useRoute();
const email = ref('');
const nomPrenom = ref('');
const contents = ref('');

const { getAllDatapages, Categories, Categorie, Produits, Produit, getDeatailSop, Slider, Products, NbDataImages, DataImages, Colors, nbColors, tailles, nbtailles, pointures, nbpointures, getAllproduitscommentsById, AllProduitsComments, nbblogs, outp, MegaMenu,reglages} = useHomes();
localStorage.setItem("idPoste", route.params.id);
const { getlasteArticles, nblasteArticles, lasteArticles, getAllArticles, AllArticles, nbAllArticles, getArticlesById, ArticlesById, nbArticlesById, Allblogs, AllComments, getAllCommenteById, Allcategories, gallery } = useBlogs();

const selected1 = ref([]);
const usersid = localStorage.getItem("auth_users");

onMounted(async () => {
    await getArticlesById(route.params.id);
    await getAllCommenteById(route.params.id);
    await getAllDatapages();
    await MegaMenu();
});

const decode = async (html) => {

    let decoder = html || document.createElement('div');
    decoder.innerHTML = html;

    return decoder.textContent;
};

const decodeHTML = async (item) => {
    console.log(item);
    let txt = document.createElement("textarea");
    txt.innerHTML = item;
    return txt.value;
};

const loadings = ref(1);
setTimeout(() => {
    loadings.value = 0;
}, 4000);

const comment = async () => {
    ArticlesById;
    await getAllCommenteById(route.params.id);
};

const messagesInfo = async () => {

    createToast("Votre commentaire à été prise en compte merci d'avoir utiliser notre service !",
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
};

const valider = async (e) => {
    e.preventDefault();
    if (email.value.length > 0 && nomPrenom.value.length && contents.value.length > 0) {
        axiosClient.post('/api/addcomments', {
            email: email.value,
            nomPrenom: nomPrenom.value,
            contents: contents.value,
            posteId: posteId.value,
        }).then(res => {

            getAllCommenteById(route.params.id);
            email.value = "";
            nomPrenom.value = "";
            contents.value = "";
            messagesInfo();

        }).catch(err => console.log(err));

    } else {

        createToast("Merci de renseigner tous les champs svp !",
            {
                position: 'top-right',
                type: 'danger',
                transition: 'bounce',
                hideProgressBar: 'false',
                showIcon: 'false',
                showCloseButton: 'false',
                swipeClose: 'false',
                timeout: 3600,
            })
    }
};

watchEffect(() => {

});

</script>