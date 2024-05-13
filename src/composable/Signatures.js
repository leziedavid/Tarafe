import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';
import axiosClient from "../../ApiServices";

export default function useSignatures()
{
    const Signatures = ref([]);
    const nbSignature = ref('');

    const mails = ref([]);
    const paginations = ref([]);
    const nbmails = ref('');

    const sendMail = ref([]);
    const paginations2 = ref([]);

   
    const getAllnewsletters= async(index) => {

        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllnewsletters/'+id+'?page='+index);
        mails.value = response.data.datas.data;
        paginations.value = response.data.datas;
        nbmails.value=  mails.value.length;

        sendMail.value = response.data.datas2.data;
        paginations2.value = response.data.datas2;
     }
   

    const getAllsignature= async() => {

        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllsignature');

        Signatures.value= response.data.data;
        nbSignature.value=  Signatures.value.length;
     }



    const getsignatureById= async(id) => {
        let response = await axiosClient.get('/api/getsignatureById/'+id);
        Signatures.value= response.data.data;
   
     }
    const deleteSignature= async(id) => {
        let response = await axiosClient.get('/api/deleteSignature/'+id);
      //   Signatures.value= response.data.data;
   
     }
    return {
      getAllsignature,Signatures,nbSignature,getsignatureById,
      deleteSignature,getAllnewsletters,mails,paginations,sendMail,paginations2

    }

}
