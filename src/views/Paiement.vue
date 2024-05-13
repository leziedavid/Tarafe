<template>
    <div>
        <Header :outp="outp" />
         <br>  <br>
         <main class="main">

            <div class="section block-breadcrumb">
                <div class="container"> 
                <div class="breadcrumbs"> 
                    <ul> 
                    <li> <a href="/">Accueil </a></li>
                    <li> <a href="#">Checkout</a></li>
                    </ul>
                </div>
                </div>
            </div>

            <section class="section block-cart">
                <div class="container mb-100 mt-60">
                <form action="#"> 
                    <div class="row mt-20"> 
                    <div class="col-lg-6">

                        <div v-if="message !==''"  class="alert alert-success" >
                                <h5> {{message}}</h5>
                            </div>

                            <div v-if="error !==''"  class="alert alert-danger" >
                                <h5> {{error}}</h5>
                            </div>

                        <div class="box-customer-login">  Vous êtes déjà client ? 
                            <a class="account-icon account" href="#"> Cliquez ici pour vous connecter</a>
                        </div>

                        <!-- <div class="box-gift-coupon">  Have a coupon?  <a href="#">Click here to enter your code</a></div> -->

                        <div class="box-title-checkout mt-30">
                            <h4 class="mb-25">Détails de la facturation</h4>
                            <h5 class="mb-20">Informations sur les contacts</h5>
                        </div>

                        <div class="box-form-checkout form-comment"> 
                        <div class="form-group"> 
                            <label class="form-label" for="email">Adresse électronique *</label>
                            <input class="form-control" id="email" type="text">
                            <label class="mt-12">
                            <input class="cb-left" type="checkbox">Envoyez-moi des nouvelles et des offres par courrier électronique
                            </label>
                        </div>
                        <h4 class="mt-32 mb-25">Adresse de livraison </h4>
                        <div class="row"> 
                            <div class="col-lg-6"> 
                                <div class="form-group"> 
                                    <input placeholder="Nom" v-model="nom" class="form-control" id="firstname" type="text">
                                    <strong v-if="errorInput !== '' && etapes==1" style="color:red" >  {{errorInput}} </strong>
                                </div>
                            </div>

                            <div class="col-lg-6"> 
                                <div class="form-group"> 
                                    <!-- <label class="form-label" for="lastname">Prénom *</label> -->
                                    <input placeholder="Prénom" v-model="prenom" class="form-control" id="lastname" type="text">
                                    <strong v-if="errorInput !== '' && etapes==2" style="color:red" >  {{errorInput}} </strong>
                                </div>
                            </div>

                            <div class="col-lg-6"> 
                                <div class="form-group"> 
                                    <!-- <label class="form-label" for="lastname">Télephone *</label> -->
                                    <vue-tel-input class="form-control" v-model="numero" mode="international"></vue-tel-input>
                                    <strong v-if="errorInput !== '' && etapes==4" style="color:red" >  {{errorInput}} </strong>
                                </div>
                            </div>


                            <div class="col-lg-6"> 
                                <div class="form-group"> 
                                    <input placeholder="Adresse email" v-model="email" @change="verifemail" class="form-control" id="lastname" type="email">
                                    <strong v-if="errorInput !== '' && etapes==3" style="color:red" > {{errorInput}} </strong>
                                </div>
                            </div>

                            <div class="col-lg-6"> 
                                <div class="form-group"> 
                                    <input placeholder="Nom de l'entreprise (facultatif)"  v-model="entreprise"  class="form-control" id="lastname" type="email">
                                </div>
                            </div>

                            <div class="col-lg-6"> 
                                <div class="form-group"> 
                                    <input placeholder="Lieu de livraison*" v-model="addresslivraison" class="form-control" id="lastname" type="email">
                                </div>
                            </div>

                            <div class="col-lg-12"> 
                                <div class="form-group"> 
                                    <input placeholder="Pays"  v-model="Pays" class="form-control" id="lastname" type="email">
                                    <!-- <strong v-if="errorInput !== '' && etapes==3" style="color:red" > {{errorInput}} </strong> -->
                                </div>
                            </div>

                            <div class="col-lg-12"> 
                                <div class="form-group"> 
                                    <h6>Ville * </h6>
                                    <v-select v-model="ville" :reduce="(option) => option.id" :options=options />
                                </div>
                            </div>

                            <div class="col-lg-12"> 
                                <div class="form-group"> 
                                    <input placeholder="Commune"  v-model="commune"  class="form-control" id="address" type="text">
                                </div>
                            </div>

                            <div class="col-lg-12"> 
                                <div class="form-group"> 
                                    <input placeholder="Quartier" v-model="quartier" class="form-control" id="address" type="text">
                                </div>
                            </div>


                            <div v-if="showInput==0" class="col-lg-12"> 
                                <div class="form-group"> 
                                    <label>
                                    <input class="cb-left"  v-model="checkbox" @click="checkboxs(1)"  type="checkbox">Create an account? 
                                    </label>
                                </div>
                            </div>

                            <div v-if="showInput==1" class="col-lg-12"> 
                                <div class="form-group"> 
                                    <label>
                                    <input class="cb-left" v-model="checkbox" @click="checkboxs(0)"   type="checkbox">Create an account? 
                                    </label>
                                </div>
                            </div>

                            <div v-if="showInput==1"  class="col-lg-12"> 
                                <div class="form-group"> 
                                    <input placeholder="Mot de passe*" v-model="passwords" class="form-control" id="firstname" type="text">
                                    <strong v-if="errorInput !== '' && etapes==5" style="color:red" >  {{errorInput}} </strong>
                                </div>
                            </div>

                            <div v-if="showInput==1"  class="col-lg-12"> 
                                <div class="form-group"> 
                                    <input placeholder="Confirmer le mot de passe"  v-model="passwordvalidate" class="form-control" id="firstname" type="text">
                                    <strong v-if="errorInput !== '' && etapes==6" style="color:red" >  {{errorInput}} </strong>
                                </div>
                            </div>

                               <div class="col-lg-12"> 
                                    <div class="form-group"> 
                                        <label class="form-label" for="ordernote">Notes de commande (facultatif)*</label>
                                        <textarea class="form-control" v-model="notescommande"  id="ordernote" rows="6"></textarea>
                                    </div>
                                </div>

                 
                                <div v-if=" auth_status==1  || usersid >0 " class="box-button-checkout">

                                </div>

                                <div v-else  class="box-button-checkout">
                                     <a class="btn btn-black" @click="update"> Sauvegarder mes informations...</a>
                                </div>

                         </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="box-detail-cart">
                        <h4 class="mb-25">Votre commande</h4>
                        <div class="box-info-cart"> 
                            <p class="text-17-medium">Product</p>
                            <div class="box-info-checkout-inner">
                            <div class="list-items-cart"> 

                                <div v-for="item in data.cartItems" :key="item.id_products" class="item-cart"> 

                                    <div class="item-cart-image"> 
                                        <img src="/assets/imgs/page/cart/sp.png" width="40" alt="Guza">
                                    </div>
                           
                                <div class="item-cart-info">
                                    <div class="item-cart-info-1"> 
                                        <a class="text-17-medium" href="#">{{item.name_product}}  - x{{item.quantity}}</a>
                                    </div>
                                    <div class="item-cart-info-2"> 
                                    <p class="body-p2">{{item.price * item.quantity}} Fcfa</p>
                                    </div>
                                </div>
                                </div>

                            </div>
                            </div>

                             <div class="d-flex align-items-center justify-content-between box-border-bottom">
                                <h5 class="neutral-medium-dark">Subtotal</h5>
                                <h5 class="neutral-dark">{{ data.cartItems.reduce((acc,item) => acc += item.price * item.quantity,0) }} (Fcfa)</h5>
                            </div> 


                            <div class="d-flex align-items-center justify-content-between box-border-bottom">
                            <h5 class="neutral-medium-dark">Total</h5>
                            <h5 class="color-9">{{ data.cartItems.reduce((acc,item) => acc += item.price * item.quantity,0) }} (Fcfa)</h5>
                            </div>
                            <div class="box-other-link text-start box-border-bottom"> <span class="text-17 link-green">Livraison gratuite pour les commandes supérieures à 100,000 Fcfa</span>
                                <a class="text-17" href="/">Poursuivre les achats</a>
                            </div>
                            <div class="box-payment-method"> 
                            <p class="text-17-medium mb-15 neutral-medium-dark">Expédition</p>
                            <div class="list-radio"> 

                                <div class="item-radio">
                                    <label>
                                        <input @click="modePays(1)"   type="radio" name="payment" checked="checked">Paiement à la livraison 
                                    </label>
                                    <p class="body-p2 neutral-medium-dark extra-info active">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                </div>

                                <div class="item-radio">
                                    <label>
                                        <input  @click="modePays(2)"  type="radio" name="payment"> Solution de paiement en ligne!.
                                    </label>
                                    <p class="body-p2 neutral-medium-dark extra-info">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                </div>
                            </div>

                            </div>
                            <div class="box-desc-checkout"> 
                            <p class="body-p2 neutral-medium-dark mb-20">
                                Vos données personnelles seront utilisées pour traiter votre commande, pour vous aider
                                à utiliser ce site web et pour d'autres raisons décrites dans notre politique de confidentialité.
                            </p>

                            <div class="form-group"> 
                                <label>
                                <input class="cb-left" type="checkbox">J'accepte les termes 
                                    <a href="#">et conditions du site web *</a>
                                </label>
                            </div>

                            </div>
                              <div class="box-button-checkout">
                                 <a class="btn btn-black" @click="placeOrder">Passer la commande</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </form>
                </div>
            </section>

        </main>

          <br> <br>
      <Footer  :reglages="reglages" /> 

    </div>
