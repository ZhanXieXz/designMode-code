/**
 * @desc 组合继承
 * */ 
// 定义父类
function SuperClass(name) {
    this.initArr = [1,2,3]
    this.name = name
}

SuperClass.prototype.getName = function () {
    return this.name
}

// 声明子类
function SubClass (name, time) {
    SuperClass.call(this, name)
    this.time = time
}

SubClass.prototype = new SuperClass()

SubClass.prototype.getTime = function () {
    return this.time
}

const subClass = new SubClass('xiez', 2022)
const subClass_1 = new SubClass('xiezhan', 20220812)
console.log(subClass.initArr) // [1,2,3]
console.log(subClass_1.initArr) // [1,2,3]

subClass.initArr.push(4,5)
subClass_1.initArr.push(4)
console.log(subClass.initArr) // [1,2,3,4,5]
console.log(subClass_1.initArr) // [1,2,3,4]

subClass.getTime() // 2022
subClass_1.getTime() // 20220812
