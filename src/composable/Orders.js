import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';
import axiosClient from "../../ApiServices";

export default function useOrders()
{
    const orders = ref([]);
    const nborders = ref('');
    const Messages = ref('');
    const sommes = ref('');

    const OrdersDetail = ref([]);
    const ordersData = ref([]);
    const wishlist = ref([]);
    const paginations = ref([]);
    const Users = ref([]);
    const listeLivreurs= ref([]);

    const getAllorders = async(pagination) => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllorders/'+id+'?page='+pagination);
        orders.value = response.data.datas.data;
        paginations.value = response.data.datas;
        nborders.value = orders.length;
     }

    const getAllordersKanblan = async() => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllordersKanblan/'+id);
        orders.value = response.data.data;
        nborders.value = orders.length;
     }

    const getAllordersStores = async(pagination) => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllordersStores/'+id+'?page='+pagination);
        // let response = await axiosClient.get('/api/getAllordersStores/'+id);
        orders.value = response.data.datas.data;
        nborders.value = orders.length;
     }

    const getOrdersDetail = async(id) => {
        const usersId = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getOrdersDetail/'+id+'/'+usersId);
        OrdersDetail.value = response.data.data;
        ordersData.value = response.data.ordersData;
     }
     const getdetailCommandes = async(id) => {
        const usersId = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getdetailCommandes/'+id+'/'+usersId);
        OrdersDetail.value = response.data.data;
        ordersData.value = response.data.ordersData;
     }

    const getListeLivreurs = async(id) => {
        const usersId = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getListeLivreurs');
        listeLivreurs.value = response.data.data;
     }

    const getAllordersByUsers = async() => {
        const usersId = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllordersByUsers/'+usersId);
        orders.value = response.data.data;
        sommes.value = response.data.sommes[0].total_pays;
        Users.value = response.data.users;
        nborders.value = orders.length;
     }


    const getOrdersDetailByUsers = async(id) => {
        const usersId = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getOrdersDetail/'+id+'/'+usersId);
        OrdersDetail.value = response.data.data;
        ordersData.value = response.data.ordersData;
     }

    const getAllwishlistByUsers= async() => {
        const usersId = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllwishlistByUsers/'+usersId);
        wishlist.value = response.data.data;
     }

     const changesstatOrder = async(id,status) => {
        let response = await axiosClient.get('/api/changesstatOrder/'+id+'/'+status);
         localStorage.setItem('message',response.data.messages);
         Messages.value = response.data.messages;
     }

    return {
        orders,nborders,getAllorders,OrdersDetail,getOrdersDetail,ordersData,changesstatOrder,
        Messages,getOrdersDetailByUsers,getAllordersByUsers,Users,sommes,getAllordersStores,
        wishlist,getAllwishlistByUsers,paginations,getAllordersKanblan,getListeLivreurs,listeLivreurs,getdetailCommandes

         }

}
