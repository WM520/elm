<template>
	<div class="goods">
		<div class="menu-wrapper" ref="menu">
			
				<ul>
					<li v-for="(item, index) in goods" class="menu-item" :class="{'current':currentIndex===index}" @click="selectMenu(index,$event)">
						<span class="text border-1px">
							<span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
							{{ item.name }}
						</span>
					</li>
				</ul>
			</div>
		
		<div class="good-wrapper" ref="good">
			<ul>
				<li v-for="item in goods" class="food-list food-list-hook">
					<h1 class="title">{{item.name}}</h1>
					<ul>
						<li v-for="food in item.foods" class="food-item border-1px">
							<div class="icon">
								<img :src="food.icon" width="57px" height="57px">
							</div>
							<div class="content">
								<h2 class="name">{{food.name}}</h2>
								<p class="desc">{{food.description}}</p>
								<div class="extra">
									<span class="count">月售{{food.sellCount}}份</span><span class="rating">好评率{{food.rating}}</span>
								</div>
								<div class="price">
									<span class="now">${{food.price}}</span>
									<span v-show="food.oldPrice" class="old">${{food.oldPrice}}</span>
								</div>
								<div class="cartcontrol-wrapper">
									<cartcontrol :food="food"></cartcontrol>
								</div>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	<shopCart :select-foods="selectFoods" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopCart>
	</div>
	

</template>
<script type="text/javascript">
import BScroll from 'better-scroll'
import shopCart from '@/components/shop/shop'
import cartcontrol from '@/components/cartcontrol/cartcontrol'
const ERR_OK = 0
	export default {
		props: {
			seller: {
				type: Object
			}
		},
		data() {
			return {
				goods: [],
				listHeight: [],
				scrollY: 0
			}
		},
		created() {
			this.$http.get('/api/goods').then((response) => {
				response = response.body
				if (response.errno === ERR_OK) {
					this.goods = response.data
					this.$nextTick(() => {
						this._initScroll()
						this._calculateHeight()
					})
				}
			})
			this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
		},
		computed: {
			currentIndex() {
				for (var i = 0; i < this.listHeight.length - 1; i++) {
					let height1 = this.listHeight[i]
					let height2 = this.listHeight[ i + 1 ]
					if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
						// console.log(i)
						return i
					}
				}
				return 0
			},
			selectFoods() {
				let foods = []
				this.goods.forEach((good) => {
					good.foods.forEach((food) => {
						if (food.count) {
							foods.push(food)
						}
					})
				})
				return foods
			}
		},
		methods: {
			selectMenu(index, event) {
				if (!event._constructed) {
					return
				}
				let foodList = this.$refs.good.getElementsByClassName('food-list-hook')
				let el = foodList[index]
				this.foodsScroll.scrollToElement(el, 300)
			},
			_initScroll() {
				this.menuScroll = new BScroll(this.$refs.menu, {
					click: true
				})
				this.foodsScroll = new BScroll(this.$refs.good, {
					probeType: 3,
					click: true
				})
				this.foodsScroll.on('scroll', (pos) => {
					this.scrollY = Math.abs(Math.round(pos.y))
				})
			},
			_calculateHeight() {
				let foodList = this.$refs.good.getElementsByClassName('food-list-hook')
				let height = 0
				this.listHeight.push(height)
				for (var i = 0; i < foodList.length; i++) {
					let item = foodList[i]
					height += item.clientHeight
					this.listHeight.push(height)
				}
			}
		},
		components: {
			shopCart,
			cartcontrol
		}

	}
</script>
<style lang="stylus" rel="stylesheet/stylus" scroped>
@import "../../common/stylus/mixin.styl"
@import "../../common/css/good"
						
			
</style>
