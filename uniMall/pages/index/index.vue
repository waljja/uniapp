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
		
		<scroll-view scroll-x="true" :scroll-into-view="scrollIntoView" class="scroll-content">
			<view :id="'top' + index" class="scroll-item" v-for="(item, index) in topBar" :key="index" @tap="changeTab(index)">
				<text>{{item.name}}</text>
			</view>
		</scroll-view>
		
		<swiper @change="onChangeTab" :current="topBarIndex" :style="'height: ' + dynHeight + 'px;'">
			<swiper-item v-for="(item, index) in topBar" :key="index">
        <view class="home">
          <Banner></Banner>
          <IndexSwiper></IndexSwiper>
          <Icons></Icons>
          <Recommend></Recommend>
          <Card cardTitle='猜你喜欢'></Card>
          <CommodityList></CommodityList>
          <Card cardTitle="热销爆品"></Card>
          <Hot></Hot>
          <Card cardTitle="推荐店铺"></Card>
          <Shop></Shop>
          <card cardTitle="为您推荐"></card>
          <CommodityList></CommodityList>
        </view>
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
        dynHeight: 0,
				topBarIndex: 0,
        scrollIntoView: "top0",
				topBar: [
					{ name: "大幅度快捷方式的" },
					{ name: "大富科技大幅度" },
					{ name: "地方的" },
					{ name: "大幅度" },
					{ name: "大幅度发" },
					{ name: "就看见" }
				]
			}
		},
		methods: {
			changeTab(index) {
				if(this.topBarIndex === index) {
					return
				}
				this.topBarIndex = index
        this.scrollIntoView = "top" + index // 点击滑块切换视图
			},
			onChangeTab(e) {
				this.changeTab(e.detail.current)
			}
		},
    onReady() {
      let view = uni.createSelectorQuery().select(".home") // 获取结点
      view.boundingClientRect(data => {
        this.dynHeight = data.height // 计算高度值
      }).exec()
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
