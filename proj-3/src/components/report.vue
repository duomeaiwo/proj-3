<template>
	<div class="report">
		<el-tabs v-model="activeName">
			<el-tab-pane label="项目申报" name="1">
				<el-form
					:model="ruleForm"
					:rules="rules"
					ref="ruleForm"
					label-width="120px"
                    label-position="left"
                    style="width: 600px;margin-top: 50px"
				>
					<el-form-item label="项目名称" prop="name">
						<el-input v-model="ruleForm.name"></el-input>
					</el-form-item>
					<el-form-item label="项目区域" prop="region">
						<el-select
							v-model="ruleForm.region"
							placeholder="请选择项目区域"
						>
							<el-option
								label="区域一"
								value="shanghai"
							></el-option>
							<el-option
								label="区域二"
								value="beijing"
							></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="项目时间" required>
						<el-col :span="11">
							<el-form-item prop="date1">
								<el-date-picker
									type="date"
									placeholder="选择日期"
									v-model="ruleForm.date1"
									style="width: 100%;"
								></el-date-picker>
							</el-form-item>
						</el-col>
						<el-col class="line" :span="2">-</el-col>
						<el-col :span="11">
							<el-form-item prop="date2">
								<el-time-picker
									placeholder="选择时间"
									v-model="ruleForm.date2"
									style="width: 100%;"
								></el-time-picker>
							</el-form-item>
						</el-col>
					</el-form-item>
					<el-form-item label="项目性质" prop="type">
						<el-checkbox-group v-model="ruleForm.type">
							<el-checkbox
								label="线上项目"
								name="type"
							></el-checkbox>
							<el-checkbox
								label="地推项目"
								name="type"
							></el-checkbox>
							<el-checkbox
								label="线下主题项目"
								name="type"
							></el-checkbox>
							<el-checkbox
								label="单纯品牌曝光"
								name="type"
							></el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="特殊资源" prop="resource">
						<el-radio-group v-model="ruleForm.resource">
							<el-radio label="线上品牌商赞助"></el-radio>
							<el-radio label="线下场地免费"></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="项目形式" prop="desc">
						<el-input
							type="textarea"
							v-model="ruleForm.desc"
						></el-input>
					</el-form-item>
					<el-form-item>
						<el-button
							type="primary"
							@click="submitForm('ruleForm')"
							>立即创建</el-button
						>
						<el-button @click="resetForm('ruleForm')"
							>重置</el-button
						>
					</el-form-item>
				</el-form>
			</el-tab-pane>
			<el-tab-pane label="文件上传" name="2" style="text-align: center;margin-top: 50px">
				<el-upload drag action="" multiple>
					<i class="el-icon-upload"></i>
					<div class="el-upload__text">
						将文件拖到此处，或<em>点击上传</em>
					</div>
					<div class="el-upload__tip" slot="tip">
						只能上传jpg/png文件，且不超过500kb
					</div>
				</el-upload>
			</el-tab-pane>
			<el-tab-pane label="外部" name="3" disabled="">外部</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
export default {
	name: 'report',
	data() {
		return {
			activeName: '1',
			ruleForm: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				type: [],
				resource: '',
				desc: ''
			},
			rules: {
				name: [
					{
						required: true,
						message: '请输入项目名称',
						trigger: 'blur'
					},
					{
						min: 3,
						max: 5,
						message: '长度在 3 到 5 个字符',
						trigger: 'blur'
					}
				],
				region: [
					{
						required: true,
						message: '请选择项目区域',
						trigger: 'change'
					}
				],
				date1: [
					{
						type: 'date',
						required: true,
						message: '请选择日期',
						trigger: 'change'
					}
				],
				date2: [
					{
						type: 'date',
						required: true,
						message: '请选择时间',
						trigger: 'change'
					}
				],
				type: [
					{
						type: 'array',
						required: true,
						message: '请至少选择一个项目性质',
						trigger: 'change'
					}
				],
				resource: [
					{
						required: true,
						message: '请选择项目资源',
						trigger: 'change'
					}
				],
				desc: [
					{
						required: true,
						message: '请填写项目形式',
						trigger: 'blur'
					}
				]
			}
		}
	},
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					this.$message.success('成功申报!')
				} else {
					console.log('error submit!!')
					return false
				}
			})
		},
		resetForm(formName) {
			this.$refs[formName].resetFields()
		}
	}
}
</script>

<style lang="scss" scoped>
.report {
}
</style>
