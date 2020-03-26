<template>
  <div>
      <el-tag class="student-info">20171760</el-tag>
      <el-tag class="student-info">大数据与软件学院</el-tag>
      <el-tag class="student-info">软件工程</el-tag>
      <el-tag class="student-info">第四学期</el-tag>
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          龙小秦<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="refresh" icon="el-icon-refresh-right">刷新</el-dropdown-item>
          <el-dropdown-item command="logout" icon="el-icon-switch-button">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
  </div>
</template>

<script>
import bus from '../eventBus'
export default {
  methods:{
    refresh(){
      this.$message({
        type: 'success',
        message: '已刷新',
        duration:500
      });
    },
    logout(){
      this.$confirm('是否确定退出登录?', {
        confirmButtonText: '退出',
        cancelButtonText: '点错了',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '已退出登录',
          duration:2000
        });
        bus.$emit('logout')
      }).catch(() => {

      });
    },
    handleCommand(command) {
      switch(command){
        case 'logout':this.logout();break;
        case 'refresh':this.refresh();break;
        default:break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .el-dropdown-link {
      cursor: pointer;
      color: #409EFF;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
    .student-info{
        margin-right: 5px;
    }
</style>