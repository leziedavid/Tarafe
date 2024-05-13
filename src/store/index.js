import { defineStore } from 'pinia'
import Swal from 'sweetalert2'
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
export const useShoppingStore = defineStore('shopping', {

    state: () => {
        return {

            cartItems : [],
            totalCost:'',
        }
    },

    getters: {

        countCartItems() {
            return this.cart.reduce(
                (total, product) => total + product.quantity, 0
                 );
        },

        countCartItems(){
            return this.cartItems.length;
        },

        getCartItems(){
            return this.cartItems;
        }

    },

    actions: {


        addToCart(item) {
            const foundProductInCartIndex = this.cartItems.findIndex(
                (cartItem) => item.id_products === cartItem.id_products
            );

            if (foundProductInCartIndex > -1) {
                this.cartItems[foundProductInCartIndex].quantity += 1;
                createToast('Votre article a été enregistré',
                    {
                    position: 'top-right',
                    type: 'success',
                    transition: 'bounce',
                    hideProgressBar: 'false',
                    showIcon: 'false',
                    showCloseButton: 'false',
                    swipeClose: 'false',
                    timeout: 2600,
                    })

            } else {

                if(localStorage.getItem("price")>0){
                    item.price=localStorage.getItem("price");
                }

                item.quantity = 1;
                item.colors=localStorage.getItem("couleur");
                item.taille =localStorage.getItem("tailles");
                item.pointures =localStorage.getItem("pointures");

                item.logos=localStorage.getItem("Logosurl");
                item.textes =localStorage.getItem("textCart");
                item.pagnes =localStorage.getItem("pagneCart");
                item.valueradios =localStorage.getItem("valueradios");

                item.dimensionParams =localStorage.getItem("dimensionParams");
                item.taillesParams =localStorage.getItem("taillesParams");
                item.pointuresParams =localStorage.getItem("pointuresParams");
                item.police =localStorage.getItem("police");

                this.cartItems.push(item);
                createToast('Votre article a été enregistré',
                    {
                    position: 'top-right',
                    type: 'success',
                    transition: 'bounce',
                    hideProgressBar: 'false',
                    showIcon: 'false',
                    showCloseButton: 'false',
                    swipeClose: 'false',
                    timeout: 2600,
                    })
            }
            //console.log(this.cartItems);
        },


        incrementQ(item) {

            const foundProductInCartIndex = this.cartItems.findIndex(
                (cartItem) => item.id_products === cartItem.id_products
            );
            if (foundProductInCartIndex > -1) {
                this.cartItems[foundProductInCartIndex].quantity += 1;

                createToast('Votre article a été mis à jour!',
                    {
                    position: 'top-right',
                    type: 'success',
                    transition: 'bounce',
                    hideProgressBar: 'false',
                    showIcon: 'false',
                    showCloseButton: 'false',
                    swipeClose: 'false',
                    timeout: 2600,
                })

            }
        },

        decrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id_products === item.id_products);
            if(index !== -1) {
                this.cartItems[index].quantity -= 1;

                if(this.cartItems[index].quantity === 0){
                    this.cartItems = this.cartItems.filter(product => product.id_products !== item.id_products);
                }

                createToast('Votre article a été mis à jour!',
                {
                position: 'top-right',
                type: 'success',
                transition: 'bounce',
                hideProgressBar: 'false',
                showIcon: 'false',
                showCloseButton: 'false',
                swipeClose: 'false',
                timeout: 2600,
            })

            }
        },


        removeFromCart(item) {
            //this.cartItems = this.cartItems.filter(product => product.id_products !== item.id_products);
            this.cartItems.splice(this.cartItems.indexOf(item), 1);

            createToast('Votre article a été supprimé!',
            {
            position: 'top-right',
            type: 'success',
            transition: 'bounce',
            hideProgressBar: 'false',
            showIcon: 'false',
            showCloseButton: 'false',
            swipeClose: 'false',
            timeout: 2600,
         })

        }
    },

    persist: true,
})
