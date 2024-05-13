import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';
import axiosClient from "../../ApiServices";

export default function useProduits()
{
    const Products = ref([]);
    const nbProducts = ref('');
    const Categories = ref([]);
    const nbCategories = ref('');
    const Souscategories = ref([]);
    const nbSouscategories = ref('');
    const responseMsg = ref('');

    const boutiques = ref([]);
    const nboutiques = ref('');

    const colors = ref([]);
    const tailles = ref([]);
    const pointures = ref([]);

    const colorsValue = ref([]);
    const taillesValue = ref([]);
    const la_tailles = ref([]);
    const pointuresValue = ref([]);

    const mails = ref([]);
    const nmails = ref('');

    const Users = ref([]);
    const paginations = ref([]);
    const Mailpaginations = ref([]);
    const NbUsers = ref('');
    const notifications = ref('');


    const faiblesStock = ref([]);
    const rupturesStock = ref([]);

    const soussouscategories = ref([]);
    const nbsoussouscategories = ref('');

    const DataImages = ref([]);
    const NbDataImages = ref([]);
    const Produit = ref('');

    const OptionRealisation = ref([]);

    const couleurs = ref([]);
    const Colors = ref([]);
    const nbColors = ref([]);
    const nbtailles = ref('');
    const nbpointures = ref('');


    const pagnesData = ref([]);
    const parametreData = ref([]);

    const partenaires = ref([]);
    const Realisations = ref([]);

    const Subscribers = ref([]);
    const mailfile = ref([]);
    const AllOrderDates = ref([]);
    const AllImages = ref([]);
    const gallerieImages = ref([]);
    const optionsRealisation = ref([]);

     
    const Notification= async() => {
        const id = localStorage.getItem("auth_users");
        const  usersRoles=localStorage.getItem("auth_roles");
        const  id_stores=localStorage.getItem("auth_id_stores");
        let response = await axiosClient.get('/api/getNotification/'+id+'/'+usersRoles+'/'+id_stores);
        notifications.value= response.data.data.length;
     }


    const getAllboutiques= async(pagination) => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllboutiques/'+id+'?page='+pagination);
        boutiques.value = response.data.datas.data;
        paginations.value = response.data.datas;
        nboutiques.value=  boutiques.value.length;
     }

    const getAllPropriete= async() => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllPropriete');
        pointures.value= response.data.pointures;
        tailles.value= response.data.tailles;
        colors.value= response.data.colors;
        boutiques.value= response.data.stores;
        Categories.value= response.data.categories;
      //   console.log(tailles.value);
     }

    const getAllmails= async() => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllmails/'+id);
        mails.value= response.data.data;
        nmails.value=  boutiques.value.length;
     }

    const getAllbUsers= async(pagination) => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllbUsers/'+id+'?page='+pagination);
        Users.value = response.data.datas.data;
        paginations.value = response.data.datas;
     }

    const getAllboutiquesByAdd= async() => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllboutiquesByAdd/'+id);
        boutiques.value= response.data.data;
     }
    const getAllproduis = async(pagination) => {

        const id = localStorage.getItem("auth_users");
        // let response = await axiosClient.get('/api/getAllproduis/'+id);
        let response = await axiosClient.get('/api/getAllproduis/'+id+'?page='+pagination);
        Products.value = response.data.datas.data;
        paginations.value = response.data.datas;
        nbProducts.value=  Products.value.length;
     }

    const getAllproduisByStores = async(pagination) => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllproduisByStores/'+id+'?page='+pagination);
        // let response = await axiosClient.get('/api/getAllproduisByStores/'+id);
        Products.value= response.data.datas.data;
        nbProducts.value=  Products.value.length;
     }

    const getAllproduisByState = async() => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllproduisByState/'+id);
        faiblesStock.value= response.data.faibles;
        rupturesStock.value= response.data.rupture;
        // nbProducts.value=  Products.value.length;
     }

    const getAllcategories = async() => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllcategories/'+id);
        Categories.value= response.data.data;
        //boutiques.value= response.data.boutiques;
        nbCategories.value=  Products.value.length;
     }
    const getAllcategoriesBySearche = async() => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllcategoriesBySearche/'+id);
        Categories.value= response.data.data;
        nbCategories.value=  Products.value.length;
     }

    const getAllcategoriesByProduits = async(pagination) => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllcategoriesByProduits/'+id+'?page='+pagination);
        Categories.value = response.data.datas.data;
        paginations.value = response.data.datas;
        nbCategories.value=  Products.value.length;
     }

     const getAllsouscategories = async() => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllsouscategories/'+id);
        Souscategories.value= response.data.data;
        Categories.value= response.data.categories;
        nbSouscategories.value=  Products.value.length;
     }

     const getAllsouscategorieIndex = async(pagination) => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllsouscategorieIndex/'+id+'?page='+pagination);
        Souscategories.value = response.data.datas.data;
        Categories.value= response.data.categories;
        paginations.value = response.data.datas;
        nbSouscategories.value=  Souscategories.value.length;
     }

     const deletecategories = async(id) => {
        let response = await axiosClient.get('/api/deletecategories/'+id);
        responseMsg.value = response.data.messages;
     }

     const deletecategoriesproduits = async(id) => {
        let response = await axiosClient.get('/api/deletecategoriesproduits/'+id);
        responseMsg.value = response.data.messages;
     }
     const deletecategoriesSouscategorie = async(id) => {
        let response = await axiosClient.get('/api/deletecategoriesSouscategorie/'+id);
        responseMsg.value = response.data.messages;
     }
     const deletecategoriesSoussouscategorie = async(id) => {
        let response = await axiosClient.get('/api/deletecategoriesSoussouscategorie/'+id);
        responseMsg.value = response.data.messages;
     }

     const deleteStores = async(id) => {
        let response = await axiosClient.get('/api/deleteStores/'+id);
        responseMsg.value = response.data.messages;
     }
     const changesstatStores = async(id,status) => {
        let response = await axiosClient.get('/api/changesstatStores/'+id+'/'+status);
        responseMsg.value = response.data.messages;
     }
     const status_products = async(id,status) => {
        let response = await axiosClient.get('/api/status_products/'+id+'/'+status);
        responseMsg.value = response.data.messages;
     }
     const deleteproducts = async(id) => {
        let response = await axiosClient.get('/api/deleteproducts/'+id);
        responseMsg.value = response.data.messages;
     }

     const changesstatUsers = async(id,status) => {
        let response = await axiosClient.get('/api/changesstatUsers/'+id+'/'+status);
        responseMsg.value = response.data.messages;
     }
     const deleteUsers = async(id) => {
        let response = await axiosClient.get('/api/deleteUsers/'+id);
        responseMsg.value = response.data.messages;
     }

     const getAllsoussouscategories = async(pagination) => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllsoussouscategories/'+id+'?page='+pagination);
        soussouscategories.value = response.data.datas.data;
        paginations.value = response.data.datas;
        Souscategories.value= response.data.souscategories;

     }
     const deletesouscategories = async(id) => {
        let response = await axiosClient.get('/api/deletesouscategories/'+id);
        responseMsg.value = response.data.messages;
     }

     const deletesoussouscategories = async(id) => {
        let response = await axiosClient.get('/api/deletesoussouscategories/'+id);
        responseMsg.value = response.data.messages;
     }

     const getProduitById = async(id) => {
        const lasession = localStorage.getItem("UserSessionchoose");
        let response = await axiosClient.get('/api/getDeatailSop/'+id);
        Produit.value = response.data.data;

        taillesValue.value = response.data.tailles;
        pointuresValue.value = response.data.pointures;

        pagnesData.value = response.data.parametreImages;
        parametreData.value = response.data.parametreProduits;

        DataImages.value= response.data.imgDta;
        NbDataImages.value= DataImages.value.length;

        couleurs.value= response.data.Colors;
        nbColors.value= colors.value.length;

        //la_tailles.value= response.data.tailles;
      //   tailles.value= response.data.tailles;
        //nbtailles.value= tailles.value.length;

       // pointures.value= response.data.pointures;
        //nbpointures.value= pointures.value.length;

     }

    //  Parametre

    const getAllCouleurs = async(pagination) => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllCouleurs/'+id+'?page='+pagination);
        colors.value = response.data.datas.data;
        paginations.value = response.data.datas;
     }

     const deleteCouleurs = async(id) => {
        let response = await axiosClient.get('/api/deleteCouleurs/'+id);
        responseMsg.value = response.data.messages;
     }

    const getAlltailles = async(pagination) => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAlltailles/'+id+'?page='+pagination);
        tailles.value = response.data.datas.data;
        paginations.value = response.data.datas;
     }
     const deleteTailles = async(id) => {
        let response = await axiosClient.get('/api/deleteTailles/'+id);
        responseMsg.value = response.data.messages;
     }

    const getPartenaires = async(pagination) => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getPartenaires/'+id+'?page='+pagination);
        partenaires.value = response.data.datas.data;
        paginations.value = response.data.datas;
     }


     const deletePartenaires = async(id) => {
        let response = await axiosClient.get('/api/deletePartenaires/'+id);
        responseMsg.value = response.data.messages;
     }
     
    const getAllSubscribers = async(pagination) => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllSubscribers?page='+pagination);
        
        Subscribers.value = response.data.datas.data;
        mails.value = response.data.datas2.data;
        mailfile.value = response.data.mailfile;

        paginations.value = response.data.datas;
        Mailpaginations.value = response.data.datas2;

     }



     const deleteSubscribers = async(id) => {
        let response = await axiosClient.get('/api/deleteSubscribers/'+id);
        responseMsg.value = response.data.messages;
     }
     
     
    const getRealisations = async(pagination) => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllRealisations?page='+pagination);
        Realisations.value = response.data.datas.data;
        paginations.value = response.data.datas;
     }
    const geAllgallerieImages = async(pagination) => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllgallerieImages?page='+pagination);
        gallerieImages.value = response.data.datas.data;
        paginations.value = response.data.datas;
     }


    const getAllimgRealisations = async(id) => {
        let response = await axiosClient.get('/api/getAllimgRealisations/'+id);
        AllImages.value = response.data.data;
     }

    const getAllRealisationsBystatus = async(pagination) => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllRealisationsBystatus?page='+pagination);
        Realisations.value = response.data.datas.data;
        optionsRealisation.value = response.data.option;
        paginations.value = response.data.datas;
     }

     const deleteRealisations = async(id) => {
        let response = await axiosClient.get('/api/deleteRealisations/'+id);
        responseMsg.value = response.data.messages;
     }
     const deleteImagesGalleries = async(id) => {
        let response = await axiosClient.get('/api/deleteImagesGalleries/'+id);
        responseMsg.value = response.data.messages;
     }

    const getAllpointures = async(pagination) => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllpointures/'+id+'?page='+pagination);
        pointures.value = response.data.datas.data;
        paginations.value = response.data.datas;
     }

     const deletePointures = async(id) => {
        let response = await axiosClient.get('/api/deletePointures/'+id);
        responseMsg.value = response.data.messages;
     }

     const getAllOrdersDate = async() => {
        let response = await axiosClient.get('/api/getAllOrdersDate');
        AllOrderDates.value = response.data.data;
     }

     const getAllOptionRealisation = async(pagination) => {
      const id = localStorage.getItem("auth_users");
      let response = await axiosClient.get('/api/getAllOptionRealisation/'+id+'?page='+pagination);
      OptionRealisation.value = response.data.datas.data;
      paginations.value = response.data.datas;
   }

   const deleteOptionRealisation = async(id) => {
      let response = await axiosClient.get('/api/deleteOptionRealisation/'+id);
      responseMsg.value = response.data.messages;
   }
   const changeStateOptionRealisation = async(id) => {
      let response = await axiosClient.get('/api/changeStateOptionRealisation/'+id);
      responseMsg.value = response.data.messages;
   }

   const getOptionRealisationByState = async() => {
      let response = await axiosClient.get('/api/getOptionRealisationByState');
      OptionRealisation.value=response.data.data;
   }


    return {
        getAllproduisByStores,paginations,
        Products,getAllproduis,nbProducts,getAllcategoriesByProduits,getAllcategories,getAllcategories,Categories,nbCategories,
         Souscategories,nbSouscategories,getAllsouscategorieIndex,getAllsouscategories,responseMsg,deletecategories,
         boutiques,getAllboutiques,nboutiques,changesstatStores,deleteStores,soussouscategories,nbsoussouscategories,
         getAllsoussouscategories,deletesouscategories,deletesoussouscategories,getAllboutiquesByAdd,getAllbUsers,
         Users,NbUsers,changesstatUsers,deleteUsers,status_products,deleteproducts,notifications,Notification,
         getAllmails,mails,nmails,tailles,pointures,getAllPropriete,colors,getAllproduisByState, faiblesStock,rupturesStock,
         getProduitById,Produit,DataImages,NbDataImages,Colors,nbColors,nbtailles,nbpointures,getAllcategoriesBySearche,
         deletecategoriesproduits,deletecategoriesSouscategorie,deletecategoriesSoussouscategorie,colorsValue,taillesValue,pointuresValue,

         getAllCouleurs,deleteCouleurs, deleteTailles,getAlltailles,getAllpointures,deletePointures,pagnesData,parametreData
         ,partenaires,getPartenaires,deletePartenaires,

         getRealisations,deleteRealisations,Realisations,getAllRealisationsBystatus,optionsRealisation,
         getAllSubscribers,deleteSubscribers,Subscribers,mailfile,Mailpaginations,couleurs,la_tailles, getAllOrdersDate,AllOrderDates,
         getAllimgRealisations,AllImages,gallerieImages,geAllgallerieImages,deleteImagesGalleries
         ,getAllOptionRealisation,deleteOptionRealisation,changeStateOptionRealisation,OptionRealisation,getOptionRealisationByState
    }

}
