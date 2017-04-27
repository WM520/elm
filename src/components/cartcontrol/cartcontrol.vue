<template>
	<div class="cartcontrol">
		<div class="cart-decrease icon-remove_circle_outline" v-show="this.food.count > 0" @click="reduceCart($event)"></div>
		<div class="cart-count" v-show="this.food.count > 0">{{this.food.count}}</div>
		<div class="cart-add icon-add_circle" @click= "addCart($event)"></div>
	</div>
</template>
<script type="text/javascript">
import Vue from 'vue'
	export default {
		props: {
			food: {
				type: Object
			}
		},
		created() {
			// console.log(this.food)
		},
		methods: {
			addCart(event) {
				if (!event._constructed) {
					return
				}
				if (!this.food.count) {
					Vue.set(this.food, 'count', 1)
				} else {
					this.food.count ++
				}
			},
			reduceCart($event) {
				if (!event._constructed) {
					return
				}
				if (this.food.count > 0) {
					this.food.count --
				}
			}
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus" scroped>
@import "../../common/stylus/mixin.styl"
	.cartcontrol
		font-size: 0
		.cart-decrease, .cart-add
			display: inline-block
			line-height: 24px
			font-size: 24px
			padding: 6px
			color: rgb(0, 160, 220)
		.cart-count
			display: inline-block
			vertical-align: top
			width: 12px
			padding-top: 6px
			line-height: 24px
			text-align: center
			font-size: 10px
			color: rgb(147, 153, 159)
		.cart-add
			display: inline-block
</style>
