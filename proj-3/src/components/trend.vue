<template>
	<div class="trend">
		<el-tabs v-model="activeName" >
			<el-tab-pane label="各类走势" name="1">
				<div class="clearfix">
					<div class="left" id="column"></div>
					<div class="right" id="pie"></div>
				</div>
				<div class="bottom" id="lineTrend"></div
			></el-tab-pane>
			<el-tab-pane label="地图分布" name="2" style="text-align: center;margin-top: 50px">
				<img style="width: 60%" src="../assets/map.png" alt="" />
			</el-tab-pane>
			<el-tab-pane label="项目列表" name="3">
				<el-table :data="list_data" highlight-current-row border>
					<el-table-column
						align="center"
						label="项目名称"
						prop="name"
					></el-table-column>
					<el-table-column
						align="center"
						label="项目描述"
						prop="desc"
					></el-table-column>
					<el-table-column
						align="center"
						label="基础信息"
						prop="info"
					></el-table-column>
					<el-table-column
						align="center"
						label="上传人"
						prop="reporter"
					></el-table-column>
					<el-table-column
						align="center"
						label="上传时间"
						prop=""
					></el-table-column>
					<el-table-column
						align="center"
						label="文件名"
						prop=""
					></el-table-column>
					<el-table-column align="center" label="操作">
						<template slot-scope="scope">
							<el-button type="text">编辑</el-button>
						</template>
					</el-table-column>
				</el-table></el-tab-pane
			>
		</el-tabs>
	</div>
</template>

<script>
export default {
	name: 'trend',
	data() {
		return {
			activeName: '1',
			list_data: [
				{
					name: '教育信息化对比展示',
					desc: '细化指标，信息采集录入',
					info: '项目简介',
					reporter: 'anomnymous',
					tip: ''
				},
				{
					name: '数据可视化处理',
					desc: '',
					info: '',
					reporter: 'anomnymous',
					tip: ''
				},
				{
					name: '具体信息展示 	',
					desc: '',
					info: '',
					reporter: 'anomnymous',
					tip: ''
				}
			]
		}
	},
	methods: {
		draw_column() {
			var myChart = this.$echarts.init(document.getElementById('column'))
			myChart.setOption(
				{
					title: {
						text: '柱状图'
					},
					tooltip: {},
					xAxis: {
						data: [
							'衬衫',
							'羊毛衫',
							'雪纺衫',
							'裤子',
							'高跟鞋',
							'袜子'
						]
					},
					yAxis: {},
					series: [
						{
							name: '销量',
							type: 'bar',
							data: [5, 20, 36, 10, 10, 20],
							itemStyle: {
								color: new this.$echarts.graphic.LinearGradient(
									0,
									0,
									0,
									1,
									[
										{ offset: 0, color: '#83bff6' },
										{ offset: 0.5, color: '#188df0' },
										{ offset: 1, color: '#188df0' }
									]
								)
							}
						}
					]
				},
				true
			)
		},
		draw_pie() {
			var myChart = this.$echarts.init(document.getElementById('pie'))
			myChart.setOption(
				{
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b}: {c} ({d}%)'
					},
					title: {
						text: '饼图'
					},
					legend: {
						left: 100,
						data: [
							'直接访问',
							'邮件营销',
							'联盟广告',
							'视频广告',
							'搜索引擎'
						]
					},
					series: [
						{
							name: '访问来源',
							type: 'pie',
							radius: ['50%', '70%'],
							avoidLabelOverlap: false,
							label: {
								show: false,
								position: 'center'
							},
							emphasis: {
								label: {
									show: true,
									fontSize: '30',
									fontWeight: 'bold'
								}
							},
							labelLine: {
								show: false
							},
							data: [
								{ value: 335, name: '直接访问' },
								{ value: 310, name: '邮件营销' },
								{ value: 234, name: '联盟广告' },
								{ value: 135, name: '视频广告' },
								{ value: 1548, name: '搜索引擎' }
							]
						}
					]
				},
				true
			)
		},
		draw_lineTrend() {
			var myChart = this.$echarts.init(
				document.getElementById('lineTrend')
			)
			myChart.setOption(
				{
					title: {
						text: '堆叠区域图'
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#6a7985'
							}
						}
					},
					legend: {
						data: ['邮件营销', '联盟广告', '视频广告']
					},
					toolbox: {
						feature: {
							saveAsImage: {}
						}
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: [
						{
							type: 'category',
							boundaryGap: false,
							data: [
								'周一',
								'周二',
								'周三',
								'周四',
								'周五',
								'周六',
								'周日'
							]
						}
					],
					yAxis: [
						{
							type: 'value'
						}
					],
					series: [
						{
							name: '邮件营销',
							type: 'line',
							stack: '总量',
							areaStyle: {},
							data: [120, 132, 101, 134, 90, 230, 210]
						},
						{
							name: '联盟广告',
							type: 'line',
							stack: '总量',
							areaStyle: {},
							data: [220, 182, 191, 234, 290, 330, 310]
						},
						{
							name: '视频广告',
							type: 'line',
							stack: '总量',
							areaStyle: {},
							data: [150, 232, 201, 154, 190, 330, 410]
						}
					]
				},
				true
			)
		}
	},
	mounted() {
		this.draw_column()
		this.draw_pie()
		this.draw_lineTrend()
	}
}
</script>

<style lang="scss" scoped>
.trend {
	.left,
	.right,
	.bottom {
		height: 400px;
	}
	.left,
	.right {
		float: left;
		width: 50%;
	}
}
</style>
