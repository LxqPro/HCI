<template>
  <div>
    <el-card 
        v-for="(course,index) in course" 
        :key="index" 
        :body-style="mainStyle"
        style="margin-bottom:5px"
        shadow="hover"
        >
        <div slot="header" class="clearfix">
          <span style="float:left">{{course.name}}</span>
          <el-button 
            size="mini" 
            type="danger" 
            style="float:right"
            @click="dropCourse(index)"
            >退课</el-button>
        </div>
        <img :src="imgFileDir + headImg[index]" class="image">
        <div style="padding: 14px;">
          <template>
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="任课教师:">
                <span>{{ course.Course[0].teacher }}</span>
              </el-form-item>
              <el-form-item label="上课地点:">
                <span>{{ course.Course[0].classroom }}</span>
              </el-form-item>
              <el-form-item label="历史平均分:">
                <span>{{ course.Course[0].average }}</span>
              </el-form-item>
              <el-form-item label="历史最高分:">
                <span>{{ course.Course[0].highest }}</span>
              </el-form-item>
              <el-form-item label="历史最低分:">
                <span>{{ course.Course[0].lowest }}</span>
              </el-form-item>
              <el-form-item label="平均挂科率:">
                <span>{{ course.Course[0].fail }}</span>
              </el-form-item>
            </el-form>
          </template>
        </div>
    </el-card>
  </div>
</template>

<style scoped>
  .image {
    height: 200px;
    width: 200px;
    display: block;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .demo-table-expand {
    text-align: left;
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
import {Card} from 'element-ui'
const headImg = ['hhb.jpg','hmj.jpg','zxh.png','cj.jpg','ly.jpg','yzy.jpg','zjw.jpg','ycf.jpg']
console.log(headImg);
export default {
  data() {
    return {
      course:[
          new Subject('计算机网络',2).addCourse(new Course('胡海波','60/60','1-8周,周一5-6节,周三1-2节,D1323','87.5','100','51','4.4%')),
          new Subject('操作系统原理',2).addCourse(new Course('洪明坚','48/72','1-8周,周一1-2节,周三3-4节,D1321','84.6','97','42','11.3%')),
          new Subject('软件工程导论',2).addCourse(new Course('张小洪','47/72','1-8周,周三7-8节,周五1-2节,D1414','85.9','95','57','1.1%')),
          new Subject('数据库原理',2).addCourse(new Course('陈静','37/72','9-16周,周二7-8节,周四3-4节,D1337','87.1','98','24','8.7%')),
          new Subject('专业英语文体写作',2).addCourse(new Course('雷晏','60/60','1-8周,周一5-6节,周三1-2节,D1438','79.4','92','0','8.1%')),
          new Subject('Java EE程序设计',2).addCourse(new Course('杨正益','51/60','9-16周,周二7-8节,周四3-4节,D1321','87.7','98','47','2.0%')),
          new Subject('英语诗歌鉴赏',2).addCourse(new Course('张珒玮','60/60','1-16周,周五1-2节,D1321','84.3','94','65','0%')),
          new Subject('逻辑学',2).addCourse(new Course('杨长福','60/60','1-8周,周三5-6节,周五7-8节,DYC210','87.2','100','38','3.1%')),
      ],
      imgFileDir: '../static/teacher/',
      headImg,
      mainStyle:{
          display:'flex'
      }
    };
  },
  methods:{
    dropCourse(index){
      this.$prompt('请输入退课密码', '身份认证', {
        confirmButtonText: '确定退课',
        cancelButtonText: '我再想想',
      }).then(({ value }) => {
        if(value==='qwe..123'){
          this.$message({
            type: 'success',
            message: '退课成功'
          });
          this.course = this.course.filter((val,idx)=>{
            return idx!==index
          })
        }else{
          this.$message.error('退课密码不正确，退课失败');
        }
      }).catch(() => {     
      });
    }
  },
  components:{
      'el-card':Card
  }
}
</script>