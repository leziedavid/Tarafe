<template>
    
    <Header :outp="outp" />
    <br>
    <main class="main">

        <div class="section block-breadcrumb">
                <div class="container"> 
                    <div class="breadcrumbs"> 
                        <ul> 
                        <li> <a href="/">Accueil</a></li>
                        <li > <a href="#">Produit {{route.params.id }} </a></li>
                        </ul>
                    </div>
                </div>
            </div>

      <section class="section block-product-single block-product-single-12"> 
        <div class="container">
          <div class="row"> 
            <div class="col-lg-6">
              <div class="detail-gallery">

                <div  class="slider-nav-thumbnails slider-nav-thumbnails-1">
                  <div  v-for="items in DataImages" :key="items.id_catalogue">

                        <div @click="getImg(items.Urlcatalogue)"  class="item-thumb">
                            <img :src="urls+items.Urlcatalogue" alt="kidify">
                        </div>
                        
                  </div>


                </div>

                <div  class="box-main-gallery">
                    <!-- <a class="zoom-image glightbox" href="/assets/imgs/page/product/img.png"></a> -->

                  <div class="product-image-slider product-image-slider-1">

                    <div class="product-image-slider product-image-slider-1">
                        <figure v-for="item in Produit" :key="item.id_products"  class="border-radius-10">
                            <img :src="urls+dataImg" alt="kidify">
                        </figure>
                    </div>

                    <!-- <figure  class="border-radius-10">
                        <a class="" :href="urls+dataImg" > 
                            <img :src="urls+dataImg" alt="kidify">
                        </a>
                    </figure> -->

                  </div>
                </div>

              </div>
            </div>

            <div v-for="item in Produit" :key="item.id_products" class="col-lg-6">
              <div class="box-product-info"> 

                <div class="product-title"> 
                  <h3 class="mb-5">{{item.name_product}}</h3>

                    <a class="btn" >
                        <svg class="d-inline-flex align-items-center justify-content-center" width="28" height="28" viewbox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_116_452)">
                            <path d="M14.001 6.52898C16.35 4.41998 19.98 4.48998 22.243 6.75698C24.505 9.02498 24.583 12.637 22.479 14.993L13.999 23.485L5.52101 14.993C3.41701 12.637 3.49601 9.01898 5.75701 6.75698C8.02201 4.49298 11.645 4.41698 14.001 6.52898ZM20.827 8.16998C19.327 6.66798 16.907 6.60698 15.337 8.01698L14.002 9.21498L12.666 8.01798C11.091 6.60598 8.67601 6.66798 7.17201 8.17198C5.68201 9.66198 5.60701 12.047 6.98001 13.623L14 20.654L21.02 13.624C22.394 12.047 22.319 9.66498 20.827 8.16998Z" fill=""></path>
                        </g>
                        <defs>
                            <clippath id="clip0_116_452">
                            <rect width="24" height="24" fill="white" transform="translate(2 2)"></rect>
                            </clippath>
                        </defs>
                        </svg>
                    </a>

                </div>

                <div class="block-price"> 
                    <span class="price-main">{{item.price}} FCFA</span>
                </div>

                <p class="body-p2 viewed-guest viewed-guest-black mb-10"> 
                    <span class="text-17-medium">24 personnes consultent ce produit</span>
                </p>
                
                <div class="block-out-of-stock"> 
                  <!-- <h6 class="tone-red">En rupture de stock</h6> -->
                  <h6 v-if="item.Optionsproduits==1"  class="tone-green">Produit en stock</h6>
                  <h6 v-if="item.Optionsproduits==2"  class="tone-red">Produit en rupture sur commande</h6>
                  <h6 v-if="item.Optionsproduits==3"  class="tone-red">Produit en rupture de stock</h6>

                    <div class="block-shipping">
                        <div v-if="item.Optionsproduits==1" class="time-shipping"> Produit personnalisable</div>
                        <div v-else class="time-shipping">Produit nom personnalisable</div>
                    </div>
                </div>

                <div class="block-share"> 
                    <a  v-if="item.Optionsproduits==1 && pagnesData.length || parametreData.length" class="campage body-p2 mr-30" :href="'/business/'+item.code_products">Personnaliser ma commande</a>
                    <a  v-else class="campage body-p2 mr-30" href="#"> Merci d'attendre 72 pour pouvoir personnaliser ce produit.</a>
                    <a target="_self" :href="('whatsapp://send?text=https://domaine.tarafe.com/products/'+item.code_products)" class="link-share body-p2" href="#">Partager</a>
                </div>


                <div v-if="item.Optionsproduits==2 || item.Optionsproduits" class="box-savemore-border"> 

                    <p class="body-p2 mb-15">
                        Recevez une notification par e-mail lorsque ce produit est de nouveau en stock !
                    </p>

                    <div class="form-notify"> 
                    <form action="#">
                        <input class="form-control" type="text" placeholder="Addresse Email *">
                        <button class="btn btn-black">Prévenez-moi</button>
                    </form>
                    </div>

                </div>

                    
                <div class="block-size">
                    <span>Couleur: </span>
                    <div class="box-list-sizes">

                        <div v-if="colores" class="box-colors">
                            <strong> {{colores}} Séléctionée</strong> 
                        </div>

                            <div class="list-sizes">
                                <span v-for="i in Colors" :key="i.id_couleurs" @click="getColore(i.name_couleurs)"  class="item-size">
                                    {{i.name_couleurs}}
                                </span>
                            </div>

                    </div>
                </div>

                <!-- points,taills,colores -->
                
                <div class="block-size">
                    <span>Taille: </span>
                    <div class="box-list-sizes">

                        <div v-if="taills" class="box-colors">
                            <strong> {{taills}} Séléctionée</strong> 
                        </div>

                            <div class="list-sizes">
                                <span v-for="i in tailles" :key="i.id_size" @click="getTaille(i.name_size )" class="item-size">
                                    {{ i.name_size }}
                                </span>
                            </div>

                    </div>
                </div>

                <div class="block-quantity mb-10">
                  <div class="box-form-cart">
                    <a  @click="data.addToCart(item)"  class="btn btn-black" href="#">Mettre au panier</a>
                  </div>
                </div>

                <div class="block-tags-product mb-10"> 
                  <p class="body-p2"> <span class="neutral-medium-dark">SKU: </span><span class="neutral-dark">{{item.code_products}}</span></p>
                  <p class="body-p2"> <span class="neutral-medium-dark">Catégories: </span> <a class="neutral-dark" >{{item.libelle_categories_produits}}</a> </p>
                  <p class="body-p2"> <span class="neutral-medium-dark">Boutique: </span> <a class="neutral-dark" >{{item.nom_stores}}</a> </p>
                  <p v-if="item.Occasion.length>0" class="body-p2"><span class="neutral-medium-dark">Occassion: </span><a class="neutral-dark" href="#">{{item.Occasion}}</a> </p>
                </div> 
              </div>

            </div>
            
          </div>

          <div class="box-detail-product"> 
            
            <ul class="nav-tabs nav-tab-product" role="tablist">

              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true">Description</button>
              </li>

              <li class="nav-item" role="presentation">
                <button  class="nav-link" id="sizechart-tab" data-bs-toggle="tab" data-bs-target="#sizechart" type="button" role="tab" aria-controls="sizechart" aria-selected="false">Ajouter un Avis</button>
              </li>

              <li class="nav-item" role="presentation">
                <button class="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">Avis ({{AllProduitsComments.length }}) </button>
              </li>

            </ul>
            <div class="tab-content">

              <div v-for="item in Produit" :key="item.id_products" class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
               
                <h4 class="mb-30 title-question">Informations</h4>
                <p v-html="item.description"> </p>
                <br>
                <h4 class="mb-30 title-question">Détails</h4>

                <p v-html="item.description_courte"> </p>

                <div class="row mt-40">

                  <div class="col-lg-6">
                    <p>
                        <strong>Occasion:</strong>{{item.Occasion}}<br>
                        <strong>Pays:</strong>Made In Côte d'Ivoire
                    </p>
                  </div>

                  <div class="col-lg-6">
                    <p><strong>Outer:</strong>Leather 100%, Polyamide 100%<br><strong>Lining:</strong>Polyester 100%<br><strong>CounSoletry:</strong>Rubber 100%</p>
                  </div>
                </div>

              </div>

              <div class="tab-pane fade" id="sizechart" role="tabpanel" aria-labelledby="sizechart-tab">

                    <div class="row">
                        <div class="col-lg-12 mb-40 wow bounceIn"> 
                            <h4 class="mb-10">Il n'y a pas encore de commentaires.</h4>
                            <p class="text-16-medium neutral-medium mb-30">Votre adresse email ne sera pas publiée. Les champs requis sont indiqués *</p>
                            <div class="row"> 

                                    <div class="col-lg-12"> 
                                        <div class="form-group"> 
                                            <input  v-model="nomPrenom"  class="form-control" type="text" placeholder="Nom & Prenom *">
                                        </div>
                                    </div>

                                    <div class="col-lg-12"> 
                                        <div class="form-group"> 
                                            <input v-model="email" class="form-control" type="email" placeholder="email">
                                        </div>
                                    </div>

                                    <div class="col-lg-12"> 
                                        <div class="form-group"> 
                                            <textarea v-model="contents" class="form-control" placeholder="Commentaire" rows="6"></textarea>
                                        </div>
                                    </div>

                                    <div class="col-lg-12"> 
                                        <div class="text-center mt-10"> 
                                            <button @click="valider" class="btn btn-black">Poster votre commentaire</button>
                                        </div>
                                    </div>
                            </div>
                         </div>
                    </div>
                  
              </div>

              <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                <div class="comments-area">
                  <div class="row">
                    <div class="col-lg-12 mb-30">
                      <h4 class="mb-30 title-question">Avis des clients</h4>       
                      <a class="font-xs text-muted" v-for="item in Produit" :key="item.id_products">Soyez le premier à laisser votre avis sur “ {{item.name_product}} ”</a>
                    </div>

                    <div class="col-lg-12 mb-30">
                      <h4 class="mb-30 title-question">Questions et réponses des clients</h4>
                      <div class="comment-list">

                        <div  v-for="items in AllProduitsComments" :key="items.produit_comment_id" class="single-comment justify-content-between d-flex mb-30 hover-up">

                          <div class="user justify-content-between d-flex">
                                <div class="thumb text-center">
                                    <img src="/assets/imgs/page/about1/team.png" alt="Ecom">
                                    <a class="font-heading text-brand" href="#">{{items.nom_produit_comment}}</a>
                                </div>

                            <div class="desc">
                              <div class="d-flex justify-content-between mb-10">
                                <div class="d-flex align-items-center"><span class="font-xs color-gray-700">{{ moment(items.created_at).format('DD-MM-YYYY') }}</span></div>
                                <div class="product-rate d-inline-block">
                                  <div class="product-rating" style="width: 100%"></div>
                                </div>
                              </div>
                              <p class="mb-10 font-sm color-gray-900">  {{items.texte_produit_comment}}
                              </p>
                            </div>
                          </div>

                        </div>

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

