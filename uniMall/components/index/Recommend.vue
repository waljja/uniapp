<template>
	<view class="recommend bg-color">
		<view class="recommend-item">
			<image class="item-big" src="../../static/banner/女装.jpg" mode=""></image>
			<view class="item-small">
				<image class="item-img" src="../../static/banner/NMD菲董黄.jpg" mode=""></image>
				<image class="item-img" src="../../static/banner/NMD黑红.jpg" mode=""></image>
			</view>
		</view>
		
		<view class="recommend-item">
			<image class="item-big" src="../../static/banner/女装.jpg" mode=""></image>
			<view class="item-small">
				<image class="item-img" src="../../static/banner/DUNK熊猫.jpg" mode=""></image>
				<image class="item-img" src="../../static/banner/style36蓝.jpg" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "Recommend",
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.recommend {
		padding: 20rpx;
	}
	.recommend-item {
		display: flex;
		flex-direction: column;
		border-radius: 20rpx;
		border: 2rpx solid #CCCCCC;
		overflow: hidden;
		margin: 20rpx 0;
	}
	.item-big {
		width: 100%;
		height: 300rpx;
	}
	.item-small {
		width: 100%;
		height: 240rpx;
	}
	.item-img {
		width: 50%;
		height: 240rpx;
	}
</style>