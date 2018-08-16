<template>
    <section>
        
        <div id="product-parent">

            <div class="product-child display">

                <div class="img-preview" v-bind:style="{ backgroundImage: 'url(' + product.img1 + ')' }" >
                </div>
                <div class="img-gallery" v-bind:style="{ backgroundImage: 'url(' + product.img1 + ')' }">
                </div>
                <div class="img-gallery" v-bind:style="{ backgroundImage: 'url(' + product.img2 + ')' }">
                </div>
                <div class="img-gallery" v-bind:style="{ backgroundImage: 'url(' + product.img3 + ')' }">
                </div>

                <button class="arrow a-left">
                    &lt;
                </button>

                <button class="arrow a-right">
                    &gt;
                </button>

                <!-- <img v-bind:src="product.img1"/>
                <img v-bind:src="product.img2"/>
                <img v-bind:src="product.img3"/> -->
            </div>

            <div class="product-child">
                <h1>
                    {{product.title}}
                </h1>

                <b>
                    €. {{product.price}}
                </b>
                <br>
                <b class="altprice" v-if="product.altprice != null">
                    €. {{product.altprice}}
                </b>

                <h3>
                    quick overview
                </h3>
                <p>
                    {{product.overview}}
                </p>

                <h3>
                    size
                </h3>
                <ul>
                    <li>
                        {{product.size}}
                    </li>
                </ul>

                <h3>
                    length
                </h3>
                <ul>
                    <li>
                        {{product.length}}
                    </li>
                </ul>

                <div class="cartinteract">
                    <form action="post">
                        <label for="quantity" class="quantity">
                            quantity:
                        </label>
                        <br>
                        <input type="number" name="quantity" min="1" value="1">
                        <input type="submit" value="add to cart">
                    </form>
                    <ul>
                        <li>
                            <button>
                                + Add to Wishlist
                            </button>
                        </li>
                        <li>
                            <button>
                                + Add to Compare
                            </button>
                        </li>
                        <li>
                            <button>
                                + Email to a Friend
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div>
            <tabs>
                <tab name="product description">
                    {{product.description}}
                </tab>
                <tab name="additional information">
                    {{product.information}}
                </tab>
                <tab name="reviews">
                    {{product.review}}
                </tab>
                <tab name="product tags">
                    {{product.tags}}
                </tab>
            </tabs>
        </div>
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
