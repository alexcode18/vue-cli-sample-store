<template>
 
    <!-- <li>made it to swatches {{ swatch.color }}</li> -->
    <div class="cart">
        <CartItem v-for="cartItem of cartItems" :cart-item="cartItem" />
    </div>
</template>
<script>

import CartItem from "@/components/CartItem.vue"

export default {
    name: 'Cart',
    components: {
        CartItem
    },
    props: [
        "cart-item"
    ],
    data() {
        return {
           
        }
    },
    mounted: function() {
    },

    methods: {


    },
    computed: {


    },
    watch: {

    }
}
</script>

<style lang="css">
    
</style>