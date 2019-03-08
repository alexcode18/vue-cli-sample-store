<template>
	<div class="product">
		<div class="product-details-container">
			jjjj
			
		</div>
	</div>

</template>

<script>
export default {
	name: "Product2",
	props: ['product'],
	data() {
		return {
			
		}
	},
	// Computed is ideal for actions that only need to be referred to once.
	computed:{
		
		/*prodTitle () {
			return this.product.productType + ' - ' + this.color();
		}*/
	}
}
</script>

<style>

	.product-image,
	.product-details-container {
		display: inline-block;
		width: 45%;
		position: relative;
		vertical-align: top;
	}

	.product-image {
		border: 1px thin grey;
		height: auto;
		background-color: lightblue;
	}

	.product-details-container {
		padding: 2em;
		list-style: none;
	}

	.product-details-container .size-variants .variant-size,
	.product-details-container .color-variants .variant-color {
		padding: .5em 1em;
	    margin: .2em;
		display: inline;
		list-style: none;
	}

	.product-details-container .size-variants .variant-size {
		border: 1px thin grey;
	}

</style>