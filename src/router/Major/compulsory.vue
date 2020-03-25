<template>
  <el-table
    :data="tableData"
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
    <el-table-column
      label="课程名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="课程学分"
      prop="credit">
    </el-table-column>
    <el-table-column
      label="选择人数"
      prop="Course[0].left">
    </el-table-column>
    <el-table-column label="选择教师">
      <template slot-scope="scope">
        <el-dropdown split-button type="primary" @click="handleSelect" trigger="click" @command="handleCommand">
          提交
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(teacher,index) in scope.row.Course" :command="scope.$index+'-'+index" :key="index">{{teacher.teacher}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </template>
    </el-table-column>
    <el-table-column
      label="任课教师"
      :prop="detail">
    </el-table-column>
  </el-table>
</template>

<style>
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
</style>

<script>
    import {Course,Subject} from '../../publicClass/Course'
    export default {
      data() {
        return {
          tableData: [
              new Subject('操作系统原理',2)
              .addCourse(new Course('洪明坚','48/72','1-8周,周一1-2节,周三3-4节,D1321','84.6','97','42','11.3%')),
              new Subject('计算机网络',2)
              .addCourse(new Course('胡海波','120/120','1-8周,周一5-6节,周三1-2节,D1323','87.5','100','51','4.4%')),
              new Subject('数据库原理',2)
              .addCourse(new Course('陈静','37/72','9-16周,周二7-8节,周四3-4节,D1337','87.1','98','24','8.7%'))
              .addCourse(new Course('柳玲','35/72','9-16周,周二7-8节,周四3-4节,D1338','86.2','96','31','8.3%')),
              new Subject('软件工程导论',2)
              .addCourse(new Course('张小洪','28/72','1-8周,周三7-8节,周五1-2节,D1414','85.9','95','57','1.1%')),
          ],
          detail:`Course[0].teacher`,
        }
      },
      mounted(){
      },
      methods:{
          handleSelect(index,row){
              console.log(index,row);
          },
          //课程介绍响应改变
          handleCommand(cmd){
              //index_1表示表格数据对应的行，index_2表示选择的老师对应的课程
              let [index_1,index_2] = cmd.split('-')
              this.tableData[index_1].curCourse = index_2
          }
      }
    }
</script>