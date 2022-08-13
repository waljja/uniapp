<template>
	<view class="content">
		<view>
			<view :style="'height:' + s_top + 'px;'"></view>
		</view>
	</view>
</template>

<script setup>
	import {onMounted, reactive, toRefs} from 'vue'
	
	const search_data = reactive({
		s_height: 0,
		s_top: 0
	})
	const {s_height, s_top} = toRefs(search_data)
	
	onMounted(() => {
		capSule()
	})
	
	//获取胶囊按钮的位置数据
	function capSule() {
		const but_data = wx.getMenuButtonBoundingClientRect()
		console.log(but_data)
		search_data.s_height = but_data.top
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
