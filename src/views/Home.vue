<template>
    <div class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        <Product v-for="product in products" :product="product" />
    </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import EventCard from "@/components/EventCard.vue";
import Product from "@/components/Product.vue";
import Cart from "@/components/Cart.vue";

export default {
    name: "home",
    components: {
        HelloWorld,
        EventCard,
        Product,
        Cart
    },
    props: [],
    data() {
        return {
            products: []
        }
    },
    mounted: function() {
        this.products = [{
                productType: "Socks",
                description: "A pair of warm, fuzzy socks",
                link: "http://www.google.com",
                sizes: [{ letter: 's' }, { letter: 'm' }, { letter: 'l' }],
                variants: [
                    { id: 0, color: 'black', variantImg: 'https://www.rlmedia.io/is/image/PoloGSI/s7-359044_lifestyle?$rl_506_630$', inStock: 5 },
                    { id: 1, color: 'grey', variantImg: 'https://www.rlmedia.io/is/image/PoloGSI/s7-318383_lifestyle?$rl_506_630$', inStock: 2 },
                    { id: 2, color: 'navy', variantImg: 'https://www.rlmedia.io/is/image/PoloGSI/s7-318384_lifestyle?$rl_506_630$', inStock: 10 }
                ]
            },
            {
                productType: "Rugby",
                description: "A Cotton Rugby Shirt",
                link: "http://www.google.com",
                sizes: [{ letter: 's' }, { letter: 'm' }, { letter: 'l' }],
                variants: [
                    { id: 0, color: 'green', variantImg: 'https://www.rlmedia.io/is/image/PoloGSI/s7-1313905_lifestyle?$rl_506_630$', inStock: 5 },
                    { id: 1, color: 'navy', variantImg: 'https://www.rlmedia.io/is/image/PoloGSI/s7-1313904_lifestyle?$rl_506_630$', inStock: 10 }
                ]
            }
        ]
    }

};
</script>