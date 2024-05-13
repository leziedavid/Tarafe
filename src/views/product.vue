<template>
    
    <Header :outp="outp"/>
    <br>
    <main class="main">

    

            <div class="section block-breadcrumb">
                <div class="container"> 
                    <div class="breadcrumbs"> 
                        <ul> 
                            <li> <a href="/">Accueil</a></li>
                            <li v-for="item in Realisation" :key="item.id_realisations" > 
                                <a href="#">{{item.libelle_realisations }} </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

       
            <!-- <section class="section block-product-single block-product-single-12">  -->
                <section class="section block-product-single">
                <div  class="container">
                    <loader v-if="loadings==1" > </loader>
                </div>

                <div v-if="loadings==0">

                    <div v-if="loadings==0 && Realisation.length>0"  class="container">
                       
                        <div class="row">

                            <div class="col-lg-6">


                                <div class="detail-gallery">

                                        <div  class="slider-nav-thumbnails slider-nav-thumbnails-1 web-only">
                                            <div v-for="items in ImageRealisation" :key="items.id_img_realisations" >

                                                <div @click="getImg(items.filles_img_realisations)"  class="item-thumb">
                                                    <img :src="urlsx+items.filles_img_realisations" alt="kidify">
                                                </div>
                                            </div>
                                        </div>

                                    <div  class="box-main-gallery web-only">
                                        <div class="product-image-slider product-image-slider-1  ">

                                            <div class="product-image-slider product-image-slider-1">
                                                <figure v-for="item in Realisation" :key="item.id_realisations"  class="border-radius-10">
                                                    <img :src="urlsx+dataImg" alt="kidify">
                                                </figure>
                                            </div>

                                        </div>
                                    </div> 
                                    
                                    <div class="box-main-gallery mobile-only">
                                        <div class="product-image-slider product-image-slider-1">

                                            <div class="product-image-slider product-image-slider-1">
                                                <figure v-for="item in newsData" :key="item.id_img_realisations"  class="border-radius-10">
                                                    <img :src="urlsx+item.filles_img_realisations" alt="kidify">
                                                </figure>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                                <!-- mon bouton -->
                                 <div class="button-container text-center">
                                    <button class=" btn btn-slides mobile-only mb-4" @click="prevPage" :disabled="currentPage === 1">Précédent</button>
                                    <button class=" btn btn-slides mobile-only mb-4" @click="nextPage" :disabled="currentPage === totalPages">Suivant</button>
                                 </div>
                                                  
                            </div>

                            <div v-for="item in Realisation" :key="item.id_realisations"  class="col-lg-6">
                                <div class="box-product-info"> 

                                        <div class="product-title"> 
                                            <h3 class="mb-5">{{item.libelle_realisations}}</h3>
                                        </div>

                                        <div  v-if="error !==''"  class="alert alert-danger" >
                                            <p> {{error}}</p>
                                        </div>

                                    <div  v-for="item in Realisation" :key="item.id_realisations" class="block-share"> 
                                        <p v-html="item.descript_real" class=" body-p2 mr-30"> </p>
                                    </div>

                                    <p class="body-p2 viewed-guest viewed-guest-black mb-10"> 
                                        <span class="text-17-medium">Ajouter votre personnalisation </span>
                                    </p>
                                    

                                    <div v-for="item in reglages" :key="item.id_reglages" class="block-share"> 
                                        <p v-html="item.texte_personnalisation" class="campage body-p2 mr-30"> </p>
                                    </div>

                                    <div class="box-savemore-border"> 

                                        <div class="form-notify"> 
                                                                
                                            <div class="col-md-12"> 
                                                <h6 class="mb-10">Saisissez ici un texte (facultatif)</h6>
                                                    <div class="form-group"> 
                                                        <input  v-model="texte" class="form-control" type="text" placeholder="Nom , message, slogan ...">
                                                    </div>
                                            </div>

                                            <div class="col-md-12"> 
                                                <h6 class="mb-10">Choisir la police d'écriture </h6>
                                                    <div class="form-group"> 
                                                        <v-select v-model="police" :reduce="(option) => option.value" :options=options style="background-color:beige width :200px; font-size : 18px " class="" />
                                                    </div>
                                            </div>
                                
                                            <div class="col-md-12"> 
                                                <h6 class="mb-10">Aperçu de votre texte  </h6>
                                                <div :style="selected" class="form-group"> 
                                                    <strong :style="selected"> {{texte}} </strong> 
                                                </div>
                                            </div>

                                            <div  class="col-md-12"> 
                                                <h6 class="mb-10">Saisissez ici des dimensions (cm) ou une taille (S, M, L etc) (facultatif) </h6>
                                                <div class="form-group"> 
                                                    <input  v-model="dimension" class="form-control" type="text" placeholder="30">
                                                </div>
                                            </div>


                                            <div  class="col-md-12"> 
                                            <h6 class="mb-10">Selectionner une couleur principale (facultatif)</h6>
                                                        
                                            <div class="form-group"> 

                                                <div v-if="couleurs" class="box-colors">
                                                    <strong> 
                                                        <p style="background-color:beige color:red width:200px; font-size:20px">{{couleurs}}  séléctionée</p>  
                                                    </strong> 
                                                </div>
                                            
                                                <br/>

                                                <div class="block-size">
                                                    <span>Couleur: </span>
                                                    <div class="box-list-sizes">
                                                        <div  class="list-sizes">
                                                            <span v-for="item in colors" :key="item.id_couleurs"  @click="onclick(item.name_couleurs)"  class="item-size mb-10 btn-black">
                                                            {{item.name_couleurs}}
                                                                </span>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div  class="col-md-12"> 
                                            <h6 class="mb-10">Nom & Prénom *</h6>
                                            <div class="form-group"> 
                                                <input v-model="NomPrenom" class="form-control" type="text" placeholder="">
                                            </div>
                                        </div>

                                        <div  class="col-md-12"> 
                                            <h6 class="mb-10">Entreprise (facultatif)</h6>
                                            <div class="form-group"> 
                                                <input v-model="Entreprise" class="form-control" type="text" placeholder="">
                                            </div>
                                        </div>

                                        <div  class="col-md-12"> 
                                            <h6 class="mb-10">Téléphone *</h6>
                                            <div class="form-group"> 
                                                <vue-tel-input class="form-control" v-model="numero" style="font-size:20px" mode="international"></vue-tel-input>
                                            </div>
                                        </div>

                                        <div  class="col-md-12"> 
                                            <h6 class="mb-10">Email *</h6>
                                            <div class="form-group"> 
                                                <input v-model="email" class="form-control" type="text" placeholder="">
                                            </div>
                                        </div>

                                        <div  class="col-md-12"> 
                                            <h6 class="mb-10">Télecharger une image (png,jpg,jpeg) (facultatif)</h6>
                                            <div class="form-group"> 
                                                <input id="files" type="file"  class="" ref="file" name="files" @change="fieldChange">
                                            </div>
                                        </div>

                                        <div v-if="imgLogos" class="col-md-12"> 
                                            <div class="cardImage">
                                                <img  :src="url+imgLogos" alt="">
                                            </div>
                                        </div>

                                        <div  class="col-md-12"> 
                                            <h6 class="mb-10">Choisir l'emplacement de l'image </h6>
                                            <div class="form-group"> 
                                                <v-select v-model="PositionsFiles" :reduce="(option) => option.label" :options=Positions style="background-color:beige width:200px; font-size:18px" class=" default-form form-control-xs" />
                                            </div>
                                        </div>

                                        <div  class="col-md-12"> 
                                            <h6 class="mb-10">Télecharger un autre support (png,jpg,jpeg) (facultatif)</h6>
                                            <div class="form-group"> 
                                                <input id="files" type="file"  class="" ref="file" name="files" @change="filesChange">
                                            </div>
                                        </div>

                                        <div v-if="File"  class="col-md-12"> 
                                            <div class="cardImage">
                                                <img  :src="url+File" alt="">
                                            </div>
                                        </div>
                                        
                                        <br>

                                        <div class="col-md-12 mb-40"> 
                                            <h6 class="mb-10">Details et remarques complementaires (facultatif)</h6>
                                            <QuillEditor  :toolbar="toolbarOptions"  style="height: 120px;"  v-model:content="Description"  content-type="html" ref='textEditor'  theme="snow"/>
                                        </div>

                                        <div class="col-md-12"> 
                                            <button  @click="SaveData" type="submit" style="display:flex;justify-content: center;" class="btn btn-prim mb-4">Soumettre ma commande ...</button>
                                        </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                            
                           </div>

                         </div>

                    <div v-else class="container">

                    </div>

                </div>
            </section>

        <Footer :reglages="reglages"/> 
    </main>

