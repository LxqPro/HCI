<template>
     <div>
         <el-input class="input"
           placeholder="请输入学号"
           v-model="username"
           clearable
           size="small"
         ></el-input>
         <el-input class="input"
           placeholder="请输入密码"
           v-model="password"
           show-password
           size="small"
         ></el-input>
         <el-button
            size="mini"
            type="primary"
            @click="login"
            v-loading.fullscreen.lock="fullscreenLoading"
            element-loading-text="登陆中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)"
         >登录</el-button>
     </div>
</template>

<script>
import bus from '../eventBus'
export default {
    data(){
        return{
            username:'20171760',
            password:'123456',
            fullscreenLoading:false
        }
    },
    components:{
    },
    methods:{
        login(){
            if(this.username.length===8&&this.password.length>=6){
                this.fullscreenLoading = true;
                setTimeout(() => {
                    this.fullscreenLoading = false;
                    this.$message({
                      type: 'success',
                      message: '登录成功!',
                      duration:2000
                    });
                    bus.$emit('login')
                }, 1000);
            }else{
                this.$alert('请输入合法的学号和密码', '输入不合法', {
                    confirmButtonText: '确定',
                });
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .input{
        margin-right: 5px;
        display: block;
    }
</style>