</template>

<script setup>

import loader from '../components/loader.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { ref, reactive, computed, onMounted, watch, watchEffect } from 'vue';
import { VueTelInput } from 'vue-tel-input';

import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import useHomes from "../composable/Homes";
import { useRouter, useRoute } from 'vue-router'
import { useShoppingStore } from '../store/index';
import { createToast } from 'mosha-vue-toastify';
import moment from 'moment';
import axios from 'axios';
import axiosClient from "../../ApiServices";
import urls from "../../ImgUrl";

const route = useRoute();
const { getAllDatapages, Categories, Categorie, Produits, Produit, getDeatailSop, Slider, Products, NbDataImages,
        DataImages, Colors, nbColors, tailles, nbtailles, pointures, nbpointures, getAllproduitscommentsById, AllProduitsComments, outp, MegaMenu,
        pagnesData, parametreData, paramsColors, paramsColorsPrice, paramsTailles, paramsTaillesPrice, paramsPointures, paramsPointurePrice, paramsDimenssions,
        paramsDimenssionsPrice, paramsTextes, paramsTextesPrice, logoParams, paramsLogoPrice
   } = useHomes();

const codes = localStorage.setItem("idproduits", route.params.id);
const data = useShoppingStore();

const dataImg = ref('');

const table = ref('');
const mycolore = ref('');
const mytailles = ref('');
const mypointures = ref('');

