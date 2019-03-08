<template>
 
    <!-- <li>made it to swatches {{ swatch.color }}</li> -->
    <li :class="'variant-size size-'+ size.letter">{{size.letter}}</li>
</template>
<script>
export default {
    name: 'ProductSize',
    props: [
        "size"
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

    .variant-size {
        cursor: pointer;
        border: 1px solid grey;
        padding: .5em 1em;
        margin: .6em .2em;
        display: inline;
        list-style: none;
    }

    .variant-size.selected {
        color: red;
        border: 1px solid red;
    }
</style>