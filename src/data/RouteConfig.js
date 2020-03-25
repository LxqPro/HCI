import Welcome from '../router/welcome.vue'

import Major_compulsory from '../router/Major/compulsory.vue'
import Major_optional from '../router/Major/optional.vue'
import Major_nonrestrictive from '../router/Major/nonrestrictive.vue'

import Minor_compulsory from '../router/Minor/compulsory.vue'
import Minor_optional from '../router/Minor/optional.vue'

import Public_English from '../router/Public/English.vue'
import Public_gerneral from '../router/Public/general.vue'
import Public_sports from '../router/Public/sports.vue'
import Public_nonrestrictive from '../router/Public/nonrestrictive.vue'

import Public_math from '../router/Public/math.vue'
import Public_political from '../router/Public/political.vue'

import Result from '../router/Result/result.vue'
/**
 * 组件类，封装组件中文名和组件本身
 */
class myComponent {
    constructor(name,Cpt){
        this.name = name
        this.component = Cpt
    }
}
// 路由配置
const RouteConfig = new Map()
RouteConfig
.set('/major-compulsory', new myComponent('专业必修课', Major_compulsory))
.set('/major-optional', new myComponent('专业选修课', Major_optional))
.set('/major-nonrestrictive', new myComponent('专业非限制性选修课', Major_nonrestrictive))
.set('/public-math', new myComponent('数学课', Public_math))
.set('/public-political', new myComponent('政治课', Public_political))
.set('/public-English', new myComponent('素质英语拓展课', Public_English))
.set('/public-sports', new myComponent('体育课', Public_sports))
.set('/public-general', new myComponent('通识课', Public_gerneral))
.set('/public-nonrestrictive', new myComponent('外专业非限制性选修课', Public_nonrestrictive))
.set('/minor-compulsory', new myComponent('辅修专业必修课', Minor_compulsory))
.set('/minor-optional', new myComponent('辅修专业选修课', Minor_optional))
.set('/course-result', new myComponent('查看选课结果', Result))
.set('/', new myComponent('首页', Welcome))
export default RouteConfig

