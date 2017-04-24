<template>
	<div class="header">
		<div class="content-wrapper">
			<div class="iconImg">
				<img :src="seller.avatar" width="60px" height="60px">
			</div>
			<div class="content">
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{ seller.name }}</span>
				</div>
				<div class="description">
					{{ seller.description }} / {{seller.deliveryTime }}
				</div>
				<div class="supports" v-if="seller.supports">
					<span class="icon" :class="classMap[seller.supports[0].type]"></span>
					<span class="text">{{ seller.supports[0].description }}</span>
				</div>
			</div>
			<div v-if="seller.supports" class="support-count">
				<span class="count">{{ seller.supports.length }}个</span>
				<span class=""></span>
			</div>
		</div>
		<div class="bulletin-wrapper">
				<span class="bulletin-title"><span></span></span>
				<span class="bulletin-text">{{ seller.bulletin }}</span>
			</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props: {
			seller: {
				type: Object
			}
		},
		created() {
			this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus" scroped>
@import "../../common/stylus/mixin.styl"
.header
	background: #999
	color: #fff
	.content-wrapper
		position: relative
		padding: 24px 12px 18px 24px
		font-size: 0
		.iconImg
			display: inline-block
			vertical-align: top
			img
				border-radius: 2px
		.content
			display: inline-block
			margin-left: 14px
			font-size: 14px
			.title
				margin: 2px 0 8px 0px
				.brand
					display: inline-block
					vertical-align: top
					width: 30px
					height: 18px
					bg-image('brand')
					background-size: 30px 18px
					background-repeat: no-repeat
				.name
					font-size: 16px
					margin-left: 4px
					line-height: 18px
			.description
				margin-bottom: 10px
				line-height: 12px
				font-size: 12px
				
			.supports
				.icon
					display: inline-block
					vertical-align: top
					magin-right: 4px
					width: 12px
					height: 12px
					background-size: 12px 12px
					background-repeat: no-repeat
					&.decrease
						bg-image('decrease_1')
					&.discount
						bg-image('discount_1')
					&.guarantee
						bg-image('guarantee_1')
					&.invoice
						bg-image('invoice_1')
					&.special
						bg-image('special_1')
				.text
					line-height: 12px
					font-size:10px
			.support-count
				position: absolute
				right: 12px
				bottom: 18px
				padding: 0 8px
				height: 24px
				line-height: 24px
				border-radius: 14px
				background: rgba(0,0,0,0.2)
				text-align: center
				.count
					font-size: 10px
	.bulletin-wrapper
		position: relative
		height: 28px
		line-height: 28px
		padding: 0 22px 0 12px
		white-space: nowrap
		overflow: hidden
		text-overflow: ellipsis
		// font-size: 0px
		.bulletin-title
			display: inline-block
			vertical-align: top
			width: 22px
			height: 12px
			margin-top: 7px
			bg-image('bulletin')
			background-size: 22px 12px
			background-repeat: no-repeat
		.bulletin-text
			vertical-align: top
			margin: 0 4px
			font-size: 10px	
				

</style>
