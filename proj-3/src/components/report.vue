<template>
  <div class="report">
      <el-table :data="list_data"  highlight-current-row border>
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
    name: 'report',
    data() {
        return {
            list_data: [
                {reporter: 'anomnymous',tip: ''},
                {reporter: 'xxx',tip: ''},
                {reporter: 'xxx',tip: ''},
                {reporter: 'xxx',tip: ''},
            ]
        }
    },
};
</script>

<style lang="scss" scoped>
.report {
    
}
</style>
