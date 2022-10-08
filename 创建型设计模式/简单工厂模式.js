/**
 * 简单工厂模式
 * 
**/

function createBook(name, time, type) {
    let o = new Object();
    o.name = name;
    o.time = time;
    o.type = type;
    o.getName = function () {
        console.log(this.name)
    };
    return o
}

let book1 = new createBook('js book', 2020, 'js')
let book2 = new createBook('css book', 2022, 'js')