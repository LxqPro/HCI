/**
 * 课程类，包括：教师、剩余人数、平均成绩、最高成绩、最低成绩、挂科率
 */
class Course {
    constructor(
        teacher,
        left,
        classroom,
        average,
        highest,
        lowest,
        fail){
            this.teacher = teacher
            this.left = left
            this.classroom = classroom
            this.average = average
            this.highest = highest
            this.lowest = lowest
            this.fail = fail
    }
}
/**
 * 科目类
 */
class Subject {
    //构造函数初始化科目名称、学分和课程
    constructor(name,credit){
        this.name = name
        this.credit = credit
        this.curCourse = 0
        this.Course = []
    }
    //为该科目增加一个课程班级
    addCourse(course){
        this.Course.push(course)
        //支持链式调用
        return this
    }
}
export {Course,Subject}