<template>
          
     <section class="section block-form-contact block-testimonials-type3">
        <div class="container"> 
              <div  class="row"> 

                <div  v-for="item in politique" :key="item.id_politique"  class="col-md-3 col-sm-6"> 
                  <div class="cardIcon cardIconType3 wow fadeInUp">
                    <div class="cardImage">
                      <img  :src="url+item.files_politique" alt="Guza"></div>
                    <div class="cardInfo">
                      <h6 class="cardTitle">{{item.libelle_politique}}</h6>
                      <p class="body-p2">{{item.description_politique}}</p>
                    </div>
                  </div>
                </div>

              </div>

          <div class="row"> 
            <div  v-for="item in reglages" :key="item.id_reglages"   class="col-lg-5 mb-40 wow bounceIn"> 
              <h4>Adresse</h4>
              <p class="body-p2 neutral-medium-dark mb-45">{{item.localisation_reglages}}</p>
              <h4 class="mb-20">Contact</h4>
              <p class="body-p2 neutral-medium-dark mb-10">Numéro de téléphone : {{item.phone1_reglages}} - {{item.phone2_reglages}}</p>
              <p class="body-p2 neutral-medium-dark mb-45">Email.  
                <a href="tarafeci@gmail.com" class="__cf_email__" data-cfemail="c5ada0a9a9aa85b0bdb5a0b7eba6aa">{{item.email_reglages}}</a></p>
              <h4 class="mb-15">Heures d'ouverture</h4>
              <p class="body-p2 neutral-medium-dark mb-45">{{item.ouverture_reglages}}</p>
            
            </div>
            
            <div class="col-lg-7 mb-40 wow bounceIn"> 
              <h4 class="mb-10">Contactez-nous</h4>

              <p class="text-16-medium neutral-medium mb-30">
                Votre adresse électronique ne sera pas publiée. Les champs obligatoires sont marqués *
              </p>

              <div class="row"> 
                <div class="col-lg-6 col-md-6 col-sm-6"> 
                  <div class="form-group"> 
                    <input v-model="nomPrenom"  class="form-control" type="text" placeholder="Nom & Prenom *">
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6"> 
                  <div class="form-group"> 
                    <input class="form-control" v-model="email"  type="email"  placeholder="Email*">
                  </div>
                </div>
                <div class="col-lg-12"> 
                  <div class="form-group"> 
                    <vue-tel-input class="form-control" v-model="phone" mode="international"></vue-tel-input>
                  </div>
                </div>

                <div class="col-lg-12"> 
                  <div class="form-group"> 
                    <textarea v-model="contents" class="form-control" placeholder="Message" rows="6"></textarea>
                  </div>
                </div>
                <div class="col-lg-12"> 
                  <div class="text-center mt-10"> 
                    <!-- <button @click="Validate" class="btn btn-black">Envoyer</button> -->
                    <button @click="Validate" class="btn btn-border-medium text-center">Envoyer</button>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
     </section>

</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useShoppingStore } from '../store/index';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';
import axios from 'axios';
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';
import url from "../../ImgUrl";
import axiosClient from "../../ApiServices";

const data = useShoppingStore();
const email = ref('');
const nomPrenom = ref('');
const contents = ref('');
const phone = ref('');
const error = ref('');
const message = ref('');
const btnselecte = 0;

defineProps({

  Products: {
    type: Object,
    required: true,
  },

  reglages: {
      type: Object,
      required: true,
      },

  politique: {
      type: Object,
      required: true,
      },

});

const messagesInfo = async (e) => {
  createToast("Votre request à été prise en compte merci d'avoir utiliser notre service !",
    {
      position: 'top-right',
      type: 'success',
      transition: 'bounce',
      hideProgressBar: 'false',
      showIcon: 'false',
      showCloseButton: 'false',
      swipeClose: 'false',
      timeout: 3600,
    })
};

const Validate = async (e) => {
  e.preventDefault();
  console.log(phone.value);
  if (email.value.length > 0 && nomPrenom.value.length > 0 && phone.value && contents.value.length > 0) {
    axiosClient.post('api/addnewletter', {
      email: email.value,
      nomPrenom: nomPrenom.value,
      contents: contents.value,
      phone: phone.value,
    }).then(res => {
      email.value = "";
      nomPrenom.value = "";
      contents.value = "";
      phone.value = "";
      messagesInfo();

    }).catch(err => console.log(err));

  } else {
    createToast("Merci de renseigner tous les champs svp !",
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
  }
};


</script>

<style scoped>

input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid rgb(0, 0, 0);
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}

input[type=email] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid rgb(0, 0, 0);
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}


input[type=vue-tel-input] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid rgb(0, 0, 0);
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}



textarea {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid rgb(0, 0, 0);
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}
</style>