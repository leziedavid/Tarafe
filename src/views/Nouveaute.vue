<template>
    <div>
        <Header :outp="outp" />
         <br>  <br>
            <main class="main">

                <section class="section block-banner-shop"> 
                    <div class="container"> 
                         <h1 class="text-56-medium">Boutique</h1>
                        <div class="breadcrumbs"> 
                            <ul>  <li> <a href="#">Nouveauté </a></li> </ul>
                        </div>
                    </div>
                </section>

                <section class="section block-content-shop">

                    <div class="container"> 
                        <div class="text-center wow bounceIn"> 
                            <h1>BOUTIQUE TARAFE</h1>
                        </div>
                    </div>

                    <div class="container">
                        <div class="row">

                        <div class="col-lg-3">
                            <div class="wrapper-overlay"></div>
                            <div class="box-filters-sidebar"> 
                            <h5 class="title-filter">Filtre</h5>

                            <div class="block-filter"> 
                                <h5 class="item-collapse">Catégories</h5>
                                <div class="box-collapse scrollFilter">
                                    <ul class="list-filter-checkbox"> 
                                        <ul class="list-colors"> 
                                            <li  v-for="item in Categories" :key="item.id_categories_produits">
                                                <div class="box-colors">
                                                    <label @click="SelectCategories(item.id_categories_produits)" >{{item.libelle_categories_produits }} </label>
                                                </div>
                                            </li>
                                    </ul>
                                    </ul>
                                </div>
                            </div>

                            <div v-if="souscategories.length>0" class="block-filter"> 
                                <h5 class="">Sous categories</h5> <br>
                                <div class="">
                                    <ul class=""> 
                                        <ul class="list-colors"> 
                                            <li  v-for="item in souscategories" :key="item.id_sous_categories_produits" >
                                                <div class="box-colors">
                                                    <label  @click="SelectSousCategories(item.id_sous_categories_produits)">{{item.libelle_sous_categories_produits }} </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </ul>
                                </div>
                            </div>

                            <div v-if="SousSouscategories.length>0" class="block-filter"> 
                                <h5 class="">Sous sous categories</h5> <br>
                                <div class="">
                                    <ul class=""> 
                                        <ul class="list-colors"> 
                                            <li  v-for="item in SousSouscategories" :key="item.id_sous_sous_categories_produits" >
                                                <div class="box-colors">
                                                    <label  @click="SelectSousSousCategories(item.id_sous_sous_categories_produits)">{{item.libelle_sous_sous_categories }} </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </ul>
                                </div>
                            </div>

                            <div class="block-filter"> 
                                <h6 class="item-collapse">Couleur </h6>
                                <div class="box-collapse scrollFilter">
                                <div class="block-size">
                                    <div class="list-sizes">
                                        <span class="item-size">Orange </span>
                                        <span class="item-size active">Jaune</span>
                                        <span class="item-size">Rouge </span>
                                        <span class="item-size">Gris </span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="block-filter"> 
                                <h6 class="item-collapse">Taille </h6>
                                <div class="box-collapse scrollFilter">
                                <div class="block-size">
                                    <div class="list-sizes"><span class="item-size">XS </span><span class="item-size active">S </span><span class="item-size">M </span><span class="item-size">XL </span></div>
                                </div>
                                </div>
                            </div>

                            <div class="block-filter"> 
                                <h6 class="item-collapse">Price </h6>
                                <div class="box-collapse scrollFilter">
                                <ul class="list-filter-checkbox"> 
                                    <li> 
                                    <label class="cb-container">
                                        <input type="checkbox"><span class="text-small">$10.00 - $49.00</span><span class="checkmark"></span>
                                    </label>
                                    </li>
                                    <li> 
                                    <label class="cb-container">
                                        <input type="checkbox"><span class="text-small">$50.00 - $99.00</span><span class="checkmark"></span>
                                    </label>
                                    </li>
                                    <li> 
                                    <label class="cb-container">
                                        <input type="checkbox"><span class="text-small">$100.00 - $199.00</span><span class="checkmark"></span>
                                    </label>
                                    </li>
                                    <li> 
                                    <label class="cb-container">
                                        <input type="checkbox"><span class="text-small">$200.00 +</span><span class="checkmark"></span>
                                    </label>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-lg-9">
                            <div class="box-filter-top"> 

                            <div class="show-sm">
                                <a class="btn-open-filter" href="#">Filter </a>
                            </div>
                            <div class="number-product"> 
                                <p class="body-p2 neutral-medium-dark">NOUVELLE COLLECTION</p>
                            </div>
                            <div class="box-sort"> 
                                <div class="box-sortby d-flex align-items-center">
                                    
                                <div class="dropdown dropdown-sort">
                                    <button class="btn dropdown-toggle" id="dropdownSort" type="button" data-bs-toggle="dropdown" aria-expanded="false">Tri par défaut</button>
                                    <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort" style="margin: 0px;">
                                    <li><a class="dropdown-item active" href="#">Default Sorting</a></li>
                                    <li><a class="dropdown-item" href="#">Oldest products</a></li>
                                    <li><a class="dropdown-item" href="#">Comments products </a></li>
                                    </ul>
                                </div>

                                </div>

                                <div class="box-view-style"> 
                                    <a class="view-type view-2" href="#" data-col="2"></a>
                                    <a class="view-type view-3 active" href="#" data-col="3"></a>
                                    <a class="view-type view-4" href="#" data-col="4"></a>
                                </div>

                            </div>

                            </div>

                            <div class="box-your-filter">

                            <div class="block-ele-filter">
                                <a v-for="item in OptionOccasion" :key="item.id"  class="btn btn-tag-filter" @click="SelectOccasion(item.value)" >{{item.label}}<span class="close-tag"></span></a>
                                </div>
                            </div>

                            <loader v-if="productsData.length==0" > </loader>
                            <div v-if="productsData.length>0 && loadings==0"  class="box-list-products">
                                <div  v-for="item in productsData" :key="item.id_products"  class="product-item">
                                    
                                        <div class="cardProductStyle3 cardProductType03 wow fadeInUp">
                                            <div class="cardImage">
                                            
                                                <img class="imageMain" :src="url+item.imageUrl" alt="guza">
                                                <img class="imageHover" :src="url+item.imageUrl" alt="guza">
                                    
                                                <div class="button-select">

                                                        <a @click="data.addToCart(item)" class="account-icon cart">

                                                            <svg width="28" height="28" viewbox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                                            <g clip-path="url(#clip0_116_450)">
                                                                <path d="M9 10V8C9 6.67392 9.52678 5.40215 10.4645 4.46447C11.4021 3.52678 12.6739 3 14 3C15.3261 3 16.5979 3.52678 17.5355 4.46447C18.4732 5.40215 19 6.67392 19 8V10H22C22.2652 10 22.5196 10.1054 22.7071 10.2929C22.8946 10.4804 23 10.7348 23 11V23C23 23.2652 22.8946 23.5196 22.7071 23.7071C22.5196 23.8946 22.2652 24 22 24H6C5.73478 24 5.48043 23.8946 5.29289 23.7071C5.10536 23.5196 5 23.2652 5 23V11C5 10.7348 5.10536 10.4804 5.29289 10.2929C5.48043 10.1054 5.73478 10 6 10H9ZM9 12H7V22H21V12H19V14H17V12H11V14H9V12ZM11 10H17V8C17 7.20435 16.6839 6.44129 16.1213 5.87868C15.5587 5.31607 14.7956 5 14 5C13.2044 5 12.4413 5.31607 11.8787 5.87868C11.3161 6.44129 11 7.20435 11 8V10Z"></path>
                                                            </g>
                                                            <defs>
                                                                <clippath id="clip0_116_450">
                                                                <rect width="24" height="24" transform="translate(2 2)"></rect>
                                                                </clippath>
                                                            </defs>
                                                            </svg>
                                                            
                                                        </a>
                                                    </div>

                                                    <div class="box-quick-button">

                                                        <a class="btn"  :href="'/products/'+item.code_products">
                                                            <svg class="d-inline-flex align-items-center justify-content-center" width="28" height="28" viewbox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                                                <g clip-path="url(#clip0_116_452)">
                                                                <path d="M14.001 6.52898C16.35 4.41998 19.98 4.48998 22.243 6.75698C24.505 9.02498 24.583 12.637 22.479 14.993L13.999 23.485L5.52101 14.993C3.41701 12.637 3.49601 9.01898 5.75701 6.75698C8.02201 4.49298 11.645 4.41698 14.001 6.52898ZM20.827 8.16998C19.327 6.66798 16.907 6.60698 15.337 8.01698L14.002 9.21498L12.666 8.01798C11.091 6.60598 8.67601 6.66798 7.17201 8.17198C5.68201 9.66198 5.60701 12.047 6.98001 13.623L14 20.654L21.02 13.624C22.394 12.047 22.319 9.66498 20.827 8.16998Z" fill=""></path>
                                                                </g>
                                                                <defs>
                                                                <clippath id="clip0_116_452">
                                                                    <rect width="24" height="24" fill="white" transform="translate(2 2)"></rect>
                                                                </clippath>
                                                                </defs>
                                                            </svg>
                                                        </a>

                                                        <a class="btn" :href="'/products/'+item.code_products">

                                                        <svg class="d-inline-flex align-items-center justify-content-center" width="24" height="24" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <g clip-path="url(#clip0_200_1102)">
                                                                <path d="M15.375 12.0416L19.5 16.1666L15.375 20.2916L14.1967 19.1133L16.31 16.9991L5.33333 17V15.3333H16.31L14.1967 13.22L15.375 12.0416ZM8.625 3.70831L9.80333 4.88665L7.69 6.99998H18.6667V8.66665H7.69L9.80333 10.78L8.625 11.9583L4.5 7.83331L8.625 3.70831Z" fill=""></path>
                                                            </g>
                                                            <defs>
                                                                <clippath id="clip0_200_1102">
                                                                <rect width="20" height="20" fill="white" transform="translate(2 2)"></rect>
                                                                </clippath>
                                                            </defs>
                                                            </svg>
                                                        </a>

                                                        <a class="btn preview-product"  :href="'/products/'+item.code_products">
                                                            <svg class="d-inline-flex align-items-center justify-content-center" width="28" height="28" viewbox="0 0 28 28" fill="" xmlns="http://www.w3.org/2000/svg">
                                                            <g clip-path="url(#clip0_91_73)">
                                                                <path d="M20.031 18.617L24.314 22.899L22.899 24.314L18.617 20.031C17.0237 21.3082 15.042 22.0029 13 22C8.032 22 4 17.968 4 13C4 8.032 8.032 4 13 4C17.968 4 22 8.032 22 13C22.0029 15.042 21.3082 17.0237 20.031 18.617ZM18.025 17.875C19.2941 16.5699 20.0029 14.8204 20 13C20 9.132 16.867 6 13 6C9.132 6 6 9.132 6 13C6 16.867 9.132 20 13 20C14.8204 20.0029 16.5699 19.2941 17.875 18.025L18.025 17.875Z" fill=""></path>
                                                            </g>
                                                            <defs>
                                                                <clippath id="clip0_91_73">
                                                                <rect width="24" height="24" fill="white" transform="translate(2 2)"></rect>
                                                                </clippath>
                                                            </defs>
                                                            </svg>
                                                        </a>
                                                    </div>

                                                </div>

                                            <div class="cardInfo">
                                                <h6 class="text-17-medium mb-10">{{item.name_product}}</h6>
                                                <p class="body-p2 cardDesc">{{item.price}} FCFA</p>
                                            </div>

                                        </div>
                                </div>    
                            </div>

                            <div v-else class="row">
                                <h1 v-if="loadings==0" > <div class="col-md-12 text-center"> Aucun résultat trouvé</div> </h1>
                            </div>

                            <div class="text-center mt-20"> <a class="btn btn-border" href="/Nouveaute">Voir plus</a></div>
                


                            <div v-if="productsData.length>0 && loadings==0">
                                <Pagination2 class=""  v-if="paginations.last_page > 1" :pagination="paginations" :offset="3" @paginate="query === '' ? getData() :searchData(paginations.current_page)"> </Pagination2>
                            </div>

                        </div>
                        
                        </div>
                    </div>

                </section>

                <section class="section block-may-also-like">
                <div class="container">
                    <div class="text-center">
                         <h3 class="mb-60">Produits récemment consultés</h3>
                    </div>
                    <!-- <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="cardProduct wow fadeInUp">
                            <div class="cardImage"><a href="#"><img class="imageMain" src="http://wp.alithemes.com/html/guza/demos/assets/imgs/page/homepage1/product8.png" alt="guza"><img class="imageHover" src="http://wp.alithemes.com/html/guza/demos/assets/imgs/page/homepage1/product1-hover.png" alt="guza"></a>
                                <div class="button-select"><a href="#">Select Options</a></div>
                                <div class="box-quick-button"><a class="btn" href="#">
                                    <svg class="d-inline-flex align-items-center justify-content-center" width="28" height="28" viewbox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_116_452)">
                                        <path d="M14.001 6.52898C16.35 4.41998 19.98 4.48998 22.243 6.75698C24.505 9.02498 24.583 12.637 22.479 14.993L13.999 23.485L5.52101 14.993C3.41701 12.637 3.49601 9.01898 5.75701 6.75698C8.02201 4.49298 11.645 4.41698 14.001 6.52898ZM20.827 8.16998C19.327 6.66798 16.907 6.60698 15.337 8.01698L14.002 9.21498L12.666 8.01798C11.091 6.60598 8.67601 6.66798 7.17201 8.17198C5.68201 9.66198 5.60701 12.047 6.98001 13.623L14 20.654L21.02 13.624C22.394 12.047 22.319 9.66498 20.827 8.16998Z" fill=""></path>
                                    </g>
                                    <defs>
                                        <clippath id="clip0_116_452">
                                        <rect width="24" height="24" fill="white" transform="translate(2 2)"></rect>
                                        </clippath>
                                    </defs>
                                    </svg></a><a class="btn" href="#">
                                    <svg class="d-inline-flex align-items-center justify-content-center" width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_200_1102)">
                                        <path d="M15.375 12.0416L19.5 16.1666L15.375 20.2916L14.1967 19.1133L16.31 16.9991L5.33333 17V15.3333H16.31L14.1967 13.22L15.375 12.0416ZM8.625 3.70831L9.80333 4.88665L7.69 6.99998H18.6667V8.66665H7.69L9.80333 10.78L8.625 11.9583L4.5 7.83331L8.625 3.70831Z" fill=""></path>
                                    </g>
                                    <defs>
                                        <clippath id="clip0_200_1102">
                                        <rect width="20" height="20" fill="white" transform="translate(2 2)"></rect>
                                        </clippath>
                                    </defs>
                                    </svg></a><a class="btn preview-product" href="#">
                                    <svg class="d-inline-flex align-items-center justify-content-center" width="28" height="28" viewbox="0 0 28 28" fill="" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_91_73)">
                                        <path d="M20.031 18.617L24.314 22.899L22.899 24.314L18.617 20.031C17.0237 21.3082 15.042 22.0029 13 22C8.032 22 4 17.968 4 13C4 8.032 8.032 4 13 4C17.968 4 22 8.032 22 13C22.0029 15.042 21.3082 17.0237 20.031 18.617ZM18.025 17.875C19.2941 16.5699 20.0029 14.8204 20 13C20 9.132 16.867 6 13 6C9.132 6 6 9.132 6 13C6 16.867 9.132 20 13 20C14.8204 20.0029 16.5699 19.2941 17.875 18.025L18.025 17.875Z" fill=""></path>
                                    </g>
                                    <defs>
                                        <clippath id="clip0_91_73">
                                        <rect width="24" height="24" fill="white" transform="translate(2 2)"></rect>
                                        </clippath>
                                    </defs>
                                    </svg></a></div>
                            </div>
                            <div class="cardInfo"><a href="#">
                                <h6 class="text-16-medium cardTitle">Lace Shirt Cut II</h6></a>
                                <p class="body-p2 cardDesc">$16.00</p>
                                <div class="box-colors">
                                <div class="item-color color-1"></div>
                                <div class="item-color color-2"></div>
                                <div class="item-color color-3"></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="cardProduct wow fadeInUp">
                            <div class="cardImage"><a href="#"><img class="imageMain" src="http://wp.alithemes.com/html/guza/demos/assets/imgs/page/homepage1/product7.png" alt="guza"><img class="imageHover" src="http://wp.alithemes.com/html/guza/demos/assets/imgs/page/homepage1/product1-hover.png" alt="guza"></a>
                                <div class="button-select"><a href="#">Select Options</a></div>
                                <div class="box-quick-button"><a class="btn" href="#">
                                    <svg class="d-inline-flex align-items-center justify-content-center" width="28" height="28" viewbox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_116_452)">
                                        <path d="M14.001 6.52898C16.35 4.41998 19.98 4.48998 22.243 6.75698C24.505 9.02498 24.583 12.637 22.479 14.993L13.999 23.485L5.52101 14.993C3.41701 12.637 3.49601 9.01898 5.75701 6.75698C8.02201 4.49298 11.645 4.41698 14.001 6.52898ZM20.827 8.16998C19.327 6.66798 16.907 6.60698 15.337 8.01698L14.002 9.21498L12.666 8.01798C11.091 6.60598 8.67601 6.66798 7.17201 8.17198C5.68201 9.66198 5.60701 12.047 6.98001 13.623L14 20.654L21.02 13.624C22.394 12.047 22.319 9.66498 20.827 8.16998Z" fill=""></path>
                                    </g>
                                    <defs>
                                        <clippath id="clip0_116_452">
                                        <rect width="24" height="24" fill="white" transform="translate(2 2)"></rect>
                                        </clippath>
                                    </defs>
                                    </svg></a><a class="btn" href="#">
                                    <svg class="d-inline-flex align-items-center justify-content-center" width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_200_1102)">
                                        <path d="M15.375 12.0416L19.5 16.1666L15.375 20.2916L14.1967 19.1133L16.31 16.9991L5.33333 17V15.3333H16.31L14.1967 13.22L15.375 12.0416ZM8.625 3.70831L9.80333 4.88665L7.69 6.99998H18.6667V8.66665H7.69L9.80333 10.78L8.625 11.9583L4.5 7.83331L8.625 3.70831Z" fill=""></path>
                                    </g>
                                    <defs>
                                        <clippath id="clip0_200_1102">
                                        <rect width="20" height="20" fill="white" transform="translate(2 2)"></rect>
                                        </clippath>
                                    </defs>
                                    </svg></a><a class="btn preview-product" href="#">
                                    <svg class="d-inline-flex align-items-center justify-content-center" width="28" height="28" viewbox="0 0 28 28" fill="" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_91_73)">
                                        <path d="M20.031 18.617L24.314 22.899L22.899 24.314L18.617 20.031C17.0237 21.3082 15.042 22.0029 13 22C8.032 22 4 17.968 4 13C4 8.032 8.032 4 13 4C17.968 4 22 8.032 22 13C22.0029 15.042 21.3082 17.0237 20.031 18.617ZM18.025 17.875C19.2941 16.5699 20.0029 14.8204 20 13C20 9.132 16.867 6 13 6C9.132 6 6 9.132 6 13C6 16.867 9.132 20 13 20C14.8204 20.0029 16.5699 19.2941 17.875 18.025L18.025 17.875Z" fill=""></path>
                                    </g>
                                    <defs>
                                        <clippath id="clip0_91_73">
                                        <rect width="24" height="24" fill="white" transform="translate(2 2)"></rect>
                                        </clippath>
                                    </defs>
                                    </svg></a></div>
                            </div>
                            <div class="cardInfo"><a href="#">
                                <h6 class="text-16-medium cardTitle">Lace Shirt Cut II</h6></a>
                                <p class="body-p2 cardDesc">$16.00</p>
                                <div class="box-colors">
                                <div class="item-color color-1"></div>
                                <div class="item-color color-2"></div>
                                <div class="item-color color-3"></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="cardProduct wow fadeInUp">
                            <div class="cardImage"><a href="#"><img class="imageMain" src="http://wp.alithemes.com/html/guza/demos/assets/imgs/page/homepage1/product6.png" alt="guza"><img class="imageHover" src="http://wp.alithemes.com/html/guza/demos/assets/imgs/page/homepage1/product1-hover.png" alt="guza"></a>
                                <div class="button-select"><a href="#">Select Options</a></div>
                                <div class="box-quick-button"><a class="btn" href="#">
                                    <svg class="d-inline-flex align-items-center justify-content-center" width="28" height="28" viewbox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_116_452)">
                                        <path d="M14.001 6.52898C16.35 4.41998 19.98 4.48998 22.243 6.75698C24.505 9.02498 24.583 12.637 22.479 14.993L13.999 23.485L5.52101 14.993C3.41701 12.637 3.49601 9.01898 5.75701 6.75698C8.02201 4.49298 11.645 4.41698 14.001 6.52898ZM20.827 8.16998C19.327 6.66798 16.907 6.60698 15.337 8.01698L14.002 9.21498L12.666 8.01798C11.091 6.60598 8.67601 6.66798 7.17201 8.17198C5.68201 9.66198 5.60701 12.047 6.98001 13.623L14 20.654L21.02 13.624C22.394 12.047 22.319 9.66498 20.827 8.16998Z" fill=""></path>
                                    </g>
                                    <defs>
                                        <clippath id="clip0_116_452">
                                        <rect width="24" height="24" fill="white" transform="translate(2 2)"></rect>
                                        </clippath>
                                    </defs>
                                    </svg></a><a class="btn" href="#">
                                    <svg class="d-inline-flex align-items-center justify-content-center" width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_200_1102)">
                                        <path d="M15.375 12.0416L19.5 16.1666L15.375 20.2916L14.1967 19.1133L16.31 16.9991L5.33333 17V15.3333H16.31L14.1967 13.22L15.375 12.0416ZM8.625 3.70831L9.80333 4.88665L7.69 6.99998H18.6667V8.66665H7.69L9.80333 10.78L8.625 11.9583L4.5 7.83331L8.625 3.70831Z" fill=""></path>
                                    </g>
                                    <defs>
                                        <clippath id="clip0_200_1102">
                                        <rect width="20" height="20" fill="white" transform="translate(2 2)"></rect>
                                        </clippath>
                                    </defs>
                                    </svg></a><a class="btn preview-product" href="#">
                                    <svg class="d-inline-flex align-items-center justify-content-center" width="28" height="28" viewbox="0 0 28 28" fill="" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_91_73)">
                                        <path d="M20.031 18.617L24.314 22.899L22.899 24.314L18.617 20.031C17.0237 21.3082 15.042 22.0029 13 22C8.032 22 4 17.968 4 13C4 8.032 8.032 4 13 4C17.968 4 22 8.032 22 13C22.0029 15.042 21.3082 17.0237 20.031 18.617ZM18.025 17.875C19.2941 16.5699 20.0029 14.8204 20 13C20 9.132 16.867 6 13 6C9.132 6 6 9.132 6 13C6 16.867 9.132 20 13 20C14.8204 20.0029 16.5699 19.2941 17.875 18.025L18.025 17.875Z" fill=""></path>
                                    </g>
                                    <defs>
                                        <clippath id="clip0_91_73">
                                        <rect width="24" height="24" fill="white" transform="translate(2 2)"></rect>
                                        </clippath>
                                    </defs>
                                    </svg></a></div>
                            </div>
                            <div class="cardInfo"><a href="#">
                                <h6 class="text-16-medium cardTitle">Lace Shirt Cut II</h6></a>
                                <p class="body-p2 cardDesc">$16.00</p>
                                <div class="box-colors">
                                <div class="item-color color-1"></div>
                                <div class="item-color color-2"></div>
                                <div class="item-color color-3"></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="cardProduct wow fadeInUp">
                            <div class="cardImage"><a href="#"><img class="imageMain" src="http://wp.alithemes.com/html/guza/demos/assets/imgs/page/homepage1/product5.png" alt="guza"><img class="imageHover" src="http://wp.alithemes.com/html/guza/demos/assets/imgs/page/homepage1/product1-hover.png" alt="guza"></a>
                                <div class="button-select"><a href="#">Select Options</a></div>
                                <div class="box-quick-button"><a class="btn" href="#">
                                    <svg class="d-inline-flex align-items-center justify-content-center" width="28" height="28" viewbox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_116_452)">
                                        <path d="M14.001 6.52898C16.35 4.41998 19.98 4.48998 22.243 6.75698C24.505 9.02498 24.583 12.637 22.479 14.993L13.999 23.485L5.52101 14.993C3.41701 12.637 3.49601 9.01898 5.75701 6.75698C8.02201 4.49298 11.645 4.41698 14.001 6.52898ZM20.827 8.16998C19.327 6.66798 16.907 6.60698 15.337 8.01698L14.002 9.21498L12.666 8.01798C11.091 6.60598 8.67601 6.66798 7.17201 8.17198C5.68201 9.66198 5.60701 12.047 6.98001 13.623L14 20.654L21.02 13.624C22.394 12.047 22.319 9.66498 20.827 8.16998Z" fill=""></path>
                                    </g>
                                    <defs>
                                        <clippath id="clip0_116_452">
                                        <rect width="24" height="24" fill="white" transform="translate(2 2)"></rect>
                                        </clippath>
                                    </defs>
                                    </svg></a><a class="btn" href="#">
                                    <svg class="d-inline-flex align-items-center justify-content-center" width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_200_1102)">
                                        <path d="M15.375 12.0416L19.5 16.1666L15.375 20.2916L14.1967 19.1133L16.31 16.9991L5.33333 17V15.3333H16.31L14.1967 13.22L15.375 12.0416ZM8.625 3.70831L9.80333 4.88665L7.69 6.99998H18.6667V8.66665H7.69L9.80333 10.78L8.625 11.9583L4.5 7.83331L8.625 3.70831Z" fill=""></path>
                                    </g>
                                    <defs>
                                        <clippath id="clip0_200_1102">
                                        <rect width="20" height="20" fill="white" transform="translate(2 2)"></rect>
                                        </clippath>
                                    </defs>
                                    </svg></a><a class="btn preview-product" href="#">
                                    <svg class="d-inline-flex align-items-center justify-content-center" width="28" height="28" viewbox="0 0 28 28" fill="" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_91_73)">
                                        <path d="M20.031 18.617L24.314 22.899L22.899 24.314L18.617 20.031C17.0237 21.3082 15.042 22.0029 13 22C8.032 22 4 17.968 4 13C4 8.032 8.032 4 13 4C17.968 4 22 8.032 22 13C22.0029 15.042 21.3082 17.0237 20.031 18.617ZM18.025 17.875C19.2941 16.5699 20.0029 14.8204 20 13C20 9.132 16.867 6 13 6C9.132 6 6 9.132 6 13C6 16.867 9.132 20 13 20C14.8204 20.0029 16.5699 19.2941 17.875 18.025L18.025 17.875Z" fill=""></path>
                                    </g>
                                    <defs>
                                        <clippath id="clip0_91_73">
                                        <rect width="24" height="24" fill="white" transform="translate(2 2)"></rect>
                                        </clippath>
                                    </defs>
                                    </svg></a></div>
                            </div>
                            <div class="cardInfo"><a href="#">
                                <h6 class="text-16-medium cardTitle">Lace Shirt Cut II</h6></a>
                                <p class="body-p2 cardDesc">$16.00</p>
                                <div class="box-colors">
                                <div class="item-color color-1"></div>
                                <div class="item-color color-2"></div>
                                <div class="item-color color-3"></div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div> -->
                </div>
                </section>

            </main>
  
      <Footer/> 
    </div>
