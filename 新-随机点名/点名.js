/**
 * 原始数据
 * name:名字,sex:性别 1代表女 0代表男
 * 总数据
 */
const list = [
    { id: 1, name: '盖伦', sex: 0 },
    { id: 2, name: '卡莎', sex: 1 },
    { id: 3, name: '剑魔', sex: 0 },
    { id: 4, name: '女警', sex: 1 },
    { id: 5, name: '赵信', sex: 0 },
    { id: 6, name: '女枪', sex: 1 },
    { id: 7, name: 'Ez', sex: 0 },
    { id: 8, name: '拉克丝', sex: 1 },
    { id: 9, name: '佐伊', sex: 1 },
    { id: 10, name: '卑尔维斯', sex: 1 },
    { id: 11, name: '挖掘机', sex: 1 },
    { id: 12, name: '青钢影', sex: 1 },
    { id: 13, name: '瑞文', sex: 1 },
    { id: 14, name: '剑姬', sex: 1 },
    { id: 15, name: '刀妹', sex: 1 },
    { id: 16, name: '男刀', sex: 0 },
    { id: 17, name: '佛耶戈', sex: 0 },
    { id: 18, name: '盲僧', sex: 0 },
    { id: 19, name: '亚索', sex: 0 },
    { id: 20, name: '永恩', sex: 0 },
    { id: 21, name: '诺手', sex: 0 },
    { id: 22, name: '锤石', sex: 0 },
    { id: 23, name: '伊苏尔德', sex: 1 },
    { id: 24, name: '男枪', sex: 0 },
    { id: 25, name: '腕豪', sex: 0 },
    { id: 26, name: '乌鸦', sex: 0 },
    { id: 27, name: '妖姬', sex: 1 },
    { id: 28, name: '奥巴马', sex: 0 },
    { id: 29, name: '凯隐', sex: 0 },
    { id: 30, name: '艾克', sex: 0 },
    { id: 31, name: '塞纳', sex: 1 },
    { id: 32, name: '火女', sex: 1 },
    { id: 33, name: '岩雀', sex: 1 },
    { id: 34, name: '戏命师', sex: 0 },
    { id: 35, name: '维克托', sex: 0 },
    { id: 36, name: '德玛西亚皇子', sex: 0 },
    { id: 37, name: '杰斯', sex: 0 },
    { id: 38, name: '德莱文', sex: 0 },
    { id: 39, name: '劫', sex: 0 },
    { id: 40, name: '琪亚娜', sex: 1 },
    { id: 41, name: '塞拉斯', sex: 0 },
    { id: 42, name: '霞', sex: 1 },
    { id: 43, name: '吴E凡', sex: 0 },
]
/**
 * 拷贝的数据
 */
let CVlist = [...list]
/**
 * 男生数组
 */
const boys = []
/**
 * 女生数组
 */
const girls = []
/**
 * 男生女生数组添加数据函数
 */
addBoyGirls()
function addBoyGirls() {
    CVlist.forEach(item => {
        if (item.sex == 0) {
            boys.push(item)
        } else {
            girls.push(item)
        }
    })
}
/**
 * 获取ul
 */
const ul = document.getElementsByTagName('ul')[0]
/**
 * 获取时间
 */
const time = document.getElementsByClassName('time')[0]
/**
 * 获取选中的人
 */
const XZname = document.getElementById('name')
/**
 * 获取单人点名按钮
 */
const btnOne = document.getElementById('btnOne')
/**
 * 获取双人点名按钮
 */
const btnTwo = document.getElementById('btnTwo')
/**
 * 男生点名按钮
 */
const btnBoy = document.getElementById('btnBoy')
/**
 * 获取女生点名按钮
 */
const btnGirls = document.getElementById('btnGirls')
/**
 * 定义计时器
 */
var xrcolor;
/**
 * 渲染dom
 */
xrdom()
function xrdom() {
    ul.innerHTML = ''
    list.forEach(item => {
        var li = document.createElement('li')
        li.innerText += item.name
        li.style.backgroundImage = randomColor()
        ul.appendChild(li)
    })
}
/**
 * 获取当前时间
 */
setInterval(() => {
    getCurrentTime()
}, 500)
function getCurrentTime() {
    // 格式化年月日
    var times = dateFormat();
    // 渲染至页面
    time.innerText = "\u65F6\u95F4: ".concat(times);
}
/**
 * 封装日期的函数
 * @returns 封装日期的函数
 */
function dateFormat() {
    var dt = new Date();
    var y = dt.getFullYear();
    var m = (dt.getMonth() + 1 + '').padStart(2, '0');
    var d = (dt.getDate() + '').padStart(2, '0');
    var hh = (dt.getHours() + '').padStart(2, '0');
    var mm = (dt.getMinutes() + '').padStart(2, '0');
    var ss = (dt.getSeconds() + '').padStart(2, '0');
    // yy-mm-dd hh:mm:ss
    // 可以根据需要输出相对应的时间格式
    return "".concat(y, "-").concat(m, "-").concat(d, " ").concat(hh, ":").concat(mm, ":").concat(ss);
}
/**
 * 封装随机数函数
 * @param {*} array 传递进来的数组
 * @returns 返回的是获取到的随机数
 */

