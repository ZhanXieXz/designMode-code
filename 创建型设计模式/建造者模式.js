// 建造者模式：讲一个复杂对象的构建层鱼表示层相互分离，同样的构建过程采用不同的表示

// 创建一个人类
let Human = function (param) {
    this.skill = param && param.skill || '保密'
    this.hobby = param && param.hobby || '保密'
}
// 人类原型方法
Human.prototype = {
    getSkill: function () {
        return this.skill
    },
    getHobby: function () {
      return this.hobby  
    }
}

// 实例化姓名类
let Named = function(name) {
    let that = this;
    (function (name,that){
        that.wholeName = name;
        if (name.indexOf(' ') > -1) {
            console.log('have space')
            that.FirstName = name.slice(0,name.indexOf(' '))
            that.SecondName = name.slice(name.indexOf(' '))
        }
    })(name,that)
}

// 实例化职位类
let Work = function(work) {
    let that = this;
    (function (work,that) {
        switch (work) {
            case 'code':
                that.work = 'cv工程师';
                that.workDescript = '敲键盘'
                break;
            case 'teacher':
                that.work = '教师';
                that.workDescript = '教书育人'
                break
            default:
                that.work = '无业';
                that.workDescript = '混吃等死'
                break;
        }
    })(work, that)
}
Work.prototype = {
    getWork : function () {
        return this.work
    },
    getWorkDescript: function () {
        return this.workDescript
    }
}

let Person = function (name, work) {
    let _person = new Human();
    _person.name = new Named(name)
    _person.work = new Work(work)
    return _person
}

let person = new Person('xie zhan', 'code')

console.log(person.name.FirstName)
console.log(person.name.SecondName)
console.log(person.work.getWork())
console.log(person.work.getWorkDescript())