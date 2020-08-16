<template>
	<div class="login" :style="{ height: min_height }">
		<el-form
			ref="loginForm"
			:model="loginForm"
			:rules="rules"
			hide-required-asterisk
			label-position="left"
			label-width="80px"
		>
			<el-form-item label="用户名" prop="username">
				<el-input v-model="loginForm.username"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="pass">
				<el-input
					type="password"
					v-model="loginForm.password"
					autocomplete="off"
				></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="login()">登录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
	name: 'login',
	data() {
		return {
			min_height: '768px',
			loginForm: {
				username: '',
				password: ''
			},
			rules: {
				username: [
					{ required: true, message: '请输入用户名', trigger: 'blur' }
				],
				pass: [
					{ required: true, message: '请输入密码', trigger: 'blur' }
				]
			}
		}
	},
	mounted() {
		this.min_height = window.innerHeight + 'px'
		console.log(this.min_height)
	},
	methods: {
		login() {
			this.$router.push('/homepage')
		}
	},
}
</script>

<style lang="scss" scoped>
@import '../assets/baseColor.scss';

.login {
	background-color: $baseColor;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	.el-form {
		width: 400px;
		.el-input {
			width: 300px;
		}
	}
}

/deep/ .el-form--label-left .el-form-item__label {
	color: #fff	
}
</style>
