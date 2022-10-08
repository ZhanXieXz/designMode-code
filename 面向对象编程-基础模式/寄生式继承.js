// 寄生式继承
// 声明基对象
const people = {
    name: 'xiez',
    job: 'It'
}
const people1 = {
    name: 'xiezzz',
    job: 'It-qianduan'
}

function inheritObject (o) {
    function F() {} // 声明过渡函数对象
    F.prototype = o // 过渡对象的原型继承父对象
    return new F()  // 返回过渡对象的一个实例，该实例对象继承了父对象
}

function createPeople(people) {
    // 通过原型继承方式创建新对象 
    let o = new inheritObject(people);
    o.getName = function () {
        console.log(this.name)
    }
    return o
}

let child = new createPeople(people)
let child1 = new createPeople(people1)

console.log(child.getName()) // xiez
console.log(child1.getName()) // xiezzz
console.log(child.name); // xiez
console.log(child1.name); // xiezzz

child.name = 'change-xiez'
child1.name = 'change-xiezzz'
console.log(child.getName()) // change-xiez
console.log(child1.getName()) // change-xiezzz
