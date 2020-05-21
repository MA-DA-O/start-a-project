// 获取数据且再次储存
let playerObj = JSON.parse(sessionStorage.getItem("arr"));
var deathMan = JSON.parse(sessionStorage.getItem("deathMan"));
sessionStorage.setItem("playerObj", JSON.stringify(playerObj));
// sessionStorage.setItem("players", JSON.stringify(players));
// console.log(players)
console.log(playerObj);
console.log(deathMan);
var deathMan = [];
if (sessionStorage.getItem("deathMan")) {
    var deathMan = JSON.parse(sessionStorage.getItem("deathMan"));
}

// 获取点击按钮，隐藏的样式的dom节点
var hiddenAll = document.getElementsByClassName("hidden-all");
var hiddenBox = document.getElementsByClassName("hidden-box");
var btnNo = document.getElementsByClassName("hidden-btn-left");
var btnYes = document.getElementsByClassName("hidden-btn-right");
// 隐藏按钮的点击事件，也就是弹出提示框，恢复隐藏=确定取消
btnNo[0].onclick = function() {
    // 点击走起就跳转页面。
    location.href = "task2-6.html";
};
btnYes[0].onclick = function() {
    // 确定就是重新隐藏而已。
    hiddenAll[0].style.display = "none";
    hiddenBox[0].style.display = "none";
};

// 记录点击次数变量
var click = 0;
// 读取数据的判断
if (sessionStorage.getItem("click")) {
    click = JSON.parse(sessionStorage.getItem("click"));
}
console.log(click);
// 点击次数函数
function clicks() {
    click++;
}
// 判断储存的天数
// 进入游戏天数默认是第一天,每死两个人加一天
var days = 1;
if (sessionStorage.getItem("days")) {
    days = JSON.parse(sessionStorage.getItem("days"));
}
if (click !== 0 && click % 2 == 0) {
    days++
}

console.log(days);
for (let i = 0; i <= days - 1; i++) {
    console.log(i);
    // 根据天数生成动态的天数页面
    $("main").append('<div class="m-box"></div>');
    $(".m-box").eq(i).append('<button class="m-b-top"></button>');
    $(".m-b-top").eq(i).append('<p class="today"></p>');
    $(".today").eq(i).html("第" + (i + 1) + "天");
    $(".m-b-top").eq(i).append("<span></span>");
    $(".m-box").eq(i).append('<div class="m-b-bottom"></div>');
    $(".m-b-bottom").eq(i).append('<div class="m-b-b-left"></div>');
    $(".m-b-b-left").eq(i).append('<div class="img1"></div>');
    $(".m-b-b-left").eq(i).append('<div class="img2"></div>');
    $(".m-b-bottom").eq(i).append('<div class="m-b-b-right"></div>');
    $(".m-b-b-right").eq(i).append('<button class="row"></button>');
    $(".m-b-b-right").eq(i).append('<button class="row"></button>');
    $(".m-b-b-right").eq(i).append('<button class="row"></button>');
    $(".m-b-b-right").eq(i).append('<button class="row"></button>');
    $(".row").eq(i * 4).append('<div class="triangle"></div>');
    $(".row").eq(i * 4).append('<div class="btn-discuss">杀手杀人</div>');
    $(".row").eq(i * 4 + 1).append('<div class="triangle"></div>');
    $(".row").eq(i * 4 + 1).append('<div class="btn-discuss">亡灵发言</div>');
    $(".row").eq(i * 4 + 2).append('<div class="triangle"></div>');
    $(".row").eq(i * 4 + 2).append('<div class="btn-discuss">玩家发言</div>');
    $(".row").eq(i * 4 + 3).append('<div class="triangle"></div>');
    $(".row").eq(i * 4 + 3).append('<div class="btn-discuss">投票杀人</div>');
}

// 点击事件，切换下面盒子的显示状态,前一天隐藏
for (let i = days; i > 1; i--) {
    $(".m-b-bottom").eq(i - 2).hide();
}
$(".m-b-top").click(function() {
    $(this).next().toggle();
});

// 获取分别4个步骤的点击按钮
var killerBtn = $(".row").eq((days - 1) * 4);
var death = $(".row").eq((days - 1) * 4 + 1);
var discuss = $(".row").eq((days - 1) * 4 + 2);
var vote = $(".row").eq((days - 1) * 4 + 3);