const colores = ref('');
const taills = ref('');
const points = ref('');

const dimension = ref('');
const numero = ref('');
const taillesParams = ref('');
const pointuresParams = ref('');

const selected1 = ref([]);
const options1 = ref([]);
const selected2 = ref([]);
const options2 = ref([]);
const selected3 = ref([]);
const options3 = ref([]);
const selected4 = ref([]);
const options4 = ref([]);
const email = ref('');
const nomPrenom = ref('');
const contents = ref('');
const radio = ref('');
const priceProduct = ref(0);

const valueradio = ref('');
const postFormData = new FormData();

const attachments = ref('');
const filesx = ref('');
const url = ref('');
const imgLogos = ref('');
const error = ref('');
const textCart = ref('');
const pagneCart = ref('');
const police = ref('');

// Nos variable pour verifier la position du chois des option pour la personnalisation
const positions1 = ref(0);
const positions2 = ref(0);
const positions3 = ref(0);
const positions4 = ref(0);
const positions5 = ref(0);
const positions6 = ref(0);
const positions7 = ref(0);
const positions8 = ref(0);

//  Nos variable des données contenant les prix des option au clic pour la personnalisation
const value1 = ref(0);
const value2 = ref(0);
const value3 = ref(0);
const value4 = ref(0);
const value5 = ref(0);
const value6 = ref(0);
const value7 = ref(0);
const value8 = ref(0);
const total = ref(0);
const sommes = ref(0);
// Fin des varibles

