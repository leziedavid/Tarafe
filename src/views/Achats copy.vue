<template>
    <div>
        <Header :outp="outp" />

          <main class="main">
            
            <div class="section block-breadcrumb mb-4">
                <div class="container"> 
                    <div class="breadcrumbs"> 
                        <ul> 
                        <li> <a href="/">Accueil</a></li>
                            <li> 
                                <a v-for="item in Realisation" :key="item.id_realisations">{{item.libelle_realisations}}</a>
                            </li>
                        </ul>
                    </div>
                </div>
           </div>

            <section class="section block-blog-list">

                <div class="container mb-10"> 
                     <div class="text-center wow bounceIn"> 
                        <h2 v-for="item in Realisation" :key="item.id_realisations">{{item.libelle_realisations}}</h2>
                     </div>
                 </div>
                 

                <div class="container">

                    <div class="row">

                        <div v-for="item in Realisation" :key="item.id_realisations"  class=" col-md-6 mb-10">
                            <div class="detail-gallery">
                                <div class="box-main-gallery">
                                    <div class="product-image-slider product-image-slider-1">
                                        <figure  class="border-radius-10">
                                            <img :src="url+item.images_realisations"  alt="kidify">
                                        </figure>

                                        <p style="font-size:18px" v-html="item.descript_real"> </p>
                                    </div>
                                </div>
                            </div>

                           
                        </div>

                        <div class=" col-md-6 mb-10">

                            <div  v-if="error !==''"  class="alert alert-danger" >
                                <p> {{error}}</p>
                            </div>
                            
                                <h5 class="mb-10"> Ajouter votre personnalisation </h5>

                                
                                <p style="font-size:18px" v-for="item in reglages" :key="item.id_reglages" class="mb-10">
                                    <div v-html="item.texte_personnalisation"> </div>
                                    <!-- Merci de m'indiquer le texte précis à mettre, la police d'écriture, la couleur,la taille, <br>la dimension,le logo,la position du logo ainsi que le un support... -->
                                </p>

                              
                            <div class="col-md-12"> 
                                <h6 class="mb-10">Saisissez ici un texte (facultatif)</h6>
                                    <div class="form-group"> 
                                        <input  v-model="texte" class="form-control" type="text" placeholder="Nom ,message,slogan...">
                                    </div>
                            </div>

                            <div class="col-md-12"> 
                                <h6 class="mb-10">Choisir la police d'écriture </h6>
                                    <div class="form-group"> 
                                        <v-select v-model="police" :reduce="(option) => option.value" :options=options class="" />
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

                            <!-- <div  class="col-md-12"> 
                                 <h6 class="mb-10">Saisissez ici une Dimension (m)  (facultatif)</h6>
                                   <div class="form-group"> 
                                    <input  v-model="dimension" class="form-control" type="text" placeholder="30">
                                </div>
                            </div>
                                        
                            <div class="col-md-12"> 
                                <h6 class="mb-10">Saisissez ici une taille, Exemple(2,5) (facultatif)</h6>
                                    <div class="form-group"> 
                                        <input v-model="taillesParams" class="form-control" type="text" placeholder="30">
                                    </div>
                            </div> -->
                            
                            <!-- 
                            <div class="col-md-12"> 
                                <h6 class="mb-10">Saisissez ici une pointure (40) (facultatif)</h6>
                                    <div class="form-group"> 
                                        <input  @keyup="onPress(4)" v-model="pointuresParams" class="form-control" type="text" placeholder="30">
                                    </div>
                            </div> -->

                            <div  class="col-md-12"> 
                                <h6 class="mb-10">Selectionner une couleur principal (facultatif)</h6>
                                            
                                <div class="form-group"> 

                                    <div v-if="couleurs" class="box-colors">
                                        <strong> 
                                            <p style="color:red">{{couleurs}} </p>  Séléctionée
                                        </strong> 
                                    </div>

                                    <div class="block-size">
                                        <span>Couleur: </span>
                                        <div class="box-list-sizes">
                                            <div class="list-sizes">
                                                <span v-for="item in colors" :key="item.id_couleurs"  @click="onclick(item.name_couleurs)" class="item-size mb-10">
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
                                    <vue-tel-input class="form-control" v-model="numero" mode="international"></vue-tel-input>
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

                            <div  class="col-md-6"> 
                                 <h6 class="mb-10">Choisir l'emplacement de l'image </h6>
                                 <div class="form-group"> 
                                    <v-select v-model="PositionsFiles" :reduce="(option) => option.label" :options=Positions style="background-color:beige width:200px; font-size: 18px" class=" default-form form-control-xs" />
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
                                <textarea v-model="remarques" class="form-control" placeholder="Description" rows="3"></textarea>
                            </div>



                            <div class="col-md-12"> 
                                <button  @click="SaveData" type="submit" class="btn btn-prim mb-4">Soumettre ma commande ...</button>
                            </div>
                            
                        </div>


                        <!-- <div class="containers disable">
                            <h2>Ajouter votre personnalisation sur TaraféEditor</h2>
                            <div class="wrapper">
                                <div class="editor-panel">
                                    <h3> Options</h3>
                                    <br>
                                    <div class="filter">
                                        <label class="title">Filtres</label>
                                        <div class="options">
                                            <button id="brightness" class="active">Luminosité</button>
                                            <button id="saturation">Saturation</button>
                                            <button id="inversion">Inversion</button>
                                            <button id="grayscale">Niveaux de gris</button>
                                        </div>
                                        <div class="slider">
                                            <div class="filter-info">
                                                <p class="name">Luminosité</p>
                                                <p class="value">100%</p>
                                            </div>
                                            <input type="range" value="100" min="0" max="200">
                                        </div>
                                    </div>
                                    <div class="rotate">
                                        <label class="title">Faire pivoter et retourner</label>
                                        <div class="options">
                                            <button id="left"><i class="fa-solid fa-rotate-left"></i></button>
                                            <button id="right"><i class="fa-solid fa-rotate-right"></i></button>
                                            <button id="horizontal"><i class='bx bx-reflect-vertical'></i></button>
                                            <button id="vertical"><i class='bx bx-reflect-horizontal' ></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div class="preview-img">
                                    <img src="/image-placeholder.svg" alt="preview-img">
                                </div>
                            </div>
                            <div class="controls">
                                <button class="reset-filter">Réinitialiser les filtres</button>
                                <div class="row">
                                    <input type="file" class="file-input" accept="image/*" hidden>
                                    <button class="choose-img">Choisir une image</button>
                                    <button class="save-img">Enregistrer l'image</button>
                                </div>
                            </div>
                        </div> -->


                    </div>

                </div>

            </section>

          </main>

          <br> <br> <br>

      <Footer /> 
    </div>
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


