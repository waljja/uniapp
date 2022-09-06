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
		
		<scroll-view scroll-x="true" class="scroll-content">
			<view class="scroll-item" v-for="(item, index) in topBar" :key="index" @tap="changeTab(index)">
				<text>{{item.name}}</text>
			</view>
		</scroll-view>
		
		<swiper @change="onChangeTab" :current="topBarIndex">
			<swiper-item v-for="(item, index) in topBar" :key="index">
			</swiper-item>
		</swiper>
		
		<Banner></Banner>
		<IndexSwiper></IndexSwiper>	
		<Icons></Icons>
		<Recommend></Recommend>
		<Card cardTitle='猜你喜欢'></Card>
		<CommodityList></CommodityList>
		<Hot></Hot>
		<Shop></Shop>
		<Card cardTitle="为您推荐"></Card>
		<CommodityList></CommodityList>
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
				topBarIndex: 0,
				topBar: [
					{ name: "1" },
					{ name: "2" },
					{ name: "3" },
					{ name: "4" },
					{ name: "5" },
					{ name: "6" }
				]
			}
		},
		methods: {
			changeTab(index) {
				if(this.topBarIndex === index) {
					return
				}
				this.topBarIndex = index
			},
			onChangeTab(e) {
				this.changeTab(e.detail.current)
			}
		},
		onLoad() {
			uni.request({
				url: "http://192.168.50.104:3000/api/index/list/data",
				success: (res) => {
					console.log(res);
				}
			})
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
	.scroll-content {
		width: 100%;
		height: 80rpx;
		white-space: nowrap;
	}
	.scroll-item {
		padding: 10rpx 30rpx;
		display: inline-block;
		font-size: 32rpx;
	}
</style>
