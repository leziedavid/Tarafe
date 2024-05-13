<template>
    <div class="box-popup-account">
            <div class="box-account-overlay"></div>
            <div class="box-account-wrapper">

                <a  id="boutons" class="btn-close-popup btn-close-popup-account" href="#">
                    <svg class="icon-16 d-inline-flex align-items-center justify-content-center" fill="#111111" stroke="#111111" width="24" height="24" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </a>

                <div class="form-account-info text-center"><a class="button-tab btn-for-login active" href="#">S'identifier</a>
                <!-- <a class="button-tab btn-for-signup" href="#">Créer un compte.</a> -->

                <div class="form-login">

                    <div class="form-group">
                    <input v-model="email"  class="form-control" type="text" placeholder="Email">
                    </div>

                    <div class="form-group">
                    <input v-model="password"  class="form-control" type="password" placeholder="Mot de passe">
                    </div>

                    <div class="form-group">
                    <a class="link-under buttun-forgotpass" href="#">Vous avez oublié votre mot de passe ?</a>
                    </div>

                    <div class="form-group">
                        <button @click="login" class="btn btn-black d-block">S'identifier</button>
                    </div>

                    <div v-if="data.countCartItems" class="form-group">
                         <a class="link-under buttun-forgotpass" @click="checkActiveRoute('/paiement',1)" >Me livrer à une autre adresse...</a>
                    </div>

                </div>
                
                <div class="form-register">

                    <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                         <input  v-model="nom" class="form-control" type="text" placeholder="Nom">
                         <strong v-if="errorInput !== '' && etapes==1" style="color:red" >  {{errorInput}} </strong>
                    </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                      <input  v-model="prenom" class="form-control" type="text" placeholder="Prenom">
                      <strong v-if="errorInput !== '' && etapes==2" style="color:red"> {{errorInput}} </strong>
                    </div>
                            </div>
                    </div>
                    

                    <div class="form-group">
                        <input   v-model="emails" @change="verifemail" class="form-control" type="email" placeholder="Email">
                        <strong v-if="errorInput !== '' && etapes==3" style="color:red">  {{errorInput}} </strong>
                    </div>

                    <div class="form-group">
                        <vue-tel-input class="form-control" v-model="numero" mode="international"></vue-tel-input>
                        <strong v-if="errorInput !== '' && etapes==4" style="color:red" >  {{errorInput}} </strong>
                    </div>

                    <div class="form-group">
                        <input   v-model="passwords"  class="form-control" type="password" placeholder="Mot de passe">
                        <strong v-if="errorInput !== '' && etapes==5" style="color:red" >  {{errorInput}} </strong>
                    </div>

                    <div class="form-group">
                        <input v-model="passwordvalidate" class="form-control" type="password" placeholder="Confirmation votre mot de passe">
                        <strong v-if="errorInput !== '' && etapes==6" style="color:red" > {{errorInput}} </strong>
                    </div>
                
                    <div class="form-group">
                    <label class="d-flex align-items-start">
                        <input class="cb-agree" type="checkbox">
                        <span class="text-agree body-p2">
                            En vous inscrivant, vous acceptez nos Termes et conditions
                        </span>
                    </label>
                    </div>

                    <div class="form-group">
                    <button class="btn btn-black d-block">Créer mon compte</button>
                    </div>

                    <div class="text-center">
                    <p class="body-p2 neutral-medium-dark">Vous avez déjà un compte?
                        <a class="neutral-dark login-now" href="#">S'identifier</a>
                    </p>
                    </div>

                </div>

                </div>

                <div class="form-password-info">
                <h5>Récupérer le mot de passe</h5>
                <div class="form-login">
                    <div class="form-group">
                    <input class="form-control" type="text" placeholder="Entrer votre Email">
                    </div>

                    <div class="form-group">
                    <button class="btn btn-black d-block">Récupérer</button>
                    </div>

                    <div class="text-center">
                    <p class="body-p2 neutral-medium-dark">Vous avez déjà un compte ?
                        <a class="neutral-dark login-now" href="#">S'identifier</a>
                    </p>
                    </div>

                </div>
                </div>
            </div>
    </div>
</template>

<script setup>

import { ref, reactive, computed, onMounted, watchEffect } from 'vue';
import { VueTelInput } from 'vue-tel-input';
import axios from 'axios';
import { useShoppingStore } from '../store/index';
import useHomes from "../composable/Homes";
import router from "../router/index";
import { createToast } from 'mosha-vue-toastify';
import moment from 'moment';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import url from "../../ImgUrl";
import axiosClient from "../../ApiServices";

const data = useShoppingStore();
const { outp, MegaMenu } = useHomes();
const usersid = localStorage.getItem("auth_users");

onMounted(async () => {
    await MegaMenu();
});

const email = ref('');
const emails = ref('');
const password = ref('');
const passwords = ref('');
const btnvalide = ref(0);
const checkbox = ref(1);
const error = ref('');
const message = ref('');
const btnselecte = ref(0);
const actives = ref(1); 1;

const noms = ref('');
const phone = ref('');
const nom = ref('');
const prenom = ref('');
const numero = ref('');
const description = ref('');
const questions = ref('');
const passwordvalidate = ref('');
const attachments = ref([]);
const nbresultats = ref(0);
const visibiliy = ref(false);
const filesx = ref('');
const errorInput = ref('');
const etapes = ref('');
const TypeCompte = ref('Client');





