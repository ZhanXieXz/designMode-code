/**
 * 安全模式类
 * @desc 对于一个类的创建，实例化时需要new 关键字。例如 let demo = new Demo（）；当在使用时忽略遗漏了关键字，便无法得到预期的对象。如下所示
 **/ 
let Demo = function (){}
Demo.prototype.show = function () {
    console.log('Demo show')
}
let d = new Demo()
d.show() // Demo show
let d1 = Demo()
d1.show() // TypeError: Cannot read property 'show' of undefined

// 安全模式便是在构造函数开始时先判断当前对象this指向是不是Demo，如果不是那么就返回新创建的对象

let Demo = function (){
    if (!(this instanceof Demo)) {
        return new Demo
    }
}
Demo.prototype.show = function () {
    console.log('demo show 01')
}

let d1 = new Demo()
d1.show() // Demo show 01
let d2 = Demo()
d2.show() // Demo show 01