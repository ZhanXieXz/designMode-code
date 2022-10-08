// 安全模式类
let Factory = function (type, content) {
    if (this instanceof Factory) {
        let r = new this[type](content)
        return r
    } else {
        return new Factory(type, content)
    }
}

Factory.prototype = {
    Java: function (content) {
        this.content = content
        console.log(this.content)
    },
    JavaScript: function (content) {
        this.content = content
        console.log(this.content)
    },
    Php: function (content) {
        this.content = content
        console.log(this.content)
    }
}

let data = [
    {type: 'JavaScript', content: 'JavaScript content'},
    {type: 'Java', content: 'Java content'},
    {type: 'Php', content: 'Php content'}
]

for (let i = 2; i >= 0; i--) {
    // console.log(i);
    // console.log(data[i].type);
    Factory(data[i].type, data[i].content)
}

 // 创建多类对象，简单工厂模式不太适用。通过工厂模式可以轻松创建多个多类实例对象