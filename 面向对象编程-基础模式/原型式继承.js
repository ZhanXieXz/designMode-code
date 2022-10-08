function inheritObject (o) {
    function F() {} // 声明过渡函数对象
    F.prototype = o // 过渡对象的原型继承父对象
    return new F()  // 返回过渡对象的一个实例，该实例对象继承了父对象
}

let o = {
    name: 'xiez',
    hobby: ['swimming', 'LOL']
}

let firstO = new inheritObject(o)
let secondO = new inheritObject(o)

firstO.name = 'xiezzz'
firstO.hobby.push('run')

secondO.name = 'zzzxie'
secondO.hobby.push('running')

console.log(firstO)
console.log(secondO)

// 跟类式继承一样，父对象的引用类型的属性被共用，某个子类修改后会污染其他子类