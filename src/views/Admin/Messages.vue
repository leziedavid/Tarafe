<template>

    <main class="main">

        <section class="section banner-homepage6">
            <div class="container-fluid mb-3">
                <br>

                <div class="row">

                    <Menu/>

                    <div class="col-md-10">
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
                                        <li v-if="etapes==1"> <a style="color:aliceblue" @click="EtatBoite(1)" class="active btn btn-red" href="#"><ion-icon style="color:aliceblue" size="small"  name="mail-unread-outline"></ion-icon> Tous les messages</a></li>
                                        <li v-else> <a style="color:aliceblue" @click="EtatBoite(1)" class="active btn btn-prim" href="#"><ion-icon style="color:aliceblue" size="small"  name="mail-unread-outline"></ion-icon> Tous les messages</a></li>

                                        <li v-if="etapes==2"> <a style="color:aliceblue" @click="EtatBoite(2)" class="active btn btn-red" href="#"> <ion-icon style="color:aliceblue" size="small"  name="send-outline"></ion-icon> Messages envoyer</a></li>
                                        <li v-else> <a style="color:aliceblue" @click="EtatBoite(2)" class="active btn btn-prim" href="#"> <ion-icon style="color:aliceblue" size="small"  name="send-outline"></ion-icon> Messages envoyer</a></li>

                                        <li v-if="etapes==3"> <a style="color:aliceblue" @click="EtatBoite(3)" class="active btn btn-red" href="#"> <ion-icon style="color:aliceblue" size="small"  name="attach-outline"></ion-icon> Ajouter une signature </a></li>
                                        <li v-else> <a style="color:aliceblue" @click="EtatBoite(3)" class="active btn btn-prim" href="#"><ion-icon style="color:aliceblue" size="small"  name="attach-outline"></ion-icon> Ajouter une signature</a></li>

                                    </ul>
                                    </div>
                                    <div class="col-lg-9 wow bounceIn"> 
                                    <div class="content-detail">
                                        <h3 v-if="etapes==1"  >Boite de messages</h3>
                                        <h3 v-if="etapes==2" >Messages envoyer</h3>

                                        <table v-if="etapes==1" class="table table-borderless">

                                                <ul v-for="(item,index) in mails" :key="item.newsletters_id"  style="margin:0; margin-left: 25px; padding:0; font-family: Arial, sans-serif;" align="left" type="disc">
                                                    <a @click="showMais(item.newsletters_id,item.objets,item.nom_newsletters,item.email_newsletters,item.contact_newsletters,item.texte_newsletters,item.status_newsletters)" href="#" >
                                                            <li style="color: #F1736A; font-size:22px; line-height:22px;">
                                                                <span style="color:#495055; font-size:16px; line-height:22px;">
                                                                    <ion-icon  style="color:black font-size : 50px;" size="small" name="person-outline"> 
                                                                    </ion-icon> &nbsp;&nbsp;&nbsp;{{item.nom_newsletters}} &nbsp;&nbsp;&nbsp;  {{ item.texte_newsletters.substr(0,60)}} &nbsp;&nbsp;&nbsp;&nbsp;
                                                                    <strong > {{ moment(item.created_at).format('DD-MM-YYYY') }} </strong> 
                                                                </span>
                                                            </li>
                                                    </a>
                                                </ul>
                                                <!-- <ion-icon name="person-outline"></ion-icon> -->
                                        </table>

                                        <table v-if="etapes==2" class="table table-borderless">
                                            <tbody>

                                                <ul  v-for="(item,index) in sendMail" :key="item.id_messages"  style="margin:0; margin-left: 25px; padding:0; font-family: Arial, sans-serif;" align="left" type="disc">
                                                    <li style="color: #F1736A; font-size:22px; line-height:22px;">

                                                                <span  style="color:#495055; font-size:18px; line-height:22px;">
                                                                    <ion-icon  style="color:black font-size : 50px;" size="small" name="person-outline"> 
                                                                    </ion-icon> &nbsp;&nbsp;&nbsp;{{item.objet}} &nbsp;&nbsp;&nbsp;  
                                                                    <img src="/images/pdf.jpeg" @click="downloadImage(urls+item.files_messages)" alt="" width="35" class="img-fluid">
                                                                     &nbsp;&nbsp;&nbsp;&nbsp;
                                                                    <strong > {{ moment(item.created_at).format('DD-MM-YYYY') }} </strong> 
                                                                </span>

                                                    </li>
                                                </ul>

                                            </tbody>
                                        </table>
                                        
                                        <div v-if="etapes==3" class="col-md-12 ">
                                            <label style="font-size: 18px; " for="">Signature </label> <br><br>
                                            
                                               <div class="form-group">
                                                <textarea v-model="signature" class="form-control" placeholder="Description" rows="3"></textarea>
                                                 <!-- <QuillEditor style="height: 100px; font-size: 15px;" v-model:content="signature"  content-type="html" ref='textEditor'  theme="snow"/> -->
                                            </div>
                                            <br> <br>
                                            <div class="col-md-12">
                                                  <button  @click="addSignatures" type="submit" class="btn btn-prim mb-4">Enregistrer...</button>
                                             </div>
                                        </div>
                                        
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </section>

                        </div>
                        
                        
                            <div class="modal fade bd-example-modal-lg" id="userFormModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h3 class="modal-title" id="staticBackdropLabel">
                                                    <span> Nouveau message</span>
                                                </h3>
                                                <button type="button" class="close btn btn-red" @click="Modalhide(1)" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <!-- <form> -->

                                                <div class="modal-body">

                                                    <div class="row mb-4">

                                                        <div  class="col-md-12 ">
                                                            <label for=""> Email</label>
                                                            <div class="form-group">
                                                                <input v-model="email" type="email" class="form-control form-account" name=""  placeholder="Libelle*">
                                                            </div>
                                                        </div>

                                                        <div  class="col-md-12 ">
                                                            <label for=""> Objet</label>
                                                            <div class="form-group">
                                                                <input v-model="objet" type="text" class="form-control form-account" name=""  placeholder="Libelle*">
                                                            </div>
                                                        </div>

                                                        <div class="col-md-12 ">
                                                            <label for="">Messaage </label> 
                                                            <div class="form-group">
                                                                <textarea v-model="messages" class="form-control" placeholder="Description" rows="3"></textarea>
                                                                <!-- <QuillEditor  :toolbar="toolbarOptions"  style="height: 100px; font-size: 15px; "  v-model:content="messages"  content-type="html" ref='textEditor'  theme="snow"/> -->
                                                            </div>
                                                        </div>

                                                        <div class="col-md-12 ">
                                                             <div class="form-group">
                                                                <h4> <label for="exampleInputEmail1">Fichier joint </label></h4>
                                                                <input id="file" type="file" multiple class="" ref="file" name="files" @change="fieldChange">
                                                            </div>
                                                        </div>
                                                        <br>

                                                        <div class="col-md-12 ">
                                                            <label for="">Signature </label> 
                                                            <div class="form-group">
                                                                <p  v-html="signature"></p>
                                                            </div>

                                                        </div>
                                                        
                                                        <br>

                                                        <div class="col-md-12">
                                                            <button  @click="addMessages" type="submit" class="btn btn-prim mb-4">Envoyer...</button>
                                                        </div>

                                                    </div>

                                                </div>

                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-red" @click="Modalhide(1)" data-dismiss="modal">Cancel</button>
                                                </div>

                                            <!-- </form> -->
                                        </div>
                                    </div>
                            </div>

                            <div class="modal fade bd-example-modal-lg" id="showMaisModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h4 class="modal-title" id="staticBackdropLabel">
                                                    Boite de réception : <span style="font-size:20px;">  {{nom_users}}</span>
                                                </h4>
                                                <button type="button" class="close btn btn-red" @click="Modalhide(2)" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <!-- <form> -->

                                                <div class="modal-body">

                                                    <div class="row mb-4">

                                                        <div  class="col-md-12 ">
                                                            <label style="font-size:20px;" for=""> Objet</label>
                                                            <div class="form-group">
                                                                <input style="font-size:18px;" v-model="objet" type="text" class="form-control form-account" name=""  placeholder="Libelle*">
                                                            </div>
                                                        </div>

                                                        <div  class="col-md-12 ">
                                                            <label  style="font-size:20px;" for=""> Email</label>
                                                            <div class="form-group">
                                                                <input  style="font-size:18px;" v-model="email" type="email" class="form-control form-account" name=""  placeholder="Libelle*">
                                                            </div>
                                                        </div>
                                                        <div  class="col-md-12 ">
                                                            <label style="font-size:20px;" for=""> contact</label>
                                                            <div class="form-group">
                                                                <vue-tel-input class="tels"  style="font-size:18px;" v-model="contact" mode="international"></vue-tel-input>
                                                            </div>
                                                        </div>


                                                        <div class="col-md-12 ">
                                                            <label style="font-size:20px;" for="">Messaage </label> 
                                                            <div class="form-group">
                                                                <textarea v-model="messages"  style="font-size:18px;" class="form-control" placeholder="Description" rows="6"></textarea>
                                                                <!-- <QuillEditor  :toolbar="toolbarOptions"  style="height: 100px; font-size: 15px; "  v-model:content="messages"  content-type="html" ref='textEditor'  theme="snow"/> -->
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
import useSignatures from "../../composable/Signatures";
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

