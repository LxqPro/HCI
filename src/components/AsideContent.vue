<template>
  <div>
       <el-menu
      v-for="(data,index) in NavData"
      :key = "index"
      router
      >
      <el-submenu :index="index.toString()" :disabled="isNotLogin">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>{{data.type}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
          v-for="item in data.children"
          :key = "item.courseName"
          :route = "item.route"
          :disabled="item.close"
          :index="index+item.route">{{item.courseName}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import {Menu,Submenu,MenuItem, MenuItemGroup} from 'element-ui'
import NavData from '../data/AsideData'
import bus from '../eventBus'
export default {
    data(){
        return{
            NavData,
            isNotLogin:true
        }
    },
    components:{
        'el-menu':Menu,
        'el-submenu':Submenu,
        'el-menu-item':MenuItem,
        'el-menu-item-group':MenuItemGroup
    },
    mounted(){
      bus.$on('login',()=>{
        this.isNotLogin = false
      })
    }
}
</script>

<style lang="scss" scoped>
    *{
        text-align: left;
    }
</style>