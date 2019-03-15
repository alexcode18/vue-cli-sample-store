<template>
 
    <!-- <li>made it to swatches {{ swatch.color }}</li> -->
    <p>Cart</p> 
    <CartItem v-for="cartItem of store.getters.getCart()" />
</template>
<script>

import CartItem from "@/components/CartItem.vue"

export default {
    name: 'Cart',
    components: {
        CartItem
    },
    props: [
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