function randomNum(array) {
    let big = array.length
    return Math.floor(Math.random() * big)
}

/**
 * 关闭计时器
 * @returns 关闭定时器函数
 */
function delclearInterval() {
    if (xrcolor) {
        clearInterval(xrcolor)
    }
}

/**
 * 开启定时器
 * @returns 开启定时器函数
 */
function addsetInterval() {
    xrcolor = setInterval(() => {
        xrdom()
    }, 100);
}

/**
 * 删除单人函数
 * @returns 删除单人函数
 */
function delone(delId) {
    CVlist = CVlist.filter(item => item.id != delId)
}

/**
 * 删除多人函数
 * @returns 删除多人函数
 */
function deltwo(oneid, twoid) {
    CVlist = CVlist.filter(item => item.id != oneid).filter(item => item.id != twoid)
}

/**
 * 单人点名
 * @returns 单人点名函数
 */
function btnone() {
    // 清除定时器
    delclearInterval()
    // 判断名字
    if (btnOne.innerText == '单人点名') {
        btnOne.innerText = '停止点名'
        // 计时器执行渐变色
        addsetInterval()

    } else {
        // 清除计时器
        delclearInterval()
        // 更改文字
        btnOne.innerText = '单人点名'
        // 获取到的下标
        let index = randomNum(CVlist)
        // 添加渐变色
        XZname.style.backgroundImage = randomColor()
        // 渲染到天选之人中
        XZname.innerHTML = CVlist[index].name
        // 删除选中的人
        delone(CVlist[index].id)
    }
}
/**
 * 双人点名
 * @returns 双人点名函数
 */
function btntwo() {
    // 清除定时器
    delclearInterval()
    // 判断名字
    if (btnTwo.innerText == '双人点名') {
        btnTwo.innerText = '停止点名'
        // 计时器执行渐变色
        addsetInterval()
    } else {
        // 清除计时器
        delclearInterval()
        // 更改文字
        btnTwo.innerText = '双人点名'
        // 获取到随机数中的的元素
        let i = randomNum(CVlist)
        let index = randomNum(CVlist)
        // 渐变颜色
        XZname.style.backgroundImage = randomColor()
        // 拼接到选中的
        XZname.innerHTML = list[i].name + ',' + list[index].name
        // 获取第一个选中的元素
        let one = CVlist[i]

        // 获取第二个选中的元素
        let two = CVlist[index]

        // 删除数组中的
        deltwo(CVlist[i].id, CVlist[index].id)
    }
}
/**
 * 男生点名
 * @returns 男生点名函数
 */
function btnboy() {
    // 清除定时器
    delclearInterval()
    // 判断名字
    if (btnBoy.innerText == '男生点名') {
        btnBoy.innerText = '停止点名'
        // 计时器执行渐变色
        addsetInterval()
    } else {
        // 清除计时器
        delclearInterval()
        // 更改按钮文字
        btnBoy.innerText = '男生点名'
        // 获取随机数
        let index = randomNum(boys)
        // 获取渐变颜色
        XZname.style.backgroundImage = randomColor()
        // 更改选中的人的文字
        XZname.innerHTML = boys[index].name
        // 找到新数组中的下标
        let i = CVlist.findIndex(item => item.id == boys[index].id)
        // 删除数据
        delone(boys[index].id)

    }
}
/**
 * 女生点名
 * @returns 女生点名函数
 */
function btngirls() {
    // 清除定时器
    delclearInterval()
    // 判断名字
    if (btnGirls.innerText == '女生点名') {
        btnGirls.innerText = '停止点名'
        // 计时器执行渐变色
        addsetInterval()
    } else {
        // 清除计时器
        delclearInterval()
        // 更改按钮文字
        btnGirls.innerText = '女生点名'
        // 获取随机数
        let index = randomNum(girls)
        // 获取渐变颜色
        XZname.style.backgroundImage = randomColor()
        // 更改选中的人的文字
        XZname.innerHTML = girls[index].name
        // 找到新数组中的下标删除数据
        let i = CVlist.findIndex(item => item.id == girls[index].id)
        // 删除数据
        delone(girls[index].id)
    }
}
/**
 * 封装获取渐变颜色
 * @returns  封装获取渐变颜色函数
 */
function jbColor() {
    return Math.floor(Math.random() * 255)
}
/**
 * 获取随机颜色
 * @returns 获取随机颜色函数
 */
function randomColor() {
    return `linear-gradient(to right top, rgb(${jbColor()}, ${jbColor()}, ${jbColor()}), rgb(${jbColor()}, ${jbColor()}, ${jbColor()}))`
}


