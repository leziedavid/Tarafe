<template>
  <div>
    <Header :outp="outp" />

    <main class="main">
      

      <div class="section block-breadcrumb mb-4">
        <div class="container">
          <div class="breadcrumbs">
            <ul>
              <li> <a href="/">Accueil</a></li>
              <li>
                <a>Nos realisations</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section class="section block-blog-list">

        <div class="container">
          <loader v-if="loadings==1"> </loader>
        </div>

        <div v-if="loadings==0">
          <div v-if="loadings==0 && gallerieImages.length>0" class="container">
            <div class="container mb-10">
              <div class="text-center wow bounceIn">
                <h2>NOS REALISATIONS</h2>
              </div>
            </div>
            <br>

            <div v-if="gallerieImages.length>0" class="box-list-products">
              <div v-for="item in gallerieImages" :key="item.id_gallerie_images" class="product-item">

                <div class="cardProductStyle3 cardProductType03 wow fadeInUp">
                  <div class="cardImage">
                    <!-- <a @click="ImaageModaal(url+item.files_gallerie_images)" :href="url+item.files_gallerie_images"> -->
                    <a @click="ImaageModaal(url+item.files_gallerie_images)">
                      <img class="imageMain" :src="url+item.files_gallerie_images" alt="guza">
                      <img class="imageHover" :src="url+item.files_gallerie_images" alt="guza">
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Pagination class="" v-if="paginations.last_page > 1" :pagination="paginations" :offset="3"
              @paginate="query === '' ? getData() :searchData(paginations.current_page)"> </Pagination>

          </div>
        </div>

        <div class="modal fade bd-example-modal-lg" id="previewModal" tabindex="-1" role="dialog"
        aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">

              <div class="modal-header">
                <button type="button" class="close btn btn-red" @click="Modalhide(1)" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div class="modal-body">

                <loader v-if="temps == 1"> </loader>

                <div v-if="temps == 0" class="row mb-4">

                  <div class="col-md-12 text-center">
                    <div class="cardImage">
                        <img class="imageMain" :src="imagesSelect" alt="guza">
                    </div>
                  </div>

                </div>

              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-red" @click="Modalhide(1)" data-dismiss="modal">Retour</button>
              </div>

            </div>
          </div>
        </div>

      </section>
    </main>

    <Footer :reglages="reglages" />
  </div>
</template>

<script setup>
import '../assets/tables.css';
import 'vue-loading-overlay/dist/css/index.css';
import loader from '../components/loader.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { ref, reactive, computed, onMounted, watch, watchEffect } from 'vue';
import { VueTelInput } from 'vue-tel-input';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import Pagination from '../components/Pagination.vue';

import { useRouter, useRoute } from 'vue-router'
import { useShoppingStore } from '../store/index';
import { createToast } from 'mosha-vue-toastify';
import moment from 'moment';
import axios from 'axios';
import url from "../../ImgUrl";
import Swal from 'sweetalert2';
import axiosClient from "../../ApiServices";

import useHomes from "../composable/Homes";
import useBlogs from "../composable/Blogs";
import useProduits from "../composable/Produits";

const data = useShoppingStore();
const route = useRoute();
const urls = ref('');
const imagesSelect = ref('');
const temps = ref(0);

const datas = 1;
const usersid = localStorage.getItem("auth_users");
const {gallerieImages,geAllgallerieImages,paginations} = useProduits();
const { outp, MegaMenu,getAllDatapages,reglages} = useHomes();


onMounted(async () => {
    await MegaMenu();
    await getAllDatapages();
    await geAllgallerieImages(datas);
});

const getData = async () => {
};

const searchData = async (data) => {
    await geAllgallerieImages(data);
    window.scrollTo(0, 0);
};

const loadings = ref(1);
setTimeout(() => {
    loadings.value = 0;
}, 4000);


const Modalhide = async (id) => {
  temps.value = 0
  if (id == 1) {
    $('#previewModal').modal('hide');
  }

};


const ImaageModaal = async (images) => {

  temps.value = 1
  imagesSelect.value = images;
  $('#previewModal').modal('show');
  setTimeout(() => {
    temps.value = 0;
  }, 1000);
};


watchEffect(() => {



});

</script>

<style scoped>

.containers{
  /* width: 850px; */
  padding: 30px 35px 35px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
.containers.disable .editor-panel,
.containers.disable .controls .reset-filter,
.containers.disable .controls .save-img{
  opacity: 0.5;
  pointer-events: none;
}
.containers h2{
  margin-top: -8px;
  font-size: 22px;
  font-weight: 500;
}
.containers .wrapper{
  display: flex;
  margin: 20px 0;
  min-height: 335px;
}
.wrapper .editor-panel{
  padding: 15px 20px;
  width: 380px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.editor-panel .title{
  display: block;
  font-size: 16px;
  margin-bottom: 12px;
}
.editor-panel .options, .controls{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.editor-panel button{
  outline: none;
  height: 40px;
  font-size: 14px;
  color: #6C757D;
  background: #fff;
  border-radius: 3px;
  margin-bottom: 8px;
  border: 1px solid #aaa;
}
.editor-panel .filter button{
  width: calc(100% / 2 - 4px);
}
.editor-panel button:hover{
  background: #f5f5f5;
}
.filter button.active{
  color: #fff;
  border-color: #5372F0;
  background: #5372F0;
}
.filter .slider{
  margin-top: 12px;
}
.filter .slider .filter-info{
  display: flex;
  color: #464646;
  font-size: 14px;
  justify-content: space-between;
}
.filter .slider input{
  width: 100%;
  height: 5px;
  accent-color: #5372F0;
}
.editor-panel .rotate{
  margin-top: 17px;
}
.editor-panel .rotate button{
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% / 4 - 3px);
}
.rotate .options button:nth-child(3),
.rotate .options button:nth-child(4){
  font-size: 18px;
}
.rotate .options button:active{
  color: #fff;
  background: #5372F0;
  border-color: #5372F0;
}
.wrapper .preview-img{
  flex-grow: 1;
  display: flex;
  overflow: hidden;
  margin-left: 20px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
}
.preview-img img{
  max-width: 490px;
  max-height: 335px;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.controls button{
  padding: 11px 20px;
  font-size: 14px;
  border-radius: 3px;
  outline: none;
  color: #fff;
  cursor: pointer;
  background: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
}
.controls .reset-filter{
  color: #6C757D;
  border: 1px solid #6C757D;
}
.controls .reset-filter:hover{
  color: #fff;
  background: #6C757D;
}
.controls .choose-img{
  background: #6C757D;
  border: 1px solid #6C757D;
}
.controls .save-img{
  margin-left: 5px;
  background: #5372F0;
  border: 1px solid #5372F0;
}

@media screen and (max-width: 760px) {
  .containers{
    padding: 25px;
  }
  .containers .wrapper{
    flex-wrap: wrap-reverse;
  }
  .wrapper .editor-panel{
    width: 100%;
  }
  .wrapper .preview-img{
    width: 100%;
    margin: 0 0 15px;
  }
}

@media screen and (max-width: 500px) {
  .controls button{
    width: 100%;
    margin-bottom: 10px;
  }
  .controls .row{
    width: 100%;
  }
  .controls .row .save-img{
    margin-left: 0px;
  }
}

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