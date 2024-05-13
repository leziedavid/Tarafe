<template>


  <a href="https://api.whatsapp.com/send?phone=2250747003450&text=Bonjour%21%20Mr,j'aimerais avoire des informations svp." class="float" target="_blank">
      <img alt="Chat on WhatsApp" width="60" height="60" src="/images/WhatsApp.png" />
  </a>
  <br><br>
    
<footer class="footer">
      <div class="footer-1">
        <div class="container">

          <div v-for="item in reglages" :key="item.id_reglages"  class="row">

            <div class="col-lg-4 mb-30">
              <h6 class="color-white mb-20">
                <p v-html="item.desc_footer"> </p>
              </h6>

              <div class="box-form-subscribe box-form-subscribe-white">
                <p class="color-white">  Abonnez-vous à notre newsletter pour un coupon, une offre et une réduction promotionnelle passionnante..</p> 

                <form class="form-sub">
                  <input v-model="email" style="color:#fff" class="form-control" type="text" placeholder="Email">
                  <input @click="subscribers" class="btn btn-subscribe" type="submit" value="Je m'abonne!" >
                </form>
              </div>

            </div>

            <div class="col-lg-8 mb-30">
              <div class="row">
                <div class="col-lg-3 mb-30 footerBorder">
                  <h6 class="color-white mb-20">Plan du site</h6>
                  <ul class="menu-footer">
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/nouveaute">Nouveauté</a></li>
                    <li><a href="/blogs">Blogs</a></li>
                    <li><a href="/apropos">A propos</a></li>
                    <li><a href="/realisations">Réalisations</a></li>
                    <li><a href="/gallerie">Gallerie</a></li>
                  </ul>

                </div>
                <div class="col-lg-4 mb-30 footerBorder">
                  <h6 class="color-white mb-20">Contact</h6>
                  <ul class="menu-footer">
                    <li><a href="/">{{item.phone1_reglages}}</a></li>
                    <li><a href="/">{{item.phone2_reglages}}</a></li>
                    <li><a href="/">{{item.email_reglages}}</a></li>
                    <li><a href="#">{{item.localisation_reglages}}</a></li>
                  </ul>
                </div>

                <!-- <div class="col-lg-3 mb-30 footerBorder">
                  <h6 class="color-white mb-20">Terms & Policies</h6>
                  <ul class="menu-footer">
                    <li><a href="#">Duties & Taxes</a></li>
                    <li><a href="#">Shipping Info</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms Conditions</a></li>
                  </ul>
                </div> -->

                <div class="col-lg-4 mb-30 footerBorder">
                  <h6 class="color-white mb-20">Suivez-nous</h6>
                  <ul class="menu-footer">
                    <!-- <li><a target="_blank" @click=opens(item.lienInstagram_reglages) :href=" '/'+item.lienInstagram_reglages">Instagram</a></li> -->
                    <li><a target="_blank" href="" @click=opens(item.lienInstagram_reglages)>Instagram</a></li>
                    <li><a target="_blank" href="" @click=opens(item.lienFacebbook_reglages)>Facebook</a></li>
                    <li><a target="_blank" href="" @click=opens(item.lienLikedin_reglages)>Linkedin</a></li>
                    <!-- <li><a href="#">Tiktok</a></li> -->
                  </ul>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

      <div class="footer-2">
        <div class="container">

          <div class="footer-bottom">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-12 text-center text-lg-start mb-20">
                <img class="mr-25 d-inline-block align-middle logo-footer-img" width="100" src="/assets/Logo_blanc.png" alt="Guza">
                <span class="body-p1 color-white d-inline-block align-middle">© 2023 Tarafé.com , Tous droits réservés</span>
              </div>
              <div class="col-lg-6 col-md-12 text-center text-lg-end mb-20">
                <div class="d-flex justify-content-center justify-content-lg-end align-items-center box-all-payments">

                  <div class="d-inline-block box-payments mr-20">
                    <img src="/assets/imgs/template/icons/visa.svg" alt="Guza">
                    <img src="/assets/imgs/template/icons/master.svg" alt="Guza">
                    <img src="/assets/imgs/template/icons/stripe.svg" alt="Guza">
                    <img src="/assets/imgs/template/icons/paypal.svg" alt="Guza">
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
</footer>


</template>

<script setup>
import {onMounted, ref, watch,defineProps} from "vue";
import { useShoppingStore } from '../store/index';
const data = useShoppingStore();
const usersRoles=localStorage.getItem("auth_roles");
const usersid=localStorage.getItem("auth_users");
import url from "../../ImgUrl";

defineProps({

  reglages: {
    type: Object,
    required: true
    },
});

  const subscribers = async (e) => {

    e.preventDefault();

    if (email.value.length > 0) {

      axiosClient.post('/api/subscribers', {

        email: email.value,

      }).then(res => {

        email.value = "";
        createToast("Souscription prise en charge avec succès!",
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

      }).catch(err => console.log(err));

    } else {

      createToast("Merci de renseigner un email svp !",
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


  const opens = async (urls) => {
    window.open(urls, '_blank');
 }
  

</script>

<style scoped>

.float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:#25d366;
	color:#25d366;;
	/* color:#FFF; */
	border-radius:50px;
	text-align:center;
  font-size:30px;
	box-shadow: 2px 2px 3px #999;
  z-index:100;
}

.my-float{
	margin-top:16px;
}

</style>