</template>

<script setup>

import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { ref, reactive, computed, onMounted, watch, watchEffect } from 'vue';
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import useHomes from "../composable/Homes";
import useBlogs from "../composable/Blogs";
import Pagination2 from '../components/Pagination2.vue';
import { useRouter, useRoute } from 'vue-router'
import { useShoppingStore } from '../store/index';
import { createToast } from 'mosha-vue-toastify';
import moment from 'moment';
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import loader from '../components/loader.vue';

import url from "../../ImgUrl";
import axiosClient from "../../ApiServices";

const query = "a";
const queryFiled = "name";
const rangeInput = ref(0);
const state = ref(0);
const rangeValue = ref('');
const pagination = {
    current_page: 1
};

const data = useShoppingStore();

const productsData = ref([]);
const SousData = ref([]);

const route = useRoute();
const email = ref('');
const nomPrenom = ref('');
const contents = ref('');
const selected = ref([]);
const selected1 = ref([]);
const selected2 = ref([]);

const options = ref([]);
const options1 = ref([]);
const options2 = ref([]);
const options3 = ref([]);
const souscategories = ref([]);
const Idsouscategories = ref(0);
const IdSousSouscategories = ref(0);
const SousSouscategories = ref([]);

const elements = ref(0);
const OnClickValue = ref(0);
const OnClickValue1 = ref(0);