const selected = ref([]);
const options = ref([]);
const optionsTab = [
    {
        id: 1,
        label: 'math',
        value: 'font-family:math;',
    },
    {
        id: 2,
        label: 'Times New Roman',
        value: 'font-family:Times New Roman',
    },
    {
        id: 3,
        label: 'Georgia, serif',
        value: 'font-family:Georgia, serif',
    },
    {
        id: 4,
        label: 'Verdana',
        value: 'font-family:Verdana',
    },
    {
        id: 5,
        label: 'Arial',
        value: 'font-family:Arial',
    },
    {
        id: 6,
        label: 'Helvetica',
        value: 'font-family:Helvetica',
    },
    {
        id: 7,
        label: 'sans-serif',
        value: 'font-family:sans-serif',
    },
    {
        id: 7,
        label: 'Lucida Console',
        value: 'font-family:Lucida Console',
    },
    {
        id: 7,
        label: 'Courier',
        value: 'font-family:Courier',
    },
    {
        id: 8,
        label: 'monospace',
        value: 'font-family:monospace',
    },
    {
        id: 9,
        label: 'cursive',
        value: 'font-family:cursive',
    },
    {
        id: 9,
        label: 'fantasy',
        value: 'font-family:fantasy',
    },
    {
        id: 9,
        label: 'emoji',
        value: 'font-family:emoji',
    },

    {
        id: 10,
        label: 'fangsong',
        value: 'font-family:fangsong',
    },

];

const idproduits = localStorage.getItem("idproduits");
const usersid = localStorage.getItem("auth_users");

onMounted(async () => {
    await getDeatailSop(route.params.id);
    await getAllproduitscommentsById(route.params.id);
    await getAllDatapages();
    await searches();
    await pointuresX();
    await taillesx();
    await Colorsx();
    await MegaMenu();
});

const onPress = (e) => {
    localStorage.removeItem("price");
    total.value = 0;
}

const imagesUrls = (e) => {

    if (localStorage.getItem("Logosurl").length > 0) {
        imgLogos.value = localStorage.getItem("Logosurl");
    }
}

const loadings = ref(1);

