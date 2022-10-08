function inheritObject (o) {
    function F() {} // 声明过渡函数对象
    F.prototype = o // 过渡对象的原型继承父对象
    return new F()  // 返回过渡对象的一个实例，该实例对象继承了父对象
}

/***
 *  寄生式继承 继承原型
 * 传递参数 subClass 子类
 * 传递参数 supClass 父类 
 **/ 
function inheritPrototype(subClass, supClass) {
    let p = inheritObject(supClass.prototype)
    p.constructor  = subClass
    subClass.prototype = p
}

function SuperClass(name) {
    this.name = name;
    this.colors = ['red', 'blue']
}

SuperClass.prototype.getName = function () {
    console.log(this.name)
}

function Subclass(name, time) {
    this.name = name;
    SuperClass.call(this, name)
    this.time = time;
}
inheritPrototype(Subclass, SuperClass)
Subclass.prototype.getTime = function () {
    console.log(this.time)
}

let instance1 = new  Subclass('js book', 2022)
let instance2 = new  Subclass('css book', 2022)

console.log(instance1.getName())
console.log(instance2.getTime())
console.log(instance2.getName())
console.log(instance1.colors)
console.log(instance2.colors)
instance1.colors.push('#333')
instance2.colors.push('#ddd')
console.log(instance1);
console.log(instance2);