const isLoading = ref(false);
const fullPage = ref(true);

// const selected=ref([]);
const Occasion = ref([]);

const OptionOccasion =[

    {
        id: 1,
        label: 'Anniversaire',
        value: 'Anniversaire',
    },
    {
        id: 2,
        label: 'mariage',
        value: 'mariage',
    },
    {
        id: 3,
        label: 'défiler',
        value: 'défiler',
    },
    {
        id: 4,
        label: 'Soirée',
        value: 'Soirée',
    },
    {
        id: 5,
        label: 'Entréprise',
        value: 'Entréprise',
    },
    {
        id: 6,
        label: 'Decorations',
        value: 'Decorations',
    },
    {
        id: 7,
        label: 'Eclairage',
        value: 'Eclairage',
    },
    {
        id: 8,
        label: 'Cérémonie',
        value: 'Eclairage',
    },
    {
        id: 9,
        label: 'Mannequinat',
        value: 'Mannequinat',
    },
    {
        id: 10,
        label: 'Idées cadeaux',
        value: 'Idées cadeaux',
    },

    {
        id: 11,
        label: 'Pour un évènement',
        value: 'Pour un évènement',
    },

    {
        id: 12,
        label: 'Pour le bureau ',
        value: 'Pour le bureau ',
    },
    {
        id: 13,
        label: 'Pour la maison',
        value: 'Pour la maison',
    },
    {
        id: 14,
        label: 'Pour les enfant',
        value: 'Pour les enfant',
    },
    {
        id: 15,
        label: 'Pour ma marque / entreprise',
        value: 'Pour ma marque / entreprise',
    },

];