</template>

<script setup>

import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { ref, reactive, computed, onMounted, watchEffect } from 'vue';
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';
import axios from 'axios';
import { useShoppingStore } from '../store/index';
import useHomes from "../composable/Homes";
import router from "../router/index";
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
const data = useShoppingStore();
import url from "../../ImgUrl";
import axiosClient from "../../ApiServices";

const { outp, MegaMenu, Userdata, getDetailUsersById ,reglages,getAllDatapages} = useHomes();

onMounted(async () => {
    await MegaMenu();
    await getAllDatapages();
    await getDetailUsersById();
});

const passwords = ref('');
const passwordvalidate = ref('');
const btnvalide = ref(0);
const checkbox = ref('');
const error = ref('');
const message = ref('');
const errorInput = ref('');

const showModal = ref(false);
const viewMenu = ref(1);

const btnselecte = ref(0);
const usersRoles = localStorage.getItem("auth_roles");
const AdressLivraison = localStorage.getItem("Adresse");
const usersid = localStorage.getItem("auth_users");
const auth_status = localStorage.getItem("auth_status");

const id = ref('');
const nom = ref('');
const email = ref('');
const showInput = ref(0);
const numero = ref('');
const entreprise = ref('');
const addresslivraison = ref('');
const Pays = ref("COTE D'IVOIRE");
const ville = ref('');
const commune = ref('');
const quartier = ref('');
const prenom = ref('');
const password = ref('');
const confirmepassword = ref('');
const piece = ref('');
const etapes = ref('');
const is_admin = ref('');
const notescommande = ref('');
const dataretours = ref([]);
const postFormData = new FormData();

