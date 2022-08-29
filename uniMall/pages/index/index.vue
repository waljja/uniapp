<template>
	<view class="index">
		<!-- #ifdef H5 -->
		<view class="wx-nav">
			<view class="iconfont icon-fangdajing"></view>
			<text style="font-size: 23px;">识货</text>
			<view class="iconfont icon-xiaoxi"></view>
		</view>
		<!-- #endif -->
		
		<!-- #ifdef MP-WEIXIN -->
        <view class="wx-nav">
			<view class="iconfont icon-fangdajing"></view>
			<text>识货</text>
			<view class="iconfont icon-xiaoxi"></view>
		</view>
		<!-- #endif -->
		
		<Banner></Banner>
		<IndexSwiper></IndexSwiper>	
		<Icons></Icons>
		<Recommend></Recommend>
		<Card cardTitle='猜你喜欢'></Card>
		<CommodityList></CommodityList>
		<Hot></Hot>
		<Shop></Shop>
	</view>
</template>

<script>
	import IndexSwiper from '@/components/index/IndexSwiper.vue'
	import Recommend from '@/components/index/Recommend.vue'
	import Card from '@/components/common/Card.vue'
	import CommodityList from '@/components/common/CommodityList.vue'
	import Banner from "@/components/index/Banner.vue"
	import Icons from "@/components/index/Icons.vue"
	import Hot from "@/components/index/Hot.vue"
	import Shop from "@/components/index/Shop.vue"
	
	export default {
		components: {
			IndexSwiper,
			Recommend,
			Card,
			CommodityList,
			Banner,
			Icons,
			Hot,
			Shop
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style scoped>
	.wx-nav {
		height: 200rpx;
		width: 100%;
		line-height-step: 200rpx;
		text-align: center;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
