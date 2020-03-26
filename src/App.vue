<template>
  <div id="app">
    <el-container>
      <el-header id="header">
          <Login id="login" v-if="showLogin"></Login>
          <PersonalCenter id="personal" v-else></PersonalCenter>
          <el-breadcrumb separator-class="el-icon-arrow-right" v-if="!showLogin">
            <el-breadcurmb-item>{{routePath}}</el-breadcurmb-item>
          </el-breadcrumb>
      </el-header>
      <el-container>
        <el-aside width="200px" id='aside'>
          <AsideContent></AsideContent>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer id="footer">
            <FooterContent></FooterContent>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {Header,Main,Footer,Container,Aside,Breadcrumb,BreadcrumbItem} from 'element-ui'
import AsideContent from './components/AsideContent.vue'
import Login from './components/Login'
import PersonalCenter from './components/PersonalCenter'
import FooterContent from './components/FooterContent'
import bus from './eventBus'
import RouteConfig from './data/RouteConfig'
export default {
  name: 'App',
  components: {
    'el-header':Header,
    'el-main':Main,
    'el-footer':Footer,
    'el-container':Container,
    'el-aside':Aside,
    'el-breadcrumb':Breadcrumb,
    'el-breadcurmb-item':BreadcrumbItem,
    AsideContent,
    Login,
    PersonalCenter,
    FooterContent
  },
  data(){
    return {
      // 是否显示登录框
      showLogin:true,
      routePath:RouteConfig.get(this.$route.path).name
    }
  },
  watch:{
    $route(to){
      this.routePath = RouteConfig.get(to.path).name
    }
  },
  // 组件挂载完成
  mounted(){
    // 登录事件
    bus.$on('login',()=>{
      this.showLogin = !this.showLogin
    })
    bus.$on('logout',()=>{
      this.showLogin = !this.showLogin
    })
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  body{
    margin:0;
    padding:0;
  }
  .el-breadcrumb__inner{
    color:#409EFF !important
  }
</style>
<style scoped>
  /* 顶部垂直居中 */
  #header{
    width:100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    position: relative;
  }
  /* 登录组件样式 */
  #login{
    width: 400px;
    display: flex;
  }
  /* 个人中心组件样式 */
  #personal{
    position: absolute;
    right: 0;
    margin-right: 40px;
  }
  #aside{
    height: 480px;
  }
  /* 左右上下居中对齐 */
  #footer{
    margin-top: 5px;
    border-top: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
</style>
