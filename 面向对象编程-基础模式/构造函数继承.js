/**
 * @desc 构造函数继承
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
function SubClass (name) {
    SuperClass.call(this, name)
}

const subClass = new SubClass('xiez')
const subClass_1 = new SubClass('xiezhan')
console.log(subClass.initArr) // [1,2,3]
console.log(subClass_1.initArr) // [1,2,3]

subClass.initArr.push(4,5)
subClass_1.initArr.push(4)
console.log(subClass.initArr) // [1,2,3,4,5]
console.log(subClass_1.initArr) // [1,2,3,4]


// 构造函数继承，由于call这个方法可以更改函数的作用环境，因此在子类中，对SuperClass调用这个方法就是子类中的变量在父类中执行一遍，子类自然继承了父类的共有属性。
// 但是构造函数继承不涉及原型，所以父类的方法也不会被子类继承。