const modePaysValider = ref(1);
const modePays1 = ref(true);
const modePays2 = ref(false);
const tailles = ref('');
const poitures = ref('');
const couleurs = ref('');
const storesId = ref('');
const selected = ref([]);
const options = [

    {
        id: 1,
        label: 'Abidjan',
        value: 'Abidjan',
    },
    {
        id: 2,
        label: 'Bouaké',
        value: 'Bouaké',
    },

    {
        id: 3,
        label: 'Daloa',
        value: 'Daloa',
    },
    {
        id: 4,
        label: 'Yamoussoukro',
        value: 'Yamoussoukro',
    },

    {
        id: 5,
        label: 'San-Pédro',
        value: 'San-Pédro',
    },
    {
        id: 7,
        label: 'Korhogo',
        value: 'Korhogo',
    },
    {
        id: 8,
        label: 'Divo',
        value: 'Divo',
    },
    {
        id: 10,
        label: 'Anyama',
        value: 'Anyama',
    },
    {
        id: 11,
        label: 'Abengourou',
        value: 'Abengourou',
    },
    {
        id: 12,
        label: 'Man',
        value: 'Man',
    },
    {
        id: 13,
        label: 'Gagnoa',
        value: 'Gagnoa',
    },
    {
        id: 14,
        label: 'Soubré',
        value: 'Soubré',
    },
    {
        id: 15,
        label: 'Agboville',
        value: 'Agboville',
    },
    {
        id: 16,
        label: 'Dabou',
        value: 'Dabou',
    },
    {
        id: 17,
        label: 'Abengourou',
        value: 'Abengourou',
    },
    {
        id: 18,
        label: 'Grand-Bassam',
        value: 'Grand-Bassam',
    },

    {
        id: 19,
        label: 'Bouaflé',
        value: 'Bouaflé',
    },

    {
        id: 20,
        label: 'Issia',
        value: 'Issia',
    },

    {
        id: 21,
        label: 'Sinfra',
        value: 'Sinfra',
    },

    {
        id: 22,
        label: 'Katiola',
        value: 'Katiola',
    },

    {
        id: 23,
        label: 'Bingerville',
        value: 'Bingerville',
    },

    {
        id: 24,
        label: 'Adzopé',
        value: 'Adzopé',
    },

    {
        id: 25,
        label: 'Séguéla',
        value: 'Séguéla',
    },

    {
        id: 26,
        label: 'Bondoukou',
        value: 'Bondoukou',
    },
    {
        id: 27,
        label: 'Oumé',
        value: 'Oumé',
    },

    {
        id: 28,
        label: 'Ferkessedougou',
        value: 'Ferkessedougou',
    },

    {
        id: 29,
        label: 'Dimbokro',
        value: 'Dimbokro',
    },

    {
        id: 30,
        label: 'Duékoué',
        value: 'Duékoué',
    },

    {
        id: 31,
        label: 'Danané',
        value: 'Danané',
    },

    {
        id: 32,
        label: 'Tingréla',
        value: 'Tingréla',
    },

    {
        id: 33,
        label: 'Guiglo',
        value: 'Guiglo',
    },

    {
        id: 34,
        label: 'Boundiali',
        value: 'Boundiali',
    },

    {
        id: 30,
        label: 'Agnibilékrou',
        value: 'Agnibilékrou',
    },

    {
        id: 31,
        label: 'Vavoua',
        value: 'Vavoua',
    },

    {
        id: 32,
        label: 'Zuénoula',
        value: 'Zuénoula',
    },

    {
        id: 33,
        label: 'Tiassalé',
        value: 'Tiassalé',
    },

    {
        id: 34,
        label: 'Toumodi',
        value: 'Toumodi',
    },
    // TDL

    {
        id: 34,
        label: 'Akoupé',
        value: 'Akoupé',
    },

    {
        id: 30,
        label: 'Lakota',
        value: 'Lakota',
    },

    {
        id: 31,
        label: 'Bonon',
        value: 'Bonon',
    },

    {
        id: 32,
        label: 'Méagui',
        value: 'Méagui',
    },

    {
        id: 33,
        label: 'Zagné',
        value: 'Zagné',
    },

    {
        id: 34,
        label: 'Aboisso',
        value: 'Aboisso',
    },
];

