<template>

  <section class="section block-content-shop">
      <div class="container">
          <div class="row">

              <div v-for="item in reglages" :key="item.id_reglages" class="text-center"> 
                <h2 class="mb-2 wow fadeInUp">{{item.libelle_section}}</h2>
                <div class="mb-40 breadcrumbs d-inline-block"> 
                  <ul> 
                      <li>
                        <a style="font-size:22px"  href="#">{{item.description_section}}</a>
                      </li>
                  </ul>
                </div>
              </div>
                <div class="col-lg-12">

                  <div class="box-your-filter">

                        <loader v-if="Realisations.length==0" > </loader>
                          
                          <div v-if="Realisations.length>0 && loadings==0"  class="box-list-products">
                              <div v-for="item in Realisations" :key="item.id_realisations"  class="product-item">
                                  
                                      <div class="cardProductStyle3 cardProductType03 wow fadeInUp">
                                          <div class="cardImage">
                                          
                                              <img class="imageMain" :src="url+item.images_realisations" alt="guza">
                                              <img class="imageHover" :src="url+item.images_realisations" alt="guza">
                                              </div>

                                          <div class="cardInfo">
                                            <h5 style="font-size:19px" class="mb-2"> <strong> {{item.libelle_realisations}} </strong> </h5>
                                               <h6> 
                                                  <p  v-html="item.descript_real.length > 30 ? item.descript_real.slice(0, 30)+ ' ...' : item.descript_real"  class="neutral-medium-dark mb-3"> </p>
                                              </h6>
                                              <p class="body-p2 cardDesc">
                                                <a class="btn btn-border-medium text-center" :href="generateProductUrl(item.libelle_realisations)">Découvrir</a>

                                                <!-- <a class="btn btn-border-medium text-center" :href="'/product/' + encodeURIComponent(item.libelle_realisations)">Découvrir</a> -->
                                              </p>
                                          </div>

                                      </div>
                              </div>    
                          </div>
                  </div>
                  
                </div>
          </div>
      </div>
  </section>

</template>

<script setup>
import url from "../../ImgUrl";
import axiosClient from "../../ApiServices";
import loader from '../components/loader.vue';
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

const loadings = ref(1);
  setTimeout(() => {
      loadings.value = 0;
  }, 2000);

  function generateProductUrl(libelle) {
    const libelleModified = libelle.replace(/ /g, '-'); 
    return '/product/' + libelleModified;
    // return '/product/' + encodeURIComponent(libelle);

  }

</script>
