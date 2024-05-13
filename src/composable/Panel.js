
import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';
import axiosClient from "../../ApiServices";

export default function usePanel() {

    const ListeUsers = ref([]);
    const ListeClients = ref([]);
    const paginations = ref([]);
    const UsersListes = ref([]);
    const ListeUsersAssignes = ref([]);
    const messages = ref('');
    const errors = ref('');


    const getListeClientsByUserts = async (pagination) => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getListClients/'+id+'?page='+pagination);
        ListeClients.value = response.data.datas.data;
        paginations.value = response.data.datas;

        // console.log(ListeClients.value);
    }

    const getListeUsers= async (item) => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getListeUsersConseillerClients/'+id+'/'+item);
        UsersListes.value = response.data.data;
    }

    const getListeUsersAssignes= async (item) => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getListeUsersAssignes/'+id+'/'+item);
        ListeUsersAssignes.value = response.data.data;
    }

    const deleteClients= async (item) => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/deleteClients/'+id+'/'+item);
         messages.value = response.data.data;
    }
    const deleteUsersAssignes= async (item) => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/deleteUsersAssignes/'+id+'/'+item);
         messages.value = response.data.data;
    }


    const CheckUsersselect= async (users,id_cleints) => {

        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/CheckUsersselect/'+id+'/'+users+'/'+id_cleints);
        messages.value = response.data.messages;
        errors.value = response.data.errors;

    }

    return {

        getListeClientsByUserts,ListeClients,paginations,UsersListes,getListeUsers,
        CheckUsersselect,messages,errors,ListeUsersAssignes,getListeUsersAssignes,deleteClients,deleteUsersAssignes
      }
}
