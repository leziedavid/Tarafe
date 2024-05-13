<template>

    <section class="section block-content-shop">
        <div class="container">
          <div class="row">
            
            <div class="col-lg-12">
              
              <div class="box-filter-top"> 
                <div class="show-sm"> <a class="btn-open-filter" href="#">Filter </a></div>
                <div class="number-product"> 
                  <p class="body-p2 neutral-medium-dark">NOUVELLE COLLECTION</p>
                </div>
                <div class="box-sort"> 
                  <div class="box-view-style"> 
                    <a class="view-type view-2" href="#" data-col="2"></a>
                    <a class="view-type view-3 active" href="#" data-col="3"></a>
                    <a class="view-type view-4" href="#" data-col="4"></a>

                  </div>
                </div>
              </div>

              <div class="col-md-12">
                    <form >
                      <div class="form-group">
                          <input v-model="search" type="search" placeholder=" Que recherchez vous ? "  class="form-control search-icon">
                      </div>
                    </form>
              </div>

              <div class="box-your-filter">

                  <div class="block-ele-filter">
                        <a v-for="item in OptionOccasion" :key="item.id"  class="btn btn-tag-filter" @click="SelectOccasion(item.value)" >{{item.label}}<span class="close-tag"></span></a>
                        <!-- <a class="btn btn-tag-filter" href="#">Women<span class="close-tag"></span></a> -->
                        <a class="clear-filter link-underline" href="#">Clear All</a>
                  </div>

              </div>

              <loader v-if="dataProduct.length==0" > </loader>
              <div v-if="dataProduct.length>0" class="box-list-products">

                    <div  v-for="item in dataProduct" :key="item.id_products"  class="product-item">
                      
                          <div class="cardProductStyle3 cardProductType03 wow fadeInUp">
                              <div class="cardImage">
                            
                                  <img class="imageMain" :src="url+item.imageUrl" alt="guza">
                                  <img class="imageHover" :src="url+item.imageUrl" alt="guza">
                    
                                  <div class="button-select">

                                        <a @click="data.addToCart(item)" class="account-icon cart">

                                            <svg width="28" height="28" viewbox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                              <g clip-path="url(#clip0_116_450)">
                                                <path d="M9 10V8C9 6.67392 9.52678 5.40215 10.4645 4.46447C11.4021 3.52678 12.6739 3 14 3C15.3261 3 16.5979 3.52678 17.5355 4.46447C18.4732 5.40215 19 6.67392 19 8V10H22C22.2652 10 22.5196 10.1054 22.7071 10.2929C22.8946 10.4804 23 10.7348 23 11V23C23 23.2652 22.8946 23.5196 22.7071 23.7071C22.5196 23.8946 22.2652 24 22 24H6C5.73478 24 5.48043 23.8946 5.29289 23.7071C5.10536 23.5196 5 23.2652 5 23V11C5 10.7348 5.10536 10.4804 5.29289 10.2929C5.48043 10.1054 5.73478 10 6 10H9ZM9 12H7V22H21V12H19V14H17V12H11V14H9V12ZM11 10H17V8C17 7.20435 16.6839 6.44129 16.1213 5.87868C15.5587 5.31607 14.7956 5 14 5C13.2044 5 12.4413 5.31607 11.8787 5.87868C11.3161 6.44129 11 7.20435 11 8V10Z"></path>
                                              </g>
                                              <defs>
                                                <clippath id="clip0_116_450">
                                                  <rect width="24" height="24" transform="translate(2 2)"></rect>
                                                </clippath>
                                              </defs>
                                            </svg>
                                            
                                          </a>
                                    </div>

                                      <div class="box-quick-button">

                                        <a class="btn"  :href="'products/'+item.code_products">
                                              <svg class="d-inline-flex align-items-center justify-content-center" width="28" height="28" viewbox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_116_452)">
                                                  <path d="M14.001 6.52898C16.35 4.41998 19.98 4.48998 22.243 6.75698C24.505 9.02498 24.583 12.637 22.479 14.993L13.999 23.485L5.52101 14.993C3.41701 12.637 3.49601 9.01898 5.75701 6.75698C8.02201 4.49298 11.645 4.41698 14.001 6.52898ZM20.827 8.16998C19.327 6.66798 16.907 6.60698 15.337 8.01698L14.002 9.21498L12.666 8.01798C11.091 6.60598 8.67601 6.66798 7.17201 8.17198C5.68201 9.66198 5.60701 12.047 6.98001 13.623L14 20.654L21.02 13.624C22.394 12.047 22.319 9.66498 20.827 8.16998Z" fill=""></path>
                                                </g>
                                                <defs>
                                                  <clippath id="clip0_116_452">
                                                    <rect width="24" height="24" fill="white" transform="translate(2 2)"></rect>
                                                  </clippath>
                                                </defs>
                                              </svg>
                                        </a>

                                        <a class="btn" :href="'products/'+item.code_products">

                                          <svg class="d-inline-flex align-items-center justify-content-center" width="24" height="24" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                              <g clip-path="url(#clip0_200_1102)">
                                                <path d="M15.375 12.0416L19.5 16.1666L15.375 20.2916L14.1967 19.1133L16.31 16.9991L5.33333 17V15.3333H16.31L14.1967 13.22L15.375 12.0416ZM8.625 3.70831L9.80333 4.88665L7.69 6.99998H18.6667V8.66665H7.69L9.80333 10.78L8.625 11.9583L4.5 7.83331L8.625 3.70831Z" fill=""></path>
                                              </g>
                                              <defs>
                                                <clippath id="clip0_200_1102">
                                                  <rect width="20" height="20" fill="white" transform="translate(2 2)"></rect>
                                                </clippath>
                                              </defs>
                                            </svg>
                                        </a>

                                        <a class="btn preview-product"  :href="'products/'+item.code_products">
                                            <svg class="d-inline-flex align-items-center justify-content-center" width="28" height="28" viewbox="0 0 28 28" fill="" xmlns="http://www.w3.org/2000/svg">
                                              <g clip-path="url(#clip0_91_73)">
                                                <path d="M20.031 18.617L24.314 22.899L22.899 24.314L18.617 20.031C17.0237 21.3082 15.042 22.0029 13 22C8.032 22 4 17.968 4 13C4 8.032 8.032 4 13 4C17.968 4 22 8.032 22 13C22.0029 15.042 21.3082 17.0237 20.031 18.617ZM18.025 17.875C19.2941 16.5699 20.0029 14.8204 20 13C20 9.132 16.867 6 13 6C9.132 6 6 9.132 6 13C6 16.867 9.132 20 13 20C14.8204 20.0029 16.5699 19.2941 17.875 18.025L18.025 17.875Z" fill=""></path>
                                              </g>
                                              <defs>
                                                <clippath id="clip0_91_73">
                                                  <rect width="24" height="24" fill="white" transform="translate(2 2)"></rect>
                                                </clippath>
                                              </defs>
                                            </svg>
                                          </a>
                                      </div>

                                  </div>

                              <div class="cardInfo">
                                <h6 class="text-17-medium mb-10">{{item.name_product}}</h6>
                                <p class="body-p2 cardDesc">{{item.price}} FCFA</p>
                              </div>

                          </div>
                    </div>
                    
              </div>

              <div v-else class="row">
                      <h1 v-if="loadings==0" > <div class="col-md-12 text-center"> Aucun résultat trouvé</div> </h1>
                </div>

               <div class="text-center mt-20"> <a class="btn btn-border" href="/Nouveaute">Voir plus</a></div>
               
               <!-- 
                  <div class="text-center mt-50">
                    <nav class="box-pagination">
                      <ul class="pagination">
                        <li class="page-item"><a class="page-link page-prev" href="#">
                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"></path>
                            </svg></a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link active" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">...</a></li>
                        <li class="page-item"><a class="page-link" href="#">10</a></li>
                        <li class="page-item">
                          <a class="page-link page-next" href="#">
                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                            </svg></a>
                          </li>
                      </ul>
                    </nav>
                  </div>
                -->

            </div>
            
          </div>
        </div>
      </section>

      <div class="box-popup-preview">
      <a class="btn-close-popup" href="#">
        <img src="assets/imgs/template/icons/close-popup.svg" alt="kidify"></a>
      <div class="box-popup-content">
        <div class="preview-product-image">
          <div class="detail-gallery detail-gallery-2">
            <div class="box-main-gallery"><a class="zoom-image glightbox" href="assets/imgs/page/product/img.png"></a>
              <div class="product-image-slider product-image-slider-preview">
                <figure class="border-radius-10"><a class="glightbox" href="assets/imgs/page/product/img.png"><img src="assets/imgs/page/product/img.png" alt="kidify"></a></figure>
                <figure class="border-radius-10"><a class="glightbox" href="assets/imgs/page/product/img.png"><img src="assets/imgs/page/product/img.png" alt="kidify"></a></figure>
                <figure class="border-radius-10"><a class="glightbox" href="assets/imgs/page/product/img.png"><img src="assets/imgs/page/product/img.png" alt="kidify"></a></figure>
                <figure class="border-radius-10"><a class="glightbox" href="assets/imgs/page/product/img.png"><img src="assets/imgs/page/product/img.png" alt="kidify"></a></figure>
                <figure class="border-radius-10"><a class="glightbox" href="assets/imgs/page/product/img.png"><img src="assets/imgs/page/product/img.png" alt="kidify"></a></figure>
                <figure class="border-radius-10"><a class="glightbox" href="assets/imgs/page/product/img.png"><img src="assets/imgs/page/product/img.png" alt="kidify"></a></figure>
                <figure class="border-radius-10"><a class="glightbox" href="assets/imgs/page/product/img.png"><img src="assets/imgs/page/product/img.png" alt="kidify"></a></figure>
              </div>
            </div>
          </div>
        </div>
        <div class="preview-product-info">
          <div class="box-product-info">
            <h3 class="mb-5">Summer Stripes Shorts</h3>
            <div class="block-rating"><img src="assets/imgs/template/icons/star-fill.svg" alt="Guza"><img src="assets/imgs/template/icons/star-fill.svg" alt="Guza"><img src="assets/imgs/template/icons/star-fill.svg" alt="Guza"><img src="assets/imgs/template/icons/star-fill.svg" alt="Guza"><img src="assets/imgs/template/icons/star-none.svg" alt="Guza"><span class="text-17 neutral-medium-dark">(5)</span></div>
            <div class="block-price"><span class="price-main">$15.00</span><span class="price-line">$25.00</span></div>
            <p class="body-p2 viewed-guest viewed-guest-black mb-25"><span class="text-17-medium">24 guests are viewing this product</span></p>
            <div class="block-description">
              <p class="body-p2 neutral-medium-dark">The shorts are made from soft organic cotton. They have an elasticated waistband with an internal drawstring and side pockets.</p>
            </div>
            <div class="block-quantity">
              <div class="text-17 neutral-medium-dark mb-10">Quantity</div>
              <div class="box-form-cart">
                <div class="form-cart detail-qty"><span class="minus"></span>
                  <input class="qty-val form-control" type="text" name="quantity" value="1" min="1"><span class="plus"></span>
                </div><a class="btn btn-black" href="#">Add to Cart</a><a class="btn btn-navy" href="#">Buy Now</a>
              </div>
            </div>
            <div class="block-tags-product">
              <p class="body-p2"><span class="neutral-medium-dark">SKU:</span><span class="neutral-dark">C66R8B47MP</span></p>
              <p class="body-p2"><span class="neutral-medium-dark">Categories:</span><a class="neutral-dark" href="#">Dress,</a><a class="neutral-dark" href="#">Pants</a></p>
              <p class="body-p2"><span class="neutral-medium-dark">Tags:</span><a class="neutral-dark" href="#">fashion,</a><a class="neutral-dark" href="#">shoes,</a><a class="neutral-dark" href="#">women</a></p>
            </div>
          </div>
        </div>
      </div>
      </div>

