<template>

    <main class="main">
        <section class="section banner-homepage6">
            <div class="container-fluid mb-3">
                <br>

                <div class="row">

                    <Menu/>

                <div class="col-md-10">
                    <FilterTop :notifications="notifications"/>
                    
                    <div class="box-your-filter">
                   
                    </div>

                    <section class="section block-head"> 
                        <div class="container"> 
                            <div class="text-center"> 
                                <h3>REGLAGE GENERAL</h3>
                            </div>
                        </div>
                    </section>

                    <div class="box-list-products">

                        <div class="product-item">
                            
                            <div class="cardProduct wow fadeInUp">
                                <div class="card">
                                    <div class="card-body">
                                        <a style="color:#ffff"  href="/Admin/Options">
                                            <h6 class="card-title text-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 64 64">
                                                    <g id="Group_25" data-name="Group 25" transform="translate(-1561.844 1020.618)">
                                                        <path id="Path_58" data-name="Path 58" d="M229.23,106.382h-12a6,6,0,0,0,0,12h12a6,6,0,0,0,0-12m0,10h-12a4,4,0,0,1,0-8h12a4,4,0,0,1,0,8" transform="translate(1370.615 -1127)" fill="#FFFFFF"></path>
                                                        <path id="Path_59" data-name="Path 59" d="M213.73,117.882h24a1,1,0,0,1,0,2h-24a1,1,0,0,1,0-2" transform="translate(1372.115 -1115.5)" fill="#FFFFFF"></path>
                                                        <path id="Path_60" data-name="Path 60" d="M210.23,117.382a2,2,0,1,0,2,2,2,2,0,0,0-2-2" transform="translate(1367.615 -1116)" fill="#FFFFFF"></path>
                                                        <line id="Line_1" data-name="Line 1" transform="translate(1578.047 -1014.618)" fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.142"></line>
                                                        <line id="Line_2" data-name="Line 2" transform="translate(1609.643 -1014.618)" fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.142"></line>
                                                        <path id="Path_61" data-name="Path 61" d="M213.73,123.882h24a1,1,0,0,1,0,2h-24a1,1,0,0,1,0-2" transform="translate(1372.115 -1109.5)" fill="#FFFFFF"></path>
                                                        <path id="Path_62" data-name="Path 62" d="M210.23,123.382a2,2,0,1,0,2,2,2,2,0,0,0-2-2" transform="translate(1367.615 -1110)" fill="#FFFFFF"></path>
                                                        <path id="Path_63" data-name="Path 63" d="M213.73,129.882h24a1,1,0,0,1,0,2h-24a1,1,0,1,1,0-2" transform="translate(1372.115 -1103.5)" fill="#FFFFFF"></path>
                                                        <path id="Path_64" data-name="Path 64" d="M210.23,129.382a2,2,0,1,0,2,2,2,2,0,0,0-2-2" transform="translate(1367.615 -1104)" fill="#FFFFFF"></path>
                                                        <line id="Line_3" data-name="Line 3" transform="translate(1609.643 -1015.618)" fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.142"></line>
                                                        <line id="Line_4" data-name="Line 4" transform="translate(1578.047 -1015.618)" fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.142"></line>
                                                        <path id="Path_65" data-name="Path 65" d="M265.23,116.382a8,8,0,0,0-8-8h-7.2a1,1,0,0,0,0,2h7.2a6,6,0,0,1,6,6v44a6,6,0,0,1-6,6h-48a6,6,0,0,1-6-6v-44a6,6,0,0,1,6-6h7.2a1,1,0,0,0,0-2h-7.2a8,8,0,0,0-8,8v44a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8Z" transform="translate(1360.615 -1125)" fill="#FFFFFF"></path>
                                                    </g>
                                                </svg> &nbsp; CONFIGURATION

                                            </h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div class="product-item">
                            
                            <div class="cardProduct wow fadeInUp">
                                <div class="card">
                                    <div class="card-body">
                                        <a style="color:#ffff"  href="/Admin/ListesCouleurs">
                                            <h6 class="card-title text-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 64 64">
                                                    <g id="Group_25" data-name="Group 25" transform="translate(-1561.844 1020.618)">
                                                        <path id="Path_58" data-name="Path 58" d="M229.23,106.382h-12a6,6,0,0,0,0,12h12a6,6,0,0,0,0-12m0,10h-12a4,4,0,0,1,0-8h12a4,4,0,0,1,0,8" transform="translate(1370.615 -1127)" fill="#FFFFFF"></path>
                                                        <path id="Path_59" data-name="Path 59" d="M213.73,117.882h24a1,1,0,0,1,0,2h-24a1,1,0,0,1,0-2" transform="translate(1372.115 -1115.5)" fill="#FFFFFF"></path>
                                                        <path id="Path_60" data-name="Path 60" d="M210.23,117.382a2,2,0,1,0,2,2,2,2,0,0,0-2-2" transform="translate(1367.615 -1116)" fill="#FFFFFF"></path>
                                                        <line id="Line_1" data-name="Line 1" transform="translate(1578.047 -1014.618)" fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.142"></line>
                                                        <line id="Line_2" data-name="Line 2" transform="translate(1609.643 -1014.618)" fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.142"></line>
                                                        <path id="Path_61" data-name="Path 61" d="M213.73,123.882h24a1,1,0,0,1,0,2h-24a1,1,0,0,1,0-2" transform="translate(1372.115 -1109.5)" fill="#FFFFFF"></path>
                                                        <path id="Path_62" data-name="Path 62" d="M210.23,123.382a2,2,0,1,0,2,2,2,2,0,0,0-2-2" transform="translate(1367.615 -1110)" fill="#FFFFFF"></path>
                                                        <path id="Path_63" data-name="Path 63" d="M213.73,129.882h24a1,1,0,0,1,0,2h-24a1,1,0,1,1,0-2" transform="translate(1372.115 -1103.5)" fill="#FFFFFF"></path>
                                                        <path id="Path_64" data-name="Path 64" d="M210.23,129.382a2,2,0,1,0,2,2,2,2,0,0,0-2-2" transform="translate(1367.615 -1104)" fill="#FFFFFF"></path>
                                                        <line id="Line_3" data-name="Line 3" transform="translate(1609.643 -1015.618)" fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.142"></line>
                                                        <line id="Line_4" data-name="Line 4" transform="translate(1578.047 -1015.618)" fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.142"></line>
                                                        <path id="Path_65" data-name="Path 65" d="M265.23,116.382a8,8,0,0,0-8-8h-7.2a1,1,0,0,0,0,2h7.2a6,6,0,0,1,6,6v44a6,6,0,0,1-6,6h-48a6,6,0,0,1-6-6v-44a6,6,0,0,1,6-6h7.2a1,1,0,0,0,0-2h-7.2a8,8,0,0,0-8,8v44a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8Z" transform="translate(1360.615 -1125)" fill="#FFFFFF"></path>
                                                    </g>
                                                </svg> &nbsp; COULEURS

                                            </h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div class="product-item">
                            
                            <div class="cardProduct wow fadeInUp">
                                <div class="card">
                                    <div class="card-body">
                                        <a style="color:#ffff" href="/Admin/ListesCouleurs">
                                            <h6 class="card-title text-center"> 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 64 64">
                                                    <g id="Group_25" data-name="Group 25" transform="translate(-1561.844 1020.618)">
                                                        <path id="Path_58" data-name="Path 58" d="M229.23,106.382h-12a6,6,0,0,0,0,12h12a6,6,0,0,0,0-12m0,10h-12a4,4,0,0,1,0-8h12a4,4,0,0,1,0,8" transform="translate(1370.615 -1127)" fill="#FFFFFF"></path>
                                                        <path id="Path_59" data-name="Path 59" d="M213.73,117.882h24a1,1,0,0,1,0,2h-24a1,1,0,0,1,0-2" transform="translate(1372.115 -1115.5)" fill="#FFFFFF"></path>
                                                        <path id="Path_60" data-name="Path 60" d="M210.23,117.382a2,2,0,1,0,2,2,2,2,0,0,0-2-2" transform="translate(1367.615 -1116)" fill="#FFFFFF"></path>
                                                        <line id="Line_1" data-name="Line 1" transform="translate(1578.047 -1014.618)" fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.142"></line>
                                                        <line id="Line_2" data-name="Line 2" transform="translate(1609.643 -1014.618)" fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.142"></line>
                                                        <path id="Path_61" data-name="Path 61" d="M213.73,123.882h24a1,1,0,0,1,0,2h-24a1,1,0,0,1,0-2" transform="translate(1372.115 -1109.5)" fill="#FFFFFF"></path>
                                                        <path id="Path_62" data-name="Path 62" d="M210.23,123.382a2,2,0,1,0,2,2,2,2,0,0,0-2-2" transform="translate(1367.615 -1110)" fill="#FFFFFF"></path>
                                                        <path id="Path_63" data-name="Path 63" d="M213.73,129.882h24a1,1,0,0,1,0,2h-24a1,1,0,1,1,0-2" transform="translate(1372.115 -1103.5)" fill="#FFFFFF"></path>
                                                        <path id="Path_64" data-name="Path 64" d="M210.23,129.382a2,2,0,1,0,2,2,2,2,0,0,0-2-2" transform="translate(1367.615 -1104)" fill="#FFFFFF"></path>
                                                        <line id="Line_3" data-name="Line 3" transform="translate(1609.643 -1015.618)" fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.142"></line>
                                                        <line id="Line_4" data-name="Line 4" transform="translate(1578.047 -1015.618)" fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.142"></line>
                                                        <path id="Path_65" data-name="Path 65" d="M265.23,116.382a8,8,0,0,0-8-8h-7.2a1,1,0,0,0,0,2h7.2a6,6,0,0,1,6,6v44a6,6,0,0,1-6,6h-48a6,6,0,0,1-6-6v-44a6,6,0,0,1,6-6h7.2a1,1,0,0,0,0-2h-7.2a8,8,0,0,0-8,8v44a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8Z" transform="translate(1360.615 -1125)" fill="#FFFFFF"></path>
                                                    </g>
                                                </svg> 
                                                &nbsp; TAILLES 
                                            </h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div class="product-item">
                            
                            <div class="cardProduct wow fadeInUp">
                                <div class="card">
                                    <div class="card-body">
                                        <a style="color:#ffff"  href="/Admin/ListesCouleurs">
                                            <h6 class="card-title text-center"> 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 64 64">
                                                    <g id="Group_25" data-name="Group 25" transform="translate(-1561.844 1020.618)">
                                                        <path id="Path_58" data-name="Path 58" d="M229.23,106.382h-12a6,6,0,0,0,0,12h12a6,6,0,0,0,0-12m0,10h-12a4,4,0,0,1,0-8h12a4,4,0,0,1,0,8" transform="translate(1370.615 -1127)" fill="#FFFFFF"></path>
                                                        <path id="Path_59" data-name="Path 59" d="M213.73,117.882h24a1,1,0,0,1,0,2h-24a1,1,0,0,1,0-2" transform="translate(1372.115 -1115.5)" fill="#FFFFFF"></path>
                                                        <path id="Path_60" data-name="Path 60" d="M210.23,117.382a2,2,0,1,0,2,2,2,2,0,0,0-2-2" transform="translate(1367.615 -1116)" fill="#FFFFFF"></path>
                                                        <line id="Line_1" data-name="Line 1" transform="translate(1578.047 -1014.618)" fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.142"></line>
                                                        <line id="Line_2" data-name="Line 2" transform="translate(1609.643 -1014.618)" fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.142"></line>
                                                        <path id="Path_61" data-name="Path 61" d="M213.73,123.882h24a1,1,0,0,1,0,2h-24a1,1,0,0,1,0-2" transform="translate(1372.115 -1109.5)" fill="#FFFFFF"></path>
                                                        <path id="Path_62" data-name="Path 62" d="M210.23,123.382a2,2,0,1,0,2,2,2,2,0,0,0-2-2" transform="translate(1367.615 -1110)" fill="#FFFFFF"></path>
                                                        <path id="Path_63" data-name="Path 63" d="M213.73,129.882h24a1,1,0,0,1,0,2h-24a1,1,0,1,1,0-2" transform="translate(1372.115 -1103.5)" fill="#FFFFFF"></path>
                                                        <path id="Path_64" data-name="Path 64" d="M210.23,129.382a2,2,0,1,0,2,2,2,2,0,0,0-2-2" transform="translate(1367.615 -1104)" fill="#FFFFFF"></path>
                                                        <line id="Line_3" data-name="Line 3" transform="translate(1609.643 -1015.618)" fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.142"></line>
                                                        <line id="Line_4" data-name="Line 4" transform="translate(1578.047 -1015.618)" fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.142"></line>
                                                        <path id="Path_65" data-name="Path 65" d="M265.23,116.382a8,8,0,0,0-8-8h-7.2a1,1,0,0,0,0,2h7.2a6,6,0,0,1,6,6v44a6,6,0,0,1-6,6h-48a6,6,0,0,1-6-6v-44a6,6,0,0,1,6-6h7.2a1,1,0,0,0,0-2h-7.2a8,8,0,0,0-8,8v44a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8Z" transform="translate(1360.615 -1125)" fill="#FFFFFF"></path>
                                                    </g>
                                                </svg> &nbsp; POINTURES

                                            </h6>
                                        </a>

                                    </div>
                                </div>
                            </div>
                            
                        </div>

                    </div>

                </div>
                
                </div>
            </div>
        </section>

    </main>

</template>

<script setup>
import {ref,reactive, computed, onMounted,watch,watchEffect} from 'vue';
import Menu from './Menu.vue';
import FilterTop from './FilterTop.vue';

    watchEffect(() => {

        });

</script>

<style scoped>

.card {
    box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
}
.card{
    
    border-radius: 6px;
    border: 1px solid #deebfd;
    box-shadow: 0 3px 10px rgba(62,85,120,.045);
    margin: 0 8px 10px;
    position: relative;
    background-color: #2e294e;
    height: 94px;
    padding: 20px;
    color:#ffffff;
}

.containers {
  margin: 0 auto;
  width: 91.666667%;
  display: grid;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.chart-container {
  background-color: #eee8d5;
  border-radius: 0.5rem;
}


@media only screen and (max-width: 768px) {

}

.button {
  background-color: #04AA6D;
  border: none;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
}

</style>