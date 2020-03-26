import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import {Button,
        Dropdown, 
        DropdownMenu, 
        DropdownItem, 
        Tag, 
        MessageBox,
        Message, 
        Loading,
        Table,
        TableColumn,
        Form,
        FormItem,
        Input,
      } from 'element-ui'

Vue.config.productionTip = false

// ElementUI全局注册
Vue.use(Button) //按钮
Vue.use(Input)
Vue.use(Dropdown) //下拉菜单
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tag)  //标签
Vue.use(Table)  //表格
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
// Vue.use(MessageBox)  这里不能use，否则会弹窗
Vue.use(Loading.directive); //注册v-loading指令
Vue.prototype.$alert = MessageBox.alert //警告框
Vue.prototype.$message = Message  //消息框
Vue.prototype.$confirm = MessageBox.confirm //确认框
Vue.prototype.$prompt = MessageBox.prompt //弹出输入框
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
