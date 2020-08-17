<template>
	<div class="signup" :style="{ height: min_height }">
		<el-form label-position="left" label-width="80px"   :model="form_data" class="demo-form-inline">
			<el-form-item label="登陆邮箱">
				<el-input
					v-model="form_data.email"
					placeholder="请设置登陆邮箱"
				></el-input>
			</el-form-item>
			<el-form-item label="登录名">
				<el-input v-model="form_data.username" placeholder="请设置登录名"></el-input>
			</el-form-item>
			<el-form-item label="密码">
				<el-input v-model="form_data.psd" placeholder="请设置密码"></el-input>
			</el-form-item>
			<el-form-item label="确认密码">
				<el-input v-model="form_data.psd_ensure" placeholder="请设再次输入密码"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">立即注册</el-button>
				<el-button type="primary" @click="gologin">返回登陆</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
	name: 'signup',
	data() {
		return {
			min_height: '768px',
			form_data: {
				email: '',
				username: '',
				psd: '',
				psd_ensure: '',
			}
		}
	},
	methods: {
		onSubmit() {
			this.$message.success('注册成功')
		},
		gologin() {
			this.$router.push('/login')

		}
	},
	mounted() {
		this.min_height = window.innerHeight + 'px'
	},
}
</script>

<style lang="scss" scoped>
@import '../assets/baseColor.scss';

.signup {
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
