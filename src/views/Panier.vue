<template>
    <div>
        <Header :outp="outp" />
         <br>  <br>
          <main class="main">

            <div class="section block-breadcrumb">
                <div class="container"> 
                    <div class="breadcrumbs"> 
                        <ul> 
                        <li> <a href="/">Accueil</a></li>
                        <li> <a href="#">Articles du panier </a></li>

                        </ul>
                    </div>
                </div>
            </div>

            <section class="section block-cart">
                <div class="container">
                <div class="row mt-20">

                    <div class="col-lg-7">

                        <div class="box-title-cart">
                            <h5>Votre panier</h5>
                            <h6>{{data.countCartItems}} Produits</h6>
                        </div>

                        <div  class="list-items-cart">
                                <div  v-for="item in data.cartItems" :key="item.id_products" class="item-cart">

                                    <div class="item-cart-image">
                                        <img :src="url+item.imageUrl"  alt="Guza">
                                    </div>

                                    <div class="item-cart-info">
                                        <div class="item-cart-info-1">
                                            <a class="text-16-medium" href="#">{{item.name_product}}</a>

                                        <!-- <div class="box-info-size-color-product">
                                            <p class="box-color"><span class="body-p2 neutral-medium-dark">Color:</span><span class="body-p2 neutral-dark">Navy</span></p>
                                            <p class="box-size"><span class="body-p2 neutral-medium-dark">Size:</span><span class="body-p2 neutral-dark">S</span></p>
                                        </div> -->

                                        <div class="box-form-cart">
                                            <div class="form-cart detail-qty">
                                                <span  @click="data.decrementQ(item)"  class="minus"></span>
                                                    <input class="qty-val form-control" type="text" name="quantity" :value=" item.quantity"  min="1">
                                                <span @click="data.incrementQ(item)" class="plus"></span>
                                            </div>
                                        </div>

                                        </div>
                                        <div class="item-cart-info-2">
                                        <p class="body-p2">{{item.price * item.quantity}} FCFA</p>
                                        <a class="btn-remove-cart" @click="data.removeFromCart(item)"></a>
                                        </div>
                                    </div>

                                </div>

                        </div>

                        <div class="box-coupon">
                            <div class="coupon-left">
                            <input class="form-control input-coupon" type="text" placeholder="Code promo">
                            <button class="btn btn-border">Appliquer</button>
                            </div>
                        </div>

                    </div>

                    <div class="col-lg-5 mb-10">

                        <div class="box-detail-cart">
                            <h5 class="mb-25">Résumé de la commande</h5>
                            <div class="box-info-cart">
                            <div class="d-flex align-items-center justify-content-between box-border-bottom">
                                <h5 class="neutral-medium-dark">Sous-total</h5>
                                <h5 class="neutral-dark">{{ data.cartItems.reduce((acc,item) => acc += item.price * item.quantity,0) }} FCFA</h5>
                            </div>

                            <!-- <div class="box-info-cart-inner">
                                <p class="text-17-medium text-uppercase mb-15">Shipping</p>
                                <div class="list-radio">
                                <div class="item-radio">
                                    <label>
                                    <input type="radio" name="shipping" checked="checked">Flat rate: $50.00
                                    </label><span class="price-ship">$50.00</span>
                                </div>
                                <div class="item-radio">
                                    <label>
                                    <input type="radio" name="shipping">Local pickup: $60.00
                                    </label>
                                </div>
                                </div>
                                <p class="body-p2 neutral-medium-dark mb-12">Shipping options will be updated during checkout.</p><a class="text-17 calculate-shipping" href="#">Calculate shipping</a>
                            </div> -->

                            <div class="d-flex align-items-center justify-content-between box-total-bottom">
                                <h5 class="neutral-medium-dark">Total</h5>
                                <h5 class="neutral-dark">{{ data.cartItems.reduce((acc,item) => acc += item.price * item.quantity,0) }} FCFA</h5>
                            </div>
                            
                            <div class="box-button-cart">
                                <a class="btn btn-black" href="/paiement">Passer à la caisse</a>
                            </div>

                            <div class="box-other-link">
                                <a class="text-17 link-green" href="#">Livraison gratuite pour les commandes supérieures  100 000 FCFA</a>
                                <a class="text-17" href="/">Poursuivre les achats</a>
                            </div>

                            </div>
                        </div>

                    </div>

                </div>
                </div>
            </section>
          </main>

          <br> <br> <br>

      <Footer :reglages="reglages"/> 
    </div>
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

const {Realisations,getAllDatapages,reglages,Categories,Categorie,Produits,Produit,Slider,Products,productsHomes,blogs,nbblogs,outp,MegaMenu,partenaires} = useHomes();

onMounted(async () => {

        MegaMenu();
        getAllDatapages();
    });



watchEffect(() => {

      localStorage.removeItem('codes');
      localStorage.removeItem('email');
      localStorage.removeItem('id_commende');

  });

</script>