import urls from "../../../ImgUrl";
import axiosClient from "../../../ApiServices";

    const data = useShoppingStore();
    const route = useRoute();
    const datas = 1;
    const usersid = localStorage.getItem("auth_users");

    const showModal = ref(false);
    const etapes = ref(1);
    const isOpened = ref(false);
    const error = ref('');

    const message = ref('');

    const attachments = ref([]);
    const filesx = ref('');

    const selected = ref([]);
    const options1 = ref([]);

    const email = ref('lezie04@gmail.com');
    const objet = ref('');
    const messages = ref('');
    const contact = ref('');
    const nom_users = ref('');
    const idnewsletters = ref('');
    const status_newsletter = ref('');

    const signature = ref('');
    const signatures = ref('');
    const id_signature = ref('');
    const files_messages = ref('');
    const titles = ref('Nouveau message');
   

    const Datapaginations = 1;
    const { getAllsignature,Signatures,nbSignature,getsignatureById,
        deleteSignature,getAllnewsletters,mails,paginations ,sendMail,paginations2} = useSignatures();

    onMounted(async () => {
        await getAllsignature();
        await getAllnewsletters(1);
    });


    const isLoading = ref(false);
    const fullPage = ref(true);

    const addCatégories = async (id) => {
        email.value = "lezie04@gmail.com";
        objet.value = "";
        messages.value = "";
        $('#userFormModal').modal('show');
    };

    const showMais = async (newsletters_id,objets,nom_newsletters,email_newsletters,contact_newsletters,texte_newsletters,status_newsletters) => {
        
         email.value = email_newsletters;
         objet.value = objets;
         nom_users.value = nom_newsletters;
         messages.value = texte_newsletters;
         contact.value = contact_newsletters;
         idnewsletters.value = newsletters_id;
         status_newsletter.value = status_newsletters;
        $('#showMaisModal').modal('show');
    };

    const Modalhide = async (id) => {
        email.value = "";
        objet.value = "";
        messages.value = "";
        nom_users.value = "";
        contact.value = "";
        idnewsletters.value = "";
        status_newsletter.value = "";

        if (id == 1) {
            $('#userFormModal').modal('hide');
        }else if(id == 2){

            $('#showMaisModal').modal('hide');
        }
    };

    const EtatBoite = async (id) => {
        email.value = "";
        objet.value = "";
        messages.value = "";
        etapes.value=id;
     };

    const addMessages = async (e) => {
        e.preventDefault();
        axiosClient.post('/api/addMessages', {
            email: email.value,
            objet: objet.value,
            messages: messages.value,
            signature: signature.value,
            files_messages: files_messages.value,

        }).then(response => {
            
            $('#userFormModal').modal('hide');
            etapes.value=1;
            getSignature();
            createToast("messages envoyer avec succes!",
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
                message.value = "";
            }, 2500);

            }).catch(response => {

            });
    };

    const addSignatures = async (e) => {
        e.preventDefault();
        axiosClient.post('/api/AddSignature', {
            signature: signature.value,
            id_signature: id_signature.value,

        }).then(response => {
            
            $('#userFormModal').modal('hide');
            signature.value = response.data.data[0].dsignature;
            etapes.value=3;
            
            getSignature();
            createToast("signature ajouter avec succes!",
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
                message.value = "";
            }, 2500);

            }).catch(response => {

            });
    };

    const downloadImage = async (urls) => {
    window.open(urls, '_blank');
 }


    watchEffect(() => {

        if(Signatures.value.length){

            Signatures.value.map(function (element) {
                id_signature.value=element.id_signature;
                signature.value =element.signature;
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
</style>