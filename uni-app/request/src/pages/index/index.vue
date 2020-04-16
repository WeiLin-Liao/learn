<template>
	<view class="content">
		<image @tap="change" class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	import { getApi } from '../../api/index'
	
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad () {
			getApi().then(res => {
				var str = res.data
				
				console.log(str)
			})
		},
		methods: {
			change () {
				this.title = 'Are you ok?'
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
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
