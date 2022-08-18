<template>
	<view class="index">
		<!-- #ifdef H5 -->
		<view class="wx-nav">
			<view class="iconfont icon-fangdajing" style="height: 100px; width: 100px;"></view>
			<text>识货</text>
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
	</view>
</template>

<script setup>
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
