<template>

    <div class="menu-item" @click="isOpen = !isOpen">
      <a class="btn btn-add btn-sm dropdown-toggle" type="button" href="#"> {{ title }} </a>
      <transition name="fade" appear>
        <div class="sub-menu" v-if="isOpen">
          <div v-for="(item, i) in items" :key="i" class="">
            <a @click="changes(id,item.id)">{{ item.name }}</a>
          </div>
        </div>
      </transition>
    </div>
  </template>

<script>

import useOrders from "../composable/Orders";
import { ref } from 'vue';
import { reactive, computed, onMounted } from 'vue';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

  export default {
    name: 'dropdown',
    props: ['title', 'items','id'],

    setup() {

            const {changesstatOrder,Messages} = useOrders();

            return {
                changesstatOrder,Messages
            };
        },

    data () {
      return {
        isOpen: false,
        message: '',
      }
    },

    methods:
        {

            messagesInfo(){

                createToast("Statut mie à jour avec success !",
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
                },

            changes(id,status){
                this.changesstatOrder(id,status);
                this.messagesInfo();
                this.$router.go();
            },


        }


  }

</script>