const verifemail = async (e) => {

    axiosClient.get('/api/verifEmail/' + emails.value)

        .then(res => {
            if (res.data.data > 0) {
                message.value = '';
                errorInput.value = "Cette addresse exste déja";
                etapes.value = 3;
                console.log(errorInput.value);

            } else if (res.data.data == 0) {
                errorInput.value = '';
                etapes.value = "";
            }

        }).catch(err => console.log(err));

};


const login = async (e) => {
    e.preventDefault();

    axiosClient.post('/api/login', {
        email: email.value,
        password: password.value
    })
        .then(res => {

            if (res.data.success == false) {

                error.value = res.data.message;

                createToast("Identifiant ou mot de passe incorrect. Veuillez vérifier vos informations et réessayer.",
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

            } else {
                error.value = "";
                if (res.data.data[0].is_admin == "Clients") {

                    localStorage.setItem('auth_users', res.data.data[0].id);
                    localStorage.setItem('auth_id_stores', 0);
                    localStorage.setItem('auth_roles', res.data.data[0].is_admin);
                    localStorage.setItem('auth_names', res.data.data[0].name);
                    localStorage.setItem('auth_contact', res.data.data[0].contact);
                    localStorage.setItem('auth_email', res.data.data[0].email);

                    if (localStorage.getItem("EtatSouhaits") && localStorage.getItem("EtatSouhaits") == 1) {

                        router.replace({ path: '/ProductDetail/' + localStorage.getItem("idproduits") });

                    } else if (data.cartItems.length > 0) {

                        router.push("/paiement");

                    } else {

                        router.push("/MyCompte");
                    }

                } else if (res.data.data[0].is_admin == "Vendeurs") {

                    localStorage.setItem('auth_users', res.data.data[0].id);
                    localStorage.setItem('auth_id_stores', res.data.data[0].id_stores);
                    localStorage.setItem('auth_roles', res.data.data[0].is_admin);
                    localStorage.setItem('auth_names', res.data.data[0].name);

                    if (data.cartItems.length > 0) {
                        router.push("/paiement");
                    } else {
                        router.push("/Boutiques");
                    }
                } else if (res.data.data[0].is_admin == "Admin") {

                    console.log(res.data.data[0].is_admin);
                    localStorage.setItem('auth_users', res.data.data[0].id);
                    localStorage.setItem('auth_id_stores', res.data.data[0].id_stores);
                    localStorage.setItem('auth_roles', res.data.data[0].is_admin);
                    localStorage.setItem('auth_names', res.data.data[0].name);

                    if (data.cartItems.length > 0) {
                    
                        router.push("/paiement");
                        document.getElementById('boutons').click();

                    } else {
                        router.push("/Admin/Dashboard");
                        document.getElementById('boutons').click();

                    }
                }
            }


        })
        .catch(err => console.log(err));
};

const register = async (e) => {
    e.preventDefault();

    if (nom.value.length > 0 && prenom.value.length > 0 && numero.value > 0 && email.value.length > 0) {

        axiosClient.get('/sanctum/csrf-cookie').then(response => {
            axiosClient.post('/api/Addusers', {
                nom: nom.value,
                prenom: prenom.value,
                numero: numero.value,
                email: email.value,
                password: password.value,
                modepaiement: modepaiement.value,
                passwordvalidate: passwordvalidate.value,
                checkbox: checkbox.value,
            }).then(response => {

                if (response.data.success && response.data.data[0].id) {

                    nom.value = "";
                    prenom.value = "";
                    email.value = "";
                    password.value = "";
                    passwordvalidate.value = "";
                    message.value = response.data.message;
                    localStorage.setItem('auth_users', response.data.data[0].id);
                    localStorage.setItem('auth_roles', response.data.data[0].is_admin);
                    localStorage.setItem('auth_names', response.data.data[0].name);
                    $router.push("/paiement");
                } else {

                }
            })
                .catch(function (error) {
                    console.error(error);
                });
        })
    } else {
        error.value = "Merci de renseigner tous les champs";
        window.scrollTo(0, 0);
    }
};

const checkActiveRoute = (item, id) => {
    localStorage.setItem('auth_status', id);
    router.push(item);
};



watchEffect(() => {

    if (numero < 0) {
        errorInput.value = "Merci de saisie un nuemro a 10 chiffres svp";
        etapes.value = 4;

    } else {
        errorInput.value = "";
        etapes.value = "";
    }

    if (passwords.value.length < 8) {

        errorInput.value = "le mot de passe doit être égale ou supperieur à 10 chiffres exemple: Azerty@2023 ";
        etapes.valeur = 5;

    } else {

        errorInput.value = "";
        etapes.value = "";
    }

    if (passwordvalidate.value != passwords.value) {
        errorInput.value = "le mot passe et le mot de passe de confirmation sont diferents";
        etapes.value = 6;
    } else if (passwordvalidate.value == passwords.value || passwordvalidate.value > 0) {

        etapes.value = "";
        errorInput.value = "";
    }

    if (nom) {
        nom.value = nom.value.toUpperCase();
    }

    if (prenom.length > 0) {
        prenom.value = prenom.value.toUpperCase();
    }


    if (checkbox) {
        btnvalide.value = 1;
    } else {
        btnvalide.value = 0;
    }


});

</script>