setTimeout(() => {
    loadings.value = 0;
}, 1000);

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

            postFormData.append('logo', attachments.value);
            const config = { headers: { 'Content-Type': 'multipart/form-data' } };
            axiosClient.post('/api/Addlogosurl', postFormData, config, {})
                .then(response => {
                    total.value = 0;
                    imgLogos.value = response.data.data
                    positions8.value = 1;
                    value7.value = paramsLogoPrice.value;
                    localStorage.removeItem("price");
                    localStorage.setItem('Logosurl', response.data.data);

                    if (localStorage.getItem("Logosurl").length > 0) {
                        imgLogos.value = localStorage.getItem("Logosurl");
                    }


                }).catch(function (error) {
                    total.value = 0;
                    console.error(error);
                });

        } else {

            priceProduct.value = priceProduct.value;
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

const getImg = async (index) => {
    dataImg.value = index;
};



const getPointures = async (index) => {

        if(index){
            points.value=index;
            localStorage.setItem('pointures', index);
        }else{

        }
    };
const getTaille = async (index) => {

        if(index){
            taills.value=index;
            localStorage.setItem('tailles', index);
        }else{

        }
    };

const getColore = async (index) => {

        if(index){
            colores.value=index;
            localStorage.setItem('couleur', index);
        }else{

        }
    };

const getTotal = async (index) => {
    total.value = index;
    console.log(value1.value + '/' + value2.value + '/' + value3.value + '/' + value4.value + '/' + value5.value + '/' + value6.value + '/' + value7.value);

    let data = 0;
    data = (parseFloat(value1.value) + parseFloat(value2.value) + parseFloat(value3.value) + parseFloat(value4.value) + parseFloat(value5.value) + parseFloat(value6.value) + parseFloat(value7.value) + parseFloat(priceProduct.value));
    sommes.value = data;
    localStorage.setItem('price', data);
};

const removeColors = async () => {
    localStorage.removeItem("valueradios");
    valueradio.value = "";
    radio.value = "";
    value5.value = 0;
    localStorage.removeItem("price");
    total.value = 0;
    sommes.value = 0;

};

const removePagne = async () => {
    localStorage.removeItem("pagneCart");
    numero.value = "";
    value6.value = 0;
    localStorage.removeItem("price");
    total.value = 0;
    sommes.value = 0;
};

const selectPgne = async (index, url, prix) => {
    if (index > 0) {
        total.value = 0;
        value6.value = prix;
        numero.value = index;
        localStorage.setItem('pagneCart', url);
    }

};

const Modales = async (index, price) => {

    localStorage.removeItem("price");
    total.value = 0;
    value1.value = 0;
    value2.value = 0;
    value3.value = 0;
    value4.value = 0;
    value5.value = 0;
    value6.value = 0;
    value7.value = 0;

    priceProduct.value = price;
    loadings.value = 1;
    $('#exampleModal').modal('show');

    setTimeout(() => {
        loadings.value = 0;
    }, 1000);
};

const AnnulerParams = async () => {
    sommes.value = 0;
    localStorage.removeItem("price");
    total.value = 0;
    value1.value = 0;
    value2.value = 0;
    value3.value = 0;
    value4.value = 0;
    value5.value = 0;
    value6.value = 0;
    value7.value = 0;

    localStorage.removeItem("dimensionParams");
    localStorage.removeItem("taillesParams");
    localStorage.removeItem("pointuresParams");
    localStorage.removeItem("price");
    localStorage.removeItem("Logosurl");
    localStorage.removeItem("couleur");
    localStorage.removeItem("valueradios");
    localStorage.removeItem("pagneCart");
    localStorage.removeItem("dimension");
    localStorage.removeItem("textCart");
    localStorage.removeItem("police");
    imgLogos.value = "";
    numero.value = "";
    radio.value = "";
    valueradio.value = "";
    textCart.value = "";
    pagneCart.value = "";
    dimension.value = "";
    taillesParams.value = "";
    pointuresParams.value = "";
    police.value = "";
    url.value = "";
    attachments.value = "";
    $('#exampleModal').modal('hide');
};

const ModalesHide = async (id) => {
    sommes.value = 0;
    localStorage.removeItem("price");
    total.value = 0;

    if (id == 1) {

        localStorage.removeItem("dimensionParams");
        localStorage.removeItem("taillesParams");
        localStorage.removeItem("pointuresParams");
        localStorage.removeItem("price");
        localStorage.removeItem("Logosurl");
        localStorage.removeItem("couleur");
        localStorage.removeItem("valueradios");
        localStorage.removeItem("pagneCart");
        localStorage.removeItem("dimension");
        localStorage.removeItem("textCart");
        localStorage.removeItem("police");
        imgLogos.value = "";
        numero.value = "";
        radio.value = "";
        valueradio.value = "";
        textCart.value = "";
        pagneCart.value = "";
        dimension.value = "";
        taillesParams.value = "";
        pointuresParams.value = "";
        police.value = "";
        url.value = "";
        attachments.value = "";
        $('#exampleModal').modal('hide');
    }
};

const searches = async () => {

    Produit.value.map(function (element) {
        dataImg.value = element.imageUrl;
    })
};

const getDatas = async () => {
    getAllproduitscommentsById(route.params.id);
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

    if (email.value.length > 0 && nomPrenom.value.length > 0) {
        axiosClient.post('/api/addproduitscomments', {
            email: email.value,
            nomPrenom: nomPrenom.value,
            contents: contents.value,
            posteId: route.params.id,
        })
            .then(res => {

                getDatas();
                email.value = "";
                nomPrenom.value = "";
                contents.value = "";
                messagesInfo();

            })
            .catch(err => console.log(err));

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

const pointuresX = async () => {
    let tables = [];
    pointures.value.map(function (element) {
        const objet = {
            id: element.name_pointures,
            label: element.name_pointures,
        }
        tables.push(objet);

    })

    options3.value = tables;
};

const taillesx = async () => {

    let tables = [];
    tailles.value.map(function (element) {
        const objet = {
            id: element.name_size,
            label: element.name_size,
        }
        tables.push(objet);

    })
    options2.value = tables;
};

const Colorsx = async () => {

    let tables = [];
    Colors.value.map(function (element) {

        const objet = {
            id: element.name_couleurs,
            label: element.name_couleurs,
        }

        tables.push(objet);

    })
    options1.value = tables;
};

watchEffect(() => {

    if (optionsTab) {

        let tables1 = [];
        optionsTab.map(function (element) {
            const objet1 = {
                id: element.id,
                label: element.label,
                value: element.value,
            }
            tables1.push(objet1);
        })
        options.value = tables1;
    };


    if (textCart.value) {
        value1.value = paramsTextesPrice.value;
        localStorage.setItem('textCart', textCart.value);

    } else if (textCart.value == "") {

        value1.value = 0;
        localStorage.removeItem("textCart");
    }

    if (dimension.value) {
        value2.value = paramsDimenssionsPrice.value;
        localStorage.setItem('dimensionParams', dimension.value);

    } else if (dimension.value == "") {
        value2.value = 0;
        localStorage.removeItem("dimensionParams");
    }

    if (taillesParams.value) {
        value3.value = paramsTaillesPrice.value;
        localStorage.setItem('taillesParams', taillesParams.value);

    } else if (taillesParams.value == "") {
        value3.value = 0;
        localStorage.removeItem("taillesParams");
    }

    if (pointuresParams.value) {

        value4.value = paramsPointurePrice.value;
        localStorage.setItem('pointuresParams', pointuresParams.value);

    } else if (pointuresParams.value == "") {
        value4.value = 0;
        localStorage.removeItem("pointuresParams");
    }


    if (radio.value) {

        value5.value = paramsColorsPrice.value;
        valueradio.value = radio.value;
        localStorage.setItem('valueradios', radio.value);

    } else {

        value5.value = 0;
        localStorage.removeItem("pointuresParams");

    }

    if (police.value) {

        selected.value = police.value;
        // textCart.value=police.value;
        localStorage.setItem('police', police.value);

    } else {


    }

    if (pagneCart.value) {
        // localStorage.setItem('pagneCart',pagneCart.value);
    } else {

    }

    //fin des options


    if (mycolore.value) {
        localStorage.setItem('couleur', mycolore.value);
    } else {
    }

    if (mytailles.value) {
        localStorage.setItem('tailles', mytailles.value);
    } else {
    }

    if (mypointures.value) {
        localStorage.setItem('pointures', mypointures.value);
    } else {
    }

});

</script>

