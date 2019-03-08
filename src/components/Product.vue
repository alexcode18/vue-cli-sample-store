<template>
	<div class="product">
		<img class="product-image" :src="image">
		<div class="product-details-container">
			<h1>{{ prodTitle }}</h1>
			<p v-if="onSale()">On Sale!</p>
			<p>{{ product.description }}</p>
			<a :href="product.link">Shop</a>
			<ul class="color-variants">
				<Swatch v-for="(variant, index) of product.variants" :swatch="variant" :class="{ selected : variant.id == currentVariant['color'] }" :key="index" @click.native="updateColor(variant.id)" />
			</ul>
			<ul class="size-variants">
				<ProductSize v-for="(size, index) of product.sizes" :size="size" :class="{ selected : size.letter == currentVariant['size'] }" :key="index" @click.native="updateSize(index)" />
			</ul>
			<button @click="increaseItem" :class="'num-item-button increase-num-item-button'">More</button>
			<button @click="decreaseItem" :class="'num-item-button decrease-num-item-button ' + { disabledButton: !cartReady }" :disabled="!greaterThanOne">Less</button>
			<p>You have {{ inCart }} in your cart</p>
			<p v-if="!cartReady">There are only {{product.variants[currentVariant].inStock}} in stock</p>
			<button @click="addToCart" :class="'add-cart-button ' + { disabledButton: !cartReady }" :disabled="!cartReady">Add to Cart</button>
		</div>
	</div>

</template>


<script>
	import Swatch from "@/components/Swatch.vue"
	import ProductSize from "@/components/ProductSize.vue"

	export default {
		components: {
			Swatch,
			ProductSize
		},
		name: "Product",
		props: [
			"product",
		],
		data() {
			return {
				currentVariant: {
					'color': 0,
					'size': this.product.sizes[0].letter
				},
				inCart: 1
			}
		},
		// Computed is ideal for actions that only need to be referred to once.
		computed:{
			greaterThanOne () {
				return this.inCart>=1;
			},
			cartReady () {
				return this.inCart>=1 && this.inCart <= this.product.variants[this.currentVariant['color']].inStock;
			},
			prodTitle () {
				return this.product.productType + ' - ' + this.color();
			},
			image () {
				console.log('reaching image function');
				console.log(this.product.variants[this.currentVariant['color']].variantImg);
				return this.product.variants[this.currentVariant['color']].variantImg;
			}
		},
		// Functions that are replicated often. More likely to 
		methods: {
			increaseItem () {
				this.inCart += 1;
			},
			decreaseItem () {
				this.inCart -= 1;
			},
			addToCart () {
				cartItem = {
					productID: this.product.variants[this.currentVariant['color']],
					productQuantity: this.inCart,
					productColor: this.product.variants[this.currentVariant['color']].color
				}
				this.$emit('add-to-cart', cartItem );
			},
			onSale (){
				return this.product.inCart>4;
			},
			updateColor(id) {
				console.log('reaching updateColor');
				this.currentVariant.color = id;
			},
			updateSize(id) {
				console.log('reaching updateSize');
				this.currentVariant.size = this.product.sizes[id].letter;
			},
			color() {
				return this.product.variants[this.currentVariant['color']].color;
			}
		},
		created: function() {
		},
		mounted: function() {
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

	ul {
	  padding: 0;
	}

    ul.size-variants,
    ul.color-variants {
        padding-top: .5em;
        padding-bottom: .5em;
    }

</style>