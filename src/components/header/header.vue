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
				<div v-if="seller.supports" class="support-count" @click="showDetail">
					<span class="count">{{ seller.supports.length }}个</span>
					<span class=""></span>
				</div>
			</div>
		</div>
		<div class="bulletin-wrapper" @click="showDetail">
				<span class="bulletin-title"><span></span></span>
				<span class="bulletin-text">{{ seller.bulletin }}</span>
		</div>
		<div class="background">
			<img :src="seller.avatar" width="100%" height="100%">
			<!-- <img :src="seller.avatar" width="100%" height="100%"> -->
		</div>
		<div v-show="detailShow" class="detail" transition="fade">
			<div class="detail-wrapper clearfix">
				<div class="detail-main">
					<h1 class="name">{{ seller.name }}</h1>
					<div class="star-wrapper">
						<star :size="48" :score="seller.score"></star>
					</div>
					<div class="title">
						<div class="line"></div>
						<div class="text">优惠信息</div>
						<div class="line"></div>
					</div>
					<ul v-if="seller.supports" class="supports">
						<li class="support-item" v-for="item in seller.supports">
							<span class="icon" :class="classMap[item.type]"></span>
							<span class="text">{{ item.description }}</span>
						</li>
					</ul>
					<div class="title">
						<div class="line"></div>
						<div class="text">商家公告</div>
						<div class="line"></div>
					</div>
					<div class="bulletin">
						<p class="content">{{ seller.bulletin }}</p>
					</div>
				</div>
			</div>
			<div class="detail-close" @click="hideDetail">
				<i class="icon-close"></i>
			</div>

		</div>
	</div>
</template>
<script type="text/javascript">
import Star from '@/components/star/star.vue'
	export default {
		props: {
			seller: {
				type: Object
			}
		},
		data() {
			return {
				detailShow: false
			}
		},
		created() {
			this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
		},
		methods: {
			showDetail() {
				this.detailShow = true
			},
			hideDetail() {
				this.detailShow = false
			}
		},
		components: {
			Star
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus" scroped>
@import "../../common/stylus/mixin.styl"
.header
	position: relative
	color: #fff
	overflow: hidden
	background: rgba(7,17,27,0.2)
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
		background: rgba(7,17,27,0.2)
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
	.background
		position:absolute
		left: 0
		top: 0
		width: 100%
		height: 100%
		z-index: -1	
		filter: blur(10px)	// 模糊效果
	.detail
		position: fixed
		z-index: 100
		top: 0
		left: 0
		width: 100%
		height: 100%
		overflow: auto
		transition: all 0.5s
		background: rgba(7,17,27,0.8)
		.fade-transition
			opacity: 1
			background: rgba(7,17,27,0.8)
		.fade-enter
			opacity: 0
			background: rgba(7,17,27,0)
		.fade-leave
			opacity: 0
			background: rgba(7,17,27,0)
		.detail-wrapper
			min-height: 100%
			width: 100%
			.detail-main
				margin-top: 64px
				padding-bottom: 64px
				.name
					line-height: 16px
					text-align: center
					font-size: 16px
					font-weight: 700
				.star-wrapper
					margin-top: 18px
					padding: 2px 2px
					text-align: center
				.title
					display: flex
					width: 80%
					margin: 28px auto 24px auto
					.line
						flex: 1
						position: relative
						top: -6px
						border-bottom: 1px solid rgba(255, 255, 255, 0.2)
					.text
						padding: 0 12px
						font-weight: 700
						font-size: 14px
				.supports
					width: 80%
					margin: 0 auto 
					.support-item
						padding: 0 12px 
						margin-bottom: 12px
						font-size: 0
						&:last-child
							margin-bottom: 0
						.icon
							display: inline-block
							width: 16px
							height: 16px
							vertical-align: top
							margin-right: 6px
							background-repeat: no-repeat
							background-size: 16px 16px
							&.decrease
								bg-image('decrease_2')
							&.discount
								bg-image('discount_2')
							&.guarantee
								bg-image('guarantee_2')
							&.invoice
								bg-image('invoice_2')
							&.special
								bg-image('special_2')
						.text
							line-height: 16px
							font-size: 12px
				.bulletin
					width: 80%
					margin: 0 auto
					.content
						padding: 0 12px
						line-height: 24px
						font-size: 14px
							
		.detail-close
			position: relative
			width: 32px
			height: 32px
			margin: -64px auto 0 auto
			clear: both
			font-size: 32px

</style>
