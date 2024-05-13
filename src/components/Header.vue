<template>

    <header class="header sticky-bar header-style-3">

      <div class="container">

        <div class="main-header">

          <div class="header-logo"> 
            <a class="d-flex" href="/">
            <img alt="Tarafe" src="/assets/logos2.png"></a>
          </div>

          <div class="header-menu"> 
            <div class="header-nav">
              <nav class="nav-main-menu d-none d-xl-block">
                <ul class="main-menu">

                    <li ><a style="font-size:18px;" class="" href="/">ACCUEIL</a></li>
                    
                    <!-- <li><a class="" href="/nouveaute">Nouveauté</a></li>
                    <li class="has-mega-menu">
                        <a class="active " href="produits">Produits</a>
                        <div class="sub-menu">

                          <div class="menu-inner">


                            <div  v-for="item in outp" :key="item.id_categories_produits"  class="col-menu">

                              <h6 class="text-16-semibold mb-10 text-uppercase">
                                <a :href="'/categories/'+item.libelle_categories_produits" >{{item.libelle_categories_produits}}</a> &nbsp;
                              </h6>

                              <a v-for="items in item.listescategories" :key="items.id_sous_categories_produits" :href="'/produits/'+items.libelle_sous_categories_produits"> 
                                {{items.libelle_sous_categories_produits}} &nbsp;
                              </a>

                            </div>

                          </div>

                        </div>
                    </li> -->

                    <!-- <li><a style="font-size:18px;" class="" href="/blogs">BLOG</a></li> -->
                    <li><a style="font-size:18px;" class="" href="/realisations">PRODUITS</a></li>
                    <li><a style="font-size:18px;" class="" href="/gallerie">REALISATIONS</a></li>
                    <li><a style="font-size:18px;" class="" href="/apropos">A PROPOS</a></li>

                </ul>
              </nav>

              <div class="burger-icon burger-icon-white">
                    <span class="burger-icon-top"></span>
                    <span class="burger-icon-mid"></span>
                    <span class="burger-icon-bottom"></span>
              </div>

            </div>
          </div>

          <div class="header-account">
            <!-- <a class="account-icon search" href="#">
                <svg class="d-inline-flex align-items-center justify-content-center" width="28" height="28" viewbox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_91_73)">
                    <path d="M20.031 18.617L24.314 22.899L22.899 24.314L18.617 20.031C17.0237 21.3082 15.042 22.0029 13 22C8.032 22 4 17.968 4 13C4 8.032 8.032 4 13 4C17.968 4 22 8.032 22 13C22.0029 15.042 21.3082 17.0237 20.031 18.617ZM18.025 17.875C19.2941 16.5699 20.0029 14.8204 20 13C20 9.132 16.867 6 13 6C9.132 6 6 9.132 6 13C6 16.867 9.132 20 13 20C14.8204 20.0029 16.5699 19.2941 17.875 18.025L18.025 17.875Z"></path>
                  </g>
                  <defs>
                    <clippath id="clip0_91_73">
                      <rect width="24" height="24" fill="white" transform="translate(2 2)"></rect>
                    </clippath>
                  </defs>
                </svg>
              </a> -->
              
              <a class="account-icon account" href="#">
              <svg class="d-inline-flex align-items-center justify-content-center" width="28" height="28" viewbox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_116_451)">
                  <path d="M6 24C6 21.8783 6.84285 19.8434 8.34315 18.3431C9.84344 16.8429 11.8783 16 14 16C16.1217 16 18.1566 16.8429 19.6569 18.3431C21.1571 19.8434 22 21.8783 22 24H20C20 22.4087 19.3679 20.8826 18.2426 19.7574C17.1174 18.6321 15.5913 18 14 18C12.4087 18 10.8826 18.6321 9.75736 19.7574C8.63214 20.8826 8 22.4087 8 24H6ZM14 15C10.685 15 8 12.315 8 9C8 5.685 10.685 3 14 3C17.315 3 20 5.685 20 9C20 12.315 17.315 15 14 15ZM14 13C16.21 13 18 11.21 18 9C18 6.79 16.21 5 14 5C11.79 5 10 6.79 10 9C10 11.21 11.79 13 14 13Z"></path>
                </g>

                <defs>
                  <clippath id="clip0_116_451">
                    <rect width="24" height="24" fill="white" transform="translate(2 2)"></rect>
                  </clippath>
                </defs>
              </svg>
            </a>
            
            <!--               
              <a class="account-icon cart" href="#"><span class="number-tag"> {{data.countCartItems}}</span>
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
            </a> -->
          </div>

        </div>
        
      </div>

    </header>

    <!-- Login Modal Découvrir -->


    <div class="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
      <div class="mobile-header-wrapper-inner">
        <div class="mobile-header-content-area">
          <div class="mobile-menu-head">

              <div class="box-head-1">
                  <a class="link-underline mr-20 account-icon account" href="#">S'IDENTIFIER</a>
                  <!-- <a class="link-underline account-icon account" href="#">Sign Up</a> -->
                  <a class="close-mobile" href="#">
                      <img src="/assets/imgs/template/icons/close.svg" alt="Guza">
                  </a>
              </div>

              <div class="box-head-2">
                <a class="back-mobile" href="#">
                  <img src="/assets/imgs/template/icons/back.svg" alt="Guza">
                </a>
              </div>
          </div>

          <div class="perfect-scroll">
            <div class="mobile-menu-wrap mobile-header-border">
              <nav>
                <ul class="mobile-menu font-heading">
                  
                  <li><a href="/">ACCUEIL</a></li>
                  <!-- <li class="has-children">
                    <a  class="active" href="#">Produits</a>
                      <ul class="sub-menu">
                        <li v-for="item in outp" :key="item.id_categories_produits" >
                          <a :href="'/categories/'+item.libelle_categories_produits"> {{item.libelle_categories_produits}} </a>
                        </li>
                      </ul>
                  </li> -->
                  <!-- <li><a class="" href="/blogs">BLOG</a></li> -->
                 
                  <li><a class="" href="/realisations">PRODUIT</a></li>
                  <li><a class="" href="/gallerie">REALISATIONS</a></li>
                  <li><a class="" href="/apropos">A PROPOS</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="box-popup-preview">
      <a class="btn-close-popup" href="#">
         <img src="/assets/imgs/template/icons/close-popup.svg" alt="kidify">
     </a>
      <div class="box-popup-content">
        <div class="preview-product-image">
          <div class="detail-gallery detail-gallery-2">
            <div class="box-main-gallery"><a class="zoom-image glightbox" href="/assets/imgs/page/product/img.png"></a>
              <div class="product-image-slider product-image-slider-preview">
                <figure class="border-radius-10"><a class="glightbox" href="/assets/imgs/page/product/img.png"><img src="/assets/imgs/page/product/img.png" alt="kidify"></a></figure>
                <figure class="border-radius-10"><a class="glightbox" href="/assets/imgs/page/product/img.png"><img src="/assets/imgs/page/product/img.png" alt="kidify"></a></figure>
                <figure class="border-radius-10"><a class="glightbox" href="/assets/imgs/page/product/img.png"><img src="/assets/imgs/page/product/img.png" alt="kidify"></a></figure>
                <figure class="border-radius-10"><a class="glightbox" href="/assets/imgs/page/product/img.png"><img src="/assets/imgs/page/product/img.png" alt="kidify"></a></figure>
                <figure class="border-radius-10"><a class="glightbox" href="/assets/imgs/page/product/img.png"><img src="/assets/imgs/page/product/img.png" alt="kidify"></a></figure>
                <figure class="border-radius-10"><a class="glightbox" href="/assets/imgs/page/product/img.png"><img src="/assets/imgs/page/product/img.png" alt="kidify"></a></figure>
                <figure class="border-radius-10"><a class="glightbox" href="/assets/imgs/page/product/img.png"><img src="/assets/imgs/page/product/img.png" alt="kidify"></a></figure>
              </div>
            </div>
          </div>
        </div>

        <div class="preview-product-info">
          <div class="box-product-info">
            <h3 class="mb-5">Summer Stripes Shorts</h3>
            <div class="block-rating"><img src="/assets/imgs/template/icons/star-fill.svg" alt="Guza"><img src="/assets/imgs/template/icons/star-fill.svg" alt="Guza"><img src="/assets/imgs/template/icons/star-fill.svg" alt="Guza"><img src="/assets/imgs/template/icons/star-fill.svg" alt="Guza"><img src="/assets/imgs/template/icons/star-none.svg" alt="Guza"><span class="text-17 neutral-medium-dark">(5)</span></div>
            <div class="block-price"><span class="price-main">$15.00</span><span class="price-line">$25.00</span></div>
            <p class="body-p2 viewed-guest viewed-guest-black mb-25"><span class="text-17-medium">24 guests are viewing this product</span></p>
            <div class="block-description">
              <p class="body-p2 neutral-medium-dark">The shorts are made from soft organic cotton. They have an elasticated waistband with an internal drawstring and side pockets.</p>
            </div>
            <div class="block-quantity">
              <div class="text-17 neutral-medium-dark mb-10">Quantity</div>
              <div class="box-form-cart">
                <div class="form-cart detail-qty"><span class="minus"></span>
                  <input class="qty-val form-control" type="text" name="quantity" value="1" min="1"><span class="plus"></span>
                </div><a class="btn btn-black" href="#">Add to Cart</a><a class="btn btn-navy" href="#">Buy Now</a>
              </div>
            </div>
            <div class="block-tags-product">
              <p class="body-p2"><span class="neutral-medium-dark">SKU:</span><span class="neutral-dark">C66R8B47MP</span></p>
              <p class="body-p2"><span class="neutral-medium-dark">Categories:</span><a class="neutral-dark" href="#">Dress,</a><a class="neutral-dark" href="#">Pants</a></p>
              <p class="body-p2"><span class="neutral-medium-dark">Tags:</span><a class="neutral-dark" href="#">fashion,</a><a class="neutral-dark" href="#">shoes,</a><a class="neutral-dark" href="#">women</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="box-popup-search ele-popup-search">
      <div class="box-search-overlay"></div>
      <div class="box-search-wrapper"><a class="btn-close-popup" href="#">
          <svg class="icon-16 d-inline-flex align-items-center justify-content-center" fill="#111111" stroke="#111111" width="24" height="24" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg></a>
        <h5 class="mb-15">Search products</h5>
        <form action="#">
          <div class="form-group">
            <select class="form-control arrow-select">
              <option>All Categories</option>
              <option>Animals & Pet Supplies</option>
              <option>Baby & Toddler</option>
            </select>
          </div>
          <div class="form-group">
            <input class="form-control search-icon" type="text">
          </div>
        </form>
        <div class="box-quick-search"><span class="text-17 neutral-medium-dark">Quick search:</span><a class="text-17" href="#">T-Shirt</a><a class="text-17" href="#">Jeans</a><a class="text-17" href="#">Mens</a></div>
        <div class="box-products-search">
          <h6 class="text-18-medium mb-10">You May Also Like</h6>
          <div class="box-list-product-search">
            <div class="item-product-search">
              <div class="cardProductStyle3 cardProductType03 cardProductType02 wow fadeInUp">
                <div class="cardImage"><a href="#"><img class="imageMain" src="/assets/imgs/page/popup/product-1.png" alt="guza"><img class="imageHover" src="/assets/imgs/page/popup/product-5.png" alt="guza"></a>
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
                <div class="cardInfo">
                  <h6 class="text-16-medium">illow Covers Luxury</h6>
                  <p class="body-p2 cardDesc">$24.00</p>
                </div>
              </div>
            </div>
            <div class="item-product-search">
              <div class="cardProductStyle3 cardProductType03 cardProductType02 wow fadeInUp">
                <div class="cardImage"><a href="#"><img class="imageMain" src="/assets/imgs/page/popup/product-2.png" alt="guza"><img class="imageHover" src="/assets/imgs/page/popup/product-6.png" alt="guza"></a>
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
                <div class="cardInfo">
                  <h6 class="text-16-medium">Pillow Covers Linen</h6>
                  <p class="body-p2 cardDesc">$36.00</p>
                </div>
              </div>
            </div>
            <div class="item-product-search">
              <div class="cardProductStyle3 cardProductType03 cardProductType02 wow fadeInUp">
                <div class="cardImage"><a href="#"><img class="imageMain" src="/assets/imgs/page/popup/product-3.png" alt="guza"><img class="imageHover" src="/assets/imgs/page/popup/product-7.png" alt="guza"></a>
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
                <div class="cardInfo">
                  <h6 class="text-16-medium">Pillow Cushion</h6>
                  <p class="body-p2 cardDesc">$27.00</p>
                </div>
              </div>
            </div>
            <div class="item-product-search">
              <div class="cardProductStyle3 cardProductType03 cardProductType02 wow fadeInUp">
                <div class="cardImage"><a href="#"><img class="imageMain" src="/assets/imgs/page/popup/product-4.png" alt="guza"><img class="imageHover" src="/assets/imgs/page/popup/product-8.png" alt="guza"></a>
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
                <div class="cardInfo">
                  <h6 class="text-16-medium">Pillow Covers Linen</h6>
                  <p class="body-p2 cardDesc">$98.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal login -->
    <Login/>

    <div class="box-popup-cart">
      <div class="box-cart-overlay"></div>
      <div class="box-cart-wrapper">
        <a class="btn-close-popup" href="#">
          <svg class="icon-16 d-inline-flex align-items-center justify-content-center" fill="#111111" stroke="#111111" width="24" height="24" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </a>
        <h5 class="mb-15">Votre panier  {{data.countCartItems}}</h5>
       
        <div class="box-progress-bar-block">
          <div class="progress">
            <div class="progress-bar" style="width: 35%"></div>
          </div>
        </div>
        
        <div class="box-products-cart">

          <div class="box-empty-cart d-none">

            <div class="icon-empty-cart">

              <img src="/assets/imgs/template/icons/empty-cart.svg" alt="Guza"></div>
           
              <div class="info-empty-cart">
              <p class="text-17 neutral-medium-dark">Votre panier is empty</p><a class="link-underline" href="#">Add from Wishlist</a>
             </div>

          </div>

          <div class="list-items-cart">

            <div  v-for="item in data.cartItems" :key="item.id_products" class="item-cart">

              <div class="item-cart-image">
                <img :src="url+item.imageUrl" alt="Guza">
              </div>

              <div class="item-cart-info">
                <div class="item-cart-info-1">
                    <a class="text-16-medium" href="#"> {{item.name_product}} </a>
       
                  <p class="body-p2 d-block d-sm-none mb-8">{{item.price * item.quantity}} FCFA</p>

                  <div class="box-form-cart">
                    <div class="form-cart detail-qty">
                        <span  @click="data.decrementQ(item)"  class="minus"></span>
                           <input class="qty-val form-control" type="text" name="quantity" :value=" item.quantity"  min="1">
                          <span @click="data.incrementQ(item)" class="plus"></span>
                    </div>
                  </div>

                </div>
                <div class="item-cart-info-2">
                  <p class="body-p2 d-none d-sm-block">{{item.price * item.quantity}} FCFA</p>
                  <a class="btn-remove-cart"  @click="data.removeFromCart(item)"></a>
                </div>
              </div>
              
            </div>

          </div>

        </div>

        <div class="box-fire">
          <div class="icon-fire body-p2">Passez à la caisse maintenant avant qu'ils ne disparaissent !</div>
        </div>

        <div class="d-flex align-items-center justify-content-between mt-25 mb-15">
          <h6 class="neutral-medium-dark">Sous-total</h6>
          <h6 class="neutral-dark">{{ data.cartItems.reduce((acc,item) => acc += item.price * item.quantity,0) }} </h6>
        </div>

        <div class="box-button-popup-cart d-flex align-items-center justify-content-between">
          <a class="btn btn-border w-100 mr-5" href="/Panier">Voir le panier</a>
          <a class="btn btn-black w-100 ml-5" href="/paiement">Passer à la caisse </a></div>
        
      </div>
    </div>

    <div class="box-popup-wishlist">
      <div class="box-wishlist-overlay"></div>
      <div class="box-wishlist-wrapper"><a class="btn-close-popup" href="#">
          <svg class="icon-16 d-inline-flex align-items-center justify-content-center" fill="#111111" stroke="#111111" width="24" height="24" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg></a>
        <h5 class="mb-15">Your Wishlist</h5>
        <div class="box-products-cart">
          <div class="box-empty-cart d-none">
            <div class="icon-empty-cart"><img src="/assets/imgs/template/icons/empty-cart.svg" alt="Guza"></div>
            <div class="info-empty-cart">
              <p class="text-17 neutral-medium-dark">Votre panier is empty</p><a class="link-underline" href="#">Add from Wishlist</a>
            </div>
          </div>
          <div class="list-items-cart">
            <div class="item-cart">
              <div class="item-cart-image"><img src="/assets/imgs/page/cart/sp.png" alt="Guza"></div>
              <div class="item-cart-info">
                <div class="item-cart-info-1"><a class="text-16-medium" href="#">Ball Crew Shirt</a>
                  <div class="box-info-size-color-product">
                    <p class="box-color"><span class="body-p2 neutral-medium-dark">Color:</span><span class="body-p2 neutral-dark">Navy</span></p>
                    <p class="box-size"><span class="body-p2 neutral-medium-dark">Size:</span><span class="body-p2 neutral-dark">S</span></p>
                  </div>
                  <p class="body-p2 d-block d-sm-none mb-8">$24.00</p>
                  <div class="box-form-cart">
                    <div class="btn btn-black">Add to cart</div>
                  </div>
                </div>
                <div class="item-cart-info-2">
                  <p class="body-p2 d-none d-sm-block">$24.00</p><a class="btn-remove-cart" href="#"></a>
                </div>
              </div>
            </div>
            <div class="item-cart">
              <div class="item-cart-image"><img src="/assets/imgs/page/cart/sp2.png" alt="Guza"></div>
              <div class="item-cart-info">
                <div class="item-cart-info-1"><a class="text-16-medium" href="#">Ball Crew Shirt</a>
                  <div class="box-info-size-color-product">
                    <p class="box-color"><span class="body-p2 neutral-medium-dark">Color:</span><span class="body-p2 neutral-dark">Navy</span></p>
                    <p class="box-size"><span class="body-p2 neutral-medium-dark">Size:</span><span class="body-p2 neutral-dark">S</span></p>
                  </div>
                  <p class="body-p2 d-block d-sm-none mb-8">$24.00</p>
                  <div class="box-form-cart">
                    <div class="btn btn-black">Add to cart</div>
                  </div>
                </div>
                <div class="item-cart-info-2">
                  <p class="body-p2 d-none d-sm-block">$24.00</p><a class="btn-remove-cart" href="#"></a>
                </div>
              </div>
            </div>
            <div class="item-cart">
              <div class="item-cart-image"><img src="/assets/imgs/page/cart/sp3.png" alt="Guza"></div>
              <div class="item-cart-info">
                <div class="item-cart-info-1"><a class="text-16-medium" href="#">Ball Crew Shirt</a>
                  <div class="box-info-size-color-product">
                    <p class="box-color"><span class="body-p2 neutral-medium-dark">Color:</span><span class="body-p2 neutral-dark">Navy</span></p>
                    <p class="box-size"><span class="body-p2 neutral-medium-dark">Size:</span><span class="body-p2 neutral-dark">S</span></p>
                  </div>
                  <p class="body-p2 d-block d-sm-none mb-8">$24.00</p>
                  <div class="box-form-cart">
                    <div class="btn btn-black">Add to cart</div>
                  </div>
                </div>
                <div class="item-cart-info-2">
                  <p class="body-p2 d-none d-sm-block">$24.00</p><a class="btn-remove-cart" href="#"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="box-products-search">
          <h6 class="text-18-medium mb-10">You May Also Like</h6>
          <div class="box-list-product-search">
            <div class="item-product-search">
              <div class="cardProductStyle3 cardProductType03 cardProductType02 wow fadeInUp">
                <div class="cardImage"><a href="#"><img class="imageMain" src="/assets/imgs/page/popup/product-1.png" alt="guza"><img class="imageHover" src="/assets/imgs/page/popup/product-5.png" alt="guza"></a>
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
                <div class="cardInfo">
                  <h6 class="text-16-medium">illow Covers Luxury</h6>
                  <p class="body-p2 cardDesc">$24.00</p>
                </div>
              </div>
            </div>
            <div class="item-product-search">
              <div class="cardProductStyle3 cardProductType03 cardProductType02 wow fadeInUp">
                <div class="cardImage"><a href="#"><img class="imageMain" src="/assets/imgs/page/popup/product-2.png" alt="guza"><img class="imageHover" src="/assets/imgs/page/popup/product-6.png" alt="guza"></a>
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
                <div class="cardInfo">
                  <h6 class="text-16-medium">Pillow Covers Linen</h6>
                  <p class="body-p2 cardDesc">$36.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script setup>
import {onMounted, ref, watch,defineProps} from "vue";
import { useShoppingStore } from '../store/index';
const data = useShoppingStore();
const usersRoles=localStorage.getItem("auth_roles");
const usersid=localStorage.getItem("auth_users");
import url from "../../ImgUrl";
import axiosClient from "../../ApiServices";
import Login from "./Login.vue";

defineProps({

    outp: {
                type: Object,
                required: true
        },
});

</script>