const autres = ref('');

const checkboxs = async (e) => {
    showInput.value = e;
}
const modePays = async (e) => {
    modePaysValider.value = e;
}

const verifemail = async (e) => {

    axiosClient.get('/api/verifEmail/' + email.value)

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

const placeOrder = async (e) => {

    e.preventDefault();

    if (addresslivraison.value && numero.value) {
        error.value = "";

        if (modePaysValider) {

            error.value = "";
            axiosClient.get('/sanctum/csrf-cookie').then(response => {

                postFormData.append('id', usersid);
                postFormData.append('email', email.value);
                postFormData.append('phone', numero.value);
                postFormData.append('adresse', addresslivraison.value);
                postFormData.append('nomUsers', nom.value);
                postFormData.append('price', data.cartItems.reduce((acc, item) => acc += item.price * item.quantity, 0));
                postFormData.append('cart', JSON.stringify(data.cartItems));
                postFormData.append('modes', modePaysValider.value);
                postFormData.append('notescommande', notescommande.value);

                const config = { headers: { 'Content-Type': 'multipart/form-data' } };
                axiosClient.post('/api/PlaceOrder', postFormData, config, {})

                    .then(response => {

                        if (response.data.status) {

                            localStorage.removeItem('shopping');
                            localStorage.setItem('codes', response.data.data);
                            localStorage.setItem('status', response.data.status);
                            localStorage.setItem('email', response.data.email);
                            localStorage.setItem('id_commende', response.data.status);
                            router.push("/Felicitations");
                            message.value = response.data.message;

                        } else {

                        }

                    }).catch(function (error) {
                        console.error(error);
                    });
            })

        } else {

            error.value = "Merci de selctionner un  moyenne de paiement !";
            window.scrollTo(0, 0);
        }



    } else {

        error.value = "Merci de renseigner tous les champs obligatoire";
        window.scrollTo(0, 0);
    }
};

const update = async (e) => {
    e.preventDefault();

    axiosClient.get('/sanctum/csrf-cookie').then(response => {
        axiosClient.post('/api/updateDataUsers', {

            id: id.usersid,
            nom: nom.value,
            prenom: prenom.value,
            email: email.value,
            password: password.value,
            confirmepassword: confirmepassword.value,
            piece: piece.value,
            contact: contact.value,
            entreprise: entreprise.value,
            addresslivraison: addresslivraison.value,
            is_admin: is_admin.value,
            ville: ville.value,
            commune: commune.value,
            quartier: quartier.value,

        }).then(response => {

            if (response.data.success) {
                message.value = response.data.message;
            } else {

            }
        })
            .catch(function (error) {

                console.error(error);

            });
    })
};

watchEffect(() => {

    if (Userdata.value.length > 0) {

        Userdata.value.map(function (element) {
            id.value = element.id;
            nom.value = element.name;
            prenom.value = element.name;
            email.value = element.email;
            password.value = element.password;
            confirmepassword.value = element.password;
            piece.value = element.piece;
            numero.value = element.contact;
            entreprise.value = element.nom_ntreprise;
            addresslivraison.value = element.lieu_livraison;
            is_admin.value = element.is_admin;
            ville.value = element.ville;
            Pays.value = element.pays;
            commune.value = element.pays;
            quartier.value = element.quartier;
        })
    };

    if (numero < 0) {
        errorInput.value = "Merci de saisie un nuemro a 10 chiffres svp";
        etapes.value = 4;

    } else {
        errorInput.value = "";
        etapes.value = "";
    }

    if (passwords.length < 8) {

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