import VueRouter from 'vue-router'
import Vue from 'vue'
import Component from '../data/RouteConfig'

Vue.use(VueRouter)
class RouteObj {
    constructor(path,cpt){
        this.path = path
        this.component = cpt
    }
}
const routes = []
for(let path of Component.keys()){
    routes.push(new RouteObj(path,Component.get(path).component))
}
const router = new VueRouter({
    routes
})
export default router 
