<template>
  <div id="app">
		<header>
			<img class="logo" src="./assets/logo.png" alt="">
			<div class="header-nav">
				<div class="nav-aside">
					<a v-for="item in $t('nav')" :key="item" href="javascript:void(0)">{{item}}</a>
				</div>
				<el-dropdown trigger="click" @command="menuEvent">
					<span class="el-dropdown-link">
						中文
						<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item command="zh">中文</el-dropdown-item>
						<el-dropdown-item command="zh-tw">繁体</el-dropdown-item>
						<el-dropdown-item command="en">English</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</header>
  </div>
</template>

<script>
export default {
  name: 'App',
	data () {
		return {

		}
	},
	methods: {
		menuEvent (command) {
			this.$i18n.locale = command
		}
	}
}
</script>

<style lang="scss">
	html,
	body {
		margin: 0;
	}
	header {
		width: 65%;
		margin: 0 auto;
		display: flex;
		font-size: 20px;
		line-height: 100px;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #dcdfe6;
		.logo {
			height: 60px;
		}
		
		.header-nav {
			display: flex;
			.nav-aside a {
				margin-right: 50px;
				color: #1989fa;
				text-decoration: none;
			}
			.el-dropdown {
				font-size: 24px;
			}
		}
	}
	
	.el-dropdown-link {
		cursor: pointer;
		color: #888888;
	}
	.el-icon-arrow-down {
		font-size: 12px;
	}
	
	.el-dropdown-menu {		
		.el-dropdown-menu__item {
			font-size: 20px;
			line-height: 50px;
		}
	}
</style>
