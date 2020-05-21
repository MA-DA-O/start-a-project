// 下面是获取储存的身份，转换数字为字符串
var playerObj = JSON.parse(sessionStorage.getItem("playerObj"));
var click = JSON.parse(sessionStorage.getItem("click"));

console.log(click)
console.log(playerObj)

// 建立空数组，存放死亡人数和存活人数
let deathMan = [];
// if判断取得的数据是否为true，如果是true就以此数据为主，如果为false，就以空数组为主
if (sessionStorage.getItem("deathMan") !== null) {
    deathMan = JSON.parse(sessionStorage.getItem("deathMan"))
}
console.log(deathMan)
    // 变量，记录点击该盒子是哪一个。
var thisBox;
// 获取顶部文字节点
var topText = $(".head-p");
// 根据啥判断进行修改顶部文字？如何判断进入该页面第几次？

// 下面是返回的按钮
var back = $(".head-btn");
back[0].onclick = function() {
    location.href = ".";
};


// 根据数组长度生成动态盒子。
for (var i = 0; i < playerObj.length; i++) {
    // 创建一个空数组，拿来装用户的自定义对象属性


    $("main").append('<button class="father"></button>');
    $(".father").eq(i).append('<div class="show-box"></div>');
    // 身份
    $(".show-box").eq(i).append('<p class="show-ID"></p>');
    // 往p里面塞身份
    $(".show-ID").eq(i).html(playerObj[i]['name']);
    // 编号盒子
    $(".show-box").eq(i).append('<div class="number-box"></div>');
    // 往里塞编号
    $(".number-box")
        .eq(i)
        .html(i + 1 + "号");
    // 获取父级的dom节点
    var btnBox = document.getElementsByClassName("father");
    // 获取格子下标
    btnBox[i].index = i;
}



var btnBox = $(".father");
// 遍历读取死亡数组，使死亡数组变色
for (let i = 0; i < deathMan.length; i++) {
    $(".show-ID").eq(deathMan[i]).css('background', 'red')
}
// 遍历读取数组对象

// 下为遍历数组变色尝试
// let array = [0, 3]
// $.each(array, function(index, item) {
//         console.log(arguments)
//         $(".show-ID").eq(item).css('background', 'red')
//     }) 
// 点击每个盒子变色
btnBox.click(function() {
    // 使每次点击，遍历数组颜色还原，应该设定存活人员还原
    for (let i = 0; i < playerObj.length; i++) { //遍历数组
        $(".show-ID").eq(i).css('background', '#f5c97b')
    }

    console.log(playerObj[$(this).index()]);
    // 子级变色
    $(".show-ID").eq($(this).index()).css('background', 'red')
        // 死亡数组增加该点击的格子？
    let index = $(this).index()
    thisBox = index
});
// 确定按钮点击事件,click为点击数
$(".foot-btn").click(function() {
    // 应该设定杀手不能点击杀手
    // 玩家对象数组里，该玩家状态变更为 die
    playerObj[thisBox]['state'] = 'die';
    // 把该下标存入死亡数组，方便回头继续改变颜色。
    deathMan.push(thisBox)
    console.log(deathMan)
        // console.log(thisBox)
    console.log(playerObj)
    location.href = "task2-5.html"
        // 储存新建的玩家自定义数据数组。
    sessionStorage.setItem("playerObj", JSON.stringify(playerObj));
    // 储存死亡数组
    sessionStorage.setItem('deathMan', JSON.stringify(deathMan))
})