const fileInput = document.querySelector(".file-input"),
filterOptions = document.querySelectorAll(".filter button"),
filterName = document.querySelector(".filter-info .name"),
filterValue = document.querySelector(".filter-info .value"),
filterSlider = document.querySelector(".slider input"),
rotateOptions = document.querySelectorAll(".rotate button"),
previewImg = document.querySelector(".preview-img img"),
resetFilterBtn = document.querySelector(".reset-filter"),
chooseImgBtn = document.querySelector(".choose-img"),
saveImgBtn = document.querySelector(".save-img");


const usersid = localStorage.getItem("auth_users");
const {pointures,tailles,getAllPropriete,colors} = useProduits();
const { outp, MegaMenu,getRealisationbyId,Realisation} = useHomes();
const { getreglages,reglages,politique,getAllpolitique} = useReglages();

onMounted(async () => {
    await MegaMenu();
    await getRealisationbyId(route.params.id);
    await getreglages();
    await getAllPropriete();
});

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
        title: "Chargement!",
        html: "fermeture dans <b></b> secondes.",
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

const SaveData = async (e) => {

    if(NomPrenom.value.length > 0 && numero.value && email.value.length > 0)
        {
            e.preventDefault();
            timers();
            axiosClient.post('/api/Addachats', {
                dimensionAchats: dimension.value,
                codeAchat: route.params.id,
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