const datas = 1;
localStorage.setItem("idPoste", route.params.id);
const { getNouveauteProduits, Categories, Categorie, Produits, Produit, Sliders, Products, outp, MegaMenu, paginations } = useHomes();
const usersid = localStorage.getItem("auth_users");

onMounted(async () => {
    await MegaMenu();
    await getNouveauteProduits(datas);
});


const loadings = ref(1);
setTimeout(() => {
    loadings.value = 0;
}, 2000);

const getData = async () => {
};

const btnOnClick = async (index, id) => {

    if (id == 5 && index == 1) {

        OnClickValue.value = id;

    } else if (id == 5 && index == 0) {

        OnClickValue.value = 0;

    }

    if (id == 1 && index == 1) {

        OnClickValue1.value = id;

    } else if (id == 1 && index == 0) {

        OnClickValue1.value = 0;

    }

};

const btnlist = async (id) => {
    console.log(id);
    state.value = id;
};

const clickElements = async (id) => {
    console.log(id);
    elements.value = id;
    if (id == 0) {
        $(this).attr('data-click-state', 1);
        $('.sidebar-left2').css('left', '0').css('opacity', '1');
        $('.open-sidebar-left2').css('background', '#ee9051').css('transform', 'translateX(275px)');;
        $('.open-sidebar-left2 i').css('color', '#fff').css('transform', 'rotate(180deg)');
        $('.overlay').addClass('active');
    }
    else if (id == 1) {
        $(this).attr('data-click-state', 0);
        $('.sidebar-left2').css('left', '-300px').css('opacity', '0');
        $('.open-sidebar-left2').css('background', '#fff').css('transform', 'translateX(0)');;
        $('.open-sidebar-left2 i').css('color', '#ee9051').css('transform', 'rotate(0)');
        $('.overlay').removeClass('active');

    }

};

