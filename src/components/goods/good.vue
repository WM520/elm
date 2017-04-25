<template>
	<div class="goods">
		<div class="menu-wrapper">
			
				<ul>
					<li v-for="item in goods" class="menu-item">
						<span class="text border-1px">
							<span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
							{{ item.name }}
						</span>
					</li>
				</ul>
			</div>
		
		<div class="good-wrapper"></div>
	</div>
	

</template>
<script type="text/javascript">
const ERR_OK = 0
	export default {
		data() {
			return {
				goods: []
			}
		},
		created() {
			this.$http.get('/api/goods').then((response) => {
				response = response.body
				if (response.errno === ERR_OK) {
					this.goods = response.data
				}
			})
			this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus" scroped>
@import "../../common/stylus/mixin.styl"

.goods
	display: flex
	overflow: hidden
	position: absolute
	width: 100%
	bottom: 46px
	top: 174px
	background: red
	.menu-wrapper
		flex: 0 0 80px
		width: 80px
		background: #f3f5f7
		.menu-item
			display: table
			height: 54px
			padding: 0 12px
			width: 56px
			line-height: 14px
			.icon
				display: inline-block
				vertical-align: top
				magin-right: 2px
				width: 12px
				height: 12px
				background-size: 12px 12px
				background-repeat: no-repeat
				&.decrease
					bg-image('decrease_3')
				&.discount
					bg-image('discount_3')
				&.guarantee
					bg-image('guarantee_3')
				&.invoice
					bg-image('invoice_3')
				&.special
					bg-image('special_3')
			.text
				display: table-cell
				font-size: 12px
				width: 56px
				vertical-align: middle
				border-1px(rgba(7,17,27,0.3))
				
			
</style>