</template>

<script setup>
import '../assets/tables.css';
import 'vue-loading-overlay/dist/css/index.css';
import loader from '../components/loader.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { ref, reactive, computed, onMounted, watch, watchEffect } from 'vue';
import { VueTelInput } from 'vue-tel-input';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

import { useRouter, useRoute } from 'vue-router'
import { useShoppingStore } from '../store/index';
import { createToast } from 'mosha-vue-toastify';
import moment from 'moment';
import axios from 'axios';
import url from "../../ImgUrl";
import Swal from 'sweetalert2';
import axiosClient from "../../ApiServices";

import useHomes from "../composable/Homes";
import useReglages from "../composable/Reglage";
import useProduits from "../composable/Produits";
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import urlsx from "../../ImgUrl";
import Loading from 'vue-loading-overlay';

const data = useShoppingStore();
const route = useRoute();
const urls = ref('');
const dimension = ref('');
const taillesParams = ref('');
const pointuresParams = ref('');
const couleurs = ref("");
const support = ref('');
const NomPrenom = ref('');
const Entreprise = ref('');
const numero = ref('');
const email = ref('');
const police = ref('');
const texte = ref('');
const Aperçu = ref('');
const remarques = ref('');
const PositionsFiles = ref('Au centre');
const imgLogos = ref('');
const File = ref('');

