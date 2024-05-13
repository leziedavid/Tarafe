<template>

<!-- {{ Publicites }} -->
      <section class="section box-categories"> 
          <div class="container"> 
            <div  class="row align-items-center">

              <div v-for="item in Publicites" :key="item.id_publicite"  class="col-lg-4 bg-7 mb-20">

                  <div v-if="item.typesCard2==2" class=" cardCategoriesStyle3  wow fadeInUp"> 
                    <div class="cardInfo">
                      <!-- bg-7 cardCategoriesStyle1 -->
                      <div class="box-content-middle"> 
                        <h2 class="mb-10">{{item.libelle_publicite2}} </h2>
                        <a v-if="item.link1"  class="link-underline-white" @click="downloadImage(urls+item.link1)" >Télecharger</a>
                      </div>
                    </div>
                    <!-- style="color:black" -->
                    <div class="cardImage" :style="{ 'background-image': 'url(' + urls + item.files_publicite2+ ')' }"> </div>
                  </div>

                </div>

              <div v-for="item in Publicites" :key="item.id_publicite"  class="col-lg-8 mb-20">

                <div v-if="item.typesCard1==1"  class="cardCategoriesStyle3 wow fadeInUp">
                  <div class="cardInfo"> 
                    <h2 class="mb-30">{{item.libelle_publicite1}}</h2>
                    <a v-if="item.link2"  class="link-underline-white" @click="downloadImage(urls+item.link2)" >Télecharger</a>
                  </div>
                  <div class="cardImage" :style="{ 'background-image': 'url(' + urls + item.files_publicite1 + ')' }"> </div>
                  
                </div>

              </div>
                
            </div>
          </div>
      </section>

</template>

<script setup>
import {onMounted, ref, watch } from "vue";
import { useShoppingStore } from '../store/index';
import moment from 'moment';
import urls from "../../ImgUrl";
const data = useShoppingStore();

defineProps({
  Publicites: {
          type: Object,
          required: true
      },
});

const downloadImage = async (urls) => {
    window.open(urls, '_blank');
 }

</script>

