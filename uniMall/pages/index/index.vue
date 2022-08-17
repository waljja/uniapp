<template>
	<view>
        <u-navbar
            leftText="返回"
            title="个人中心"
            :safeAreaInsetTop="false"
        >
            <view
                class="u-nav-slot"
                slot="left"
            >
                <u-icon
                    name="arrow-left"
                    size="19"
                ></u-icon>
                <u-line
                    direction="column"
                    :hairline="false"
                    length="16"
                    margin="0 8px"
                ></u-line>
                <u-icon
                    name="home"
                    size="20"
                ></u-icon>
            </view>
        </u-navbar>
	</view>
</template>

<script setup>
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
