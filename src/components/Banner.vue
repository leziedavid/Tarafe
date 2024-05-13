<template>

      <section class="section banner-homepage6">
        
        <div class="container-fluid">
          <div class="row">

            <div v-for="item in reglages" :key="item.id_reglages"  class="col-lg-6">
              <div class="cardBanner wow fadeInLeft">
                <div class="cardImage">
                  <img :src="url+item.images1_reglages" alt="Guza"></div>
                <div class="cardInfo">
                  <p style="font-size: 18px;" class="text-17-medium color-white mb-15 text-uppercase">{{item .texte_banner1}}</p>
                  <h2 style="font-size: 40px;" class="text-110-bold color-white">{{item .titre_banner1}}</h2>
                </div>
              </div>
            </div>

             <div v-for="item in reglages" :key="item.id_reglages"   class="col-lg-6">
              <div class="cardBanner wow fadeInLeft">
                <div class="cardImage">
                  <img :src="url+item.images2_reglages" alt="Guza"></div>
                <div class="cardInfo">
                  <p style="font-size: 18px;" class="text-17-medium color-white mb-15 text-uppercase">{{item.texte_banner2}}</p>
                  <h2 style="font-size: 40px;" class="text-110-bold color-white">{{item.titre_banner2 }}</h2>
                </div>
              </div>
            </div>
            
           <!--  <div class="col-lg-6">
              <div class="cardBanner wow fadeInRight">
                <div class="cardImage"><img src="/assets/img4.png" alt="Guza"></div>
                <div class="cardInfo">
                  <p class="text-17-medium color-white mb-15 text-uppercase">NE PAS DORMIR DESSUS</p>
                  <h2 class="text-110-bold color-white">Mode</h2>
                </div>
              </div>
            </div> -->

          </div>
        </div>
        

      </section>

</template>

<script setup>

import url from "../../ImgUrl";
import axiosClient from "../../ApiServices";

import { defineProps, ref } from "vue";
    defineProps({

      reglages: {
        type: Object,
        required: true
      },
      
      Realisations: {
           type: [Array, Object],
      },
      
    });
</script>