// 记录变量函数
function record() {
    sessionStorage.setItem("click", JSON.stringify(click));
    sessionStorage.setItem("days", JSON.stringify(days));
}
// 四个步骤杀手杀人跳转杀人页面,点击变色等
killerBtn.click(function() {
    if (click == (days - 1) * 4) {
        // 执行函数点击次数+1
        clicks();
        $(".hidden-box-p").html("杀死一位幸运观众");
        hiddenAll[0].style.display = "block";
        hiddenBox[0].style.display = "flex";
        $(".hidden-btn-right").css("display", "none");
        $(".hidden-btn-left").css("display", "flex");

        $(this).find('.triangle').css("border-right-color", "gray");
        $(this).find('.btn-discuss').css("background", "gray");
        // 此处该记录点击次数和天数,变色等数据。
        record();
        // 按钮点击后失效
        $(this).attr("disabled", true);
    } else {
        $(".hidden-box-p").html("请按照顺序来进行游戏");
        hiddenAll[0].style.display = "block";
        hiddenBox[0].style.display = "flex";
        $(".hidden-btn-right").css("display", "flex");
        $(".hidden-btn-left").css("display", "none");
    }
});
death.click(function() {
    if (click == (days - 1) * 4 + 1) {
        clicks();
        $(".hidden-box-p").html("流下鳄鱼的眼泪");
        hiddenAll[0].style.display = "block";
        hiddenBox[0].style.display = "flex";
        $(".hidden-btn-left").css("display", "none");
        $(".hidden-btn-right").css("display", "flex");

        $(this).find('.triangle').css("border-right-color", "gray");
        $(this).find('.btn-discuss').css("background", "gray");
        record();
        $(this).attr("disabled", true);
    } else {
        $(".hidden-box-p").html("臭弟弟按顺序来");
        hiddenAll[0].style.display = "block";
        hiddenBox[0].style.display = "flex";
        $(".hidden-btn-right").css("display", "flex");
        $(".hidden-btn-left").css("display", "none");
    }
});
discuss.click(function() {
    if (click == (days - 1) * 4 + 2) {
        clicks();
        $(".hidden-box-p").html("请大家坟头蹦迪");
        hiddenAll[0].style.display = "block";
        hiddenBox[0].style.display = "flex";
        $(".hidden-btn-left").css("display", "none");
        $(".hidden-btn-right").css("display", "flex");

        $(this).find('.triangle').css("border-right-color", "gray");
        $(this).find('.btn-discuss').css("background", "gray");
        record();
        $(this).attr("disabled", true);
    } else {
        $(".hidden-box-p").html("不按顺序给爷爬");
        hiddenAll[0].style.display = "block";
        hiddenBox[0].style.display = "flex";
        $(".hidden-btn-right").css("display", "flex");
        $(".hidden-btn-left").css("display", "none");
    }
});
vote.click(function() {
    if (click == (days - 1) * 4 + 3) {
        clicks();
        $(".hidden-box-p").html("高举民主的旗帜");
        hiddenAll[0].style.display = "block";
        hiddenBox[0].style.display = "flex";
        $(".hidden-btn-right").css("display", "none");
        $(".hidden-btn-left").css("display", "flex");

        $(this).find('.triangle').css("border-right-color", "gray");
        $(this).find('.btn-discuss').css("background", "gray");
        // 此处该记录点击次数和天数等各项需记录的东西
        record();
        $(this).attr("disabled", true);
    } else {
        $(".hidden-box-p").html("爬爬爬爬");
        hiddenAll[0].style.display = "block";
        hiddenBox[0].style.display = "flex";
        $(".hidden-btn-right").css("display", "flex");
        $(".hidden-btn-left").css("display", "none");
    }
});
// 判断若已经产生点击，则根据点击的次数，进行定义变色和停用按钮。
if (click !== 0) {
    for (let i = 0; i < click; i++) {
        $('.row').eq(i).attr("disabled", true);
        $(".triangle").eq(i).css("border-right-color", "gray");
        $(".btn-discuss").eq(i).css("background", "gray");

    }
}