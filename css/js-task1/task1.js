function colorRandom() {
    var a, b, c;
    var a = parseInt(255 - Math.random() * 255).toString(16);
    var b = parseInt(255 - Math.random() * 255).toString(16);
    var c = parseInt(255 - Math.random() * 255).toString(16);
    return  '#' + a + b + c;
    
}

// 以下是获取三个随机数
function sbox() {
    // 建立一个方法
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    // 设定数组序号
    var newarr = []
    // 设定空集放元素
    for (var i = 0; i < 3; i++) {
        // 这是取三个数
        var randon = math.round(Math.random() * (arr.length - 1));
        // 数学方法，四舍五入取整，获取数组中的随机元素之一
        newarr.push(arr[randon]);
        // 把获取的数组中的元素推到空组中
        arr.splice(arr[randon]);
        // 把获取数组从原数组删除
        return newarr;
        // 输出三个新的元素组合。
    }
}	
// 按钮1点击事件重复
btn1[0].onclick = function threebox() {
    clearTimeout(time);
    reset();
    time = setTimeout(function time() {
        var z = Math.floor(Math.random() * (8));
        var x = Math.floor(Math.random() * (8));
        var c = Math.floor(Math.random() * (8));
        // 三个变量随机取一个盒子的数，若三者不同则变色，否则重新执行本函数方法。
        if (z != x && z != c && x != c) {
            box[z].style.backgroundColor = colorRandom()
            box[x].style.backgroundColor = colorRandom()
            box[c].style.backgroundColor = colorRandom()
        }
        // 改变盒子dom节点
        time()
    }



    function Shuffle(a) {
        var length = a.length;
        for(var i = length - 1, rand;i >= 0; i--){
            rand = Math.floor(Math.random()*(i+1))
            var p = a[i];
            a[i] = a[rand];
            a[rand] = p ;  
        }
    }
    //设置从0到8的数组a
    a = [0,1,2,3,4,5,6,7,8];
    //页面加载运行函数，Shuffle（a）
    Shuffle(a);
    //随机抽取颜色