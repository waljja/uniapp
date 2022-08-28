<template>
	<view class="shop">
		<view class="shop-item">
			<view class="img-big">
				<image class="img-big" src="../../static/banner/2.jpg" mode=""></image>
				<scroll-view scroll-x="true" class="scroll-content">
					<view class="scroll-item" >
						<Commodity :dataList="shopList" wrap="no"></Commodity>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import Commodity from "@/components/common/Commodity.vue"
	
	export default {
		name: "Shop",
		components: {
			Commodity
		},
		data() {
			return {
				shopList: [
					{
						id: 1,
						imgUrl: "../../static/commodity/裙子绿.jpg",
						name: "裙子绿",
						pprice: "1000",
						dprice: "2000",
						discount: "5"
					},
					{
						id: 2,
						imgUrl: "../../static/commodity/裙子白.jpg",
						name: "裙子白",
						pprice: "1000",
						dprice: "2000",
						discount: "5"
					},
					{
						id: 3,
						imgUrl: "../../static/commodity/裙子红.jpg",
						name: "裙子红",
						pprice: "1000",
						dprice: "2000",
						discount: "5"
					},
					{
						id: 4,
						imgUrl: "../../static/commodity/女装.jpg",
						name: "女装",
						pprice: "1000",
						dprice: "2000",
						discount: "5"
					},
					{
						id: 5,
						imgUrl: "../../static/commodity/1.jpg",
						name: "手机",
						pprice: "1000",
						dprice: "2000",
						discount: "5"
					},
					{
						id: 6,
						imgUrl: "../../static/commodity/2.jpg",
						name: "折叠",
						pprice: "1000",
						dprice: "2000",
						discount: "5"
					}
				]
			}
		}
	}
</script>

<style scoped>
	.img-big {
		width: 100%;
		height: 350rpx;
	}
	.scroll-content {
		width: 100%;
		white-space: nowrap;
	}
	.scroll-item {
		display: inline-block;
	}
</style>