const valueradio = ref('');
const postFormData = new FormData();

const attachments = ref('');
const attachmentX = ref('');
const filesx = ref('');
const error = ref('');
const time = ref(5000);

const dataImg = ref('');
const codeproduits = ref('');

const loadings = ref(1);
setTimeout(() => {
    loadings.value = 0;
}, 4000);

const isLoading = ref(false);
const fullPage = ref(true);
const libelle = ref('');

const usersid = localStorage.getItem("auth_users");
const {pointures,tailles,getAllPropriete,colors} = useProduits();
const { outp, MegaMenu,getRealisationbyLibelle,Realisation,ImageRealisation} = useHomes();
const { getreglages,reglages,politique,getAllpolitique} = useReglages();

function extractLibelleFromUrl(links) {
        const libelleModified = links.substring(links.lastIndexOf('/') + 1);
        const libelle = libelleModified.replace(/-/g, ' ');
         console.log(libelle);
         getRealisationbyLibelle(libelle);
        return libelle._value !== undefined ? libelle._value : libelle.value;
        }

onMounted(async () => {

    await extractLibelleFromUrl(route.params.id);
    await MegaMenu();
    // await getRealisationbyLibelle();
    await searches();
    await getreglages();
    await getAllPropriete();
});

   // Nombre d'éléments par page
const itemsPerPage= ref(1);
    // Page actuelle
const currentPage= ref(1);
const totalItem= ref(0);
const newsData = ref([]);

const selected = ref('');
const Positions = ref([]);
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


// const extractLibelleFromUrl = async (links) => {
    // function extractLibelleFromUrl(links) {
    //     const libelleModified = links.substring(links.lastIndexOf('/') + 1);
    //     libelle.value = libelleModified.replace(/-/g, ' ');
    //     console.log(libelle);
    //     return libelle.value;
    // }


// Choisir L'emplacement Du Logo
const PositionsTab = [
    {
        id: 1,
        label: 'En haut',
        value: 'En haut',
    },
    {
        id: 2,
        label: 'En bas',
        value: 'En bas',
    },
    {
        id: 3,
        label: 'A gauche',
        value: 'A gauche',
    },
    {
        id: 4,
        label: 'A droite',
        value: 'A droite',
    },
    {
        id: 4,
        label: 'Au centre',
        value: 'Au centre',
    },
];


const totalPages = async () => {
    
      totalItem.value=Math.ceil(ImageRealisation.value.length / itemsPerPage.value);
      return totalItem.value;
    };
    // Extraction des données pour la page actuelle
