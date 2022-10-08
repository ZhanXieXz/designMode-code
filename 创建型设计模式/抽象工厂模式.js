// 抽象工厂方法
let VehicleFactory = function (subType, supType) {
    if (typeof VehicleFactory[supType] === 'function') {
        function F() {}
        console.log(VehicleFactory[supType]);
        F.prototype = new VehicleFactory[supType] ()
        subType.constructor = subType
        subType.prototype = new F()
    } else {
        throw new Error('未创建该抽象类')
    }
}

// 创建多个抽象类

// 汽车抽象类
VehicleFactory.Car = function () {
    this.type = 'Car'
}
VehicleFactory.Car.prototype = {
    getPrice: function () {
        return new Error('不能调用，请重写子类方法')
    },
    getSpeed: function () {
        return new Error('不能调用，请重写子类方法')
    }
}

// Bus抽象类
VehicleFactory.Bus = function () {
    this.type = 'Bus'
}
VehicleFactory.Car.prototype = {
    getPrice: function () {
        return new Error('不能调用，请重写子类方法')
    },
    getSpeed: function () {
        return new Error('不能调用，请重写子类方法')
    }
}

// 抽象工厂是一个实现子类继承父类的方法。通过传递子类以及要继承父类（抽象类）的名称，VehicleFactory中判断是否存在抽象类、如果存在，子类通过寄生式继承。
// 在对过渡类继续原型继承时，并非是继承父类的原型，而是通过new关键字复制父类的实例。这样做过渡类不仅能继承父类的原型方法，还能继承父类的属性


// 测试用例
let BWM = function (price, speed) {
    this.price = price;
    this.speed = speed;
}
VehicleFactory(BWM, 'Car')
// console.log(BWM)
// 未重写子类方式，直接调用就会报错
BWM.prototype.getPrice = function () {
    return this.price
}
let bwm = new BWM(10000,250)
console.log(bwm.getPrice())
console.log(bwm.getSpeed()) // Error: 不能调用，请重写子类方法