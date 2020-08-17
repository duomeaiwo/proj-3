<template>
	<div class="layout">
		<header class="app_header">
			<div class="home_btn" @click="jump_to()">首页</div>
			<el-menu
				:default-active="active_index"
				mode="horizontal"
				@select="handleSelect"
				background-color="#545c64"
				text-color="#fff"
				active-text-color="#ffd04b"
			>
				<!-- <el-submenu index="1">
					<template slot="title">项目处理</template>
					<el-menu-item index="report">项目申报</el-menu-item>
					<el-menu-item index="upload">文件上传</el-menu-item>
					<el-menu-item index="">外部</el-menu-item>
				</el-submenu>
				<el-submenu index="2">
					<template slot="title">趋势分析</template>
					<el-menu-item index="trend">各类走势</el-menu-item>
					<el-menu-item index="distribution">地图分布</el-menu-item>
					<el-menu-item index="projList">项目列表</el-menu-item>
				</el-submenu>
				<el-menu-item index="">外部</el-menu-item> -->
				<el-submenu index="1">
					<template slot="title">服务</template>
					<el-menu-item index="report">申报</el-menu-item>
					<el-menu-item index="trend">成果展示</el-menu-item>
					<!-- <el-menu-item index="" disabled>外部</el-menu-item> -->
				</el-submenu>
			</el-menu>
			<div class="login" @click="login">
				<i class="iconfont icon-icon"></i>
				<span>Log In</span>
			</div>
		</header>
		<section class="app_main">
			<router-view />
		</section>
		<footer class="app_footer clearfix">
			<!-- <ul v-for="item in list">
				<li v-for="x in item" @click="jump_to(x.name)">
					<el-button type="text">{{x.name}}</el-button>
				</li>
			</ul> -->
		</footer>
	</div>
</template>

<script>
export default {
	name: 'layout',
	data() {
		return {
			active_index: '1',
			list: [
				[
					{name: 'about us'},
					{name: 'services'},
					{name: 'clients'},
					{name: 'cancers'},
				],
				[
					{name: 'support'},
					{name: 'new flashers'},
					{name: 'licenses'},
				],
				[
					{name: 'follow us'},
					{name: 'any other options'},
					{name: 'clients'},
					{name: 'cancers'},
				]
			]
		}
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath)
			this.$router.push('/'+key)
		},
		login() {
			this.$router.push('/login')
		},
		jump_to() {
			this.$router.push('/')
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../assets/baseColor.scss';

.layout {
    .app_header {
		width: 100%;
		position: relative;
		.home_btn {
			width: 100px;
			height: 100%;
			background-color: #fff;
			cursor: pointer;    
			position: absolute;
			left: 0;
			top: 0;
			z-index: 1;
			line-height: 53px;
			font-size: 16px;
			border: 5px solid #ccc;
			box-sizing: border-box;
			text-align: center;
		}
		.home_btn:hover {
			font-weight: bold;
			color: $mainBlue;
		}
		.el-menu {
			padding-left: 100px
		}
		.login {
			width: 150px;
			position: absolute;
			right: 20px;
			top: 14px;
			color: #fff;
			cursor: pointer;
			i {
				font-size: 28px;
			}
			span {
				position: relative;
				top: -2px;
				margin-left: 4px;
			}
		}
	}
	.app_main {
		min-height: 300px;
		background-color: #f4f4f4;
    	padding: 50px 100px;
	}
	.app_footer {
		width: 100%;
		background-color: $baseColor;
		padding: 0 100px;
		ul {
			list-style: none;
			float: left;
			min-width: 160px;
			text-align: center;
			.el-button {
				color: #fff;
			}.el-button:hover {
				color: $activeTextColor;
			}
		}
	}
}
</style>
