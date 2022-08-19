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
		
		<IndexSwiper></IndexSwiper>
	</view>
</template>

<script>
	import IndexSwiper from '@/components/index/IndexSwiper.vue'
	import Recommend from '@/components/index/@/components/index/Recommend.vue'
	
	export default {
		components: {
			IndexSwiper,
			Recommend
		},
		data() {
			return {
				
			}
		},
		methods: {
			
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