const paginatedData = async () => {

      const startIndex = (currentPage.value - 1) * itemsPerPage.value;
      const endIndex = startIndex + itemsPerPage.value;
       newsData.value=ImageRealisation.value.slice(startIndex, endIndex);

       return newsData.value
    };


    const prevPage = async () => {

      if (currentPage.value > 1) {
        currentPage.value--;
      }

    };
    // Aller à la page suivante

    const nextPage = async () => {
      if (currentPage.value < totalItem.value) {
        currentPage.value++;
      };

    };
    const onclick = async (index) => {
    
    if (index) {
            couleurs.value = index;
        } else {
            couleurs.value = "";
    }
    };

    const timers = async () => {

            let timerInterval;
            Swal.fire({
            title: "En cours de traitement ...",
            html: "Finalisation dans <b></b> secondes.",
            timer: time.value,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
            }).then((result) => {
        
            if (result.dismiss === Swal.DismissReason.timer) {
            
            }
            });


    };

    const searches = async () => {
        Realisation.value.map(function (element) {
        dataImg.value = element.images_realisations;
        codeproduits.value = element.code_realisation;
    })
    };

    const getImg = async (index) => {
        console.log(index);
        dataImg.value = index;
        window.scrollTo(0, 0);
    };

    const SaveData = async (e) => {

        if(NomPrenom.value.length > 0 && numero.value && email.value.length > 0)
            {
                e.preventDefault();
                timers();
                axiosClient.post('/api/Addachats', {
                    dimensionAchats: dimension.value,
                    // codeAchat: route.params.id,
                    codeAchat: codeproduits.value,
                    taillesParamsAchats: taillesParams.value,
                    pointuresParamsAchats: pointuresParams.value,
                    couleursAchats: couleurs.value,
                    NomPrenomAchats: NomPrenom.value,
                    EntrepriseAchats: Entreprise.value,
                    numeroAchats: numero.value,
                    emailAchats: email.value,
                    FileAchats: File.value,
                    imgLogosAchats: imgLogos.value,
                    PositionsFiles: PositionsFiles.value,
                    remarques: remarques.value,
                    policeAchats: police.value,
                    texteAchats: texte.value,
                }).then(res => {

                    if(res.data.data==true){

                        error.value = "";
                        createToast("Votre commande a été enregistrée avec succès.",
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
                    
                        dimension.value="";
                        taillesParams.value="";
                        pointuresParams.value="";
                        couleurs.value="";
                        NomPrenom.value="";
                        Entreprise.value="";
                        numero.value="";
                        email.value="";
                        File.value="";
                        imgLogos.value="";
                        police.value="";
                        texte.value="";
                        time.value=5000;
                    }
                
                
                }).catch(err => console.log(err));

            }else{
                // time.value=3000;
            createToast("Pour passer une commande, il est obligatoire de fournir son nom, son email et son numéro de téléphone.",
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

    const fieldChange = async (e) => {
        attachments.value = e.target.files[0];
        const file = e.target.files[0];

        if (attachments.value.name.length > 0) {

            filesx.value = attachments.value.name;
            let x = attachments.value.name.split('.');
            let taille = x.length;
            let extension = x[(taille - 1)];

            if (extension == 'png' || extension == 'jpg' || extension == 'jpeg') {

                urls.value = URL.createObjectURL(attachments.value);
                URL.revokeObjectURL(file);
                error.value = "";

                postFormData.append('logo', attachments.value);
                const config = { headers: { 'Content-Type': 'multipart/form-data' } };
                axiosClient.post('/api/Addlogosurl', postFormData, config, {})
                    .then(response => {
                        imgLogos.value = response.data.data
                        localStorage.setItem('Logosurl', response.data.data);

                        if (localStorage.getItem("Logosurl").length > 0) {
                            imgLogos.value = localStorage.getItem("Logosurl");
                        }

                    }).catch(function (error) {

                        console.error(error);
                    });

            } else {

                error.value = "Merci de charger un fichier png";
                window.scrollTo(0, 0);
            }

        } else {

            error.value = "Merci de charger un fichier png";
            window.scrollTo(0, 0);
        }
    };

    const filesChange = async (e) => {
        attachmentX.value = e.target.files[0];
        const file = e.target.files[0];

        if (attachmentX.value.name.length > 0) {

            filesx.value = attachmentX.value.name;
            let x = attachmentX.value.name.split('.');
            let taille = x.length;
            let extension = x[(taille - 1)];

            if (extension == 'png' || extension == 'jpg' || extension == 'jpeg') {

                urls.value = URL.createObjectURL(attachmentX.value);
                URL.revokeObjectURL(file);
                error.value = "";
                postFormData.append('logo', attachmentX.value);
                const config = { headers: { 'Content-Type': 'multipart/form-data' } };
                axiosClient.post('/api/Addlogosurl', postFormData, config, {})
                    .then(response => {

                        // total.value = 0;
                        File.value = response.data.data
                        localStorage.setItem('File', response.data.data);

                        if (localStorage.getItem("File").length > 0) {
                            File.value = localStorage.getItem("File");
                        }


                    }).catch(function (error) {
                        // total.value = 0;
                        console.error(error);
                    });

            } else {
                error.value = "Merci de charger un fichier png";
                window.scrollTo(0, 0);
            }

        } else {

            filesx.value = "";
            btnvalide.value = 0;
            error.value = "Merci de charger un fichier png";
            window.scrollTo(0, 0);
        }
    };

watchEffect(() => {
    

    totalPages();
    paginatedData();

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

    if (PositionsTab) {

        let tables1 = [];
        PositionsTab.map(function (element) {
            const objet1 = {
                id: element.id,
                label: element.label,
                value: element.value,
            }
            tables1.push(objet1);
        })
        Positions.value = tables1;
    };

    if (police.value) {
        selected.value = police.value;
        Aperçu.value = police.value;
    } else {

    }


});

</script>

<style scoped>

.button-container {
  display: flex;
  justify-content: center;
  margin-top: -80px; 
}

.btn.btn-slides {
    background-color: #040D12;
    /* background-color: #194a93; */
    border-radius: 0px;
    padding: 10px 20px;
    margin: 0 10px;
    color: white;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    cursor: pointer;
}

.button {
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #343a40; /* Fond sombre */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .web-only {
    display: none;
  }
}

@media (min-width: 769px) {
  .mobile-only {
    display: none;
  }
}


.containers{
  /* width: 850px; */
  padding: 30px 35px 35px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
.containers.disable .editor-panel,
.containers.disable .controls .reset-filter,
.containers.disable .controls .save-img{
  opacity: 0.5;
  pointer-events: none;
}
.containers h2{
  margin-top: -8px;
  font-size: 22px;
  font-weight: 500;
}
.containers .wrapper{
  display: flex;
  margin: 20px 0;
  min-height: 335px;
}
.wrapper .editor-panel{
  padding: 15px 20px;
  width: 380px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.editor-panel .title{
  display: block;
  font-size: 16px;
  margin-bottom: 12px;
}
.editor-panel .options, .controls{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.editor-panel button{
  outline: none;
  height: 40px;
  font-size: 14px;
  color: #6C757D;
  background: #fff;
  border-radius: 3px;
  margin-bottom: 8px;
  border: 1px solid #aaa;
}
.editor-panel .filter button{
  width: calc(100% / 2 - 4px);
}
.editor-panel button:hover{
  background: #f5f5f5;
}
.filter button.active{
  color: #fff;
  border-color: #5372F0;
  background: #5372F0;
}
.filter .slider{
  margin-top: 12px;
}
.filter .slider .filter-info{
  display: flex;
  color: #464646;
  font-size: 14px;
  justify-content: space-between;
}
.filter .slider input{
  width: 100%;
  height: 5px;
  accent-color: #5372F0;
}
.editor-panel .rotate{
  margin-top: 17px;
}
.editor-panel .rotate button{
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% / 4 - 3px);
}
.rotate .options button:nth-child(3),
.rotate .options button:nth-child(4){
  font-size: 18px;
}
.rotate .options button:active{
  color: #fff;
  background: #5372F0;
  border-color: #5372F0;
}
.wrapper .preview-img{
  flex-grow: 1;
  display: flex;
  overflow: hidden;
  margin-left: 20px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
}
.preview-img img{
  max-width: 490px;
  max-height: 335px;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.controls button{
  padding: 11px 20px;
  font-size: 14px;
  border-radius: 3px;
  outline: none;
  color: #fff;
  cursor: pointer;
  background: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
}
.controls .reset-filter{
  color: #6C757D;
  border: 1px solid #6C757D;
}
.controls .reset-filter:hover{
  color: #fff;
  background: #6C757D;
}
.controls .choose-img{
  background: #6C757D;
  border: 1px solid #6C757D;
}
.controls .save-img{
  margin-left: 5px;
  background: #5372F0;
  border: 1px solid #5372F0;
}

@media screen and (max-width: 760px) {
  .containers{
    padding: 25px;
  }
  .containers .wrapper{
    flex-wrap: wrap-reverse;
  }
  .wrapper .editor-panel{
    width: 100%;
  }
  .wrapper .preview-img{
    width: 100%;
    margin: 0 0 15px;
  }
}

@media screen and (max-width: 500px) {
  .controls button{
    width: 100%;
    margin-bottom: 10px;
  }
  .controls .row{
    width: 100%;
  }
  .controls .row .save-img{
    margin-left: 0px;
  }
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

</style>


