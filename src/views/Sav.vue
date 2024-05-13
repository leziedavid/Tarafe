<template>
        <Header :outp="outp" />
        <main class="main">

            <section class="section banner-500">
                <div class="box-cover-image wow fadeInUp"></div>
                <div class="box-banner-info wow bounceIn"> 
                <p class="overline-t2-medium text-uppercase primary-navy mb-10">SERVICE CLIENTÈLE</p>
                <h2 class="color-primary-dark mb-30">Des questions ?<br class="d-none d-lg-block">Nous sommes là pour vous aider</h2>
                </div>
            </section>

            <section class="section block-content-custome">
                <div class="container"> 
                <div class="row"> 
                    <div class="col-lg-3 wow bounceIn"> 
                    <ul class="menu-left"> 
                        <li> <a class="active" href="#">Politique qualité</a></li>
                        <li> <a href="#">Livraisone</a></li>
                        <li> <a href="#">Politique qualité</a></li>
                        <li> <a href="#">Politique de retour</a></li>
                        <li> <a href="#">Modes de paiement</a></li>
                        <li> <a href="#">Coupon & Promotions</a></li>
                    </ul>
                    </div>
                    <div class="col-lg-9 wow bounceIn"> 
                    <div class="content-detail">

                        <h3>Politique qualité</h3>
                        <!-- <h5>Information Collection and Use</h5> -->

                        <p class="body-p2 neutral-medium-dark">
                            Si votre commande ne vous convient pas pour une raison personnelle vous pouvez nous renvoyer le(s) produit(s) à vos frais pour obtenir un échange ou un remboursement. <br>
                            Une fois la commande reçue vous avez 3 jours pour faire une réclamation, depuis votre compte lient ou en nous contactant directement. <br>
                            Si malgré nos vérifications avant envoi de votre commande une erreur de non-conformité nous échappait Tarafé prendrait en charge les frais de retour. 
                        </p>
                        
                        <h5>Livraisone</h5>
                        <p>
                            Nous livrons en Côte d’Ivoire : <br>
                            -  Par moto à Abidjan, voir le tableau des tarifs  expédition par car à l’intérieur.  <br>
                            -  Vous pourrez venir récupérer votre colis à la gare. <br>
                            Les délais de livraisons sont de 3-4 jours. <br>
                            Pour les autres pays contactez-nous pour envisager un envoi. <br>
                            La livraison est aux frais du client. 
                        </p>
                    
                        <h5>Politique de retour</h5>
                        <p>
                            Si votre commande ne vous convient pas pour une raison personnelle vous pouvez nous renvoyer le(s) produit(s) à vos frais pour obtenir un échange ou un remboursement. <br>
                            Une fois la commande reçue vous avez 3 jours pour faire une réclamation, depuis votre compte lient ou en nous contactant directement. <br>
                            Si malgré nos vérifications avant envoi de votre commande une erreur de non-conformité nous échappait Tarafé prendrait en charge les frais de retour. 
                        </p>
                        
                        <h5>Modes de paiement</h5>
                        <p>  Au moment du passage de commande différentes options de paiement vous seront proposées :  <br>
                            - Paiement à la livraison (pour la Côte d’Ivoire). <br>
                            - Vous remettez la somme en espèces ou par transfert mobile money lorsque le livreur vous remet le colis. <br>
                            - Paiement en ligne par mobile money. Grâce à notre partenaire TouchPay la transaction est simple et sécurisée lors du passage de commande.
                        </p>
                        
                    </div>
                    </div>
                </div>
                </div>
            </section>

        </main>
</template>

<script setup>
import Header from "../components/Header.vue";
import { useShoppingStore } from '../store/index';
const data = useShoppingStore();
import Footer from "../components/Footer.vue";

import {ref,reactive, computed, onMounted,watch,watchEffect} from 'vue';
import useHomes from "../composable/Homes";
import useProduits from "../composable/Produits";
import { useRouter, useRoute } from 'vue-router'
import { createToast } from 'mosha-vue-toastify';
import axios from 'axios';
import router from "../router/index";
import 'vue-loading-overlay/dist/css/index.css';
import url from "../../ImgUrl";
import axiosClient from "../../ApiServices";

const {Realisations,getAllDatapages,Categories,Categorie,Produits,Produit,Slider,Products,productsHomes,blogs,nbblogs,outp,MegaMenu,partenaires} = useHomes();

onMounted(async () => {

        MegaMenu();
        getAllDatapages();
    });



watchEffect(() => {

  });

</script>