const Loadings = async () => {
    loadings.value = 1;
    setTimeout(() => {
        loadings.value = 0;
    }, 980)
};

const searchData = async (data) => {
    await Loadings();
    await getNouveauteProduits(data);
    window.scrollTo(0, 0);
};

const SelectCategories = async (index) => {
    productsData.value = [];
    SousSouscategories.value = [];
    souscategories.value = [];
    Idsouscategories.value = index;

    if (index) {

        Loadings();
        productsData.value = [];
        // Nous allons Aller chercher les produits de cette categories ensuite nous allons afficher ses sous cathegories
        axiosClient.get('/api/categoriesproduits/' + index)
            .then(response => {

                productsData.value = response.data.data;
                //Nous allons recherche les sous categories de produis
                axiosClient.get('/api/getsouscategories/' + index)
                    .then(response => {

                        souscategories.value = response.data.data;

                        if (souscategories.value.length > 0) {

                            let tables1 = [];
                            souscategories.value.map(function (element) {
                                const objet = {
                                    id: element.id_sous_categories_produits,
                                    label: element.libelle_sous_categories_produits,
                                }
                                tables1.push(objet);
                            })
                            options1.value = tables1;

                        } else {

                            options1.value = [];
                            selected.value = [];
                        }


                    }).catch(function (error) {
                        console.error(error);
                    });

            }).catch(function (error) {

                console.error(error);

            });



    } else {

        getNouveauteProduits(1);
    }
};

