<template>
    <div>
        <Header :outp="outp" />

          <main class="main">
            
            <div class="section block-breadcrumb">
                <div class="container"> 
                    <div class="breadcrumbs"> 
                        <ul> 
                        <li> <a href="/">ACCUEIL</a></li>
                        <li> <a href="#">NOTRE BLOG</a></li>
                        </ul>
                    </div>
                </div>
           </div>
           <br>
            <section class="section block-blog-list">

                <div  class="container">
                    <loader v-if="loadings==1" > </loader>
                </div>

                <div v-if="loadings==0">

                    <div v-if="loadings==0 && AllArticles.length>0"  class="container"> 
                        <div class="text-center wow bounceIn"> 
                            <h2>NOTRE BLOG</h2>
                        </div>
                    </div>

                    <div  v-if="loadings==0 && listeCategories.length>0"  class="container">

                        <ul class="nav-tabs nav-tab-grey wow bounceIn">
                            <li v-for="item in listeCategories" :key="item.categories_blog_id">
                                <a  @click="SelectOccasion(item.categories_blog_id)" href="#">{{item.name_categories_blog}} </a>
                            </li>
                        </ul>

                        <div class="row wow bounceIn">

                            <div v-if="AllArticles.length>0" v-for="item in AllArticles" :key="item.posts_id" class="col-lg-6 col-md-6">

                                <div class="cardBlog wow fadeInUp">

                                    <div class="cardImage">
                                    <a :href="('articles/'+item.posts_id)">
                                        <img :src="url+item.imagePath"  alt="guza"></a>
                                    </div>

                                    <div class="cardInfo">

                                    <div class="cardTags">
                                        <a  :href="('articles/'+item.posts_id)">{{ item.posts_title }}</a>
                                        <span class="date-post">{{ moment(item.created_at).format('DD-MM-YYYY') }}</span>
                                    </div>
                                    <a class="cardTitle"  :href="('articles/'+item.posts_id)"> </a>
                                    <a class="link-underline link-l2" :href="('articles/'+item.posts_id)">Lire la suite</a>
                                    </div>

                                </div>

                            </div>  

                            <div v-else class="row">
                            <h1> <div class="col-md-12 text-center"> Aucun résultat trouvé</div> </h1>
                        </div>

                        </div>

                    </div>
                </div>

            </section>

          </main>

          <br> <br> <br>

      <Footer :reglages="reglages" /> 
    </div>
</template>

<script setup>
import 'vue-loading-overlay/dist/css/index.css';
import loader from '../components/loader.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { ref, reactive, computed, onMounted, watch, watchEffect } from 'vue';
import { VueTelInput } from 'vue-tel-input';
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

const selected = ref(['Slectionner une catégorie']);
const options = ref([]);


localStorage.setItem("idPoste", route.params.id);
const { outp, MegaMenu,reglages,getAllDatapages} = useHomes();

const { getAllArticles, AllArticles, nbAllArticles, listeCategories, checkBycategoriyBlog } = useBlogs();
const usersid = localStorage.getItem("auth_users");

onMounted(async () => {
    await MegaMenu();
    await getAllArticles();
    await getAllDatapages();
});

const SelectOccasion = async (index) => {
    loadings.value=1;
    checkBycategoriyBlog(index);
    loadings.value=0;
};


const loadings = ref(1);
setTimeout(() => {
    loadings.value = 0;
}, 4000);

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

    if (selected.value > 0) {
        checkBycategoriyBlog(selected.value);
    };

    let tables = [];
    listeCategories.value.map(function (element) {
        const objet = {
            id: element.categories_blog_id,
            label: element.name_categories_blog,
        }
        tables.push(objet);
    })
    options.value = tables;

});

</script>