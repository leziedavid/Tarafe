import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';
import axiosClient from "../../ApiServices";

export default function useReglages()
{    const reglages = ref([]);
     const politique = ref([]);
     const Pubs = ref([]);


   
    const getreglages= async() => {

        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getreglages');
        reglages.value= response.data.data;
     }
    const getAllpolitique= async() => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllpolitique');
        politique.value= response.data.data;
     }

    const getAllpub= async() => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllpubs');
        Pubs.value= response.data.data;
     }


    return {
      getreglages,reglages,politique,getAllpolitique,getAllpub,Pubs

    }

}
