<template>

        <div class="col-md-2">
            <div class="wrapper-overlay"></div>

            <!-- <div style="background-color:#dcdcdc40" class="box-filters-sidebar">  -->
            <!-- <div style="background-color:#242079" class="box-filters-sidebar">  -->
            <div style="background-color:#444a54" class="box-filters-sidebar"> 
                    <h5 style="color:aliceblue" class="title-filter text-center">Menu</h5>
                    <div class="block-filter"> 
                        <div class="">
                            <ul class=""> 

                                <li> 
                                     <label  class="cb-container">
                                        <a  href="/Admin/Dashboard"> 
                                            <span class="text-small">
                                            <ion-icon size="small"  style="color:aliceblue" name="home-outline"></ion-icon> Dashboard</span> 
                                        </a>  
                                    </label>
                                </li>
                       
                                <li> 
                                     <label class="cb-container">
                                        <a href="/Admin/ListesRealisation"> <span class="text-small"> <ion-icon  style="color:aliceblue"  size="small" name="medal-outline"></ion-icon> Creation</span> </a>  
                                    </label>
                                </li>
                                <li> 
                                     <label class="cb-container">
                                        <a href="/Admin/ListesCommandes">  <span class="text-small"> <ion-icon  style="color:aliceblue"  size="small" name="receipt-outline"></ion-icon> Commandes</span> </a>  
                                    </label>
                                </li>
                                
                                <li> 
                                     <label class="cb-container">
                                        <a href="/Admin/galleries">  <span class="text-small"> <ion-icon  style="color:aliceblue"  size="small" name="images-outline"></ion-icon> Gallerie</span> </a>  
                                    </label>
                                </li>
                                <li> 
                                     <label class="cb-container">
                                        <a href="/Admin/Options">  <span class="text-small"> <ion-icon  style="color:aliceblue"  size="small" name="settings-outline"></ion-icon> Connfiguration</span> </a>  
                                    </label>
                                </li>

                                <li> 
                                     <label class="cb-container">
                                        <a href="/Admin/Messages"> <span class="text-small"><ion-icon  style="color:aliceblue"  size="small"  name="home-outline"></ion-icon> Messagerie</span> </a>  
                                    </label>
                                </li>

                                <li> 
                                     <label class="cb-container">
                                        <a href="/Admin/Listesblog"> <span class="text-small"> <ion-icon  style="color:aliceblue"  size="small" name="book-outline"></ion-icon> Blogs</span> </a>  
                                    </label>
                                </li>
                                <li> 
                                     <label class="cb-container">
                                        <a href="/Admin/ListesUsers"> <span class="text-small"> <ion-icon  style="color:aliceblue"  size="small" name="person-outline"></ion-icon> Comptes</span> </a>  
                                    </label>
                                </li>
                                <li> 
                                     <label class="cb-container">
                                        <a href="/Admin/ListesProduits"> <span class="text-small"> <ion-icon  style="color:aliceblue"  size="small" name="clipboard-outline"></ion-icon> Produits</span> </a>  
                                    </label>
                                </li>
                                
                                <li> 
                                     <label class="cb-container">
                                        <a href="/Admin/ListesBoutiques"> <span class="text-small"> <ion-icon  style="color:aliceblue"  size="small" name="storefront-outline"></ion-icon> Boutiques</span> </a>  
                                    </label>
                                </li>

                                

                                <!-- <li> 
                                     <label class="cb-container">
                                        <a href="/Admin/KanbanBoard"> <span class="text-small"> <ion-icon size="small" name="stats-chart-outline"></ion-icon> Suivis</span> </a>  
                                    </label>
                                </li>

                                <li> 
                                     <label class="cb-container">
                                        <a href="/Admin/Statistiques"> <span class="text-small"> <ion-icon size="small" name="stats-chart-outline"></ion-icon> Statistiques</span> </a>  
                                    </label>
                                </li> -->
                                <li> 
                                     <label class="cb-container">
                                        <a href="/Admin/Listescategories"> <span class="text-small"> <ion-icon  style="color:aliceblue"  size="small" name="file-tray-full-outline"></ion-icon> Catégories</span> </a>  
                                    </label>
                                </li>
                                

                        
                                <li> 
                                     <label class="cb-container">
                                        <a href="/Admin/Reglages"> <span class="text-small"> <ion-icon  style="color:aliceblue"  size="small" name="construct-outline"></ion-icon> Reglages</span> </a>  
                                    </label>
                                </li>

                                <li> 
                                     <label class="cb-container">
                                        <a @click="deconnexion" > <span class="text-small"> <ion-icon  style="color:aliceblue"  size="small" name="log-out-outline"></ion-icon> Déconnexion</span> </a>  
                                    </label>
                                </li>

                            </ul>
                        </div>
                    </div>
            </div>
            
        </div>
        
   </template>
   
   <script setup>
import router from "../../router/index";

//    if(!localStorage.getItem("auth_users")){
//          router.push('/');
//    }

   const Url="/images/logos2.png";
   const deconnexion = async () => {
            localStorage.clear();
            router.go();
            
           };
   </script>
   