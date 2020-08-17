<template>
	<div class="projList">
		<el-table :data="list_data"  highlight-current-row border>
			<el-table-column align="center" label="项目名称" prop="name"></el-table-column>
			<el-table-column align="center" label="项目描述" prop="desc"></el-table-column>
			<el-table-column align="center" label="基础信息" prop="info"></el-table-column>
			<el-table-column align="center" label="上传人" prop="reporter"></el-table-column>
			<el-table-column align="center" label="上传时间" prop=""></el-table-column>
			<el-table-column align="center" label="文件名" prop=""></el-table-column>
			<el-table-column align="center" label="操作">
			<template slot-scope="scope">
				<el-button type="text">编辑</el-button>
			</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
export default {
  	name: 'projList',
    data() {
        return {
            list_data: [
                {name: '教育信息化对比展示',desc: '细化指标，信息采集录入', info: '项目简介',reporter: 'anomnymous',tip: ''},
                {name: '数据可视化处理',desc: '', info: '',reporter: 'anomnymous',tip: ''},
                {name: '具体信息展示 	',desc: '', info: '',reporter: 'anomnymous',tip: ''},
            ]
        }
    },
};
</script>

<style lang="scss" scoped>
.projList {
}
</style>
