<template>
    <section>
        <h1>
            Excellent product {{product.price}}
        </h1>
         
    </section>
</template>

<script>

import axios from "axios";

export default {
    name: 'ProductPage',
    data: function() {
        return {
            product: ""
        };
    },
    created: function() {
        this.getProductById();
    },
    // now watch this
    watch: {
        $route(to, from) {
            this.getProductById();
        }
    },
    // create method to get product by id
    methods: {
        getProductById: function() {
            let id = this.$route.params.id;
            axios
            .get("/static/products.json")
            .then(response => {
                this.product = response.data.filter(product => product.id == id)[0];
            })
            .catch(error =>{
                console.log(error);
            });
        }
    }
};
</script>
