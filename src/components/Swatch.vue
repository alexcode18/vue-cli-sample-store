<template>
 
    <!-- <li>made it to swatches {{ swatch.color }}</li> -->
    <li :class="'variant-color color-'+ swatch.color" :style="{backgroundColor: swatch.color}"></li>
</template>
<script>
export default {
    name: 'Swatch',
    props: [
        "swatch"
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
    
    .variant-color.selected {
        color: red;
        border: 1px solid red;
    }

    .variant-size,
    .variant-color {
        padding: .5em 1em;
        margin: .2em;
        display: inline;
        list-style: none;
    }

    .variant-size {
        border: 1px thin grey;
    }
</style>