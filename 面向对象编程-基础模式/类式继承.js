/**
 * @desc 类式继承
 * */ 
// 定义父类
function SuperClass() {
    this.superValue = true
}
// 在父类原型上添加方法
SuperClass.prototype.getSuperValue = function () {
    return this.superValue
}

// 声明子类
function SubClass () {
    this.subValue = false
}

// 继承父类
SubClass.prototype = new SuperClass()

// 在子类原型上添加方法
SubClass.prototype.getSubValue = function () {
    return this.subValue
}


const subClass = new SubClass()
console.log(subClass)

// 1、 子类通过其原型prototype对父类实例化，继承父类。所以父类中的共有属性如果是引用类型，就会在子类中被所有实例引用。

function SuperClass_1 () {
    this.arr = [1,2,3]
}
function SubClass_1 () {}
SubClass_1.prototype = new SuperClass_1()

let fn = new SubClass_1()
let fn_1 = new SubClass_1()
console.log(fn.arr) // [1,2,3]
console.log(fn_1.arr) // [1,2,3]

fn.arr.push(4)
console.log(fn.arr) // [1,2,3,4]
console.log(fn_1.arr) // [1,2,3,4]

// 2、子类实现的继承是通过原型prototype对父类的实例化实现，因此在创建父类的时候，是无法向父类传递参数，因为在实例化父类的时候也无法对父类构造函数内的属性进行初始化。