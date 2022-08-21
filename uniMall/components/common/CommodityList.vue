<template>
	<view class="commodity-list">
		<Commodity :dataList='commodityList'></Commodity>
	</view>
</template>

<script>
	import Commodity from './Commodity.vue'
	
	export default {
		name: "CommodityList",
		components: {
			Commodity
		},
		data() {
			return {
				commodityList: [
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
					}
				]
			}
		}
	}
</script>

<style>
	.commodity-list {
		width: 100%;
		height: 800rpx;
	}
</style>