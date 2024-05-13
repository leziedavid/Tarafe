<template>

    <main class="main">
        <section class="section banner-homepage6">
            <div class="container-fluid mb-3">
                <br>

                <div class="row">

                    <Menu/>

                    <div class="col-lg-10">
                        <FilterTop :notifications="notifications"/>

                        <div class="row mb-6">

                            <div class="vl-parent">
                                    <loading v-model:active="isLoading"  :can-cancel="true" :on-cancel="onCancel" :is-full-page="fullPage"/>
                            </div>

                            <section class="section block-content-custome">
                                <div class="container"> 
                                <div class="row"> 
                                    <div class="col-lg-3 wow bounceIn"> 
                                    <ul class="menu-left"> 
                                        <!-- <li> <a style="color:aliceblue"  @click="addCatégories(0)" class="active btn btn-prim" href="#"> <ion-icon style="color:aliceblue" size="small" name="create-outline"></ion-icon> Nouveau message</a></li> -->
                                        
                                        <li v-if="etapes==1"> <a style="color:aliceblue" @click="options(1)" class="active btn btn-red" href="#"><ion-icon style="color:aliceblue" size="small"  name="construct-outline"></ion-icon> Page d'accueil</a></li>
                                        <li v-else> <a style="color:aliceblue" @click="options(1)" class="active btn btn-prim" href="#"><ion-icon style="color:aliceblue" size="small"  name="construct-outline"></ion-icon> Page d'accueil</a></li>
                                       
                                        <li v-if="etapes==5"> <a style="color:aliceblue" @click="options(5)" class="active btn btn-red" href="#"><ion-icon style="color:aliceblue" size="small"  name="construct-outline"></ion-icon> Page apropos</a></li>
                                        <li v-else> <a style="color:aliceblue" @click="options(5)" class="active btn btn-prim" href="#"><ion-icon style="color:aliceblue" size="small"  name="construct-outline"></ion-icon> Page apropos</a></li>

                                        <li v-if="etapes==2"> <a style="color:aliceblue" @click="options(2)" class="active btn btn-red" href="#"> <ion-icon style="color:aliceblue" size="small"  name="construct-outline"></ion-icon> Politique</a></li>
                                        <li v-else> <a style="color:aliceblue" @click="options(2)" class="active btn btn-prim" href="#"> <ion-icon style="color:aliceblue" size="small"  name="construct-outline"></ion-icon> Politique</a></li>

                                        <li v-if="etapes==3"> <a style="color:aliceblue" @click="options(3)" class="active btn btn-red" href="#"> <ion-icon style="color:aliceblue" size="small"  name="construct-outline"></ion-icon> Section de page </a></li>
                                        <li v-else> <a style="color:aliceblue" @click="options(3)" class="active btn btn-prim" href="#"><ion-icon style="color:aliceblue" size="small"  name="construct-outline"></ion-icon> Section de page</a></li>

                                        <li v-if="etapes==4"> <a style="color:aliceblue" @click="options(4)" class="active btn btn-red" href="#"> <ion-icon style="color:aliceblue" size="small"  name="construct-outline"></ion-icon> Publicité</a></li>
                                        <li v-else> <a style="color:aliceblue" @click="options(4)" class="active btn btn-prim" href="#"><ion-icon style="color:aliceblue" size="small"  name="construct-outline"></ion-icon> Publicité</a></li>

                                    </ul>
                                    </div>
                                    <div class="col-lg-9 wow bounceIn"> 
                                    <div class="content-detail">
                                        <h3 v-if="etapes==1" >Page d'accueil</h3>
                                        <h3 v-if="etapes==2">Politique</h3>


                                        <div  v-if="etapes==1" class="container rounded bg-white mt-5 mb-5">
                                            <div class="row">

                                                <div class="col-md-12 border-right">
                                                    <div class="p-3 py-5">

                                                        <div class="row">
                                                           

                                                            <div class="col-md-12 mb-20">
                                                                <h5>Logo du site </h5>
                                                                <img class="" @click="Addfichiers(id_reglages,1)" width="150" :src="url+logoSite_reglages">
                                                            </div>

                                                            <div class="col-md-12 mb-20">
                                                                <label style="font-size:18px" class="labels">Entreprise</label>
                                                                <input type="text" v-model="entreprise_reglages"  class="form-control" placeholder="">
                                                            </div>


                                                           <div class="col-lg-12"> 
                                                                <div class="form-group"> 
                                                                    <label style="font-size:18px" class="labels">Description sous le footer</label>
                                                                    <QuillEditor v-model="desc_footer"  style="height: 100px; font-size: 15px;" v-model:content="desc_footer"  content-type="html" ref='textEditor'  theme="snow"/>
                                                                    <!-- <textarea @change="onInputChange(2)" v-model="desc_footer" class="form-control" placeholder="Message" rows="4"></textarea> -->
                                                                </div>
                                                                <button  @click="onInputChange(2)" type="submit" class="btn btn-prim mb-4">Enregistrer...</button>

                                                            </div>

                                                          
                                                            <div class="col-md-6 mb-20">
                                                                <h5>Image banner 1 </h5>
                                                                <img @click="Addfichiers(id_reglages,2)"  class="" width="200" :src="url+images1_reglages">
                                                            </div>


                                                            <div class="col-md-6 mb-20">
                                                                <h5>Image banner 2 </h5>
                                                                <img @click="Addfichiers(id_reglages,3)" class="" width="200" :src="url+images2_reglages">
                                                            </div>

                                                            <div class="col-md-12 mb-20">
                                                                <label style="font-size:18px" class="labels">Titre banner 1</label>
                                                                <input @change="onInputChange(15)" type="text" v-model="titre_banner1"  class="form-control" placeholder="">
                                                            </div>

                                                            <div class="col-md-12 mb-20">
                                                                <label style="font-size:18px" class="labels">Texte banner 1</label>
                                                                <input @change="onInputChange(16)" type="text" v-model="texte_banner1"  class="form-control" placeholder="">
                                                            </div>

                                                            <div class="col-md-12 mb-20">
                                                                <label style="font-size:18px" class="labels">Titre banner 2</label>
                                                                <input @change="onInputChange(17)" type="text" v-model="titre_banner2"  class="form-control" placeholder="">
                                                            </div>

                                                            <div class="col-md-12 mb-20">
                                                                <label style="font-size:18px" class="labels">Texte banner 2</label>
                                                                <input @change="onInputChange(18)" type="text" v-model="texte_banner2"  class="form-control" placeholder="">
                                                            </div>

                                                            <div class="col-lg-12"> 
                                                                <div class="form-group"> 
                                                                    <label style="font-size:18px" class="labels">Localisation</label>
                                                                    <textarea v-model="localisation_reglages" @change="onInputChange(3)" class="form-control" placeholder="Message" rows="1"></textarea>
                                                                </div>
                                                            </div>

                                                            <div class="col-lg-12"> 
                                                                <div class="form-group"> 
                                                                    <label style="font-size:18px" class="labels">Heur d'ouverture</label>
                                                                    <textarea @change="onInputChange(4)" v-model="ouverture_reglages" class="form-control" placeholder="Message" rows="1"></textarea>
                                                                </div>
                                                            </div>

                                                            <div class="col-md-12 mb-20">
                                                                <label style="font-size:18px" class="labels">Email</label>
                                                                <input @change="onInputChange(5)" type="text" v-model="email_reglages"  class="form-control" placeholder="">
                                                            </div>

                                                            <div class="col-md-12 mb-20">
                                                                <label style="font-size:18px" class="labels">Contact 1</label>
                                                                <input @change="onInputChange(6)" type="text" v-model="phone1_reglages"  class="form-control" placeholder="">
                                                            </div>

                                                            <div class="col-md-12 mb-20">
                                                                <label style="font-size:18px" class="labels">Contact 2</label>
                                                                <input @change="onInputChange(7)" type="text" v-model="phone2_reglages"  class="form-control" placeholder="">
                                                            </div>

                                                            <div class="col-md-12 mb-20">
                                                                <label style="font-size:18px" class="labels">Facebbook</label>
                                                                <input @change="onInputChange(8)" type="text" v-model="lienFacebbook_reglages"  class="form-control" placeholder="">
                                                            </div>

                                                            <div class="col-md-12 mb-20">
                                                                <label style="font-size:18px" class="labels">Youtube</label>
                                                                <input @change="onInputChange(9)" type="text" v-model="liensYoutub_reglages"  class="form-control" placeholder="">
                                                            </div>

                                                            <div class="col-md-12 mb-20">
                                                                <label style="font-size:18px" class="labels">Likedin</label>
                                                                <input @change="onInputChange(10)" type="text" v-model="lienLikedin_reglages"  class="form-control" placeholder="">
                                                            </div>

                                                            <div class="col-md-12 mb-20">
                                                                <label style="font-size:18px" class="labels">Instagram</label>
                                                                <input @change="onInputChange(11)" type="text" v-model="lienInstagram_reglages"  class="form-control" placeholder="">
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div v-if="etapes==2" class="col-md-12 ">

                                            <div  class="row"> 
                                                <div v-for="item in politique" :key="item.id_politique" class="col-md-3 col-sm-6"> 
                                                    <div class="cardIcon cardIconType3 wow fadeInUp">
                                                        <a @click="politiqueModal(1,item.id_politique)">
                                                            <div class="cardImage"> <img :src="url+item.files_politique"  alt="Guza">  </div>
                                                        </a>
                                                        <div class="cardInfo">
                                                            <h6 class="cardTitle">{{item.libelle_politique}}</h6>
                                                            <p class="body-p2">{{item.description_politique}}</p>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                
                                            </div>

                                        </div>
                                        
                                        <div v-if="etapes==3" class="col-md-12 ">
                                            <label style="font-size: 18px; " for="">Texte de la section de personnalisation (Fiche produit) </label> <br><br>
                                               <div class="form-group">
                                                 <QuillEditor style="height: 100px; font-size: 15px;" v-model:content="texte_personnalisation"  content-type="html" ref='textEditor'  theme="snow"/>
                                            </div>
                                            <br>
                                            <div class="col-md-12">
                                                  <button  @click="addPersonnalisation" type="submit" class="btn btn-prim mb-4">Enregistrer...</button>
                                             </div>

                                             <br>  <br>
                                             <div class="col-md-12 mb-20">
                                                 <label style="font-size:18px" class="labels">Libelle section de la page d'accueil</label>
                                                  <input @change="onInputChange(13)" type="text" v-model="libelle_section"  class="form-control" placeholder="">
                                              </div>

                                             <div class="col-md-12 mb-20">
                                                 <label style="font-size:18px" class="labels">Description section de la page d'accueil </label>
                                                  <input @change="onInputChange(14)" type="text" v-model="description_section"  class="form-control" placeholder="">
                                              </div>
                                              <br>

                                        </div>

                                        <!-- {{Pubs}} -->
                                        <div v-if="etapes==4" class=" row col-md-12 ">

                                                <div v-if="typesCard1==1" class="col-md-6 mb-20">
                                                    <h5>Image publicitaire 1  (PAYSAGE) </h5>
                                                        <img @click="Addfichiers(id_publicite,4)"  class="" width="400" :src="url+files_publicite1">
                                                </div>

                                                <div  class="col-md-6 mb-20"> 

                                                    <div  class="row"> 

                                                        <div v-if="typesCard1==1"  class="col-md-12 mb-20">
                                                            <label style="font-size:18px" class="labels">Titre publicitaire 1</label>
                                                            <input @change="onInputChange(19)" type="text" v-model="libelle_publicite1"  class="form-control" placeholder="">
                                                        </div>

                                                        <div v-if="typesCard1==1"  class="col-md-12 mb-20">
                                                            <label style="font-size:18px" class="labels">Lien 1</label>
                                                            <input @change="onInputChange(20)" type="text" v-model="link1"  class="form-control" placeholder="">
                                                        </div>

                                                    </div>

                                                </div>

                                                <div v-if="typesCard2==2" class="col-md-6 mb-20">
                                                    <h5>Image publicitaire 2 (PORTRAIT)</h5>
                                                    <img @click="Addfichiers(id_publicite,5)" class="" width="400" :src="url+files_publicite2">
                                                </div>

                                                <div  class="col-md-6 mb-20"> 

                                                        <div  class="row"> 

                                                            <div v-if="typesCard2==2"  class="col-md-12 mb-20">
                                                                <label style="font-size:18px" class="labels">Titre publicitaire 2</label>
                                                                <input @change="onInputChange(21)" type="text" v-model="libelle_publicite2"  class="form-control" placeholder="">
                                                            </div>

                                                            <div v-if="typesCard2==2"  class="col-md-12 mb-20">
                                                                <label style="font-size:18px" class="labels">Lien 2</label>
                                                                <input @change="onInputChange(22)" type="text" v-model="link2"  class="form-control" placeholder="">
                                                            </div>

                                                        </div>

                                                </div>
                                 
                                        </div>

                                        <div v-if="etapes==5" class="col-md-12 ">

                                        <div class="col-lg-12"> 
                                            <div class="form-group"> 
                                                <label style="font-size:18px" class="labels">Description page apropos</label>
                                                <QuillEditor v-model="description_reglages"  style="height: 100px; font-size: 15px;" v-model:content="description_reglages"  content-type="html" ref='textEditor'  theme="snow"/>
                                            </div>

                                            <button  @click="onInputChange(1)" type="submit" class="btn btn-prim mb-4">Enregistrer...</button>
                                        </div>

                                        <br>  <br>

                                        <div class="row">
                                            <div class="col-md-6 mb-20">
                                                <h5>Image 1  page apropos </h5>
                                                <img @click="Addfichiers(id_reglages,6)"  class="" width="200" :src="url+desc_reglagesImg1">
                                            </div>

                                            <div class="col-md-6 mb-20">
                                                <h5>Image 2  page apropos</h5>
                                                <img @click="Addfichiers(id_reglages,7)"  class="" width="200" :src="url+desc_reglagesImg2">
                                            </div>
                                        </div>

                                        <br>

                                        </div>
                                        
                                        
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </section>

                        </div>
                        
                          <!-- Formulaire image 1 -->
                            <div class="modal fade bd-example-modal-lg" id="fileInputModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h3 class="modal-title" id="staticBackdropLabel">
                                                    <!-- <span> Nouveau message</span> -->
                                                </h3>
                                                <button type="button" class="close btn btn-red" @click="Modalhide(3)" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <!-- <form> -->

                                                <div class="modal-body">
                                                    <loader v-if="times==1" > </loader>

                                                    <div v-if="times==0" class="row mb-4">

                                                        <div  class="col-md-12 text-center">
                                                            <h5 class="mb-40"> Charger {{libelleImage}} (png,jpg,jpeg)</h5>
                                                            <div class="form-group">
                                                                <input id="files" type="file"  class="" ref="file" name="files" @change="fieldChange">
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-red" @click="Modalhide(3)" data-dismiss="modal">Cancel</button>
                                                </div>

                                            <!-- </form> -->
                                        </div>
                                </div>
                            </div>
                            
                            <div class="modal fade bd-example-modal-lg" id="politiqueFormModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h3 class="modal-title" id="staticBackdropLabel">
                                                    <!-- <span> Nouveau message</span> -->
                                                </h3>
                                                <button type="button" class="close btn btn-red" @click="Modalhide(2)" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <!-- <form> -->

                                                <div class="modal-body">

                                                    <div class="row mb-4">

                                                        <div  class="col-md-12 ">
                                                            <label for=""> Titre</label>
                                                            <div class="form-group">
                                                                <input v-model="libelle_politique" type="text" class="form-control form-account" name=""  placeholder="">
                                                            </div>
                                                        </div>

                                                        <div  class="col-md-12 ">
                                                            <label for=""> Description</label>
                                                            <div class="form-group">
                                                                <textarea v-model="description_politique" class="form-control" placeholder="Description" rows="1"></textarea>
                                                            </div>
                                                        </div>
                                                        <br>

                                                        <div class="col-md-12">
                                                            <button  @click="Addpolitique" type="submit" class="btn btn-prim mb-4">Valider...</button>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-red" @click="Modalhide(2)" data-dismiss="modal">Cancel</button>
                                                </div>

                                            <!-- </form> -->
                                        </div>
                                </div>
                            </div>

                            <!-- Formaulaire image 2 -->

                            <div class="modal fade bd-example-modal-lg" id="filepublicite" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h3 class="modal-title" id="staticBackdropLabel"> </h3>
                                                <button type="button" class="close btn btn-red" @click="Modalhide(4)" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>

                                                <div class="modal-body">
                                                    <loader v-if="times==1" > </loader>

                                                    <div v-if="times==0" class="row mb-4">
                                                        <div  class="col-md-12 text-center">
                                                            <h5 class="mb-40"> {{libelleImage}} (png,jpg,jpeg)</h5>
                                                            <div class="form-group">
                                                                <input id="files" type="file"  class="" ref="file" name="files" @change="fieldChangePub">
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-red" @click="Modalhide(4)" data-dismiss="modal">Cancel</button>
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
import useReglages from "../../composable/Reglage";
import { useRouter, useRoute } from 'vue-router';
import router from "../../router/index";
import { useShoppingStore } from '../../store/index';
import { createToast } from 'mosha-vue-toastify';
import moment from 'moment';
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import Swal from 'sweetalert2'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import url from "../../../ImgUrl";
import axiosClient from "../../../ApiServices";

    const data = useShoppingStore();
    const route = useRoute();
    const datas = 1;
    const usersid = localStorage.getItem("auth_users");

    const showModal = ref(false);
    const etapes = ref(1);
    const isOpened = ref(false);
    const error = ref('');

    const messages = ref('');

    const attachments = ref([]);
    const filesx = ref('');

    const selected = ref([]);
    const positions = ref('');
    const positionfiles = ref('');
    const libelleImage = ref('');
    const libelle_politique = ref('');
    const description_politique = ref('');
    const id_politique = ref('');

    const email = ref();
    const times = ref(0);
    const objet = ref('');

    const id_reglages= ref('');
    const entreprise_reglages= ref('');
    const description_reglages= ref('');
    const desc_footer= ref('');
    const texte_personnalisation= ref('');
    const logoSite_reglages= ref('');
    const images1_reglages= ref('');
    const images2_reglages= ref('');
    const localisation_reglages= ref('');
    const email_reglages= ref('');
    const phone1_reglages= ref('');
    const phone2_reglages= ref('');
    const ouverture_reglages= ref('');
    const lienFacebbook_reglages= ref('');
    const liensYoutub_reglages= ref('');
    const lienLikedin_reglages= ref('');
    const lienInstagram_reglages= ref('');
    const addby_partenaires= ref('');
    const libelle_section= ref('');
    const description_section= ref('');
    const link = ref('');
    const postFormData = new FormData();

    const titre_banner1= ref('');
    const texte_banner1= ref('');
    const titre_banner2= ref('');
    const texte_banner2= ref('');

    const id_publicite= ref('');
    const typesCard1= ref('');
    const files_publicite1= ref('');
    const libelle_publicite1= ref('');
    const classe1= ref('');

    const typesCard2= ref('');
    const files_publicite2= ref('');
    const libelle_publicite2= ref('');
    const classe2= ref('');

    const link1= ref('');
    const link2= ref('');

    const desc_reglagesImg1= ref('');
    const desc_reglagesImg2= ref('');

    const Datapaginations = 1;
    const { getreglages,reglages,politique,getAllpolitique,getAllpub,Pubs} = useReglages();

    onMounted(async () => {
        await getreglages();
        await getAllpolitique();
        await getAllpub();
    });


    const isLoading = ref(false);
    const fullPage = ref(true);
    
    const Addfichiers = async (id,position) => {
        times.value=0;
        positionfiles.value=position;

        if(position==1){
            libelleImage.value="le logo du site";
            $('#fileInputModal').modal('show');
        }else if(position==2){
            libelleImage.value="la banner 1";
            $('#fileInputModal').modal('show');

        }else if(position==3){
            libelleImage.value="la banner 2";
            $('#fileInputModal').modal('show');
        
        }else if(position==4){
            libelleImage.value="Charger l'image en paysage ";
            $('#filepublicite').modal('show');
        
        }else if(position==5){
            libelleImage.value="Charger l'image en portrait";
            $('#filepublicite').modal('show');
        }else if(position==6){
            libelleImage.value="l'mage 1 de la page apropos";
            $('#fileInputModal').modal('show');
        }else if(position==7){
            libelleImage.value="l'image 2 de la page apropos";
            $('#fileInputModal').modal('show');
        }
      
    };

    const politiqueModal = async (id,Idpolitique) => {
        libelle_politique.value = "";
        description_politique.value = "";
        id_politique.value = Idpolitique;
        positions.value = id;
        let tabDetails = [];
         tabDetails = politique.value.filter(item => item.id_politique == Idpolitique);

         if (Idpolitique) {
            libelle_politique.value = tabDetails[0].libelle_politique;
            description_politique.value = tabDetails[0].description_politique;
            }
        $('#politiqueFormModal').modal('show');
    };

    const Modalhide = async (id) => {
        email.value = "";
        objet.value = "";
        messages.value = "";
        times.value=0;
        if (id == 1) {
            $('#userFormModal').modal('hide');

        }else if(id==2){

            $('#politiqueFormModal').modal('hide');
            
        }else if(id==3){

            $('#fileInputModal').modal('hide');
        
        }else if(id==4){

            $('#filepublicite').modal('hide');
            
        }

    };

    const options = async (id) => {
        email.value = "";
        objet.value = "";
        messages.value = "";
        etapes.value=id;
     };


    const Addpolitique = async (e) => {
        e.preventDefault();
        axiosClient.post('/api/Addpolitique', {
            libelle_politique:libelle_politique.value,
            description_politique:description_politique.value,
            id_politique:id_politique.value,
        }).then(response => {

            if(response.data.success==true){

                $('#politiqueFormModal').modal('hide');
                etapes.value=2;
                getAllpolitique();
                getAllpolitique();

                createToast("Option ajouter avec succes!",
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

            }


            // window.scrollTo(0, 0);

            setInterval(() => {

            }, 2500);

            }).catch(response => {

            });
    };

    const onInputChange = async (id) => {

        if(id==1){

                axiosClient.post('/api/addInput', {
                 position: id,
                 description_reglages:description_reglages.value,
                 id_reglages:id_reglages.value,

                }).then(response => {
                    
                    etapes.value=1;
                    getAllpolitique();
                    getreglages();
                    createToast("Description modifier avec succes!",
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
                
                }).catch(response => {

                });

        }else if(id==2){
               
            axiosClient.post('/api/addInput', {
                 position: id,
                 desc_footer:desc_footer.value,
                 id_reglages:id_reglages.value,

                }).then(response => {
                    
                    etapes.value=1;
                    getAllpolitique();
                    getreglages();
                    createToast("Description du footer modifier avec succes!",
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
                
                }).catch(response => {

                });
            
        }else if(id==3){
            
            axiosClient.post('/api/addInput', {
                 position: id,
                 localisation_reglages:localisation_reglages.value,
                 id_reglages:id_reglages.value,

                }).then(response => {
                    
                    etapes.value=1;
                    getAllpolitique();
                    getreglages();
                    createToast("Localisation modifier avec succes!",
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
                
                }).catch(response => {

                });
        
        }else if(id==4){
                
            axiosClient.post('/api/addInput', {
                 position: id,
                 ouverture_reglages:ouverture_reglages.value,
                 id_reglages:id_reglages.value,
                }).then(response => {
                    
                    etapes.value=1;
                    getAllpolitique();
                    getreglages();
                    createToast("Heur d'ouverture modifier avec succes!",
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
                
                }).catch(response => {

                });

        }else if(id==5){
            axiosClient.post('/api/addInput', {
                 position: id,
                 email_reglages:email_reglages.value,
                 id_reglages:id_reglages.value,

                }).then(response => {
                    
                    etapes.value=1;
                    getAllpolitique();
                    getreglages();
                    createToast("Localisation modifier avec succes!",
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
                
                }).catch(response => {

                });
        }else if(id==6){
            axiosClient.post('/api/addInput', {
                 position: id,
                 phone1_reglages:phone1_reglages.value,
                 id_reglages:id_reglages.value,

                }).then(response => {
                    
                    etapes.value=1;
                    getAllpolitique();
                    getreglages();
                    createToast("Localisation modifier avec succes!",
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
                
                }).catch(response => {

                });
        }else if(id==7){
            axiosClient.post('/api/addInput', {
                 position: id,
                 phone2_reglages:phone2_reglages.value,
                 id_reglages:id_reglages.value,

                }).then(response => {
                    
                    etapes.value=1;
                    getAllpolitique();
                    getreglages();
                    createToast("Localisation modifier avec succes!",
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
                
                }).catch(response => {

                });
        }else if(id==8){
            axiosClient.post('/api/addInput', {
                 position: id,
                 lienFacebbook_reglages:lienFacebbook_reglages.value,
                 id_reglages:id_reglages.value,

                }).then(response => {
                    
                    etapes.value=1;
                    getAllpolitique();
                    getreglages();
                    createToast("Localisation modifier avec succes!",
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
                
                }).catch(response => {

                });
        }else if(id==9){
            axiosClient.post('/api/addInput', {
                 position: id,
                 liensYoutub_reglages:liensYoutub_reglages.value,
                 id_reglages:id_reglages.value,

                }).then(response => {
                    
                    etapes.value=1;
                    getAllpolitique();
                    getreglages();
                    createToast("Localisation modifier avec succes!",
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
                
                }).catch(response => {

                });
        }else if(id==10){
            axiosClient.post('/api/addInput', {
                 position: id,
                 lienLikedin_reglages:lienLikedin_reglages.value,
                 id_reglages:id_reglages.value,

                }).then(response => {
                    
                    etapes.value=1;
                    getAllpolitique();
                    getreglages();
                    createToast("Localisation modifier avec succes!",
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
                
                }).catch(response => {

                });
        }else if(id==11){
            axiosClient.post('/api/addInput', {
                 position: id,
                 lienInstagram_reglages:lienInstagram_reglages.value,
                 id_reglages:id_reglages.value,

                }).then(response => {
                    
                    etapes.value=1;
                    getAllpolitique();
                    getreglages();
                    createToast("Localisation modifier avec succes!",
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
                
                }).catch(response => {

                });
        }else if(id==13){
            axiosClient.post('/api/addInput', {
                 position: id,
                 libelle_section:libelle_section.value,
                 id_reglages:id_reglages.value,

                }).then(response => {
                    
                    etapes.value=3;
                    getAllpolitique();
                    getreglages();
                    createToast("Localisation modifier avec succes!",
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
                
                }).catch(response => {

                });
        }else if(id==14){
         
            axiosClient.post('/api/addInput', {
                 position: id,
                 description_section:description_section.value,
                 id_reglages:id_reglages.value,

                }).then(response => {
                    
                    etapes.value=3;
                    getAllpolitique();
                    getreglages();
                    createToast("Localisation modifier avec succes!",
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
                
                }).catch(response => {

                });
        }else if(id==15){
         
         axiosClient.post('/api/addInput', {
              position: id,
              titre_banner1:titre_banner1.value,
              id_reglages:id_reglages.value,
          
             }).then(response => {
                 
                 etapes.value=1;
                 getAllpolitique();
                 getreglages();
                 createToast("Localisation modifier avec succes!",
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
             
             }).catch(response => {

             });
        }else if(id==16){
            
            axiosClient.post('/api/addInput', {
                position: id,
                texte_banner1:texte_banner1.value,
                id_reglages:id_reglages.value,

                }).then(response => {
                    
                    etapes.value=3;
                    getAllpolitique();
                    getreglages();
                    createToast("Localisation modifier avec succes!",
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
                
                }).catch(response => {

                });
        }else if(id==17){
            
            axiosClient.post('/api/addInput', {
                position: id,
                titre_banner2:titre_banner2.value,
                id_reglages:id_reglages.value,

                }).then(response => {
                    
                    etapes.value=3;
                    getAllpolitique();
                    getreglages();
                    createToast("Localisation modifier avec succes!",
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
                
                }).catch(response => {

                });
        }else if(id==18){
            
            axiosClient.post('/api/addInput', {
                position: id,
                texte_banner2:texte_banner2.value,
                id_reglages:id_reglages.value,

                }).then(response => {
                    
                    etapes.value=3;
                    getAllpolitique();
                    getreglages();
                    createToast("Localisation modifier avec succes!",
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
                
                }).catch(response => {

                });
        }else if(id==19){
            
            axiosClient.post('/api/addInput', {
                position: id,
                id_publicite: id_publicite.value,
                typesCard1:typesCard1.value,
                libelle_publicite1:libelle_publicite1.value,

                }).then(response => {
                    
                    etapes.value=4;
                    getAllpolitique();
                    getreglages();
                    getAllpub();
                    createToast("texte modifier avec succes!",
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
                
                }).catch(response => {

                });
        }else if(id==20){
            
            axiosClient.post('/api/addInput', {
                position: id,
                id_publicite: id_publicite.value,
                typesCard1:typesCard1.value,
                link1:link1.value,

                }).then(response => {
                    
                    etapes.value=4;
                    getAllpolitique();
                    getreglages();
                    getAllpub();
                    createToast("lien modifier avec succes!",
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
                
                }).catch(response => {

                });
        }else if(id==21){
            
            axiosClient.post('/api/addInput', {
                position: id,
                id_publicite: id_publicite.value,
                typesCard2:typesCard2.value,
                libelle_publicite2:libelle_publicite2.value,

                }).then(response => {
                    
                    etapes.value=4;
                    getAllpolitique();
                    getreglages();
                    getAllpub();
                    createToast("texte modifier avec succes!",
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
                
                }).catch(response => {

                });
        }else if(id==22){
            
            axiosClient.post('/api/addInput', {
                position: id,
                id_publicite: id_publicite.value,
                typesCard1:typesCard1.value,
                link2:link2.value,

                }).then(response => {
                    
                    etapes.value=4;
                    getAllpolitique();
                    getreglages();
                    getAllpub();
                    createToast("Lien modifier avec succes!",
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
                
                }).catch(response => {

                });
        }

    };

    const addPersonnalisation = async (e) => {

        axiosClient.post('/api/addInput', {
            position: 12,
            texte_personnalisation:texte_personnalisation.value,
            id_reglages:id_reglages.value,

        }).then(response => {
            etapes.value=3;
            getAllpolitique();
            getreglages();
            createToast("Texte de personnalisation modifier avec succes!",
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

            }).catch(response => {

            });
    };

    const fieldChange = async (e) => {

        times.value=1;
        attachments.value = e.target.files[0];
        const file = e.target.files[0];

        if (attachments.value.name.length > 0) {

            filesx.value = attachments.value.name;
            let x = attachments.value.name.split('.');
            let taille = x.length;
            let extension = x[(taille - 1)];

            if (extension == 'png' || extension == 'jpg' || extension == 'jpeg') {

                link.value = URL.createObjectURL(attachments.value);
                URL.revokeObjectURL(file);
                error.value = "";

                postFormData.append('logo', attachments.value);
                postFormData.append('positionfiles', positionfiles.value);
                postFormData.append('id_reglages', id_reglages.value);

                const config = { headers: { 'Content-Type': 'multipart/form-data' } };
                axiosClient.post('/api/AddMultifilesxx', postFormData, config, {})
                    .then(response => {
                        if (response.data.data) {
                            times.value=0;
                            $('#fileInputModal').modal('hide');

                            if(positionfiles.value==6 || positionfiles.value==7){
                                etapes.value=5;
                            }else{
                                etapes.value=1;
                            }
                           
                            getAllpolitique();
                            getreglages();
                            getAllpub();
                            createToast("Image ajouter avec succes!",
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
                        }

                    }).catch(function (error) {

                        console.error(error);
                    });

            } else {

                createToast("Image trop lourd merci de changer de fichier!",
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

                error.value = "Merci de charger un fichier pdf";
                window.scrollTo(0, 0);
            }

        } else {

            error.value = "Merci de charger un fichier pdf";
            window.scrollTo(0, 0);
        }
    };

    const fieldChangePub = async (e) => {
        times.value=1;
        attachments.value = e.target.files[0];
        const file = e.target.files[0];

        if (attachments.value.name.length > 0) {

            filesx.value = attachments.value.name;
            let x = attachments.value.name.split('.');
            let taille = x.length;
            let extension = x[(taille - 1)];

            if (extension == 'png' || extension == 'jpg' || extension == 'jpeg') {

                link.value = URL.createObjectURL(attachments.value);
                URL.revokeObjectURL(file);
                error.value = "";

                postFormData.append('logo', attachments.value);
                postFormData.append('positionfiles', positionfiles.value);
                postFormData.append('id_reglages', id_publicite.value);

                const config = { headers: { 'Content-Type': 'multipart/form-data' } };
                axiosClient.post('/api/AddMultifiles', postFormData, config, {})
                    .then(response => {
                        if (response.data.data) {
                            times.value=0;
                            $('#filepublicite').modal('hide');
                            etapes.value=4;
                            getAllpolitique();
                            getreglages();
                            getAllpub();
                            createToast("Image ajouter avec succes!",
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
                        }

                    }).catch(function (error) {

                        console.error(error);
                    });

            } else {

                createToast("Image trop lourd merci de changer de fichier!",
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

                error.value = "Merci de charger un fichier pdf";
                window.scrollTo(0, 0);
            }

        } else {

            error.value = "Merci de charger un fichier pdf";
            window.scrollTo(0, 0);
        }
    };


    watchEffect(() => {

        if(reglages.value.length){

            reglages.value.map(function (element) {  
                id_reglages.value=element.id_reglages;
                entreprise_reglages.value=element.entreprise_reglages;
                logoSite_reglages.value=element.logoSite_reglages;
                description_reglages.value=element.description_reglages;
                desc_footer.value=element.desc_footer;
                texte_personnalisation.value=element.texte_personnalisation;
                images2_reglages.value=element.images2_reglages;
                images1_reglages.value=element.images1_reglages;
                localisation_reglages.value=element.localisation_reglages;
                email_reglages.value=element.email_reglages;
                phone1_reglages.value=element.phone1_reglages;
                phone2_reglages.value=element.phone2_reglages;
                ouverture_reglages.value=element.ouverture_reglages;
                lienFacebbook_reglages.value=element.lienFacebbook_reglages;
                liensYoutub_reglages.value=element.liensYoutub_reglages;
                lienInstagram_reglages.value=element.lienInstagram_reglages;

                lienLikedin_reglages.value=element.lienLikedin_reglages;
                addby_partenaires.value=element.addby_partenaires;
                libelle_section.value=element.libelle_section;
                description_section.value=element.description_section;

                titre_banner1.value=element.titre_banner1;
                texte_banner1.value=element.texte_banner1;
                titre_banner2.value=element.titre_banner2;
                texte_banner2.value=element.texte_banner2;

                desc_reglagesImg1.value=element.desc_reglagesImg1;
                desc_reglagesImg2.value=element.desc_reglagesImg2;

            })
        };

        if(Pubs.value.length){

            Pubs.value.map(function (element) {

                 id_publicite.value=element.id_publicite;
                 typesCard1.value=element.typesCard1;
                 files_publicite1.value=element.files_publicite1;
                 libelle_publicite1.value=element.libelle_publicite1;
                 classe1.value=element.class1;

                 typesCard2.value=element.typesCard2;
                 files_publicite2.value=element.files_publicite2;
                 libelle_publicite2.value=element.libelle_publicite2;
                 classe2.value=element.class2;

                 link1.value=element.link1;
                 link2.value=element.link2;
            })
        };

        
    });

</script>

<style scoped>

input[type=file]::file-selector-button {
  margin-right: 20px;
  border: none;
  background: #040D12;
  padding: 15px 30px;
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