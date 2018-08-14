<template>
    <section>

        <img v-bind:src="product.img1"/>
        <img v-bind:src="product.img2"/>
        <img v-bind:src="product.img3"/>

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

        <h4>
            product description
        </h4>
        <p>
            {{product.description}}
        </p>

        <h4>
            additional information
        </h4>
        <p>
            {{product.information}}
        </p>

        <h4>
            reviews
        </h4>
        <p>
            {{product.review}}
        </p>

        <h4>
            product tags
        </h4>
        <p>
            {{product.tags}}
        </p>

        <div>
            <tabs>
                <tab name="First tab">
                    First tab content
                </tab>
                <tab name="Second tab">
                    Second tab content
                </tab>
                <tab name="Third tab">
                    Third tab content
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