</template>

<script setup>

import { useShoppingStore } from '../store/index';
import axios from 'axios';
import moment from 'moment';
import { defineProps, ref, reactive, computed, onMounted, watch, watchEffect } from 'vue';
import loader from '../components/loader.vue';
import url from "../../ImgUrl";
import axiosClient from "../../ApiServices";

const data = useShoppingStore();
const dataProduct = ref([]);
const search = ref('');
const rangeInput = ref(0);
const rangeValue = ref('');

const selected = ref([]);
const Occasion = ref([]);
const OptionOccasion = [
  {
    id: 1,
    label: 'Anniversaire',
    value: 'Anniversaire',
  },
  {
    id: 2,
    label: 'mariage',
    value: 'mariage',
  },
  {
    id: 3,
    label: 'défiler',
    value: 'défiler',
  },
  {
    id: 4,
    label: 'Soirée',
    value: 'Soirée',
  },
  {
    id: 5,
    label: 'Entréprise',
    value: 'Entréprise',
  },
  {
    id: 6,
    label: 'Decorations',
    value: 'Decorations',
  },
  {
    id: 7,
    label: 'Eclairage',
    value: 'Eclairage',
  },
  {
    id: 8,
    label: 'Cérémonie',
    value: 'Eclairage',
  },
  {
    id: 9,
    label: 'Mannequinat',
    value: 'Mannequinat',
  },
  {
    id: 10,
    label: 'Idées cadeaux',
    value: 'Idées cadeaux',
  },

  {
    id: 11,
    label: 'Pour un évènement',
    value: 'Pour un évènement',
  },

  {
    id: 12,
    label: 'Pour le bureau ',
    value: 'Pour le bureau ',
  },
  {
    id: 13,
    label: 'Pour la maison',
    value: 'Pour la maison',
  },
  {
    id: 14,
    label: 'Pour les enfant',
    value: 'Pour les enfant',
  },
  {
    id: 15,
    label: 'Pour ma marque / entreprise',
    value: 'Pour ma marque / entreprise',
  },

];