const SelectSousCategories = async (index) => {
    productsData.value = [];
    IdSousSouscategories.value = index;

    if (index) {

        Loadings();
        productsData.value = [];
        // selected2.value = [];
        axiosClient.get('/api/souscategoriesproduits/' + Idsouscategories.value + '/' + index)
            .then(response => {
                productsData.value = response.data.data;
            }).catch(function (error) {
                console.error(error);
            });

        axiosClient.get('/api/getSousSousCategories/' + index)
            .then(response => {

                SousSouscategories.value = response.data.data;
                // console.log( SousSouscategories.value);

                if (SousSouscategories.value.length > 0) {

                    let tables = [];
                    SousSouscategories.value.map(function (element) {
                        const objet = {
                            id: element.id_sous_sous_categories_produits,
                            label: element.libelle_sous_sous_categories,
                        }
                        tables.push(objet);
                    })
                    options2.value = tables;

                } else {

                    options2.value = [];
                    selected2.value = [];
                }

            }).catch(function (error) {
                console.error(error);
            });


    } else {

        getNouveauteProduits(1);
    }
};

const SelectSousSousCategories = async (index) => {
    productsData.value = [];
    IdSousSouscategories.value = index;

    if (index) {

        Loadings();
        productsData.value = [];
        axiosClient.get('/api/Soussouscategoriesproduits/' + Idsouscategories.value + '/' + IdSousSouscategories.value + '/' + index)
            .then(response => {

                productsData.value = response.data.data;

            }).catch(function (error) {
                console.error(error);
            });

    } else {

        getNouveauteProduits(1);
    }
};

