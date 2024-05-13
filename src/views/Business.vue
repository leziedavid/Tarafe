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


                <section class="section block-product-single block-product-single-12"> 
                    <div class="container">
                        
                            <div class="row"> 
                                <div class="col-lg-6">

                                <div class="detail-gallery">

                                    <div class="box-main-gallery">
                                        <div class="product-image-slider product-image-slider-1">
                                            <figure v-for="item in Produit" :key="item.id_products"  class="border-radius-10">
                                                <img :src="urls+item.imageUrl"  alt="kidify">
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                
                                </div>
                                <div class="col-lg-6">
                                <div class="box-product-info"> 

                                    <div class="product-title"> 
                                        <h3 class="mb-5">Le design, les couleurs, les matières, l'impression, et les dimenssions sont personnalisables</h3>
                                    </div>


                                    <p class="body-p2 viewed-guest viewed-guest-black mb-25"> 
                                        <span class="text-17-medium">24 guests are viewing this product</span>
                                    </p>

                                        <div class="col-md-12"> 
                                            <h6 class="mb-10">Saisissez ici votre titre</h6>
                                            <div class="form-group"> 
                                                <input @keyup="onPress(1)" v-model="textCart" class="form-control" type="text" placeholder="Ajouter votre texte *">
                                            </div>
                                        </div>

                                        <div class="col-md-12"> 
                                            <h6 class="mb-10">Choisir la police d'écriture </h6>
                                            <div class="form-group"> 
                                                <v-select  v-model="police" :reduce="(option) => option.value" :options=options class="" />
                                            </div>
                                        </div>

                                        <div class="col-md-12"> 
                                            <h6 class="mb-10">Aperçu de votre texte  </h6>
                                            <div :style="selected" class="form-group"> 
                                                <strong :style="selected"> {{textCart}} </strong> 
                                            </div>
                                        </div>

                                        <div v-if="paramsDimenssions" class="col-md-12"> 
                                            <h6 class="mb-10">Saisissez ici votre Dimension (m) </h6>
                                            <div class="form-group"> 
                                                <input @keyup="onPress(2)" v-model="dimension" class="form-control" type="text" placeholder="30">

                                            </div>
                                        </div>
                                        
                                        <div v-if="paramsTailles" class="col-md-12"> 
                                            <h6 class="mb-10">Saisissez ici votre taille, Exemple(2,5)</h6>
                                            <div class="form-group"> 
                                                <input @keyup="onPress(3)" v-model="taillesParams" class="form-control" type="text" placeholder="30">
                                            </div>
                                        </div>

                                        <div v-if="paramsPointures" class="col-md-12"> 
                                            <h6 class="mb-10">Saisissez ici votre pointure (40)</h6>
                                            <div class="form-group"> 
                                                <input  @keyup="onPress(4)" v-model="pointuresParams" class="form-control" type="text" placeholder="30">
                                            </div>
                                        </div>

                                        <div v-if="paramsColors" class="col-md-12"> 
                                            <h6 class="mb-10">Selectionner votre couleur</h6>
                                         
                                            <div class="form-group"> 

                                                <div v-if="radio" class="box-colors">
                                                    <strong> {{radio}} Séléctionée</strong> 
                                                </div>

                                                <div class="block-size">
                                                    <span>Couleur: </span>
                                                    <div class="box-list-sizes">
                                                        <div class="list-sizes">
                                                            <span v-for="item in paramsColors" :key="item.id_parametre_produit"  @click="onclick(item.couleur_parametre_produit)" class="item-size">
                                                               {{item.couleur_parametre_produit}}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>


                                        <div v-if="pagnesData" class="col-md-12"> 
                                            <h6 class="mb-10">Pagne disponible (Cliquez sur un pagne pour l'ajouter à votre commande)</h6>

                                            <div class="form-group"> 

                                                <div v-if="numero>0" class="box-colors">
                                                    <strong> Pagne {{numero}}  Séléctionée</strong> 
                                                    <ion-icon  @click="removePagne()" style="color:brown" class="small" name="trash-outline"></ion-icon>
                                                </div>

                                                <div class="block-size">
                                                    <div class="columnx">
                                                       <img v-for="(item, index) in pagnesData" :key="item.id_pagnes" :src="urls+item.Path_pagnes" width="90" height="90" @click="selectPgne(index+1,item.Path_pagnes,item.prix_pagnes)">
                                                    </div>
                                                </div>

                                            </div>

                                        </div>


                                        <div v-if="logoParams" class="col-md-12"> 
                                            <h6 class="mb-10">Pagne disponible (Cliquez sur un pagne pour l'ajouter à votre commande)</h6>
                                            <div class="form-group"> 
                                                <input id="files" type="file"  class="" ref="file" name="files" @change="fieldChange">
                                            </div>
                                        </div>

                                        <div v-if="imgLogos" class="col-md-12"> 
                                            <div class="cardImage">
                                                <img  :src="urls+imgLogos" alt="guza">
                                            </div>
                                        </div>

                                        <div class="row">

                                            <div class="col-md-6">
                                                <div class="block-quantity mb-10">
                                                    <div class="box-form-cart">
                                                        <a  v-if="total==0" @click="getTotal(1)" class="btn btn-add" >Total</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div  v-if="total>0" class="col-md-6">
                                                <div class="block-quantity mb-10">
                                                    <div class="box-form-cart">
                                                      <h3 v-if="total>0"> Total: {{ sommes }} Fcfa</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="col-md-6">
                                                <div class="block-quantity mb-10">
                                                    <div class="box-form-cart">
                                                        <a  @click="AnnulerParams" class="btn btn-red">Annuler</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="block-quantity mb-10">
                                                    <div class="box-form-cart">
                                                        <a  @click="data.addToCart(item)"  class="btn btn-black">Mettre au panier</a>
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

          <br> <br> 

      <Footer/> 
    </div>
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
const { getAllDatapages, Categories, Categorie, Produits, Produit, getDeatailSop, Slider, Products, NbDataImages, DataImages, Colors, nbColors, tailles, nbtailles, pointures, nbpointures, getAllproduitscommentsById, AllProduitsComments, outp, MegaMenu,
    pagnesData, parametreData, paramsColors, paramsColorsPrice, paramsTailles, paramsTaillesPrice, paramsPointures, paramsPointurePrice, paramsDimenssions,
    paramsDimenssionsPrice, paramsTextes, paramsTextesPrice, logoParams, paramsLogoPrice } = useHomes();

const codes = localStorage.setItem("idproduits", route.params.id);
const data = useShoppingStore();

const dataImg = ref('');

const table = ref('');
const mycolore = ref('');
const mytailles = ref('');
const mypointures = ref('');

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
const couleurs = ref('#ff0000');
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
    Modales();

});

const color = document.querySelector('.color')
const colorInput = document.querySelector('.color-input')


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

const onclick = async (index) => {
   
        if (index) {
            radio.value = index;
            value5.value = paramsColorsPrice.value;
            valueradio.value = index;
            localStorage.setItem('valueradios', index);

            } else {

            value5.value = 0;
            localStorage.removeItem("pointuresParams");
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

    priceProduct.value = Produit.value[0].price;
    loadings.value = 1;
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

.rowx {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create two equal columns that sits next to each other */
.columnx {
  flex: 50%;
  padding: 0 4px;
}

.columnx img {
  padding: 5px;
  margin-top: 8px;
  vertical-align: middle;
}
.columns {
  /* width: 100%; */
  float: left;
  /* width: 30%; */
  padding: 8px;
}
</style>