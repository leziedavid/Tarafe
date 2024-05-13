<template>

    <!-- <div style="background-color:#79787840"  class="box-filter-top">  -->
    <div style="background-color:#ffff"  class="box-filter-top"> 
        <div class="show-sm">
            <a class="btn-open-filter" href="#">Menu </a></div>
            <div class="number-product"> 
                <!-- <p v-if="notifications==0" class="alert alert-danger"> <strong>Bonjour équipe tarafé! </strong>vous avez &nbsp;<a href="#" class="alert-link">{{notifications}} nouvelle commandes</a> </p>
                <p  v-if="notifications>0" class="alert alert-success"> <strong>Bonjour équipe tarafé! </strong>vous avez  &nbsp;<a href="#" class="alert-link">{{notifications}} nouvelle commandes</a> </p> -->

                <h6 v-if="notifications==0" style="color:red" class=""> <strong>Bonjour équipe tarafé! </strong>vous avez &nbsp;<a href="#" class="alert-link">{{notifications}} nouvelle commandes <ion-icon size="large" name="notifications-outline"></ion-icon>  </a> </h6>
                <h6 v-if="notifications>0" style="color:green" class=""> <strong>Bonjour équipe tarafé! </strong>vous avez  &nbsp;<a href="#" class="alert-link">{{notifications}} nouvelle commandes <ion-icon size="large" name="notifications-outline"></ion-icon>  </a> </h6>
            </div>

        <div class="box-sort"> 

            <div class="box-sortby d-flex align-items-center">
                <div class="dropdown dropdown-sort">
                    <button class="btn dropdown-toggle" id="dropdownSort" type="button" data-bs-toggle="dropdown" aria-expanded="false">{{notifications}} Notification</button>
                    <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort" style="margin: 0px;">
                    <li><a class="dropdown-item active" href="#">Une nouvelle commande</a></li>
                    <li><a class="dropdown-item" href="#">Oldest products</a></li>
                    <li><a class="dropdown-item" href="#">Comments products </a></li>
                    </ul>
                </div>
            </div>

        </div>

    </div>

</template>

<script setup>
import {onMounted, ref, watch,defineProps} from "vue";
const usersRoles=localStorage.getItem("auth_roles");
const usersid=localStorage.getItem("auth_users");

defineProps({

    notifications: {
                type: Object,
                required: true
        },
});

</script>