import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';
import axiosClient from "../../ApiServices";

export default function useHomes()
{
    const Categories = ref([]);
    const Categories1 = ref([]);
    const Categories2 = ref([]);
    const Categorie = ref([]);
    const Produits = ref([]);
    const Produit = ref([]);
    const Slider= ref([]);
    const Products= ref([]);
    const productsHomes= ref([]);
    const Userdata= ref([]);

    const dataBoutique= ref([]);
    const dataOrders= ref([]);
    const dataCategories= ref([]);
    const dataSub_categories= ref([]);
    const dataSub_sub_categories= ref([]);
    const dataUsers= ref([]);
    const dataProduits= ref([]);

    const nbdataBoutique= ref('');
    const nbdataOrders= ref('');
    const nbdataCategories= ref('');
    const nbdataSub_categories= ref('');
    const nbdataSub_sub_categories= ref('');
    const nbdataUsers= ref('');
    const nbdataProduits= ref('');


    const DataImages = ref([]);
    const NbDataImages = ref([]);
    const Realisations = ref([]);
    const Publicites = ref([]);
    const reglages = ref([]);
    const politique = ref([]);

    const Colors = ref([]);
    const nbColors = ref([]);

    const tailles = ref([]);
    const nbtailles = ref([]);

    const pointures = ref([]);
    const nbpointures = ref([]);

    const ordersListes = ref([]);
    const orders = ref([]);
    const OrdersHistoriques = ref([]);

    const blogs = ref([]);
    const nbblogs = ref('');

    const meilleuresboutiques = ref([]);
    const boutiquesval = ref([]);
    const nbmeilleuresboutiques = ref('');


    const AllProduitsComments = ref([]);
    const storeInfo = ref([]);
    const storeName = ref('');

    const outp = ref([]);
    const nboutp = ref('');

    const caracteristiques = ref([]);
    const Nbcaracteristiques = ref('');
 
    const ListeStockfaible = ref([]);
    const ListeRupturestock = ref([]);
    const Stockfaible = ref('');
    const Rupturestock = ref('');

    const paginations = ref([]);
    const partenaires = ref([]);

    // les variable de la personnalisation
    const parametreData = ref([]);

    const pagnesData = ref([]);
    const paramsPagnesPrice = ref(0);

    const paramsColors = ref([]);
    const paramsColorsPrice = ref(0);

    const paramsTailles = ref([]);
    const paramsTaillesPrice = ref(0);

    const paramsPointures = ref([]);
    const paramsPointurePrice = ref(0);

    const paramsDimenssions = ref([]);
    const paramsDimenssionsPrice = ref(0);

    const paramsTextes= ref([]);
    const paramsTextesPrice = ref(0);

    const Realisation= ref([]);
    const ImageRealisation= ref([]);
    const logoParams= ref([]);
    const paramsLogoPrice = ref(0);

    //fin des variables
    const getAllproduitscommentsById = async(id) => {
        const usersId = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getAllproduitscommentsById/'+id);
        AllProduitsComments.value = response.data.data;
     }

    const getStoreById = async(id) => {
        const usersId = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getStoreById/'+id);
        storeInfo.value = response.data.data;
        storeName.value = response.data.data[0].nom_stores;
     }

    const getRealisationbyId = async(id) => {
        const usersId = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getRealisationbyId/'+id);
        Realisation.value = response.data.data;
        ImageRealisation.value = response.data.images;
      //   console.log(response.data.images.filles_img_realisations);
     }

    const getRealisationbyLibelle = async(id) => {
        const usersId = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getRealisationbyLibelle/'+id);
        Realisation.value = response.data.data;
        ImageRealisation.value = response.data.images;
      //   console.log(response.data.images.filles_img_realisations);
     }

    const getAllDatapages = async() => {
        const lasession = localStorage.getItem("UserSessionchoose");
        let response = await axiosClient.get('/api/getAllDatapages');
        Categories.value = response.data.categories;
        Slider.value= response.data.Slider;
        productsHomes.value= response.data.productsHomes;
        Products.value= response.data.products;
        blogs.value= response.data.blogs;
        partenaires.value= response.data.partenaires;
        Realisations.value= response.data.realisations;
        Publicites.value= response.data.Publicites;
        reglages.value= response.data.reglages;
        politique.value= response.data.politique;

     }


     const MegaMenu = async() => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/MegaMenu');
         outp.value = response.data;
     }

    const getNouveauteProduitsx = async(pagination) => {
        const lasession = localStorage.getItem("UserSessionchoose");
        let response = await axiosClient.get('/api/getNouveauteProduits');
        Categories.value = response.data.categories;
        Products.value= response.data.products;
     }

     const getNouveauteProduits= async(pagination) => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getNouveauteProduits?page='+pagination);
        Categories.value = response.data.categories;
        Products.value= response.data.products.data;
        paginations.value = response.data.products;
     }
     const getProduitsbycategorie= async(pagination,item) => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getProduitsbycategories/'+item+'?page='+pagination);
        Categories.value = response.data.categories;
        Products.value= response.data.products.data;
        paginations.value = response.data.products;
     }

     const getProduitsBySousCategories= async(parametre,pagination) => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getProduitsBySousCategories/'+parametre+'?page='+pagination);
        Categories.value = response.data.categories;
        Products.value= response.data.products.data;
        paginations.value = response.data.products;
     }


    const getDeatailSop = async(id) => {
        const lasession = localStorage.getItem("UserSessionchoose");
        let response = await axiosClient.get('/api/getDeatailSop/'+id);

        //Ici nous recuperons les donnée du produit en fonction du code du produits
        Produit.value = response.data.data;
        DataImages.value= response.data.imgDta;
        NbDataImages.value= DataImages.value.length;

        caracteristiques.value= response.data.caracteristiques;
        Nbcaracteristiques.value= caracteristiques.value.length;

        Colors.value= response.data.Colors;
        nbColors.value= Colors.value.length;

        tailles.value= response.data.tailles;
        nbtailles.value= tailles.value.length;

        pointures.value= response.data.pointures;
        nbpointures.value= pointures.value.length;

        //fin

        //ici nous recherchons les parametre appliqué sur le produit pour la personnalisation du client
        // parametreData,paramsColors,paramsColorsPrice,paramsTailles,paramsTaillesPrice,paramsPointures,paramsPointurePrice,paramsDimenssions,
        // paramsDimenssionsPrice,paramsTextes,paramsTextesPrice [0].

        pagnesData.value = response.data.parametreImages;
        parametreData.value = response.data.parametreProduits;
        // console.log(parametreData);

        if( parametreData.value.length>0){
            paramsColors.value=parametreData.value.filter((value) => value.options_parametre_produit==1);
            paramsColorsPrice.value=paramsColors.value[0].prix_parametre_produit;

            paramsTailles.value=parametreData.value.filter((value) => value.options_parametre_produit==2);
            paramsTaillesPrice.value=paramsTailles.value[0].prix_parametre_produit;

            paramsPointures.value=parametreData.value.filter((value) => value.options_parametre_produit==3);
            paramsPointurePrice.value=paramsPointures.value[0].prix_parametre_produit;

            paramsDimenssions.value=parametreData.value.filter((value) => value.options_parametre_produit==5);
            paramsDimenssionsPrice.value=paramsDimenssions.value[0].prix_parametre_produit;

            paramsTextes.value=parametreData.value.filter((value) => value.options_parametre_produit==6);
            paramsTextesPrice.value=paramsTextes.value[0].prix_parametre_produit;

            // console.log(paramsTextesPrice.value);

            logoParams.value=parametreData.value.filter((value) => value.options_parametre_produit==7);
            paramsLogoPrice.value=logoParams.value[0].prix_parametre_produit;
        }


     }

     const getCompteInfo = async() => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getCompteInfo/'+id);
        Userdata.value = response.data.data;
     }

     const getDetailUsersById = async() => {
        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getDetailUsersById/'+id);
        Userdata.value = response.data.data;
     }

     const getdashboard = async() => {

        const id = 0;
        // const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getdashboard/'+id);

        dataBoutique.value = response.data.dataBoutique;
        dataOrders.value = response.data.dataOrders;
        // dataOrders.value = response.data.dataOrders;
        dataCategories.value = response.data.dataCategories;
        dataSub_categories.value = response.data.dataSub_categories;
        dataSub_sub_categories.value = response.data.dataSub_sub_categories;
        dataUsers.value = response.data.dataUsers;
        dataProduits.value = response.data.dataProduits;

        ordersListes.value = response.data.ordersListes;
        orders.value = response.data.orders[0].total_pays;
        OrdersHistoriques.value = response.data.OrdersHistoriques;
        boutiquesval.value = response.data.stores_id;

        meilleuresboutiques.value=response.data.meilleuresboutiques.filter((value) => value.stores_id.length==5);

        nbdataBoutique.value=dataBoutique.value.length;
        nbdataOrders.value= dataOrders.value.length;
        nbdataCategories.value=dataCategories.value.length ;
        nbdataSub_categories.value= dataSub_categories.value.length;
        nbdataSub_sub_categories.value= dataSub_sub_categories.value.length;
        nbdataUsers.value= dataUsers.value.length;
        nbdataProduits.value= dataProduits.value.length;

        ListeStockfaible.value= response.data.Stockfaible;
        ListeRupturestock.value= response.data.Rupturestock;

        Stockfaible.value= ListeStockfaible.value.length;
        Rupturestock.value= ListeRupturestock.value.length;

     }

     const getdashboardStore = async() => {

        const id = localStorage.getItem("auth_users");
        let response = await axiosClient.get('/api/getdashboardStore/'+id);

        dataOrders.value = response.data.dataOrders;
        dataProduits.value = response.data.dataProduits;
        nbdataProduits.value= dataProduits.value.length;

        ordersListes.value = response.data.ordersListes;
        OrdersHistoriques.value = response.data.OrdersHistoriques;

        orders.value = response.data.orders[0].total_pays;
        nbdataOrders.value= ordersListes.value.length;


        ListeStockfaible.value= response.data.Stockfaible;
        ListeRupturestock.value= response.data.Rupturestock;

        Stockfaible.value= ListeStockfaible.value.length;
        Rupturestock.value= ListeRupturestock.value.length;

     }


    return {
        partenaires,getAllDatapages,Categories,Categorie,Categories1,Categories2,Produits,Produit,getDeatailSop,
        Slider,Products,productsHomes,getCompteInfo,Userdata,getdashboard,getdashboardStore,dataBoutique,dataOrders,
        dataCategories,dataSub_categories,dataSub_sub_categories, nbdataBoutique,nbdataOrders,
        nbdataCategories,nbdataSub_categories,nbdataSub_sub_categories,nbdataUsers,dataUsers,dataProduits,nbdataProduits,getDetailUsersById,
        NbDataImages,DataImages,Colors,nbColors,tailles,nbtailles,pointures,nbpointures,ordersListes,OrdersHistoriques,meilleuresboutiques,blogs,nbblogs,
        getAllproduitscommentsById,AllProduitsComments,storeInfo,getStoreById,storeName,orders,ListeRupturestock,ListeStockfaible,Stockfaible,Rupturestock,
        getNouveauteProduits,outp,MegaMenu,paginations,getProduitsBySousCategories,getProduitsbycategorie,pagnesData,

        parametreData,paramsColors,paramsColorsPrice,paramsTailles,paramsTaillesPrice,paramsPointures,paramsPointurePrice,paramsDimenssions,
        paramsDimenssionsPrice,paramsTextes,paramsTextesPrice,logoParams,paramsLogoPrice,Realisations,ImageRealisation,getRealisationbyId,Realisation,reglages,Publicites,politique,getRealisationbyLibelle

    }

}
