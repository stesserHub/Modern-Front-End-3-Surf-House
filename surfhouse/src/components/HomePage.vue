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
                            {{product.label}}
                        </div>                    
                        <img v-bind:src="product.img1"/>
                        <p style="text-transform: uppercase;">
                            {{product.title}}
                        </p>                
                        <p>
                            €. {{product.price}}
                        </p>
                        <p class="altprice" v-if="product.altprice != null">
                            €. {{product.altprice}}
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

