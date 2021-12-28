// 说明了这次点击操作会向此路由get一个请求req，
// 这个然后routes文件中的路由处理函数就会请求需要的数据(res)返回给此函数
function queryBoard() {
    var queryKey = $("#queryKey").val();
    if (queryKey != '') {
        var obj = {};
        obj.boardInfo = queryKey;
        // get请求的路由要带上查询数据，不然到路由出没法解析key
        $.get('http://localhost:3000/query?key=' + queryKey, function(req, res){
            // 路由查找到的值会放子啊req中，猜想：get会放在req，post放在res中
            console.log('req', req);
            var queryResult = req.cpuInfo;
            // 修改元素的值要用text方法
            $('#queryData').text(queryResult);
        });
    }
}