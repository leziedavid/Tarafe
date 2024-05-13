import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';
import axiosClient from "../../ApiServices";

export default function useBlogs()
{
    const listeCategories = ref([]);
    const NblisteCategories = ref('');
    const CategoriesDetail = ref([]);

    const ListeBlogs = ref([]);
    const NblisteBLog = ref('');

    const lasteArticles = ref([]);
    const nblasteArticles = ref('');

    const AllArticles = ref([]);
    const nbAllArticles = ref('');

    const ArticlesById = ref([]);
    const Allblogs = ref([]);
    const Allcategories = ref([]);
    const listeBloge = ref([]);
    const CategoriesBlog = ref([]);
    const nbArticlesById = ref('');

    const AllComments = ref([]);

    const Messages = ref('');
    const nomCategories = ref('');
    const paginations = ref([]);
    const gallery = ref([]);

    const getlisteCategories = async() => {
        const usersId = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getlisteCategories');
        listeCategories.value = response.data.data;
        NblisteCategories.value = listeCategories.length;
     }



    const getlisteCategoriesBlog = async(pagination) => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getlisteCategoriesBlog/'+id+'?page='+pagination);
        listeCategories.value = response.data.datas.data;
        paginations.value = response.data.datas;
        NblisteCategories.value = listeCategories.length;
     }

     const deletecategoriesArticles = async(id) => {
        let response = await axiosClient.get('/api/deletecategoriesArticles/'+id);
        Messages.value = response.data.messages;
     }

     const ValiderArticles = async(id,status) => {
        let response = await axiosClient.get('/api/ValiderArticles/'+id+'/'+status);
         Messages.value = response.data.messages;
     }

     const deletePoste = async(id) => {
        let response = await axiosClient.get('/api/deletePoste/'+id);
         Messages.value = response.data.messages;
     }


    const getCategoriesById = async(id) => {
        const usersId = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getOrdersDetail/'+id);
        CategoriesDetail.value = response.data.data;
     }
     

    const getlasteArticles = async() => {
        const usersId = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getlasteArticles');
        lasteArticles.value = response.data.data;
        nblasteArticles.value = lasteArticles.length;
     }

    const getAllArticles = async() => {
        const usersId = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllArticles');
        AllArticles.value = response.data.data;
        listeCategories.value = response.data.categories;
        nbAllArticles.value = AllArticles.length;
     }

    const getArticlesById = async(id) => {
        const usersId = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getArticlesById/'+id);
        ArticlesById.value = response.data.data;
        nbArticlesById.value = ArticlesById.length;
        Allblogs.value = response.data.Allblogs;
        gallery.value = response.data.gallery;
        Allcategories.value = response.data.Allcategories;
     }
    const CategoriesBlogById = async(id) => {
        const usersId = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/CategoriesBlogById/'+id);
        CategoriesBlog.value = response.data.data;
        nomCategories.value = response.data.data[0].name_categories_blog;
     }



    const getAllCommenteById = async(id) => {
        const usersId = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllCommenteById/'+id);
        AllComments.value = response.data.data;
     }

    const checkBycategoriyBlog = async(id) => {
        const usersId = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/checkBycategoriyBlog/'+id);
        AllArticles.value = response.data.data;
     }

    const getAllBlogs = async(pagination) => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllBlogs/'+id+'?page='+pagination);
        listeBloge.value = response.data.datas.data;
        paginations.value = response.data.datas;
        Allcategories.value = response.data.categories;
        // Allcategories.value = response.data.Allcategories;

     }


    return {
         getlisteCategories,getCategoriesById,ListeBlogs,NblisteBLog,CategoriesDetail,NblisteCategories,listeCategories,Messages,
         getlasteArticles,lasteArticles,nblasteArticles,getAllArticles,AllArticles,nbAllArticles,
         getArticlesById,ArticlesById,nbArticlesById,Allblogs,getAllCommenteById,AllComments,CategoriesBlogById,
         CategoriesBlog,nomCategories,Allcategories,deletecategoriesArticles,ValiderArticles,
         checkBycategoriyBlog,getAllBlogs,paginations,listeBloge,getlisteCategoriesBlog,gallery,deletePoste

         }

}