const SelectOccasion = async (index) => {
    productsData.value = [];

    if (index) {

        axiosClient.get('/api/SelectOccasion/' + index)
            .then(response => {

                console.log(response.data.data);
                productsData.value = response.data.data;

                $(this).attr('data-click-state', 0);
                $('.sidebar-left2').css('left', '-300px').css('opacity', '0');
                $('.open-sidebar-left2').css('background', '#fff').css('transform', 'translateX(0)');;
                $('.open-sidebar-left2 i').css('color', '#ee9051').css('transform', 'rotate(0)');
                $('.overlay').removeClass('active');

            }).catch(function (error) {
                productsData.value = [];
                console.error(error);
            });

    } else {

        getNouveauteProduits(1);
    }


};


watchEffect(() => {

    if (rangeInput.value > 0) {

        productsData.value = [];
        axiosClient.get('/api/searchRange/' + rangeInput.value)
            .then(response => {
                console.log(response.data.data);
                productsData.value = response.data.data;

            }).catch(function (error) {
                productsData.value = [];
                console.error(error);
            });

    } else {
        productsData.value = Products.value;
    };

    if (Products.value.length > 0) {
        productsData.value = Products.value;
    };

    if (Categories.value.length > 0) {
        let tables1 = [];
        Categories.value.map(function (element) {
            const objet = {
                id: element.id_categories_produits,
                label: element.libelle_categories_produits,
            }
            tables1.push(objet);

        })
        options.value = tables1;
    };

    if (rangeInput) {
        rangeValue.value = rangeInput.value;
    };

    if (selected.value > 0) {
        Loadings();
        productsData.value = [];
        // Nous allons Aller chercher les produits de cette categories ensuite nous allons afficher ses sous cathegories
        axiosClient.get('/api/categoriesproduits/' + selected.value)
            .then(response => {
                productsData.value = response.data.data;
            }).catch(function (error) {
                console.error(error);
            });

        axiosClient.get('/api/getsouscategories/' + selected.value)
            .then(response => {
                let souscategories = response.data.data;

                if (souscategories.length > 0) {

                    let tables1 = [];
                    souscategories.map(function (element) {
                        const objet = {
                            id: element.id_sous_categories_produits,
                            label: element.libelle_sous_categories_produits,
                        }
                        tables1.push(objet);
                    })
                    options1.value = tables1;

                } else {

                    options1.value = [];
                    selected.value = [];
                }


            }).catch(function (error) {
                console.error(error);
            });
    };

    if (selected1.value > 0) {
        Loadings();
        productsData.value = [];
        // selected2.value = [];
        axiosClient.get('/api/souscategoriesproduits/' + selected.value + '/' + selected1.value)
            .then(response => {
                productsData.value = response.data.data;
            }).catch(function (error) {
                console.error(error);
            });

        axiosClient.get('/api/getSousSousCategories/' + selected1.value)
            .then(response => {

                soussouscategories.value = response.data.data;
                
                if (soussouscategories.value.length > 0) {

                    console.log( soussouscategories.value);

                    let tables = [];
                    soussouscategories.value.map(function (element) {
                        const objet = {
                            id: element.id_sous_sous_categories_produits,
                            label: element.libelle_sous_sous_categories,
                        }
                        tables.push(objet);
                    })
                    options2.value = tables;

                } else {

                    options2.value = [];
                    selected2.value = [];
                }

            }).catch(function (error) {
                console.error(error);
            });
    };

    if (selected2.value > 0) {
        Loadings();
        productsData.value = [];
        axiosClient.get('/api/Soussouscategoriesproduits/' + selected.value + '/' + selected1.value + '/' + selected2.value)
            .then(response => {

                productsData.value = response.data.data;

            }).catch(function (error) {
                console.error(error);
            });
    };

});

</script>
