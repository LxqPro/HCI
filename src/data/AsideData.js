import RouteConfig from './RouteConfig'
/**
 * 路由类
 * type:课程类型，
 * children:二级类型，包括课程名，路由，是否开放选择
 */
class Route {
    constructor(type) {
        this.type = type
        this.init()
    }
    init(){
        this.children = []
    }
    appendChild(courseName,route,close=false){
        this.children.push({
            courseName,
            route,
            close
        })
        return this
    }
}
const NavData = new Array()
// 导航栏一级菜单文字（强耦合，需要修改）
const CourseTypes = ['主修专业课','公共必修课','公共选修课','辅修课','选课结果']
CourseTypes.forEach((value)=>{
    NavData.push(new Route(value))
})
// 配置路由映射，强耦合，需要修改
NavData[0]
.appendChild(RouteConfig.get('/major-compulsory').name,'/major-compulsory')
.appendChild(RouteConfig.get('/major-optional').name,'/major-optional')
.appendChild(RouteConfig.get('/major-nonrestrictive').name,'/major-nonrestrictive')
NavData[1]
.appendChild(RouteConfig.get('/public-math').name,'/public-math')
.appendChild(RouteConfig.get('/public-political').name,'/public-political')
NavData[2]
.appendChild(RouteConfig.get('/public-English').name,'/public-English')
.appendChild(RouteConfig.get('/public-sports').name,'/public-sports')
.appendChild(RouteConfig.get('/public-general').name,'/public-general')
.appendChild(RouteConfig.get('/public-nonrestrictive').name,'/public-nonrestrictive')
NavData[3]
.appendChild(RouteConfig.get('/minor-compulsory').name,'/minor-compulsory')
.appendChild(RouteConfig.get('/minor-optional').name,'/minor-optional')
NavData[4]
.appendChild(RouteConfig.get('/course-result').name,'/course-result')
export default NavData