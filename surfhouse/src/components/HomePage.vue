<template>
    <section>
        <h1>
            HomePage
        </h1>
        <div class="productGallery">
                <div class="product" v-for="product in products" :key="product.id">
            <router-link :to="/productpage/ + product.id">
                <div style="border:2px solid pink;">
                        <div class="label">
                            {{product.label}}
                        </div>                    
                        <img v-bind:src="product.img1"/>
                    <p style="text-transform: uppercase;">
                        {{product.title}}
                    </p>                
                    <p>
                        €. {{product.price}}
                    </p>
                    <p style="text-decoration: line-through;">
                        €. {{product.altprice}}
                    </p>
                </div>
            </router-link>
        </div>
        </div>
        hamster
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