const props = defineProps({

  Products: {
    type: Object,
    required: true
  },
})


// new URL('./logo.png', import.meta.url).href
const getImage = (src) => {
  return new URL(src, import.meta.url).href;
};
const loadings = ref(1);

setTimeout(() => {
  loadings.value = 0;
}, 3600);

const SelectOccasion = async (index) => {
  dataProduct.value = [];
  axiosClient.get('/api/SelectOccasion/' + index)
    .then(response => {
      console.log(response.data.data);
      dataProduct.value = response.data.data;
    }).catch(function (error) {
      dataProduct.value = [];
      console.error(error);
    });
};



watchEffect(() => {

  if (rangeInput) {
    rangeValue.value = rangeInput.value;
  };

  if (rangeInput.value > 0) {

    dataProduct.value = [];
    axiosClient.get('/api/searchRange/' + rangeInput.value)
      .then(response => {
        console.log(response.data.data);
        dataProduct.value = response.data.data;

      }).catch(function (error) {
        dataProduct.value = [];
        console.error(error);
      });

  } else {

    dataProduct.value = props.Products;
  };

  if (props.Products.length > 0) {

    dataProduct.value = props.Products;

  } else {

    dataProduct.value = [];
  }

  if (search.value.length > 0) {

    dataProduct.value = [];
    axiosClient.get('/api/searchProduct/' + search.value)
      .then(response => {
        console.log(response.data.data);
        dataProduct.value = response.data.data;
      }).catch(function (error) {
        dataProduct.value = [];
        console.error(error);
      });

  } else {
  };

});

</script>

