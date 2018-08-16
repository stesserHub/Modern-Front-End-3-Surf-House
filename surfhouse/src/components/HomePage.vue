<template>
    <section>
        <div class="placeholder">
            <img id="logo" src="../../static/carouselplaceholder.png"/>
        </div>
        <!-- render 6 products from the product array -->
        <div class="productgallery">
            <div class="gallery-top">
                <h2>
                    <i>
                        new products
                    </i>
                    <span class="gallerynav">
                        &lt; &gt;
                    </span>
                </h2>
            </div>


            <div class="product" v-for="product in products.slice(0, 6)" :key="product.id">
                <router-link :to="/product/ + product.id">
                    <div>
                        <div class="label" v-if="product.label != null">
                            <p>
                                {{product.label}}
                            </p>                            
                        </div>                    
                        <img v-bind:src="product.img1"/>
                        <p class="title">
                            <b>
                                <i>
                                    {{product.title}}
                                </i>  
                            </b>                         
                        </p>                
                        <p class="price">
                            <b>
                                <i>
                                    €. {{product.price}}
                                </i> 
                            </b>                           
                        </p>
                        <p class="altprice price" v-if="product.altprice != null">
                            <b>
                                <i>
                                    €. {{product.altprice}}
                                </i>  
                            </b>                          
                        </p>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>

import axios from "axios";

export default {
    name: 'HomePage',
    // array of product date retrieved on page creation with getProducts method
    data: function() {
        return {
            products: []
        };
    },
    // calls the getProducts method when page is created
    created: function() {
        this.getProducts();
    },
    methods: {
        // method for retrieving product data using axios
        getProducts: function() {
            axios
            .get("/static/products.json")
            .then(response => {
                this.products = response.data;
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
}
</script>

