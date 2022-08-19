<template>
	<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
		<swiper-item>
			<view class="swiper-item" >
				<image class="banners-img" src="../../static/banner/AJ1灰.jpg" mode=""></image>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">
				<image class="banners-img" src="../../static/banner/NMD白.jpg" mode=""></image>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">
				<image class="banners-img" src="../../static/banner/NMD黑白.jpg" mode=""></image>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">
				<image class="banners-img" src="../../static/banner/NMD绿.jpg" mode=""></image>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">
				<image class="banners-img" src="../../static/banner/UB20.jpg" mode=""></image>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">
				<image class="banners-img" src="../../static/banner/贝壳头.jpg" mode=""></image>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		name: "IndexSwiper",
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	swiper {
		width: 100%;
		height: 400rpx;
	}
	.banners-img {
		width: 100%;
		height: 400rpx;
	}
</style>
