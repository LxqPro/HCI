<template>
  <div>
    <div id="header">
      <el-input 
        v-model="searchName"
        style="width:300px"
        placeholder="搜索课程"
        clearable
        @clear="handleClear"
        >
          <el-button 
            slot="append" 
            icon="el-icon-search" 
            @click="handleSearch"></el-button>
        </el-input>
      <el-button 
        type="primary" 
        @click="handleSubmit"
        v-loading.fullscreen.lock="fullscreenLoading"
        element-loading-text="提交中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        >提交结果</el-button>
    </div>
    <el-table
      :data="isSearch?tempTableData:tableData"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="任课教师">
              <span>{{ props.row.Course[props.row.curCourse].teacher }}</span>
            </el-form-item>
            <el-form-item label="上课地点">
              <span>{{ props.row.Course[props.row.curCourse].classroom }}</span>
            </el-form-item>
            <el-form-item label="历史平均分">
              <span>{{ props.row.Course[props.row.curCourse].average }}</span>
            </el-form-item>
            <el-form-item label="历史最高分">
              <span>{{ props.row.Course[props.row.curCourse].highest }}</span>
            </el-form-item>
            <el-form-item label="历史最低分">
              <span>{{ props.row.Course[props.row.curCourse].lowest }}</span>
            </el-form-item>
            <el-form-item label="平均挂科率">
              <span>{{ props.row.Course[props.row.curCourse].fail }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column type="selection"></el-table-column>
      <el-table-column
        label="课程名称"
        prop="name"
        >
      </el-table-column>
      <el-table-column
        label="课程学分"
        prop="credit">
      </el-table-column>
      <el-table-column
        label="选择人数">
        <template slot-scope="props">
          <span>{{props.row.Course[props.row.curCourse].left}}</span>
        </template>
      </el-table-column>
      <el-table-column label="选择教师">
        <template slot-scope="scope">
          <el-dropdown type="primary" trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
              {{scope.row.Course[scope.row.curCourse].teacher}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(teacher,index) in scope.row.Course" :command="scope.$index+'-'+index" :key="index">{{teacher.teacher}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
  </div> 
</template>

<style scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  #header{
    display:flex;
    justify-content: space-between;
  }
</style>

<script>
    import {Course,Subject} from '../../publicClass/Course'
    export default {
      data() {
        return {
          tableData: [
              new Subject('数据结构与算法2',2)
              .addCourse(new Course('蔡斌','57/60','1-8周,周二1-2节,周五7-8节,D1323','88.0','99','64','0%')),
              new Subject('专业英语文体写作',2)
              .addCourse(new Course('雷晏','60/60','1-8周,周一5-6节,周三1-2节,D1438','79.4','92','0','8.1%')),
              new Subject('Jave EE程序设计',2)
              .addCourse(new Course('杨正益','51/60','9-16周,周二7-8节,周四3-4节,D1321','87.7','98','61','0.0%'))
              .addCourse(new Course('黄晟','30/60','9-16周,周二5-6节,周四3-4节,D1234','82.9','94','52','2.1%'))
          ],
          tempTableData:[],
          detail:`Course[0].teacher`,
          searchName:'',
          isSearch:false,
          fullscreenLoading:false
        }
      },
      mounted(){
      },
      methods:{
          //课程介绍响应改变
          handleCommand(cmd){
            //index_1表示表格数据对应的行，index_2表示选择的老师对应的课程
            let [index_1,index_2] = cmd.split('-')
            this.tableData[index_1].curCourse = index_2
          },
          handleSearch(){
            if(this.searchName.length>0){
              this.isSearch = true
              this.tempTableData = this.tableData.filter((value)=>{
                return value.name.indexOf(this.searchName)>-1?true:false
              })
            }
          },
          handleClear(){
            this.isSearch = false
          },
          //模拟提交
          handleSubmit(){
            this.fullscreenLoading = true;
              setTimeout(() => {
                  this.fullscreenLoading = false;
                  this.$message({
                    type: 'success',
                    message: '提交成功!',
                    duration:1000
                  });
              }, 1000);
          }
      }
    }
</script>