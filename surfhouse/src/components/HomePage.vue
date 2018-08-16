<template>
    <section>
        <div class="placeholder">
            <img id="logo" src="../../static/carouselplaceholder.png"/>
        </div>

        <!-- start of the devils work -->
        <div>
            <b-carousel id="carousel1"
            style="text-shadow: 1px 1px 2px #333;"
            controls
            indicators
            background="#ababab"
            :interval="4000"
            img-width="1024"
            img-height="480"
            v-model="slide"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd">
                <!-- Text slides with image -->
                <b-carousel-slide
                caption="First slide"
                text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                img-src="https://picsum.photos/1024/480/?image=52">
                </b-carousel-slide>

                <!-- Slides with custom text -->
                <b-carousel-slide
                img-src="https://picsum.photos/1024/480/?image=54">
                    <h1>Hello world!</h1>
                </b-carousel-slide>

                <!-- Slides with image only -->
                <b-carousel-slide
                img-src="https://picsum.photos/1024/480/?image=58">
                </b-carousel-slide>

                <!-- Slides with img slot -->
                <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                <b-carousel-slide>
                    <img
                    slot="img"
                    class="d-block img-fluid w-100"
                    width="1024"
                    height="480"
                    src="https://picsum.photos/1024/480/?image=55"
                    alt="image slot">
                </b-carousel-slide>

                <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                <b-carousel-slide
                caption="Blank Image"
                img-blank
                img-alt="Blank image">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
                    </p>
                </b-carousel-slide>

            </b-carousel>

            <p class="mt-4">
                Slide #: {{ slide }}
            <br>
                Sliding: {{ sliding }}
            </p>
        </div>
        <!-- end of the devils work -->

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
import bCarousel from 'bootstrap-vue/es/components/carousel/carousel';


export default {
    name: 'HomePage',
    // array of product date retrieved on page creation with getProducts method
    data: function() {
        return {
            products: [],
            slide: 0,
            sliding: null
        };
    },
    // calls the getProducts method when page is created
    created: function() {
        this.getProducts();
    },
    methods: {
        onSlideStart (slide) {
            this.sliding = true
        },
        onSlideEnd (slide) {
            this.sliding = false
        },
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

